import axios from "../../utils/axios/axios";

export const getAllGeneralReviews = async () => {
  try {
    const { data } = await axios.get("/reviews/general");
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getReviewById = async (id: string) => {
  try {
    const { data } = await axios.get(`/reviews/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const createGeneralReview = async (
  formData: FormData,
  token: string
) => {
  try {
    const response = await axios.post("/reviews/general", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating review:", error);
    throw error;
  }
};

export const updateGeneralReview = async (
  updatedReview: FormData,
  id: string,
  token: string
) => {
  try {
    const { data } = await axios.put(`/reviews/${id}`, updatedReview, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const deleteReview = async (id: number, token: string) => {
  try {
    const { data } = await axios.delete(`/reviews/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// product review

export const getAllProductsReviews = async () => {
  try {
    const { data } = await axios.get("/reviews/product");
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const createProductsReview = async (
  formData: FormData,
  token: string
) => {
  try {
    const response = await axios.post("/reviews/product", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating review:", error);
    throw error;
  }
};
