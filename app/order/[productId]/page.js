'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function OrderPage({ params }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    country: '',
    address: '',
    orderDescription: '',
    notes: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center px-[104px] pt-[174px]">
      <div className="flex flex-row justify-center items-start gap-[166px] w-[1230px]">
        {/* Left Side - Form */}
        <div className="flex flex-col items-start gap-[48px] w-[627px]">
          <h1 className="font-poppins font-bold text-[40px] leading-[160%] text-[#192B1A] w-full">
            please fill this form to procced your order
          </h1>

          <div className="flex flex-col items-center gap-[110px] w-[420px]">
            <form className="flex flex-col items-start gap-[43px] w-full">
              {[
                { name: 'fullName', label: 'Full Name' },
                { name: 'email', label: 'Email' },
                { name: 'phoneNumber', label: 'phone number' },
                { name: 'country', label: 'Country' },
                { name: 'address', label: 'Address' },
                { name: 'orderDescription', label: 'Order Description' },
                { name: 'notes', label: 'notes' },
              ].map((field) => (
                <div key={field.name} className="flex flex-col items-start gap-[40px] w-full">
                  <input
                    type="text"
                    placeholder={field.label}
                    className="w-full font-poppins font-bold text-[24px] leading-[160%] text-[#192B1A] border-b border-black pb-2 focus:outline-none"
                    value={formData[field.name]}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                  />
                </div>
              ))}
            </form>
          </div>

          {/* Price Section */}
          <div className="flex flex-row justify-between items-center w-full gap-[48px] h-[174px]">
            <div className="relative w-[260px] h-[174px]">
              <h3 className="absolute font-poppins font-bold text-[28px] leading-[160%] text-[#BF1111] top-0">
                Price
              </h3>
              <div className="absolute top-[60px] font-poppins font-bold text-[24px] leading-[160%] text-[#192B1A]">
                BEFORE SALE
                <span className="absolute left-[193px] top-[3px] font-medium text-[20px]">
                  20500
                </span>
              </div>
              <div className="absolute top-[136px] font-poppins font-bold text-[24px] leading-[160%] text-[#192B1A]">
                AFTER SALE
                <span className="absolute left-[183px] font-bold text-[24px]">20000</span>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="flex justify-center items-center px-4 py-4 border-2 border-[#192B1A] rounded-2xl w-[116px] h-[67px]"
            >
              <span className="font-poppins font-bold text-[22px] leading-[160%] text-[#192B1A]">
                SUBMIT
              </span>
            </button>
          </div>
        </div>

        {/* Right Side - Image and Note */}
        <div className="flex flex-col items-center gap-[33px] w-[437px]">
          <div className="flex flex-col items-start gap-[56px] w-full">
            <Image
              src="/product-image.png"
              alt="Product"
              width={423}
              height={431}
              className="object-cover"
            />

            <div className="flex flex-col items-center gap-4 w-full">
              <h3 className="font-poppins font-bold text-[24px] leading-[160%] text-[#BF1111] text-center w-full">
                NOTE
              </h3>
              <p className="font-poppins font-semibold text-[24px] leading-[160%] text-[#192B1A] text-center w-full">
                our team will contact you once you submit your order
              </p>
            </div>
          </div>

          <Image src="/XBXBG.png" alt="XBX Background" width={300} height={300} />
        </div>
      </div>
    </div>
  );
}
