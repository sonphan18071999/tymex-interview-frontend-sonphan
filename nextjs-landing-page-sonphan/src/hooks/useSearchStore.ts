import { create } from "zustand";
import { IProduct } from "@/models/product.model";
import { Category, FilterFormFields } from "@/models/filter-form";

interface SearchStore {
  products: IProduct[];
  loading: boolean;
  limit: number;
  tagSelected?: Category;
  searchByInput: (text?: string) => Promise<void>;
  searchByMultipleFields: (filters: FilterFormFields) => Promise<void>;
  searchByTag: (tag?: Category) => Promise<void>;
  setTagSelected: (tag: Category | undefined) => void;
}

export const useSearchStore = create<SearchStore>((set, get) => ({
  products: [],
  loading: false,
  limit: 20,
  activeSearch: null,
  tagSelected: undefined,
  setTagSelected: async (tag) => {
    set({ tagSelected: tag });
  },
  searchByInput: async (text?: string) => {
    set({ loading: true });
    try {
      const { limit } = get();
      const params = new URLSearchParams();
      if (text) params.append("title_like", text);
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

  searchByMultipleFields: async (filters: FilterFormFields) => {
    set({ loading: true });
    try {
      const { limit } = get();
      const queryString = Object.entries(filters)
        .filter(([_, value]) => value !== undefined)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
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
  searchByTag: async (tag?: Category) => {
    set({ loading: true });
    if (tag) get().setTagSelected(tag);

    try {
      const { limit, tagSelected, products } = get();
      const response = tagSelected
        ? await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}products?category=${encodeURIComponent(tagSelected)}&_limit=${limit}`,
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
}));
