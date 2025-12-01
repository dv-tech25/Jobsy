import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Modal = ({
  newActivity,
  setNewActivity,
  handleAddApplication,
  setShowModal,
}) => {

  // Handle input changes
  const handleInputChange = (field, value) => {
    setNewActivity((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Validation + Submit
  const handleSubmit = () => {
    const applied = new Date(newActivity.appliedDate);
    const deadline = new Date(newActivity.deadline);
    const today = new Date();

    if (!newActivity.company || !newActivity.position || !newActivity.appliedDate || !newActivity.deadline) {
      toast.error("Please fill all fields");
      return;
    }

    if (deadline <= applied) {
      toast.error("Deadline must be after applied date");
      return;
    }

    if (deadline <= today) {
      toast.error("Deadline must be in the future");
      return;
    }

    handleAddApplication(); 
    toast.success("Application added successfully!");
  };

  // Field generator with extraProps
  const renderInputField = (label, field, type = "text", placeholder = "", extraProps = {}) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        {label}
      </label>
      <input
        type={type}
        value={newActivity[field]}
        onChange={(e) => handleInputChange(field, e.target.value)}
        placeholder={placeholder}
        {...extraProps}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
      />
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4 py-6">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-screen">

        {/* Header */}
        <div className="flex justify-between items-center p-2 md:p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Add New Application</h2>
          <button
            onClick={() => setShowModal(false)}
            className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-2 md:p-6 space-y-2 md:space-y-4">

          {renderInputField("Company Name", "company", "text", "Enter company name")}
          {renderInputField("Position", "position", "text", "Enter job position")}

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Application Status</label>
            <select
              value={newActivity.status}
              onChange={(e) => handleInputChange("status", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
            >
              <option value="pending">Pending</option>
              <option value="shortlisted">Shortlisted</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>

          {/* Applied Date */}
          {renderInputField("Applied Date", "appliedDate", "date")}

          {/* Deadline */}
          {renderInputField("Deadline", "deadline", "date", "", {
            min: newActivity.appliedDate
              ? newActivity.appliedDate
              : new Date().toISOString().split("T")[0],
          })}

        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-2 md:p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={() => setShowModal(false)}
            className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors text-sm"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg font-medium transition-colors text-sm"
          >
            Add Application
          </button>
        </div>

      </div>
    </div>
  );
};

export default Modal;
