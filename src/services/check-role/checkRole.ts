import axios from "../../utils/axios/axios";

export const checkRole = async (token: string) => {
  try {
    const { data } = await axios.get("/auth/admin", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error: any) {
    console.log(error);

    // if (error.response.status === 403) {
    //   return { error: true };
    // }

    // return [];
  }
};
