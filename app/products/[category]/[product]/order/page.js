'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useParams } from 'next/navigation';

export default function OrderPage() {
  const params = useParams();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    country: '',
    address: '',
    orderDescription: '',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-start pt-[100px] sm:pt-[140px] lg:pt-[174px] px-4 sm:px-8 lg:px-[104px] w-full max-w-[1440px] mx-auto">
      <div className="flex flex-col lg:flex-row justify-center items-start gap-8 sm:gap-[80px] lg:gap-[166px] w-full max-w-[1230px]">
        {/* Left Side - Form */}
        <div className="flex flex-col items-start gap-6 sm:gap-[48px] w-full max-w-[627px]">
          <h1 className="font-poppins font-bold text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[160%] text-[#192B1A] w-full">
            please fill this form to proceed your order
          </h1>
          
          <div className="flex flex-col items-center gap-16 sm:gap-[80px] lg:gap-[110px] w-full max-w-[420px]">
            <form className="flex flex-col items-start gap-6 sm:gap-[30px] lg:gap-[43px] w-full">
              {[
                { name: 'fullName', label: 'Full Name' },
                { name: 'email', label: 'Email' },
                { name: 'phoneNumber', label: 'Phone Number' },
                { name: 'country', label: 'Country' },
                { name: 'address', label: 'Address' },
                { name: 'orderDescription', label: 'Order Description' },
                { name: 'notes', label: 'Notes' }
              ].map((field) => (
                <div key={field.name} className="flex flex-col items-start w-full">
                  <input
                    type="text"
                    placeholder={field.label}
                    className="w-full h-[38px] font-poppins font-bold text-[16px] sm:text-[20px] md:text-[24px] leading-[160%] text-[#192B1A] border-b border-black pb-2 focus:outline-none"
                    value={formData[field.name]}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                  />
                </div>
              ))}
            </form>
          </div>

          {/* Price Section */}
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6 sm:gap-[48px] h-auto md:h-[174px]">
            <div className="relative w-full max-w-[260px] h-auto">
              <h3 className="font-poppins font-bold text-[20px] sm:text-[24px] md:text-[28px] leading-[160%] text-[#BF1111]">
                Price
              </h3>
              <div className="mt-4 sm:mt-[30px] font-poppins font-bold text-[16px] sm:text-[20px] md:text-[24px] leading-[160%] text-[#192B1A] relative">
                BEFORE SALE
                <span className="absolute left-[130px] sm:left-[193px] top-[3px] font-medium text-[16px] sm:text-[18px] md:text-[20px]">
                  20500
                </span>
              </div>
              <div className="mt-6 sm:mt-[40px] font-poppins font-bold text-[16px] sm:text-[20px] md:text-[24px] leading-[160%] text-[#192B1A] relative">
                AFTER SALE
                <span className="absolute left-[120px] sm:left-[183px] font-bold text-[16px] sm:text-[20px] md:text-[24px]">
                  20000
                </span>
              </div>
            </div>
            
            <button
              onClick={handleSubmit}
              className="flex justify-center items-center px-4 py-3 sm:py-4 border-2 border-[#192B1A] rounded-2xl w-[100px] sm:w-[116px] h-[50px] sm:h-[67px]"
            >
              <span className="font-poppins font-bold text-[16px] sm:text-[20px] md:text-[22px] leading-[160%] text-[#192B1A]">
                SUBMIT
              </span>
            </button>
          </div>
        </div>

        {/* Right Side - Image and Note */}
        <div className="flex flex-col items-center gap-6 sm:gap-[33px] w-full max-w-[437px]">
          <div className="flex flex-col items-center sm:items-start gap-6 sm:gap-[56px] w-full">
            <div className="relative w-full max-w-[423px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[431px]">
              <Image
                src={`/images/watches/1.png`}
                alt="Product Image"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="flex flex-col items-center gap-2 sm:gap-4 w-full text-center">
              <h3 className="font-poppins font-bold text-[18px] sm:text-[20px] md:text-[24px] leading-[160%] text-[#BF1111]">
                NOTE
              </h3>
              <p className="font-poppins font-semibold text-[16px] sm:text-[20px] md:text-[24px] leading-[160%] text-[#192B1A]">
                our team will contact you once you submit your order
              </p>
            </div>
          </div>
          
          <div className="w-[200px] sm:w-[250px] md:w-[300px] h-[200px] sm:h-[250px] md:h-[300px] relative">
            <Image
              src="/images/XBXBG 4.png"
              alt="XBX Background"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
