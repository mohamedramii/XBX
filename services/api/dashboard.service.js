import api from './axios';
import { ENDPOINTS } from './config';

class DashboardService {
  async getOverview() {
    try {
      const response = await api.get(ENDPOINTS.dashboard.overview);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to fetch overview data'
      };
    }
  }

  async getStats() {
    try {
      const response = await api.get(ENDPOINTS.dashboard.stats);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to fetch stats'
      };
    }
  }
}

export default new DashboardService();
