import { CreateOrderDtoInfer } from "@/models/dto/orderDto";
import { OrderDetailSchemaInfer, OrderSchemaInfer } from "@/models/order";
import axios from "./axios";

export const getAllOrders = async () => axios.get(`/api/v1/orders`);
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
