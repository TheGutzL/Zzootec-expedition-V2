import axios from "./axios";

export const getAllProducts = async () => axios.get(`/api/v1/products`);

export const getAllProductsPaginated = async (
  page: number,
  size: number,
  sort: string
) => axios.get(`/api/v1/products/paginated?page=${page}&size=${size}&sort=${sort}`);

export const getProductById = async (id: number) => axios.get(`/api/v1/products/${id}`);