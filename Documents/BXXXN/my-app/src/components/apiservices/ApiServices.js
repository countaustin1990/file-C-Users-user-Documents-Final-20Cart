// apiService.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com',
  headers: { 'Content-Type': 'application/json' },
});

apiClient.interceptors.response.use(
  response => response,
  error => {
    // Log and centralize error handling
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export const apiRequest = async (method, url, data = null) => {
  try {
    const response = await apiClient({ method, url, data });
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || 'API Request Failed');
  }
};
