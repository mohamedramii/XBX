// app/email-verification/page.js

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { verifyEmail, resendEmailVerification } from '../../services/api';
import { setToken } from '../../utils/token';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/userSlice';

export default function EmailVerificationPage() {
  const [code, setCode] = useState(new Array(6).fill(''));
  const [userName, setUserName] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    // Retrieve userName from localStorage
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    } else {
      // If userName is not available, redirect to sign-in page
      alert('User information not found. Please sign in again.');
      router.push('/sign-in');
    }
  }, [router]);

  const handleChange = (element, index) => {
    if (!/^\d*$/.test(element.value)) return;
    const newCode = [...code];
    newCode[index] = element.value;
    setCode(newCode);

    // Focus on the next input field
    if (element.value !== '' && index < 5) {
      const nextSibling = document.getElementById(`code-${index + 1}`);
      if (nextSibling) {
        nextSibling.focus();
      }
    }
  };

  const handlePaste = (event) => {
    const pastedData = event.clipboardData.getData('text');
    const newCode = pastedData.split('').slice(0, 6);
    setCode(newCode);
    newCode.forEach((value, index) => {
      const input = document.getElementById(`code-${index}`);
      if (input) {
        input.value = value;
      }
    });
  };

  const handleVerify = async () => {
    const verificationCode = code.join('');
    try {
      console.log('Attempting to verify email with code:', verificationCode);
      const response = await verifyEmail({ userName, code: verificationCode });
      const data = response.data;
      console.log('Email verification response data:', data);

      if (data.token && data.user) {
        // Set token in cookies
        setToken(data.token);

        // Dispatch setUser action
        dispatch(setUser({ token: data.token, userDetails: data.user }));

        alert('Email verification successful! Redirecting to home page...');
        router.push('/');
      } else {
        alert('Email verification successful! Please sign in.');
        router.push('/sign-in');
      }
    } catch (error) {
      console.error('Email verification error:', error);
      alert(error.response?.data?.error || 'Invalid verification code. Please try again.');
    }
  };

  const handleResendEmail = async () => {
    try {
      console.log('Resending email verification to userName:', userName);
      await resendEmailVerification({ userName });
      alert('Verification email has been resent.');
    } catch (error) {
      console.error('Resend email verification error:', error);
      alert(error.response?.data?.error || 'Error resending verification email.');
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full h-screen overflow-hidden mx-auto relative">
      {/* Left side - Logo Section (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-[45%] w-full h-full relative items-center justify-center overflow-hidden bg-white">
        {/* Background Patterns */}
        <div className="absolute -top-[10%] left-[55%] w-full h-auto z-0 opacity-50">
          <Image
            src="/pattern/pattern-dots.svg"
            width={354}
            height={490}
            alt="Pattern Dots"
            className="scale-125"
          />
        </div>
        <div className="absolute -bottom-[15%] left-[20%] w-auto h-auto z-0 ">
          <Image
            src="/pattern/pattern-dots.svg"
            width={354}
            height={490}
            alt="Pattern Dots"
            className="scale-125"
          />
        </div>

        <div className="text-center z-10">
          <Image src="/images/xbxlogo.svg" width={436.67} height={150} alt="XBX Logo" />
          <p className="mt-4 text-primary font-medium text-lg lg:text-xl">
            Transforming Ideas into Innovative Solutions
          </p>
        </div>
      </div>

      {/* Right side - Email Verification Form */}
      <div className="lg:w-[55%] w-full h-screen flex items-center justify-center bg-white p-4 lg:p-12 z-50 shadow-lg">
        <div className="w-full max-w-[90%] lg:max-w-[500px] flex flex-col justify-center items-center">
          {/* Logo for Mobile */}
          <div className="flex lg:hidden text-center mb-4 items-center justify-center">
            <Image src="/pattern/xbxlogo.svg" width={200} height={80} alt="XBX Logo" />
          </div>

          <h2 className="text-[40px] lg:text-[55px] text-primary font-semibold text-center">
            Verify Your Email
          </h2>
          <p className="text-gray-600 text-[16px] lg:text-[20px] text-center mb-6">
            We've sent a verification code to your email address. Please enter the code below to
            verify your email.
          </p>

          {/* Verification Code Input */}
          <div className="flex space-x-2 justify-center mb-6">
            {code.map((data, index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                maxLength="1"
                className="w-12 h-12 text-center text-lg border border-gray-300 rounded-md"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onPaste={handlePaste}
                onFocus={(e) => e.target.select()}
              />
            ))}
          </div>

          {/* Verify Button */}
          <button
            onClick={handleVerify}
            className="w-full bg-primary text-white font-bold rounded-[10px] lg:rounded-[20px] h-[45px] lg:h-[60px] mb-4"
          >
            Verify
          </button>

          {/* Resend Link */}
          <p className="text-gray-600 text-[14px] lg:text-[16px] text-center mb-6">
            If you didn't receive the code, please check your spam folder or{' '}
            <span
              className="text-primary font-bold hover:underline cursor-pointer"
              onClick={handleResendEmail}
            >
              click here
            </span>{' '}
            to resend.
          </p>
        </div>
      </div>
    </div>
  );
}
