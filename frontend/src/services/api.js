import axios from 'axios';

// 🎯 SMART ENTERPRISE SWITCH
// Vite by-default 'import.meta.env.DEV' ko Localhost par TRUE rakhta hai 
// aur Vercel Cloud par FALSE kar deta hai.

const PROD_BACKEND_URL = import.meta.env.VITE_API_BASE_URL || 'https://onepager-backend.vercel.app/api'; 
const LOCAL_BACKEND_URL = 'http://localhost:5000/api';

const API_URL = import.meta.env.DEV ? LOCAL_BACKEND_URL : PROD_BACKEND_URL;

console.log("🔌 Current API Target:", API_URL); // <-- Console par confirm dikhega

const api = axios.create({
  baseURL: API_URL, 
});

// 1. Fetch Sections
export const fetchSections = async (type = '') => {
  try {
    const url = type ? `/sections?type=${type}` : '/sections';
    const response = await api.get(url);
    
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      return []; 
    }
  } catch (error) {
    console.error("❌ API Fetch Error:", error.message);
    return []; 
  }
};

// 2. Create Section
export const createSection = async (formDataObject) => {
  const response = await api.post('/sections', formDataObject, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

// 3. Delete Section
export const removeSection = async (id) => {
  const response = await api.delete(`/sections/${id}`);
  return response.data;
};

export default api;