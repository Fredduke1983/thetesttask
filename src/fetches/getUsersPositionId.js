import { baseAxios } from "./baseAxios";

export const getUsersPositionIdFetch = async () => {
  try {
    const response = await baseAxios.get("/positions");
    return response.data;
  } catch (error) {
    return error;
  }
};
