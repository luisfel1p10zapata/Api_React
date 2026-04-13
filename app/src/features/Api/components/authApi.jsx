import axios from "axios";

const API_URL = "https://api-react-79xs.onrender.com/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔐 REGISTER
export const registerUser = (data) => {
  return api.post("/auth/register", data);
};

// 🔐 LOGIN
export const loginUser = (data) => {
  return api.post("/auth/login", data);
};

export default api;