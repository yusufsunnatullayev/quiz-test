import axios from "axios";

const subjectsApi = axios.create({
  baseURL: "https://quiz-order-production.up.railway.app",
});

const token = localStorage.getItem("userToken");

export const getSubjects = async () => {
  const response = await subjectsApi.get("/subjects/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export default subjectsApi;
