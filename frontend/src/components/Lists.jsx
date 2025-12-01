import React from "react";
import Dropdown from "./Dropdown";
import { STATUS_COLORS } from "../constants";

/**
 * Lists Component - Displays individual job application card
 * @component
 */
export const Lists = React.memo(({ app, updateStatus, deleteApplication }) => {
  // Format date to readable format
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return "Invalid date";
    }
  };

  // Get status color based on application status
  const getStatusColor = (status) => {
    const colorMap = {
      pending: "bg-yellow-100 text-yellow-800",
      shortlisted: "bg-green-100 text-green-800",
      rejected: "bg-red-100 text-red-800",
    };
    return colorMap[status] || "bg-gray-100 text-gray-800";
  };

  // Format status text
  const formatStatus = (status) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border border-gray-200">
      {/* Header with company and position */}
      <div className="flex justify-between items-start gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-800 truncate">{app.company}</h3>
          <p className="text-sm text-gray-600 truncate">{app.position}</p>
        </div>
        <Dropdown
          app={app}
          updateStatus={updateStatus}
          deleteApplication={deleteApplication}
        />
      </div>

      {/* Dates section */}
      <div className="space-y-2 mb-3 text-xs text-gray-600">
        {app.appliedDate && (
          <p>
            <span className="font-medium">Applied:</span> {formatDate(app.appliedDate)}
          </p>
        )}
        {app.deadline && (
          <p>
            <span className="font-medium">Deadline:</span> {formatDate(app.deadline)}
          </p>
        )}
      </div>

      {/* Status badge */}
      <div>
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
            app.status
          )}`}
        >
          {formatStatus(app.status)}
        </span>
      </div>
    </div>
  );
});

Lists.displayName = "Lists";

