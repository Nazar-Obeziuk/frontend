import axios from "axios";

const instance = axios.create({
  baseURL: "http://46.254.107.141:4002/",
});

export default instance;
