// Application Status Constants
export const APPLICATION_STATUS = {
  PENDING: "pending",
  SHORTLISTED: "shortlisted",
  REJECTED: "rejected",
};

// Status Colors for UI
export const STATUS_COLORS = {
  pending: "yellow",
  shortlisted: "green",
  rejected: "red",
};

// Status Display Names
export const STATUS_DISPLAY = {
  pending: "Pending",
  shortlisted: "Shortlisted",
  rejected: "Rejected",
};

// Error Messages
export const ERROR_MESSAGES = {
  FILL_FIELDS: "Please fill all required fields",
  LOGIN_FAILED: "Login failed. Try again.",
  REGISTRATION_FAILED: "Registration failed. Try again.",
  LOGOUT_FAILED: "Logout failed. Try again.",
  NETWORK_ERROR: "Network error. Check your connection.",
  UNAUTHORIZED: "Unauthorized. Please login again.",
  SERVER_ERROR: "Server error. Please try again later.",
  TIMEOUT: "Request timeout. Check your connection.",
};

// Success Messages
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: "Login successful!",
  LOGOUT_SUCCESS: "Logged out successfully!",
  APPLICATION_ADDED: "Application added successfully!",
  APPLICATION_UPDATED: "Application updated successfully!",
  APPLICATION_DELETED: "Application deleted successfully!",
};

// API Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};
