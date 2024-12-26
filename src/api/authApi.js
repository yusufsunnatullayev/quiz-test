import axios from "axios";

const authApi = axios.create({
  baseURL: "https://quiz-order-production.up.railway.app/auth",
});

export const authRegister = async (user) => {
  const response = await authApi.post("/register/", user, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const { access_token } = response.data;
  localStorage.setItem("userToken", access_token);
};

export const authLogin = async (user) => {
  const response = await authApi.post("/login/", user);
  const { access_token } = response.data;
  localStorage.setItem("userToken", access_token);
  console.log(response);
};

export default authApi;
