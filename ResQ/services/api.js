import axios from 'axios';

// Simple Axios instance; set your API base URL in .env as EXPO_PUBLIC_API_URL or edit below
const baseURL = process.env.EXPO_PUBLIC_API_URL || 'https://example.com/api';

const api = axios.create({ baseURL, timeout: 10000 });

api.interceptors.response.use(
  (res) => res,
  (err) => {
    // basic error passthrough
    return Promise.reject(err);
  }
);

export default api;
