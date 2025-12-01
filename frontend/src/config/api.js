// API Endpoints Configuration
export const API_ENDPOINTS = {
  LOGIN: import.meta.env.VITE_API_URL_login,
  LOGOUT: import.meta.env.VITE_API_URL_logout,
  ME: import.meta.env.VITE_API_URL_me,
  APPLICATIONS: import.meta.env.VITE_API_URL,
  SIGNUP: import.meta.env.VITE_API_URL_signup,
};

// API Base Configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1',
  TIMEOUT: 5000,
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000,
};
