import axios from "../../../utils/axios/axios";

export const getAllOrthpedicAdvantagesInsoles = async () => {
  try {
    const { data } = await axios.get("/orthopedic-advantages");
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const createOrthpedicAdvantagesInsoles = async (params: any) => {
  try {
    const { data } = await axios.post("/orthopedic-advantages", params);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const deleteOrthpedicAdvantagesInsoles = async (id: string) => {
  try {
    const { data } = await axios.delete(`/orthopedic-advantages/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
