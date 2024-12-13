// services/api.js

import axiosInstance from '../utils/axios';

// Authentication APIs
export const signUp = (userData) => axiosInstance.post('/user/signup', userData);
export const signIn = (userData) => axiosInstance.post('/user/Signin', userData);
export const verifyEmail = (data) => axiosInstance.post('/user/emailVerification', data);
export const resendEmailVerification = (data) => axiosInstance.post('/user/resendEmail', data);

// User APIs
export const getUserData = () => axiosInstance.get('/user/userData');
export const updateUser = (userData) => axiosInstance.patch('/user/update', userData);
