// components/Footer.jsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-start p-[92px_117px] gap-10 relative w-[full] h-[220px] bg-[#2C3C2D] rounded-t-[40px]">
      {/* Frame 34 */}
      <div className="flex flex-row flex-wrap justify-center items-center gap-[56px] w-[546px] h-[36px]">
        {/* HOME */}
        <Link
          href="/"
          className="w-[70px] h-[36px] font-istok-web font-normal text-[24px] leading-[150%] text-right text-[#030E23]"
        >
          HOME
        </Link>

        {/* ABOUT US */}
        <Link
          href="/about"
          className="w-[100px] h-[30px] font-istok-web font-normal text-[20px] leading-[150%] text-right text-[#030E23]"
        >
          ABOUT US
        </Link>

        {/* ENGLISH */}
        <Link
          href="/language"
          className="w-[83px] h-[30px] font-istok-web font-normal text-[20px] leading-[150%] text-right text-[#030E23]"
        >
          ENGLISH
        </Link>

        {/* CONTACT US */}
        <Link
          href="/contact"
          className="w-[125px] h-[30px] font-istok-web font-normal text-[20px] leading-[150%] text-right text-[#030E23]"
        >
          CONTACT US
        </Link>
      </div>
    </div>
  );
};

export default Footer;
