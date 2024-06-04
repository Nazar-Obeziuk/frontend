import axios from "axios";

const instance = axios.create({
  baseURL: "https://prostopoo-back.vercel.app",
});

export default instance;
