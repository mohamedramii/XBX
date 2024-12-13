// components/Modal/EmailConfirmation.jsx

'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function EmailConfirmation({ onClose, onContinue, onChangeEmail }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      {/* Popup Container */}
      <div
        className={`bg-white w-[470px] h-[489px] rounded-[20px] shadow-lg flex flex-col items-center p-[30px] relative overflow-hidden transition-all duration-300 transform ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        {/* Background Pattern */}
        <div className="absolute top-[20%] z-0">
          <Image
            src="/pattern/patternEmailConf.svg"
            width={679}
            height={283}
            alt="Background Pattern"
          />
        </div>

        {/* Title */}
        <h2 className="text-[24px] lg:text-[28px] font-semibold text-primary text-center z-10">
          Email Confirmation
        </h2>

        {/* Description */}
        <p className="text-gray-600 w-[418px] font-semibold text-[14px] lg:text-[16px] text-center leading-relaxed z-10">
          We will send a confirmation code to the email address you provide.
          Please ensure you have access to this email account. If you would
          like to use a different email, please update it before proceeding.
        </p>

        {/* Circle and Logo Wrapper */}
        <div className="relative mb-4 z-10">
          <div className="w-[150px] h-[150px] bg-[#CFEECC] rounded-full flex items-center justify-center scale-95">
            {/* Logo Container */}
            <div>
              <Image
                src="/images/xbxlogo.svg"
                width={100}
                height={50}
                alt="XBX Logo"
                className="scale-[2]"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <button
          onClick={onContinue}
          className="w-full bg-primary text-white text-[20px] font-bold rounded-[10px] lg:rounded-[20px] h-[45px] lg:h-[50px] mb-4 z-10"
        >
          Continue
        </button>
        <button
          onClick={onChangeEmail}
          className="w-full text-[20px] font-bold border border-primary text-primary rounded-[10px] lg:rounded-[20px] h-[45px] lg:h-[50px] z-10"
        >
          Change the provided email
        </button>
      </div>
    </div>
  );
}
