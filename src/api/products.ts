import axios from "./axios";

export const getAllProducts = async () => axios.get(`/api/v1/products`);
