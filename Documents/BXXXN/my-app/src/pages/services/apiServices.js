// src/services/apiService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Use your local server for development

export const fetchServices = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/services`);
    return response.data;
  } catch (error) {
    console.error("Error fetching services:", error);
    throw error;
  }
};
