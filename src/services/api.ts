import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:8080/" });
api.interceptors.request.use((config: any) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  } else {
    delete config.headers.authorization;
  }

  return config;
});

export default api;
