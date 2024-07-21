import { CartItem } from "@/models/cartItem";
import { PaginatedProducts } from "@/models/product";
import axios from "./axios";

export const getAllProducts = async () => axios.get(`/api/v1/products`);

export const getAllProductsPaginated = async (
  page: number,
  size: number,
  sort: string
): Promise<PaginatedProducts> => {
  const response = await axios.get(
    `/api/v1/products/paginated?page=${page}&size=${size}&sort=${sort}`
  );

  return response.data;
};

export const getProductById = async (id: number): Promise<CartItem> =>
  (await axios.get(`/api/v1/products/${id}`)).data;
