import { LoginSchemaInfer, UserSchemaInfer } from "@/models";
import axios from "./axios";

export const loginRequest = async (user: LoginSchemaInfer) =>
  await axios.post(`/api/v1/auth/login`, user);
export const signupRequest = async (user: UserSchemaInfer) =>
  await axios.post(`/api/v1/auth/signup`, user);
