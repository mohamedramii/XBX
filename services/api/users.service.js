import api from './axios';
import { ENDPOINTS } from './config';

class UsersService {
  async getUsers(params = {}) {
    try {
      const response = await api.get(ENDPOINTS.users.list, { params });
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to fetch users',
      };
    }
  }

  async getUserById(id) {
    try {
      const response = await api.get(ENDPOINTS.users.getById.replace(':id', id));
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to fetch user',
      };
    }
  }

  async createUser(userData) {
    try {
      const response = await api.post(ENDPOINTS.users.create, userData);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to create user',
      };
    }
  }

  async updateUser(id, userData) {
    try {
      const response = await api.put(ENDPOINTS.users.update.replace(':id', id), userData);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to update user',
      };
    }
  }

  async deleteUser(id) {
    try {
      await api.delete(ENDPOINTS.users.delete.replace(':id', id));
      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to delete user',
      };
    }
  }
}

export default new UsersService();
