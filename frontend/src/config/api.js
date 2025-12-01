// API Endpoints Configuration
export const API_ENDPOINTS = {
  LOGIN: "/login",
  LOGOUT: "/logout",
  ME: "/me",
  APPLICATIONS: "/applications",
  SIGNUP: "/signup",
};


// API Base Configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1',
  TIMEOUT: 5000,
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000,
};
