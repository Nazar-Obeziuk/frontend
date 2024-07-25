import axios from "../../utils/axios/axios";

export const getAllCertificates = async () => {
  try {
    const { data } = await axios.get("/certificates");
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getCertificateById = async (id: string) => {
  try {
    const { data } = await axios.get(`/certificates/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const createCertificate = async (formData: FormData, token: string) => {
  try {
    const response = await axios.post("/certificates", formData, {
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

export const updateCertificate = async (
  updatedCertificate: FormData,
  id: string,
  token: string
) => {
  try {
    const { data } = await axios.put(
      `/certificates/${id}`,
      updatedCertificate,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const deleteCertificate = async (id: number, token: string) => {
  try {
    const { data } = await axios.delete(`/certificates/${id}`, {
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
