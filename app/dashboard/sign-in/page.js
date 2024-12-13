'use client'

import React from 'react'
import Image from 'next/image'

export default function DashboardSignIn() {
  return (
    <div className="relative w-[1536px] h-[960px] left-[100px] top-[100px] bg-[#FDFDFD]">
      {/* Logo and Title */}
      <div className="absolute w-[262px] h-[135px] left-[30px] top-[30px] flex flex-col items-start">
        <Image
          src="/xbxlogo.png"
          alt="XBX Logo"
          width={262}
          height={90}
          className="w-full"
        />
        <h2 className="w-full h-[45px] font-poppins font-semibold text-[30px] leading-[45px] flex items-center text-[#11A900]">
          Dashboard
        </h2>
      </div>

      {/* Sign In Form */}
      <div className="absolute w-[400px] h-[335px] left-[568px] top-[313px] flex flex-col justify-center items-center gap-[30px]">
        <h1 className="w-full h-[75px] font-poppins font-semibold text-[50px] leading-[75px] flex items-center justify-center text-[#11A900]">
          SIGN IN
        </h1>

        <div className="w-full flex flex-col justify-center items-center gap-[20px]">
          {/* Username Input */}
          <div className="w-full h-[60px] flex items-center px-[20px] gap-[10px] border-[1.5px] border-[#11A900] rounded-[100px]">
            <input 
              type="text" 
              placeholder="UserName"
              className="w-full h-[30px] font-poppins text-[20px] leading-[30px] text-[#7F7F7F] bg-transparent outline-none"
            />
          </div>

          {/* Password Input */}
          <div className="w-full h-[60px] flex items-center px-[20px] gap-[10px] border-[1.5px] border-[#11A900] rounded-[100px]">
            <input 
              type="password" 
              placeholder="Password"
              className="w-full h-[30px] font-poppins text-[20px] leading-[30px] text-[#7F7F7F] bg-transparent outline-none"
            />
          </div>

          {/* Sign In Button */}
          <button className="w-full h-[60px] flex justify-center items-center px-[20px] gap-[10px] bg-[#11A900] rounded-[100px]">
            <span className="font-poppins font-bold text-[20px] leading-[30px] text-white">
              SIGN IN
            </span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <p className="absolute w-[425px] h-[32px] left-[556px] top-[908px] font-poppins font-bold text-[20px] leading-[160%] text-center text-[#8C8C8C]">
        © 2024 XBX Company. All rights reserved.
      </p>

      {/* Background Dots - Top Right */}
      <div className="absolute w-[400px] h-[497.41px] left-[1554.46px] top-[-177px] flex flex-wrap gap-[50px] rotate-[66.59deg]">
        {[...Array(30)].map((_, i) => (
          <div key={`dot-top-${i}`} className="w-[40px] h-[40px] bg-[rgba(17,169,0,0.1)] rotate-[66.59deg]" />
        ))}
      </div>

      {/* Background Dots - Bottom Left */}
      <div className="absolute w-[400px] h-[497.41px] left-[309.46px] top-[603px] flex flex-wrap gap-[50px] rotate-[66.59deg]">
        {[...Array(30)].map((_, i) => (
          <div key={`dot-bottom-${i}`} className="w-[40px] h-[40px] bg-[rgba(17,169,0,0.1)] rotate-[66.59deg]" />
        ))}
      </div>
    </div>
  )
}
