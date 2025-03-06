import useFetch from "@/hooks/useFetch";
import { IProduct } from "@/models/product.model";

const createSearchService = () => {
  const queryString = "";
  const { data, loading } = useFetch<IProduct[]>(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}products?${queryString}`,
  );
  const searchByInput = (text: string) => {};
  const searchByMultipleFields = () => {};
  const searchByTag = (tag: string) => {};

  return { searchByInput, searchByMultipleFields, searchByTag };
};
export const searchService = createSearchService();
