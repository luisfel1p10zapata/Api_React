import axios from "axios";

const API_URL = "https://api-react-79xs.onrender.com/api";

console.log("API_URL:", API_URL); // Verificar que la URL es correcta

export const registerUser = (data) =>
  axios.post(`${API_URL}/auth/register`, data);

export const loginUser = (data) =>
  axios.post(`${API_URL}/auth/login`, data);