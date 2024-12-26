import axios from "axios";

const instance = axios.create({
  baseURL: "https://quiz-order-production.up.railway.app",
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken");
  // if (token) {
  //   config.headers['Authorization'] = `Bearer ${token}`;
  // }
  return config;
});

export default instance;
