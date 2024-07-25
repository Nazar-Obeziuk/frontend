import axios from "../../utils/axios/axios";

export const getAllIndividualInsoles = async () => {
  try {
    const { data } = await axios.get("/individual-insoles");
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getIndividualInsoleById = async (id: string) => {
  try {
    const { data } = await axios.get(`/individual-insoles/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const createIndividualInsole = async (
  formData: FormData,
  token: string
) => {
  try {
    const response = await axios.post("/individual-insoles", formData, {
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

export const updateIndividualInsole = async (
  updatedIndividualInsole: FormData,
  id: string,
  token: string
) => {
  try {
    const { data } = await axios.put(
      `/individual-insoles/${id}`,
      updatedIndividualInsole,
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

export const deleteIndividualInsole = async (id: number, token: string) => {
  try {
    const { data } = await axios.delete(`/individual-insoles/${id}`, {
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

// individual variations

export const getAllIndividualVariations = async (individualId: number) => {
  try {
    const { data } = await axios.get(
      `/individual-insoles-variations/${individualId}`
    );
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getIndividualVariationById = async (variationId: number) => {
  try {
    const { data } = await axios.get(
      `/individual-insoles-variations/variation/${variationId}`
    );
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const createIndividualVariation = async (
  formData: FormData,
  individualId: string,
  token: string
) => {
  try {
    const { data } = await axios.post(
      `/individual-insoles-variations/${individualId}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const updateIndividualVariation = async (
  variationId: string,
  updatedVariation: FormData,
  token: string
) => {
  try {
    const { data } = await axios.put(
      `/individual-insoles-variations/${variationId}`,
      updatedVariation,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const deleteIndividualVariation = async (
  variationId: number,
  token: string
) => {
  try {
    const { data } = await axios.delete(
      `/individual-insoles-variations/${variationId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
