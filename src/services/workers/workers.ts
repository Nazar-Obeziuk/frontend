import axios from "../../utils/axios/axios";
import { IWorker } from "./worker.interface";

export const getAllWorkers = async () => {
  try {
    const { data } = await axios.get("/workers");
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

export const updateWorker = async (
  updatedWorker: IWorker,
  id: number,
  token: string
) => {
  try {
    const { data } = await axios.put(`/workers/${id}`, updatedWorker, {
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

export const deleteWorker = async (id: number, token: string) => {
  try {
    const { data } = await axios.delete(`/workers/${id}`, {
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
