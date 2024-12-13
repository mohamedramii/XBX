// components/AuthProvider.jsx

'use client';

import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slices/userSlice';
import { getToken } from '../utils/token';
import { getUserData } from '../services/api/auth';

export default function AuthProvider({ children }) {
  const dispatch = useDispatch();

  const fetchUserData = useCallback(async () => {
    try {
      const response = await getUserData();
      if (response?.data) {
        dispatch(setUser(response.data));
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }, [dispatch]);

  useEffect(() => {
    const token = getToken();
    if (token) {
      fetchUserData();
    }
  }, [fetchUserData]);

  return children;
}
