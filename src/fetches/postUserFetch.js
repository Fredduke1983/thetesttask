import { baseAxios } from "./baseAxios";
import { getTokenFetch } from "./getToken";

export const postUserFetch = async (formData) => {
  const { token } = await getTokenFetch();

  try {
    const response = await baseAxios.post("/users", formData, {
      headers: {
        Token: token,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
