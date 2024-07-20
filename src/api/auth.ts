import { LoginSchemaInfer, SignupSchemaInfer, UserSchemaInfer } from "@/models";
import { LoginResponse, loginResponseSchema } from "@/types";
import axios from "./axios";

export const loginRequest = async (
  user: LoginSchemaInfer
): Promise<LoginResponse> => {
  const response = await axios.post(`/api/v1/auth/log-in`, user);

  return loginResponseSchema.parse(response.data);
};

export const signupRequest = async (user: SignupSchemaInfer) =>
  await axios.post(`/api/v1/auth/sign-up`, user);

export const getUserInfoRequest = async (
  username: string
): Promise<UserSchemaInfer> =>
  (await axios.get(`/api/v1/users/username/${username}`)).data;
