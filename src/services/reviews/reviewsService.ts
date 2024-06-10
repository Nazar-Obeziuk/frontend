import axios from "../../utils/axios/axios";

export const getAllReviews = async () => {
  try {
    const { data } = await axios.get("/home/reviews");
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const createReview = async (params: any) => {
  try {
    const { data } = await axios.post("/home/reviews", params);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const deleteReview = async (id: string) => {
  try {
    const { data } = await axios.delete(`/home/reviews/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
