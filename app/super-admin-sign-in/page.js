'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import {
  loginSuperAdmin,
  selectSuperAdminUser,
  selectIsLoading,
  selectError,
} from '@/redux/slices/adminSlice';
import { setToken } from '@/utils/auth';

export default function SuperAdminSignIn() {
  const router = useRouter();
  const dispatch = useDispatch();
  const superAdminUser = useSelector(selectSuperAdminUser);
  const isLoading = useSelector(selectIsLoading);
  const globalError = useSelector(selectError);

  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    console.log('Current superAdminUser state:', superAdminUser);
    if (superAdminUser?.AccessToken) {
      console.log('Attempting to redirect with token:', superAdminUser.AccessToken);
      setToken(superAdminUser.AccessToken, 'superAdmin');
      // Remove any existing admin token
      localStorage.removeItem('adminToken');
      document.cookie = 'adminToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';

      setTimeout(() => {
        router.push('/super-admin-dashboard/overview');
      }, 100);
    }
  }, [superAdminUser, router]);

  useEffect(() => {
    if (globalError) {
      console.log('Global error:', globalError);
      setError(globalError);
    }
  }, [globalError]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    console.log('Submitting with data:', formData);

    try {
      // Remove any existing admin token before super admin login
      localStorage.removeItem('adminToken');
      document.cookie = 'adminToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';

      const result = await dispatch(loginSuperAdmin(formData)).unwrap();
      console.log('Login result:', result);

      if (result.AccessToken) {
        setToken(result.AccessToken, 'superAdmin');
        console.log('Redirecting to dashboard...');
        setTimeout(() => {
          router.push('/super-admin-dashboard/overview');
        }, 100);
      }
    } catch (err) {
      console.error('Login error details:', err);
      setError(err.message || 'Invalid credentials');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(''); // Clear error when user types
  };

  return (
    <main className="min-h-screen w-full bg-[#FDFDFD] relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 py-8 relative">
        {/* Logo and Title */}
        <div className="max-w-[262px] space-y-2">
          <Image
            priority
            src="/pattern/xbxlogo.svg"
            alt="XBX Logo"
            width={262}
            height={90}
            className="w-full"
          />
          <h2 className="font-poppins font-semibold text-[30px] text-[#11A900]">
            Super Admin Dashboard
          </h2>
        </div>

        {/* Sign In Form */}
        <div className="max-w-[400px] mx-auto mt-20">
          <form onSubmit={handleSubmit} className="space-y-8">
            <h1 className="text-center font-poppins font-semibold text-[50px] text-[#11A900]">
              SIGN IN
            </h1>

            <div className="space-y-5">
              {/* Error Message */}
              {error && <div className="text-red-500 text-center font-poppins">{error}</div>}

              {/* Username Input */}
              <div className="relative">
                <input
                  type="text"
                  name="userName"
                  value={formData.userName}
                  onChange={handleInputChange}
                  placeholder="UserName"
                  className="w-full h-[60px] px-[20px] font-poppins text-[20px] text-[#7F7F7F] bg-transparent outline-none border-[1.5px] border-[#11A900] rounded-[100px]"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="w-full h-[60px] px-[20px] font-poppins text-[20px] text-[#7F7F7F] bg-transparent outline-none border-[1.5px] border-[#11A900] rounded-[100px]"
                  required
                />
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-[60px] flex justify-center items-center px-[20px] bg-[#11A900] rounded-[100px] transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                <span className="font-poppins font-bold text-[20px] text-white">
                  {isLoading ? 'Signing in...' : 'SIGN IN'}
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <footer className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-[425px] text-center">
          <p className="font-poppins font-bold text-[20px] text-[#8C8C8C]">
            2024 XBX Company. All rights reserved.
          </p>
        </footer>

        {/* Background Dots */}
        <BackgroundDots />
      </div>
    </main>
  );
}

// Separate component for background dots
function BackgroundDots() {
  return (
    <>
      {/* Top Right Dots */}
      <div className="absolute -top-44 -right-24 w-[400px] h-[497px] flex flex-wrap gap-[50px] -rotate-[66.59deg]">
        <Image
          src="/pattern/circles-dashboard-signin.svg"
          width={400}
          height={497.41}
          className="object-contain"
          alt="Background pattern"
        />
      </div>

      {/* Bottom Left Dots */}
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[497px] flex flex-wrap gap-[50px] rotate-[66.59deg]">
        <Image
          src="/pattern/circles-dashboard-signin.svg"
          width={400}
          height={497.41}
          className="object-contain"
          alt="Background pattern"
        />
      </div>
    </>
  );
}
