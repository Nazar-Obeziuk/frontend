import axios from "../../utils/axios/axios";
import { IUser } from "../auth/login/login.interface";

export const getAllWorkers = async () => {
  try {
    const { data } = await axios.get("/workers");
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getWorkerById = async (id: string) => {
  try {
    console.log(id);
    const { data } = await axios.get(`/workers/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const createWorker = async (formData: FormData, token: string) => {
  try {
    const response = await axios.post("/workers", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating worker:", error);
    throw error;
  }
};

export const updateWorker = async (params: any) => {
  try {
    const { data } = await axios.post("/workers", params);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const deleteWorker = async (id: string) => {
  try {
    const { data } = await axios.delete(`/workers/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
