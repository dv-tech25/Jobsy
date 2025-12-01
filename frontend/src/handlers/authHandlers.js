import axiosInstance from "../utils/axiosInstance";

export const handleLogin = async (formData) => {
  return await axiosInstance.post("/login", formData);
};

export const handleRegister = async (formData) => {
  return await axiosInstance.post("/signup", formData);
};

export const handleLogout = async (setIsLoggedIn, navigate) => {
  try {
    await axiosInstance.post("/logout");
    setIsLoggedIn(false);
    navigate("/", { replace: true });
  } catch (err) {
    console.error("Logout error:", err);
    throw err;
  }
};
