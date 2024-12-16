"use client";
import Image from "next/image";
import { useState } from "react";

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    language: "",
    phoneNumber: "",
    country: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="relative w-full min-h-screen bg-[#FBFBFB] dark:bg-[#0e1b0f] pt-[62px]">
      <div className="flex flex-col justify-end items-center gap-8 max-w-[1258px] mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 md:gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-[100px] h-[100px] relative">
              <Image
                src="/images/profile-img.png"
                alt="Profile"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-[20px] font-medium text-[#2C3C2D] dark:text-[#FBFBFB]">
                Alexa Rawles
              </h2>
              <p className="text-[16px] text-[#2C3C2D] dark:text-[#FBFBFB] opacity-50">
                alexarawles@gmail.com
              </p>
            </div>
          </div>
          <button className="px-4 py-2 bg-[#5A9754] text-[#FBFBFB] font-bold text-[16px] rounded-lg">
            Edit
          </button>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Full Name */}
            <div className="space-y-3">
              <label className="block text-[16px] text-[#2C3C2D] dark:text-[#FBFBFB] opacity-80">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Your First Name"
                className="w-full p-4 bg-[#F9F9F9] rounded-lg text-[#2C3C2D] placeholder-[#2C3C2D]/40"
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </div>

            {/* Gender */}
            <div className="space-y-3">
              <label className="block text-[16px] text-[#2C3C2D] dark:text-[#FBFBFB] opacity-80">
                Gender
              </label>
              <select
                name="gender"
                className="w-full p-4 bg-[#F9F9F9] rounded-lg text-[#2C3C2D] placeholder-[#2C3C2D]/40"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* Language */}
            <div className="space-y-3">
              <label className="block text-[16px] text-[#2C3C2D] dark:text-[#FBFBFB] opacity-80">
                Language
              </label>
              <select
                name="language"
                className="w-full p-4 bg-[#F9F9F9] rounded-lg text-[#2C3C2D] placeholder-[#2C3C2D]/40"
                value={formData.language}
                onChange={handleInputChange}
              >
                <option value="">Select Language</option>
                <option value="english">English</option>
                <option value="arabic">Arabic</option>
              </select>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Phone Number */}
            <div className="space-y-3">
              <label className="block text-[16px] text-[#2C3C2D] dark:text-[#FBFBFB] opacity-80">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Your Phone Number"
                className="w-full p-4 bg-[#F9F9F9] rounded-lg text-[#2C3C2D] placeholder-[#2C3C2D]/40"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>

            {/* Country */}
            <div className="space-y-3">
              <label className="block text-[16px] text-[#2C3C2D] dark:text-[#FBFBFB] opacity-80">
                Country
              </label>
              <select
                name="country"
                className="w-full p-4 bg-[#F9F9F9] rounded-lg text-[#2C3C2D] placeholder-[#2C3C2D]/40"
                value={formData.country}
                onChange={handleInputChange}
              >
                <option value="">Select Country</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="canada">Canada</option>
              </select>
            </div>

            {/* Address */}
            <div className="space-y-3">
              <label className="block text-[16px] text-[#2C3C2D] dark:text-[#FBFBFB] opacity-80">
                Address
              </label>
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                className="w-full p-4 bg-[#F9F9F9] rounded-lg text-[#2C3C2D] placeholder-[#2C3C2D]/40"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        {/* Email Section */}
        <div className="w-full max-w-[266px]">
          <h3 className="text-[18px] font-medium text-[#2C3C2D] dark:text-[#FBFBFB] mb-5">
            My Email Address
          </h3>
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 flex items-center justify-center bg-[#C0E7BC] rounded-full">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
                  fill="#78B073"
                />
              </svg>
            </div>
            <div>
              <p className="text-[16px] text-[#2C3C2D] dark:text-[#FBFBFB]">
                alexarawles@gmail.com
              </p>
              <p className="text-[16px] text-[#2C3C2D] dark:text-[#FBFBFB] opacity-50">
                1 month ago
              </p>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <button className="w-[164px] h-[44px] bg-[#A5D0A1] text-[#FBFBFB] font-bold text-[16px] rounded-lg">
          Save Changes
        </button>
      </div>
    </div>
  );
}
