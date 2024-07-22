import { CartItem } from "@/models/cartItem";
import {
  PaginatedProducts,
  ProductRequestSchemaInfer,
  ProductSchemaInfer,
} from "@/models/product";
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

export const getProductById = async (id: number): Promise<ProductSchemaInfer> =>
  (await axios.get(`/api/v1/products/${id}`)).data;

export const getProductCartById = async (id: number): Promise<CartItem> =>
  (await axios.get(`/api/v1/products/${id}`)).data;

export const updateProduct = async (
  id: number,
  product: ProductRequestSchemaInfer
) => axios.put(`/api/v1/products/${id}`, product);
