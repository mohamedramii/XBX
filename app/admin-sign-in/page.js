'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import {
  loginAdmin,
  selectAdminUser,
  selectIsLoading,
  selectError,
} from '@/redux/slices/adminSlice';
import { setToken } from '@/utils/auth';

export default function AdminSignIn() {
  const router = useRouter();
  const dispatch = useDispatch();
  const adminUser = useSelector(selectAdminUser);
  const isLoading = useSelector(selectIsLoading);
  const globalError = useSelector(selectError);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    console.log('Current adminUser state:', adminUser);
    if (adminUser?.token) {
      console.log('Attempting to redirect with token:', adminUser.token);
      setToken(adminUser.token, 'admin');
      // Remove any existing super admin token
      localStorage.removeItem('superAdminToken');
      document.cookie = 'superAdminToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';

      setTimeout(() => {
        router.push('/dashboard/overview');
      }, 100);
    }
  }, [adminUser, router]);

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
      // Remove any existing super admin token before admin login
      localStorage.removeItem('superAdminToken');
      document.cookie = 'superAdminToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';

      const result = await dispatch(loginAdmin(formData)).unwrap();
      console.log('Login result:', result);

      if (result.token) {
        setToken(result.token, 'admin');
        console.log('Redirecting to dashboard...');
        setTimeout(() => {
          router.push('/dashboard/overview');
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
      <div className="max-w-[1536px] mx-auto px-4 py-8 relative z-10">
        {/* Logo and Title */}
        <div className="max-w-[262px] space-y-2 sm:max-w-[300px] lg:max-w-[362px]">
          <Image
            priority
            src="/pattern/xbxlogo.svg"
            alt="XBX Logo"
            width={262}
            height={90}
            className="w-full"
          />
          <h2 className="font-poppins font-semibold text-[24px] sm:text-[28px] lg:text-[30px] text-[#11A900]">Dashboard</h2>
        </div>

        {/* Sign In Form */}
        <div className="max-w-[320px] sm:max-w-[360px] lg:max-w-[400px] mx-auto mt-12 sm:mt-16 lg:mt-20">
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            <h1 className="text-center font-poppins font-semibold text-[36px] sm:text-[44px] lg:text-[50px] text-[#11A900]">
              SIGN IN
            </h1>

            <div className="space-y-4 sm:space-y-5">
              {/* Error Message */}
              {error && <div className="text-red-500 text-center font-poppins text-sm sm:text-base">{error}</div>}

              {/* Username Input */}
              <div className="relative z-20">
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="UserName"
                  className="w-full h-[50px] sm:h-[55px] lg:h-[60px] px-[16px] sm:px-[20px] font-poppins text-[16px] sm:text-[18px] lg:text-[20px] text-[#7F7F7F] bg-[#FDFDFD] outline-none border-[1.5px] border-[#11A900] rounded-[100px]"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="relative z-20">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="w-full h-[50px] sm:h-[55px] lg:h-[60px] px-[16px] sm:px-[20px] font-poppins text-[16px] sm:text-[18px] lg:text-[20px] text-[#7F7F7F] bg-[#FDFDFD] outline-none border-[1.5px] border-[#11A900] rounded-[100px]"
                  required
                />
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-[50px] sm:h-[55px] lg:h-[60px] flex justify-center items-center px-[16px] sm:px-[20px] bg-[#11A900] rounded-[100px] transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                <span className="font-poppins font-bold text-[16px] sm:text-[18px] lg:text-[20px] text-white">
                  {isLoading ? 'Signing in...' : 'SIGN IN'}
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <footer className="relative z-10 mt-16 sm:mt-20 text-center">
          <p className="font-poppins font-bold text-[16px] sm:text-[18px] lg:text-[20px] text-[#8C8C8C]">
            2024 XBX Company. All rights reserved.
          </p>
        </footer>
      </div>

      {/* Background Dots */}
      <div className="fixed inset-0 pointer-events-none">
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
      <div className="absolute -top-44 -right-24 w-[300px] sm:w-[350px] lg:w-[400px] h-[497px] flex flex-wrap gap-[50px] -rotate-[66.59deg] opacity-30 sm:opacity-50 lg:opacity-100">
        <Image
          src="/pattern/circles-dashboard-signin.svg"
          width={400}
          height={497.41}
          className="object-contain"
          alt="Background pattern"
        />
      </div>

      {/* Bottom Left Dots */}
      <div className="absolute -bottom-24 -left-24 w-[300px] sm:w-[350px] lg:w-[400px] h-[497px] flex flex-wrap gap-[50px] rotate-[66.59deg] opacity-30 sm:opacity-50 lg:opacity-100">
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
