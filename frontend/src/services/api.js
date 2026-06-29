// frontend/src/services/api.js
import axios from 'axios';

// Vite mein process.env nahi chalta, import.meta.env chalta hai
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: BASE_URL,
});

// ====================================================================
// 🎯 CLEAN API METHODS (Components mein direct ye call honge)
// ====================================================================

// 1. Saare sections ya kisi specific page ka data lana
export const fetchSections = async (type = '') => {
  const url = type ? `/sections?type=${type}` : '/sections';
  const response = await api.get(url);
  return response.data;
};

// 2. Naya Section Publish karna (Multipart Form Data)
export const createSection = async (formDataObject) => {
  const response = await api.post('/sections', formDataObject, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

// 3. Section Delete karna
export const removeSection = async (id) => {
  const response = await api.delete(`/sections/${id}`);
  return response.data;
};

export default api;