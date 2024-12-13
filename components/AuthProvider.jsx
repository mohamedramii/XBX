// components/AuthProvider.jsx

'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser, clearUser } from '../redux/slices/userSlice';
import { getUserData } from '../services/api';
import { getToken } from '../utils/token';

export default function AuthProvider({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getToken();
    console.log('Retrieved token:', token);

    if (token) {
      fetchUserData(token);
    } else {
      console.log('No token found, clearing user state.');
      dispatch(clearUser());
    }
  }, [dispatch]);

  const fetchUserData = async (token) => {
    try {
      console.log('Fetching user data with token:', token);
      const response = await getUserData();
      const data = response.data;
      console.log('User data received:', data);

      if (data.user) {
        dispatch(setUser({ token, userDetails: data.user }));
      } else {
        console.log('No user data found, clearing user state.');
        dispatch(clearUser());
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      dispatch(clearUser());
    }
  };

  useEffect(() => {
    const token = getToken();
    if (token) {
      fetchUserData(token);
    }
  }, [fetchUserData, getToken]);

  return children;
}
