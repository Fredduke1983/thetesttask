import { baseAxios } from "./baseAxios";

export const getUsersFetch = async (page, count) => {
  try {
    const response = await baseAxios.get(`/users?page=${page}&count=${count}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
