import axiosInstance from "../utils/axiosInstance";
import { API_ENDPOINTS } from "../config/api";

export const handleLogin = async (formData) => {
  return await axiosInstance.post(API_ENDPOINTS.LOGIN, formData);
};

export const handleRegister = async (formData) => {
  return await axiosInstance.post(API_ENDPOINTS.SIGNUP, formData);
};

export const handleLogout = async (setIsLoggedIn, navigate) => {
  try {
    await axiosInstance.post(API_ENDPOINTS.LOGOUT);
    setIsLoggedIn(false);
    navigate("/", { replace: true });
  } catch (err) {
    console.error("Logout error:", err);
    throw err;
  }
};
