import { CreateOrderDtoInfer } from "@/models/dto/orderDto";
import {
  OrderDetailSchemaInfer,
  OrderSchemaInfer,
  PaginatedOrders,
} from "@/models/order";
import axios from "./axios";

export const getAllOrders = async () => axios.get(`/api/v1/orders`);

export const getAllPaginatedOrders = async (
  page: number,
  size: number,
  sort: string
): Promise<PaginatedOrders> => {
  const response = await axios.get(
    `/api/v1/orders/paginated?page=${page}&size=${size}&sort=${sort}`
  );
  return response.data;
};

export const getOrdersByUserId = async (
  userId: number
): Promise<OrderSchemaInfer[]> =>
  (await axios.get(`/api/v1/orders/user/${userId}`)).data;

export const getOrderById = async (id: number) =>
  (await axios.get(`/api/v1/orders/${id}`)).data;

export const getDetailOrderById = async (
  id: number
): Promise<OrderDetailSchemaInfer[]> =>
  (await axios.get(`/api/v1/orders/${id}/details`)).data;

export const createOrder = async (data: CreateOrderDtoInfer) =>
  axios.post(`/api/v1/orders`, data);
