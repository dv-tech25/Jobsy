import {
  fetchApplications,
  addApplication,
  updateApplicationStatus,
  deleteApplication,
} from "../api/applications";

export const handleAddApplication = async (newActivity) => {
  return await addApplication(newActivity);
};

export const handleStatusUpdate = async (id, status) => {
  return await updateApplicationStatus(id, status);
};

export const handleDeleteApplication = async (id) => {
  return await deleteApplication(id);
};