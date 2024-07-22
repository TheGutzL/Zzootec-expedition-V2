import { CategorySchemaInfer } from "@/models/category";
import axios from "./axios";

export const getAllCategories = async (): Promise<CategorySchemaInfer[]> =>
  (await axios.get(`/api/v1/categories`)).data;
