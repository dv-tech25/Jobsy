import axiosInstance from "../utils/axiosInstance";

export const fetchApplications = async () => {
  const { data } = await axiosInstance.get("/applications");
  return data.applications || [];
};

export const addApplication = (data) =>
  axiosInstance.post("/applications", data);

export const updateApplicationStatus = (id, status) =>
  axiosInstance.patch(`/applications/${id}`, { status });

export const deleteApplication = (id) =>
  axiosInstance.delete(`/applications/${id}`);
