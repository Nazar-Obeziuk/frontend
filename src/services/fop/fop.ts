import axios from "../../utils/axios/axios";

export const getAllFops = async (lang: string) => {
  try {
    const { data } = await axios.get(`/fop-data/${lang}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getFopById = async (id: string) => {
  try {
    const { data } = await axios.get(`/fop-data/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const createFop = async (formData: FormData, token: string) => {
  try {
    const response = await axios.post("/fop-data", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const updateFop = async (
  updatedCertificate: FormData,
  id: string,
  token: string
) => {
  try {
    const { data } = await axios.put(`/fop-data/${id}`, updatedCertificate, {
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

export const deleteFop = async (id: number, token: string) => {
  try {
    const { data } = await axios.delete(`/fop-data/${id}`, {
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
