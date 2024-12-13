// apis/auth.js
import axiosInstance from "../../utils/axios";

// تسجيل مستخدم جديد
export const signup = (user) => axiosInstance.post(`/user/signup`, user);

// تسجيل الدخول
export const loginUser = (user) => axiosInstance.post(`/user/Signin`, user);
// التحقق من البريد الإلكتروني
export const verifyEmail = (data) => axiosInstance.post(`/user/emailVerification`, data);

// الحصول على بيانات المستخدم
export const getUser = () => axiosInstance.get(`/user/userData`);

// تحديث بيانات المستخدم
export const updateUser = (userData) => axiosInstance.patch(`/user/update`, userData);

// غيرها من الوظائف حسب الحاجة...
