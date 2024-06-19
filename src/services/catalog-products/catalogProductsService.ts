import axios from "../../utils/axios/axios";

export const getAllProducts = async () => {
  try {
    const { data } = await axios.get("/products");
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getProductById = async (id: string) => {
  try {
    const { data } = await axios.get(`/products/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const createProduct = async (params: any) => {
  try {
    const { data } = await axios.post("/products", params);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const deleteProduct = async (id: string) => {
  try {
    const { data } = await axios.delete(`/products/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
