'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const ApplicationForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <main className="w-full min-h-screen bg-white dark:bg-[#0e1b0f]  px-4 sm:px-8 lg:px-[122px] py-10 sm:py-16">
      <div className="max-w-[1089px] mx-auto flex flex-col items-center gap-8 sm:gap-[48px]">
        <div className="w-full flex flex-col items-center gap-8 sm:gap-[112px]">
          <h1 className="font-poppins font-bold text-2xl sm:text-[40px] leading-[160%] text-[#192B1A] dark:text-[#0fcd1c] text-center">
            Investment Application Form
          </h1>

          <div className="w-full flex flex-col lg:flex-row items-start gap-8 sm:gap-[241px]">
            {/* Left Column - Form Fields */}
            <div className="w-full lg:w-[420px] flex flex-col gap-8 sm:gap-[43px]">
              {/* Full Name */}
              <div className="flex flex-col gap-4 sm:gap-[40px]">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full font-poppins font-bold text-xl sm:text-[24px] leading-[160%] text-[#192B1A]  dark:bg-[#0e1b0f] border-b border-[#192B1A] pb-2 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-4 sm:gap-[40px]">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full font-poppins font-bold text-xl sm:text-[24px] leading-[160%] text-[#192B1A] dark:bg-[#0e1b0f] border-b border-[#192B1A] pb-2 focus:outline-none"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-4 sm:gap-[40px]">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full font-poppins font-bold text-xl sm:text-[24px] leading-[160%] text-[#192B1A] dark:bg-[#0e1b0f] border-b border-[#192B1A] pb-2 focus:outline-none"
                />
              </div>

              {/* Country */}
              <div className="flex flex-col gap-4 sm:gap-[40px]">
                <input
                  type="text"
                  placeholder="Country"
                  className="w-full font-poppins font-bold text-xl sm:text-[24px] leading-[160%] text-[#192B1A] dark:bg-[#0e1b0f] border-b border-[#192B1A] pb-2 focus:outline-none"
                />
              </div>

              {/* Address */}
              <div className="flex flex-col gap-4 sm:gap-[40px]">
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full font-poppins font-bold text-xl sm:text-[24px] leading-[160%] text-[#192B1A] dark:bg-[#0e1b0f] border-b border-[#192B1A] pb-2 focus:outline-none"
                />
              </div>

              {/* Order Description */}
              <div className="flex flex-col gap-4 sm:gap-[40px]">
                <input
                  type="text"
                  placeholder="Order Description"
                  className="w-full font-poppins font-bold text-xl sm:text-[24px] leading-[160%] text-[#192B1A] dark:bg-[#0e1b0f] border-b border-[#192B1A] pb-2 focus:outline-none"
                />
              </div>

              {/* Notes */}
              <div className="flex flex-col gap-4 sm:gap-[40px]">
                <input
                  type="text"
                  placeholder="Notes"
                  className="w-full font-poppins font-bold text-xl sm:text-[24px] leading-[160%] text-[#192B1A] dark:bg-[#0e1b0f] border-b border-[#192B1A] pb-2 focus:outline-none"
                />
              </div>
            </div>

            {/* Right Column - File Upload */}
            <div className="w-full lg:w-[428px] flex flex-col items-center gap-8 sm:gap-[64px]">
              <div className="w-full flex flex-col gap-4 sm:gap-[19px]">
                <h2 className="font-poppins font-bold text-xl sm:text-[24px] leading-[160%] text-[#192B1A] dark:text-[#0fcd1c]">
                  Insert your ID / Passport Photo
                </h2>
                <label className="w-full h-[327px] bg-[#F8F8F8] dark:bg-[#2c3c2d] rounded-[24px] flex items-center justify-center cursor-pointer relative">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    accept="image/*"
                  />
                  {selectedFile ? (
                    <div className="w-full h-full relative">
                      <Image
                        src={URL.createObjectURL(selectedFile)}
                        alt="Selected ID"
                        fill
                        className="rounded-[24px] object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-[104px] h-[104px] bg-[#99EB91] rounded-full flex items-center justify-center">
                      <Image src="/icons/add-pic.svg" alt="Add picture" width={40} height={40} />
                    </div>
                  )}
                </label>
              </div>

              <button className="w-[116px] h-[67px] flex justify-center items-center px-4 py-[16px] gap-[8px] border-2 border-[#192B1A] dark:border-[#0fcd1c] rounded-[16px]">
                <span className="font-poppins font-bold text-lg sm:text-[22px] leading-[160%] text-[#192B1A] dark:text-[#0fcd1c] text-center">
                  SUBMIT
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ApplicationForm;
