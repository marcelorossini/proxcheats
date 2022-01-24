import axios from "axios";
import { token } from "./auth";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3333/",
  timeout: 5000,
});

api.interceptors.request.use((config) => {
  if (token()) config.headers["x-access-token"] = token();
  return config;
});

export default api;
