import { create } from "zustand";
import { IProduct } from "@/models/product.model";
import { Category, FilterFormFields, FilterType } from "@/models/filter-form";

interface SearchStore {
  products: IProduct[];
  loading: boolean;
  limit: number;
  searchByInput: () => Promise<void>;
  multipleFieldsFilter: FilterFormFields;
  setMultipleFieldsFilter: (fields: FilterFormFields) => void;
  searchByMultipleFields: () => Promise<void>;
  searchByTag: () => Promise<void>;
  currentFilterActive?: FilterType; //Since we have three filter mechanising. I assume that the view more button logic will apply latest filter.
  viewMore: () => void;
  increaseLimit: () => void;
  inputSearchText?: string; //Current search is display on the search field
  setInputSearch: (text?: string) => void;
  activeTag?: Category;
  setActiveTag: (category?: Category) => void;
}

export const useSearchStore = create<SearchStore>((set, get) => ({
  products: [],
  loading: false,
  limit: 20,
  tagSelected: undefined,
  setCurrentFilterActive: undefined,
  multipleFieldsFilter: {} as FilterFormFields,
  setMultipleFieldsFilter: (fields: FilterFormFields) => {
    set({ multipleFieldsFilter: fields });
  },
  increaseLimit: () => {
    set((state) => ({ limit: state.limit + 20 }));
  },
  setInputSearch: (text?: string) => {
    set({ inputSearchText: text });
  },
  setActiveTag: (category) => {
    const { activeTag } = get();

    if (activeTag === category) {
      set({ activeTag: undefined });
    } else {
      set({ activeTag: category });
    }
  },
  searchByInput: async () => {
    set({ loading: true });
    set({ currentFilterActive: FilterType.INPUT });
    try {
      const { limit, inputSearchText } = get();
      const params = new URLSearchParams();
      if (inputSearchText) params.append("title_like", inputSearchText);
      params.append("_limit", limit.toString());

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}products?${params.toString()}`,
      );
      const data = await response.json();
      set({ products: data });
    } catch (error) {
      console.error("Fetch error:", error);
      set({ products: [] });
    } finally {
      set({ loading: false });
    }
  },

  searchByMultipleFields: async () => {
    set({ currentFilterActive: FilterType.FILTER_FORM });
    set({ loading: true });
    const { multipleFieldsFilter } = get();
    try {
      const { limit } = get();
      const queryString = Object.entries(multipleFieldsFilter)
        .filter(([, value]) => value !== undefined)
        .map(([key, value]) => {
          if (key === "price") {
            return `${key}_gte=${encodeURIComponent(value[0])}&${key}_lte=${encodeURIComponent(value[1])}`;
          }
          return `${key}=${encodeURIComponent(value)}`;
        })
        .join("&");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}products?${queryString}&_limit=${limit}`,
      );
      const data = await response.json();
      set({ products: data });
    } catch (error) {
      console.error("Fetch error:", error);
      set({ products: [] });
    } finally {
      set({ loading: false });
    }
  },
  searchByTag: async () => {
    set({ loading: true });
    set({ currentFilterActive: FilterType.TAG });

    try {
      const { limit, activeTag } = get();
      const response = activeTag
        ? await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}products?category=${encodeURIComponent(activeTag)}&_limit=${limit}`,
          )
        : await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}products?&_limit=${limit}`,
          );
      const data = await response.json();
      set({ products: data });
    } catch (error) {
      console.error("Fetch error:", error);
      set({ products: [] });
    } finally {
      set({ loading: false });
    }
  },
  viewMore: () => {
    const {
      currentFilterActive,
      searchByInput,
      searchByMultipleFields,
      searchByTag,
    } = get();
    get().increaseLimit();

    switch (currentFilterActive) {
      case FilterType.INPUT:
        searchByInput();
        break;
      case FilterType.FILTER_FORM:
        searchByMultipleFields();
        break;
      case FilterType.TAG:
        searchByTag();
        break;
    }
  },
}));
