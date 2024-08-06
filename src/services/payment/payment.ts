import axios from "../../utils/axios/axios";

export const getPaymentLinkPrivat = async (formData: FormData) => {
  try {
    const { data } = await axios.post("/pay/liqpay", formData);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getPaymentLinkMono = async (formData: FormData) => {
  try {
    const { data } = await axios.post("/pay/monobank", formData);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
