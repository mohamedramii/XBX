'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const AdminAuthContext = createContext();

export function AdminAuthProvider({ children }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if admin is authenticated on mount
    const adminToken = Cookies.get('adminToken');
    setIsAuthenticated(!!adminToken);
    setIsLoading(false);
  }, []);

  const login = async (username, password) => {
    try {
      // Here you would typically make an API call to authenticate
      // For now, we'll just simulate it
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Set cookie and update state
      Cookies.set('adminToken', 'admin-token-value', { expires: 7 });
      setIsAuthenticated(true);

      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const logout = () => {
    Cookies.remove('adminToken');
    setIsAuthenticated(false);
    router.push('/admin-sign-in');
  };

  const value = {
    isAuthenticated,
    isLoading,
    login,
    logout,
  };

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
}
