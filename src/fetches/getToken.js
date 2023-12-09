import { baseAxios } from "./baseAxios";

export const getTokenFetch = async () => {
  try {
    const response = await baseAxios.get("/token");
    return response.data;
  } catch (error) {
    return error;
  }
};
