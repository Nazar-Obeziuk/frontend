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

export const createProduct = async (formData: FormData, token: string) => {
  try {
    const response = await axios.post("/products", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};

export const updateProduct = async (
  updatedWorker: FormData,
  id: string,
  token: string
) => {
  try {
    const { data } = await axios.put(`/products/${id}`, updatedWorker, {
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

export const deleteProduct = async (id: number, token: string) => {
  try {
    const { data } = await axios.delete(`/products/${id}`, {
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

// products variations

export const getAllProductsVariations = async (producttId: string) => {
  try {
    const { data } = await axios.get(`/variations/${producttId}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const createProductVariation = async (
  formData: FormData,
  producttId: string,
  token: string
) => {
  try {
    const { data } = await axios.post(`/variations/${producttId}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const updateProductVariation = async (
  id: string,
  updatedVariation: FormData,
  token: string
) => {
  try {
    const { data } = await axios.put(`/variations/${id}`, updatedVariation, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const deleteProductVariation = async (id: number, token: string) => {
  try {
    const { data } = await axios.delete(`/variations/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
