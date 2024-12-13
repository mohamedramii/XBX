// Authentication related APIs
import axiosInstance from '../../utils/axios';

export const authApi = {
    signUp: (userData) => axiosInstance.post('/user/signup', userData),
    signIn: (userData) => axiosInstance.post('/user/Signin', userData),
    verifyEmail: (data) => axiosInstance.post('/user/emailVerification', data),
    resendEmailVerification: (data) => axiosInstance.post('/user/resendEmail', data),
};
