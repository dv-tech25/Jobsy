import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

//reusable axios instance
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

//  Fetch all applications
export const fetchApplications = async () => {
  try {
    const { data } = await api.get("/");
    return data.applications || [];
  } catch (error) {
    console.error(" Fetch Applications Error:", error.message);
    throw error;
  }
};

//  Add new application
export const addApplication = async (newActivity) => {
  try {
    const { data } = await api.post("/", newActivity);
    return data;
  } catch (error) {
    console.error(" Add Application Error:", error.message);
    throw error;
  }
};

// Update application status
export const updateApplicationStatus = async (id, newStatus) => {
  try {
    const { data } = await api.put(`/${id}`, { status: newStatus });
    return data;
  } catch (error) {
    console.error(" Update Status Error:", error.message);
    throw error;
  }
};

// Delete application
export const deleteApplication = async (id) => {
  try {
    const { data } = await api.delete(`/${id}`);
    return data;
  } catch (error) {
    console.error(" Delete Application Error:", error.message);
    throw error;
  }
};
// In utils/api.js
export const logout = async () => {
  const Api_url = import.meta.env.VITE_API_URL_logout;
  await axios.post(Api_url, {}, { withCredentials: true });
};