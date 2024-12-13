// Admin APIs
import axiosInstance from '../../utils/axios';

export const adminApi = {
    // Product Management
    createProduct: (productData) => axiosInstance.post('/admin/products', productData),
    updateProduct: (productId, productData) => axiosInstance.put(`/admin/products/${productId}`, productData),
    deleteProduct: (productId) => axiosInstance.delete(`/admin/products/${productId}`),
    
    // Order Management
    getAllOrders: () => axiosInstance.get('/admin/orders'),
    updateOrderStatus: (orderId, status) => axiosInstance.patch(`/admin/orders/${orderId}`, { status }),
    
    // User Management
    getUsers: () => axiosInstance.get('/admin/users'),
    updateUserStatus: (userId, status) => axiosInstance.patch(`/admin/users/${userId}/status`, { status }),
};
