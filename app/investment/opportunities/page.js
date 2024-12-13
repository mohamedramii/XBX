'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const InvestmentOpportunities = () => {
  const router = useRouter();
  const investmentProjects = [
    {
      title: 'Hotel',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
      image: '/images/invest-opportunities-img.svg',
      details: {
        availableShares: '100 Shares',
        minShares: '10 Shares',
        maxShares: '50 Shares',
        sharePrice: '500 $',
        totalPrice: '10000 $',
        currentInvestors: '18 Investor',
        remainingShares: '24 Shares',
        projectValue: '50% of the Project Value'
      }
    },
    // Add more projects as needed
  ];

  return (
    <main className="flex flex-col items-start w-full min-h-screen">
      {/* Title Section */}
      <div className="w-full mt-[64px] mb-[69px]">
        <h1 className="font-poppins font-bold text-[28px] leading-[160%] text-center text-[#2C3C2D]">
          Explore Investment Opportunities
        </h1>
      </div>

      {/* Projects List */}
      <div className="flex flex-col items-start w-full max-w-[1441px]">
        {investmentProjects.map((project, index) => (
          <div 
            key={index}
            className="w-full border-b border-[#B9B9B9] px-[32px] md:px-[145px] pb-[41px] mb-[66px]"
          >
            {/* Project Header */}
            <div className="flex flex-col lg:flex-row items-center gap-[60px] md:gap-[148px] w-full max-w-[1151px] mx-auto">
              <div className="flex flex-col items-start gap-6 w-full lg:w-[597px]">
                <h2 className="font-poppins font-semibold text-[28px] leading-[160%] text-[#3CB82E] capitalize">
                  {project.title}
                </h2>
                <div className="flex flex-col gap-2">
                  <span className="font-poppins font-semibold text-[22px] leading-[160%] text-[#717171]">
                    description
                  </span>
                  <p className="font-poppins font-semibold text-[20px] leading-[160%] text-[#192B1A]">
                    {project.description}
                  </p>
                </div>
              </div>
              
              <div className="relative w-full lg:w-[404px] h-[360px] rounded-[24px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="flex flex-col lg:flex-row justify-between items-start mt-[43px] gap-[40px] w-full max-w-[1151px] mx-auto">
              {/* Left Column */}
              <div className="flex flex-col gap-10 w-full lg:w-[524px]">
                <div className="flex flex-col gap-2">
                  <span className="font-poppins font-semibold text-[22px] leading-[160%] text-[#717171]">
                    Number of Shares Available for Investment
                  </span>
                  <span className="font-poppins font-semibold text-[20px] leading-[160%] text-[#192B1A]">
                    {project.details.availableShares}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-poppins font-semibold text-[22px] leading-[160%] text-[#717171]">
                    The Minimum Number of Shares That Can Be Purchased
                  </span>
                  <span className="font-poppins font-semibold text-[20px] leading-[160%] text-[#192B1A]">
                    {project.details.minShares}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-poppins font-semibold text-[22px] leading-[160%] text-[#717171]">
                    Price of Shares Available for Investment
                  </span>
                  <span className="font-poppins font-semibold text-[20px] leading-[160%] text-[#192B1A]">
                    {project.details.totalPrice}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-poppins font-semibold text-[22px] leading-[160%] text-[#717171]">
                    Number of Current Investors
                  </span>
                  <span className="font-poppins font-semibold text-[20px] leading-[160%] text-[#192B1A]">
                    {project.details.currentInvestors}
                  </span>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-[52px] w-full lg:w-[516px]">
                <div className="flex flex-col gap-2">
                  <span className="font-poppins font-semibold text-[22px] leading-[160%] text-[#717171]">
                    Share Price
                  </span>
                  <span className="font-poppins font-semibold text-[20px] leading-[160%] text-[#192B1A]">
                    {project.details.sharePrice}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-poppins font-semibold text-[22px] leading-[160%] text-[#717171]">
                    The Maximum Number of Shares That Can Be Purchased
                  </span>
                  <span className="font-poppins font-semibold text-[20px] leading-[160%] text-[#192B1A]">
                    {project.details.maxShares}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-poppins font-semibold text-[22px] leading-[160%] text-[#717171]">
                    Value of the Portion Offered for Investment
                  </span>
                  <span className="font-poppins font-semibold text-[20px] leading-[160%] text-[#192B1A]">
                    {project.details.projectValue}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-poppins font-semibold text-[22px] leading-[160%] text-[#717171]">
                    Number of Shares Remaining for Investment
                  </span>
                  <span className="font-poppins font-semibold text-[20px] leading-[160%] text-[#192B1A]">
                    {project.details.remainingShares}
                  </span>
                </div>

              </div>
            </div>

            <div className='w-full flex justify-center mt-8'>
              <button 
                onClick={() => router.push(`/investment/${index + 1}`)}
                className="flex justify-center items-center w-[157px] h-[67px] bg-[#2C3C2D] border-2 border-[#2C3C2D] rounded-[16px]"
              >
                <span className="font-poppins font-bold text-[22px] leading-[160%] text-[#FBFBFB]">
                  Invest Now
                </span>
              </button>
            </div>
            
          </div>
        ))}
      </div>
    </main>
  );
};

export default InvestmentOpportunities;
