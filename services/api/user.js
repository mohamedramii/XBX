// Regular user APIs
import axiosInstance from '../../utils/axios';

export const userApi = {
    // Profile Management
    getUserData: () => axiosInstance.get('/user/userData'),
    updateProfile: (userData) => axiosInstance.patch('/user/update', userData),
    
    // Orders
    getOrders: () => axiosInstance.get('/user/orders'),
    placeOrder: (orderData) => axiosInstance.post('/user/orders', orderData),
    
    // Products
    getProducts: (category) => axiosInstance.get(`/products/${category}`),
    getProductDetails: (productId) => axiosInstance.get(`/products/detail/${productId}`),
};
