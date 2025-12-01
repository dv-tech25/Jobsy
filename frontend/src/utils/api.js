import axiosInstance from "../utils/axiosInstance";

export const fetchApplications = async () => {
  try {
    const { data } = await axiosInstance.get("/applications");
    return data.applications || [];
  } catch (error) {
    console.error("Fetch Applications Error:", error.message);
    throw error;
  }
};

export const addApplication = async (newActivity) => {
  try {
    const { data } = await axiosInstance.post("/applications", newActivity);
    return data;
  } catch (error) {
    console.error("Add Application Error:", error.message);
    throw error;
  }
};

export const updateApplicationStatus = async (id, newStatus) => {
  try {
    const { data } = await axiosInstance.patch(`/applications/${id}`, { status: newStatus });
    return data;
  } catch (error) {
    console.error("Update Status Error:", error.message);
    throw error;
  }
};

export const deleteApplication = async (id) => {
  try {
    const { data } = await axiosInstance.delete(`/applications/${id}`);
    return data;
  } catch (error) {
    console.error("Delete Application Error:", error.message);
    throw error;
  }
};

export const logout = async () => {
  return axiosInstance.post("/logout");
};
