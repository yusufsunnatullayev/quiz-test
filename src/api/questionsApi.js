import axios from "axios";

const questionsApi = axios.create({
  baseURL: "https://quiz-order-production.up.railway.app",
});

const token = localStorage.getItem("userToken");

export const getQuestions = async (subject, level) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  let url = `/tests/?subject=${subject}`;
  if (level !== "random") {
    url = `/tests/?level=${level}&subject=${subject}`;
  }

  const response = await questionsApi.get(url, { headers });
  return response.data;
};

export default questionsApi;
