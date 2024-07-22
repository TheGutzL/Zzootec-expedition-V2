import { PaginatedUsers } from "@/models";
import axios from "./axios";

export const getAllUsersPaginated = async (
  page: number,
  size: number,
  sort: string
): Promise<PaginatedUsers> => {
  const response = await axios.get(
    `/api/v1/users/paginated?page=${page}&size=${size}&sort=${sort}`
  );
  return response.data;
};

export const deleteUserRequet = async (id: string) =>
  await axios.delete(`/api/v1/users/${id}`);
