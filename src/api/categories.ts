import { CategorySchemaInfer, PaginatedCategories } from "@/models/category";
import axios from "./axios";

export const getAllCategories = async (): Promise<CategorySchemaInfer[]> =>
  (await axios.get(`/api/v1/categories`)).data;

export const getAllCategoriesPaginated = async (
  page: number,
  size: number,
  sort: string
): Promise<PaginatedCategories> => {
  const response = await axios.get(
    `/api/v1/categories/paginated?page=${page}&size=${size}&sort=${sort}`
  );

  return response.data;
};

export const deleteCategoryRequest = async (id: number) =>
  axios.delete(`/api/v1/categories/${id}`);
