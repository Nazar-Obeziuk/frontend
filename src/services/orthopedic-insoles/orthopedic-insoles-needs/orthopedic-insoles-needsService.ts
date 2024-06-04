import axios from "../../../utils/axios/axios";

export const getAllOrthpedicNeedsInsoles = async () => {
  try {
    const { data } = await axios.get("/orthopedic-needs");
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const createOrthpedicNeedsInsoles = async (params: any) => {
  try {
    const { data } = await axios.post("/orthopedic-needs", params);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const deleteOrthpedicNeedsInsoles = async (id: string) => {
  try {
    const { data } = await axios.delete(`/orthopedic-needs/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
