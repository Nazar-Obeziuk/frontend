import axios from "../../../utils/axios/axios";

export const getAllOrthpedicReasonsInsoles = async () => {
  try {
    const { data } = await axios.get("/orthopedic-reasons");
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const createOrthpedicReasonsInsoles = async (params: any) => {
  try {
    const { data } = await axios.post("/orthopedic-reasons", params);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const deleteOrthpedicReasonsInsoles = async (id: string) => {
  try {
    const { data } = await axios.delete(`/orthopedic-reasons/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
