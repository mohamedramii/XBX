'use client';

import React from 'react';
import Image from 'next/image';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const RequestService = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const service = searchParams.get('service');

  const dummyImages = [
    '/images/all-services-imgs.svg',
    '/images/all-services-imgs.svg',
    '/images/all-services-imgs.svg',
    '/images/all-services-imgs.svg',
  ];

  return (
    <main className="w-full min-h-screen bg-white dark:bg-[#0e1b0f]  px-4 sm:px-8 lg:px-[122px] py-10 sm:py-16">
      <div className="max-w-[1196px] mx-auto flex flex-col items-center gap-8 sm:gap-[71px]">
        {/* Main Content Container */}
        <div className="w-full flex flex-col items-start gap-6 sm:gap-[56px]">
          {/* Content Wrapper */}
          <div className="w-full flex flex-col items-start gap-8 sm:gap-[95px]">
            {/* Service Details Section */}
            <div className="w-full flex flex-col items-start gap-6 sm:gap-[71px]">
              {/* Service Title and Images */}
              <div className="w-full flex flex-col items-center gap-6 sm:gap-[72px]">
                {/* Service Title */}
                <h1 className="w-full text-center font-poppins text-2xl sm:text-[32px] font-semibold leading-[160%] text-[#3CB82E]">
                  {service}
                </h1>

                {/* Images Grid */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-[48px]">
                  {dummyImages.map((img, index) => (
                    <div key={index} className="w-full h-[300px] sm:h-[394px] relative">
                      <Image
                        src={img}
                        alt={`Service image ${index + 1}`}
                        fill
                        className="rounded-[16px] object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Description Section */}
              <div className="w-full lg:w-[683px] flex flex-col items-start gap-4 sm:gap-[14px]">
                <h2 className="font-poppins font-semibold text-lg sm:text-[22px] leading-[160%] text-[#717171] dark:text-[#0fcd1c]">
                  description
                </h2>
                <p className="font-poppins font-semibold text-base sm:text-[20px] leading-[160%] text-[#192B1A] dark:text-[#fbfbfb]">
                  It is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout. The point of using Lorem Ipsum is
                  that it has a more-or-less normal distribution of letters
                </p>
              </div>

              {/* Service Details Grid */}
              <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-8">
                {/* Working Hours */}
                <div className="flex flex-col items-start gap-2 sm:gap-[8px]">
                  <span className="font-poppins font-semibold text-lg sm:text-[22px] leading-[160%] text-[#717171] dark:text-[#0fcd1c]">
                    Working Hours
                  </span>
                  <span className="font-poppins font-semibold text-base sm:text-[20px] leading-[160%] text-[#192B1A] dark:text-[#fbfbfb]">
                    20 - 25 hours
                  </span>
                </div>

                {/* Price Range */}
                <div className="flex flex-col items-start gap-2 sm:gap-[8px]">
                  <span className="font-poppins font-semibold text-lg sm:text-[22px] leading-[160%] text-[#717171] dark:text-[#0fcd1c]">
                    Price rang
                  </span>
                  <span className="font-poppins font-semibold text-base sm:text-[20px] leading-[160%] text-[#192B1A] dark:text-[#fbfbfb]">
                    1000$ - 1500$
                  </span>
                </div>

                {/* Category */}
                <div className="flex flex-col items-start gap-2 sm:gap-[8px]">
                  <span className="font-poppins font-semibold text-lg sm:text-[22px] leading-[160%] text-[#717171] dark:text-[#0fcd1c]">
                    Category
                  </span>
                  <span className="font-poppins font-semibold text-base sm:text-[20px] leading-[160%] text-[#192B1A] dark:text-[#fbfbfb]">
                    {category}
                  </span>
                </div>
              </div>
            </div>

            {/* Request Button */}
            <button className="w-full sm:w-[321px] h-[67px] flex justify-center items-center px-4 sm:px-[16px] py-[16px] gap-[8px] border-2 border-[#192B1A] dark:border-[#0fcd1c] rounded-[16px] mx-auto">
              <span className="font-poppins font-bold text-lg sm:text-[22px] leading-[160%] text-[#192B1A] dark:text-[#0fcd1c]  text-center">
                Request your service now
              </span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default function RequestServicePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RequestService />
    </Suspense>
  );
}
