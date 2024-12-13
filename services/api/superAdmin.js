// Super Admin APIs
import axiosInstance from '../../utils/axios';

export const superAdminApi = {
    // Admin Management
    getAllAdmins: () => axiosInstance.get('/super-admin/admins'),
    createAdmin: (adminData) => axiosInstance.post('/super-admin/admins', adminData),
    updateAdmin: (adminId, adminData) => axiosInstance.put(`/super-admin/admins/${adminId}`, adminData),
    deleteAdmin: (adminId) => axiosInstance.delete(`/super-admin/admins/${adminId}`),
    
    // System Configuration
    getSystemConfig: () => axiosInstance.get('/super-admin/config'),
    updateSystemConfig: (configData) => axiosInstance.put('/super-admin/config', configData),
    
    // Analytics & Reports
    getSystemAnalytics: () => axiosInstance.get('/super-admin/analytics'),
    generateSystemReport: (params) => axiosInstance.post('/super-admin/reports', params),
};
