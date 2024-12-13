import api from './axios';
import { ENDPOINTS } from './config';
import Cookies from 'js-cookie';

class AuthService {
  async adminSignIn(username, password) {
    try {
      const response = await api.post(ENDPOINTS.auth.adminSignIn, {
        userName: username,
        password: password
      });

      const { AccessToken, adminID, adminName } = response.data;

      if (AccessToken) {
        // Store token
        localStorage.setItem('adminToken', AccessToken);
        
        // Set cookie for server-side auth checks
        Cookies.set('adminToken', AccessToken, { expires: 7 });
        
        return {
          success: true,
          data: {
            token: AccessToken,
            user: {
              id: adminID,
              name: adminName
            }
          }
        };
      }
      
      return {
        success: false,
        error: 'No token received'
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || 'Authentication failed'
      };
    }
  }

  adminSignOut() {
    try {
      // Clear tokens and cookies
      localStorage.removeItem('adminToken');
      Cookies.remove('adminToken');
      
      return {
        success: true
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to clear authentication data'
      };
    }
  }

  async refreshToken() {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      const response = await api.post(ENDPOINTS.auth.refreshToken, { refreshToken });
      
      const { AccessToken, adminID, adminName } = response.data;

      if (AccessToken) {
        localStorage.setItem('adminToken', AccessToken);
        Cookies.set('adminToken', AccessToken, { expires: 7 });
        
        return {
          success: true,
          data: {
            token: AccessToken,
            user: {
              id: adminID,
              name: adminName
            }
          }
        };
      }
      
      return {
        success: false,
        error: 'No token received'
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || 'Token refresh failed'
      };
    }
  }
}

export default new AuthService();
