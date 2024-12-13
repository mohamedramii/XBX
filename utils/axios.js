// utils/axios.js

import axios from 'axios';
import { getToken } from './token';

const axiosInstance = axios.create({
  baseURL: 'https://xbx-server.vercel.app', // Replace with your base URL
  timeout: 5000,
});

// Add a request interceptor to include the token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      console.log('Adding token to request headers:', token);
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      console.log('No token found');
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
