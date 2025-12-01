import { useState, useEffect, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { APPLICATION_STATUS, ERROR_MESSAGES } from "../constants/index";
import { SearchBar } from "../components/SearchBar";
import { Lists } from "../components/Lists";
import Modal from "../components/Modal";
import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";

// Correct imports
import {
  fetchApplications,
  addApplication,
  updateApplicationStatus,
  deleteApplication,
} from "../api/applications";

import { handleLogout } from "../handlers/authHandlers";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainPage = () => {
  const navigate = useNavigate();
  const [applications, setApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [userName, setUserName] = useState("");

  const [newActivity, setNewActivity] = useState({
    company: "",
    position: "",
    status: APPLICATION_STATUS.PENDING,
    appliedDate: "",
    deadline: "",
  });

  const loadApplications = useCallback(async () => {
    try {
      const apps = await fetchApplications();
    setApplications(apps);

    } catch (err) {
      console.error("Error loading applications:", err);
      toast.error("Failed to load applications");
    }
  }, []);

  useEffect(() => {
    const initialize = async () => {
      try {
        const response = await axiosInstance.get("/me");
        setUserName(response.data.name || "User");
      } catch (err) {
        console.error("Error fetching user data:", err);
        toast.error("Failed to fetch user details");
      }

      await loadApplications();
    };

    initialize();
  }, [loadApplications]);

  const filteredApps = useMemo(() => {
    const term = (searchTerm || "").toLowerCase();
    return applications.filter(
      (app) =>
        app?.company?.toLowerCase().includes(term) ||
        app?.position?.toLowerCase().includes(term)
    );
  }, [searchTerm, applications]);

  const statusCounts = useMemo(() => {
    return {
      total: applications.length,
      pending: applications.filter((a) => a.status === APPLICATION_STATUS.PENDING).length,
      shortlisted: applications.filter((a) => a.status === APPLICATION_STATUS.SHORTLISTED).length,
      rejected: applications.filter((a) => a.status === APPLICATION_STATUS.REJECTED).length,
    };
  }, [applications]);

  const handleAddApplication = async () => {
    if (!newActivity.company || !newActivity.position) {
      toast.error(ERROR_MESSAGES.FILL_FIELDS);
      return;
    }

    try {
      await addApplication(newActivity);

      setNewActivity({
        company: "",
        position: "",
        status: APPLICATION_STATUS.PENDING,
        appliedDate: "",
        deadline: "",
      });

      setShowModal(false);
      toast.success("Application added successfully");
      await loadApplications();
    } catch (err) {
      console.error("Error adding application:", err);
      toast.error("Failed to add application");
    }
  };

  const handleStatusUpdate = async (id, currentStatus) => {
    let newStatus =
      currentStatus === APPLICATION_STATUS.PENDING
        ? APPLICATION_STATUS.SHORTLISTED
        : currentStatus === APPLICATION_STATUS.SHORTLISTED
        ? APPLICATION_STATUS.REJECTED
        : APPLICATION_STATUS.PENDING;

    try {
      await updateApplicationStatus(id, newStatus);
      toast.success("Status updated");
      await loadApplications();
    } catch (err) {
      console.error("Error updating status:", err);
      toast.error("Failed to update status");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this application?")) return;

    try {
      await deleteApplication(id);
      toast.success("Application deleted");
      await loadApplications();
    } catch (err) {
      console.error("Error deleting application:", err);
      toast.error("Failed to delete application");
    }
  };

  // Fixed logout
  const logoutHandler = useCallback(async () => {
    try {
      await handleLogout(() => {}, navigate);
      toast.success("Logged out");
    } catch (err) {
      console.error("Logout error:", err);
      toast.error(ERROR_MESSAGES.LOGOUT_FAILED);
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      <TopBar userName={userName} onToggleSidebar={() => setShowSidebar((s) => !s)} />
      <Sidebar show={showSidebar} userName={userName} statusCounts={statusCounts} onLogout={logoutHandler} />

      <div className="flex-1 p-4 md:p-10 h-full">
        <div className="flex flex-row gap-3 items-center mb-6">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <button onClick={() => setShowModal(true)} className="hidden sm:inline-flex bg-blue-500 text-white px-5 py-2 rounded-lg">
            + Add Application
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-y-auto max-h-[75vh] pr-2">
          {filteredApps.map((app, i) => (
            <motion.div key={app._id} initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
              <Lists app={app} updateStatus={handleStatusUpdate} deleteApplication={handleDelete} />
            </motion.div>
          ))}

          {filteredApps.length === 0 && (
            <p className="col-span-full text-center text-gray-600 text-lg">No applications found</p>
          )}
        </div>

        {showModal && (
          <Modal newActivity={newActivity} setNewActivity={setNewActivity} setShowModal={setShowModal} handleAddApplication={handleAddApplication} />
        )}
      </div>

      <ToastContainer position="bottom-right" autoClose={3000} theme="colored" />
    </div>
  );
};

export default MainPage;
