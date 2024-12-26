import axios from "axios";

const profileApi = axios.create({
  baseURL: "https://quiz-order-production.up.railway.app/auth",
});

const token = localStorage.getItem("userToken");

export const getUser = async () => {
  if (!token) {
    throw new Error("No token found, please log in.");
  }

  const response = await profileApi.get("/profile/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export default profileApi;
