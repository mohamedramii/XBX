'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const InvestmentDetails = () => {
  const router = useRouter();

  return (
    <main className="w-full min-h-screen bg-white dark:bg-[#0e1b0f] px-4 sm:px-8 lg:px-[122px] py-10 sm:py-16">
      <div className="max-w-[1167px] mx-auto flex flex-col items-start gap-8 sm:gap-[41px]">
        {/* Main Content Container */}
        <div className="w-full flex flex-col items-start gap-8 sm:gap-[73px] pb-10 border-b border-[#B9B9B9]">
          {/* Title and Description Section */}
          <div className="w-full flex flex-col items-center gap-6 sm:gap-[35px]">
            <h1 className="font-poppins font-semibold text-2xl sm:text-[32px] leading-[160%] text-[#3CB82E] text-center capitalize">
              hotel
            </h1>

            <div className="w-full flex flex-col lg:flex-row items-start gap-8 sm:gap-[155px]">
              <div className="w-full lg:w-[597px] flex flex-col gap-4 sm:gap-[16px]">
                <span className="font-poppins font-semibold text-xl sm:text-[24px] leading-[160%] text-[#717171] dark:text-[#0fcd1c]">
                  description
                </span>
                <p className="font-poppins font-semibold text-base sm:text-[20px] leading-[160%] text-[#192B1A] dark:text-[#fbfbfb]">
                  It is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout. The point of using Lorem Ipsum is
                  that it has a more-or-less normal distribution of letters
                </p>
              </div>

              <div className="w-full lg:w-[404px] h-[300px] sm:h-[360px] relative bg-[#F8F8F8] rounded-[24px]">
                <img
                  src="/images/invest-opportunities-img.svg"
                  alt="Investment opportunity"
                  className="w-full h-full rounded-[24px] object-contain"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>
            </div>
          </div>

          {/* Investment Details Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-[121px]">
            {/* Left Column */}
            <div className="flex flex-col gap-6 sm:gap-[37px]">
              <div className="flex flex-col gap-2 sm:gap-[8px]">
                <span className="font-poppins font-semibold text-lg sm:text-[22px] leading-[160%] text-[#717171] dark:text-[#0fcd1c]">
                  Number of Shares Available for Investment
                </span>
                <span className="font-poppins font-semibold text-base sm:text-[20px] leading-[160%] text-[#192B1A] dark:text-[#fbfbfb]">
                  100 Shares
                </span>
              </div>

              <div className="flex flex-col gap-2 sm:gap-[8px]">
                <span className="font-poppins font-semibold text-lg sm:text-[22px] leading-[160%] text-[#717171] dark:text-[#0fcd1c]">
                  The Minimum Number of Shares That Can Be Purchased
                </span>
                <span className="font-poppins font-semibold text-base sm:text-[20px] leading-[160%] text-[#192B1A] dark:text-[#fbfbfb]">
                  10 Shares
                </span>
              </div>

              <div className="flex flex-col gap-2 sm:gap-[8px]">
                <span className="font-poppins font-semibold text-lg sm:text-[22px] leading-[160%] text-[#717171] dark:text-[#0fcd1c]">
                  Price of Shares Available for Investment
                </span>
                <span className="font-poppins font-semibold text-base sm:text-[20px] leading-[160%] text-[#192B1A] dark:text-[#fbfbfb]">
                  10000 $
                </span>
              </div>

              <div className="flex flex-col gap-2 sm:gap-[8px]">
                <span className="font-poppins font-semibold text-lg sm:text-[22px] leading-[160%] text-[#717171] dark:text-[#0fcd1c]">
                  Number of Current Investors
                </span>
                <span className="font-poppins font-semibold text-base sm:text-[20px] leading-[160%] text-[#192B1A] dark:text-[#fbfbfb]">
                  18 Investor
                </span>
              </div>

              <div className="flex flex-col gap-2 sm:gap-[8px]">
                <span className="font-poppins font-semibold text-lg sm:text-[22px] leading-[160%] text-[#717171] dark:text-[#0fcd1c]">
                  Percentage of project completion
                </span>
                <span className="font-poppins font-semibold text-base sm:text-[20px] leading-[160%] text-[#192B1A] dark:text-[#fbfbfb]">
                  20%
                </span>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6 sm:gap-[46px]">
              <div className="flex flex-col gap-2 sm:gap-[8px]">
                <span className="font-poppins font-semibold text-lg sm:text-[22px] leading-[160%] text-[#717171] dark:text-[#0fcd1c]">
                  Share Price
                </span>
                <span className="font-poppins font-semibold text-base sm:text-[20px] leading-[160%] text-[#192B1A] dark:text-[#fbfbfb]">
                  500 $
                </span>
              </div>

              <div className="flex flex-col gap-2 sm:gap-[8px]">
                <span className="font-poppins font-semibold text-lg sm:text-[22px] leading-[160%] text-[#717171] dark:text-[#0fcd1c]">
                  The maximum Number of Shares That Can Be Purchased
                </span>
                <span className="font-poppins font-semibold text-base sm:text-[20px] leading-[160%] text-[#192B1A] dark:text-[#fbfbfb]">
                  50 Shares
                </span>
              </div>

              <div className="flex flex-col gap-2 sm:gap-[8px]">
                <span className="font-poppins font-semibold text-lg sm:text-[22px] leading-[160%] text-[#717171] dark:text-[#0fcd1c]">
                  Value of the Portion Offered for Investment
                </span>
                <span className="font-poppins font-semibold text-base sm:text-[20px] leading-[160%] text-[#192B1A] dark:text-[#fbfbfb]">
                  50% of the Project Value
                </span>
              </div>

              <div className="flex flex-col gap-2 sm:gap-[8px]">
                <span className="font-poppins font-semibold text-lg sm:text-[22px] leading-[160%] text-[#717171] dark:text-[#0fcd1c]">
                  Number of Shares Remaining for Investment
                </span>
                <span className="font-poppins font-semibold text-base sm:text-[20px] leading-[160%] text-[#192B1A] dark:text-[#fbfbfb]">
                  24 Shares
                </span>
              </div>

              <div className="flex flex-col gap-2 sm:gap-[8px]">
                <span className="font-poppins font-semibold text-lg sm:text-[22px] leading-[160%] text-[#717171] dark:text-[#0fcd1c]">
                  Location
                </span>
                <span className="font-poppins font-semibold text-base sm:text-[20px] leading-[160%] text-[#192B1A] dark:text-[#fbfbfb]">
                  Lorem Ipsum is that it has a more-or-less normal distribution of letters
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Steps Section */}
        <div className="w-full max-w-[1056px] flex flex-col justify-center gap-8 sm:gap-[32px]">
          <div className="flex flex-col gap-6 sm:gap-[24px]">
            <h2 className="font-poppins font-bold text-2xl sm:text-[28px] leading-[160%] text-[#2C3C2D] dark:text-[#0fcd1c]">
              Steps of Investment
            </h2>
            <p className="font-poppins font-semibold text-base sm:text-[20px] leading-[160%] text-black dark:text-[#fbfbfb]">
              Fill out the form and provide accurate information about yourself. Upload a copy of
              your ID card or passport. Once your identity is verified, you can start investing
              directly in any project we offer (There is no need to repeat the steps every time you
              wish to invest)
            </p>
          </div>

          <button
            onClick={() => router.push('/investment/application')}
            className="w-[249px] h-[67px] flex justify-center items-center px-4 py-[16px] gap-[8px] border-2 border-[#0D0D0D] dark:border-[#0fcd1c] rounded-[16px]"
          >
            <span className="font-poppins font-bold text-lg sm:text-[22px] leading-[160%] text-[#192B1A] dark:text-[#0fcd1c] text-center">
              submit Application
            </span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default InvestmentDetails;
