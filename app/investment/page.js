'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const InvestmentPage = () => {
  const router = useRouter();

  const handleExploreClick = () => {
    router.push('/investment/opportunities');
  };

  return (
    <main className="w-full min-h-screen dark:bg-[#0e1b0f]
">
      {/* Hero Section from Products Page */}
      <section
        className="relative h-[700px] w-full bg-[url('/images/investment-bg.svg')] bg-cover bg-center flex items-center justify-center 
      px-4 sm:px-8 md:px-12 lg:px-0"
      >
        <div className="flex flex-col items-center gap-[43px] max-w-[885px] w-full px-4 text-center">
          <div className="flex flex-col items-center gap-8 w-full">
            <h1 className="font-poppins font-bold text-[32px] sm:text-[36px] md:text-[40px] leading-[160%] text-[#FBFBFB] w-full">
              Invest in the Future, Today{' '}
            </h1>
            <p className="font-poppins font-semibold text-[18px] sm:text-[20px] md:text-[22px] leading-[160%] text-[#FBFBFB] w-full">
              With our innovative projects, we provide you with unique and reliable investment
              opportunities to achieve your financial dreams. Join hundreds of investors who have
              placed their trust in us{' '}
            </p>
          </div>

          <button
            onClick={handleExploreClick}
            className="flex justify-center items-center w-[180px] sm:w-[212px] md:w-[212px] h-[50px] sm:h-[60px] md:h-[67px] border-2 border-[#FBFBFB] rounded-2xl"
          >
            <span className="font-poppins font-bold text-[18px] sm:text-[20px] md:text-[22px] leading-[160%] text-white ">
              Explore Projects
            </span>
          </button>
        </div>
      </section>

      {/* Investment Content Section */}
      <div className="relative w-full px-4 lg:px-[104px] mt-[64px]">
        <div className="flex flex-col gap-[83px] max-w-[1237px] mx-auto">
          {/* First Row */}
          <div className="flex flex-col lg:flex-row items-center gap-[56px] w-full max-w-[1228px]">
            <div className="flex flex-col items-start gap-[40px] w-full lg:w-[693px]">
              <div className="flex flex-col items-start gap-[16px] w-full">
                <h2 className="font-poppins font-bold text-[40px] leading-[160%] text-[#2C3C2D] dark:text-[#0fcd1c]  w-full">
                  Why Invest With Us
                </h2>
                <p className="font-poppins font-medium text-[22px] leading-[190%] text-[#2C3C2D] dark:text-[#fbfbfb]">
                  Diverse Opportunities: We offer innovative projects in promising sectors like
                  technology, energy, and real estate.
                  <br />
                  <br />
                  Guaranteed Returns: We aim to provide exceptional investment returns based on
                  thorough studies.
                  <br />
                  <br />
                  Expert Team: Our team has years of experience in managing investments and
                  achieving success.
                  <br />
                  <br />
                  Full Transparency: We provide you with all the information you need to make
                  informed investment decisions.
                  <br />
                  <br />
                  Continuous Support: Our support team is always available to assist you whenever
                  needed.
                </p>
              </div>
              <button
                onClick={handleExploreClick}
                className="flex justify-center items-center px-4 py-[16px] gap-2 w-[335px] h-[67px]  border-2 border-[#2C3C2D] dark:border-[#0fcd1c] rounded-[16px]"
              >
                <span className="font-poppins font-bold text-[22px] leading-[160%] text-white dark:text-[#0fcd1c]">
                  Start Your Investment Now
                </span>
              </button>
            </div>
            <div className="relative w-full lg:w-[479px] h-[700px] rounded-[24px] overflow-hidden">
              <div className="absolute inset-0 bg-[rgba(44,60,45,0.2)]" />
              <Image
                src="/images/investment-img-1.svg"
                alt="Employee working in a marketing setting"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col lg:flex-row items-center gap-[80px] w-full">
            <div className="relative w-full lg:w-[442px] h-[663px] rounded-[24px] overflow-hidden">
              <div className="absolute inset-0 bg-[rgba(44,60,45,0.2)]" />
              <Image
                src="/images/investment-img-2.svg"
                alt="People in the office"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-start gap-[40px] w-full lg:w-[715px]">
              <div className="flex flex-col items-start gap-[16px] w-full">
                <h2 className="font-poppins font-bold text-[40px] leading-[160%] text-[#2C3C2D] dark:text-[#0fcd1c] w-full">
                  Invest in Fields That Inspire You
                </h2>
                <p className="font-poppins font-medium text-[22px] leading-[190%] text-[#2C3C2D] dark:text-[#fbfbfb]">
                  Technology: Innovative projects in artificial intelligence and future
                  technologies.
                  <br />
                  <br />
                  Real Estate: Investments in strategic areas that ensure stable returns.
                  <br />
                  <br />
                  Renewable Energy: Supporting sustainable projects that deliver economic and
                  environmental benefits.
                  <br />
                  <br />
                  Healthcare: Investment solutions in a rapidly growing global sector.
                  <br />
                  <br />
                  Small and Medium Enterprises (SMEs): Supporting promising entrepreneurial ideas
                  with minimal risks.
                </p>
              </div>
              <button
                onClick={handleExploreClick}
                className="flex justify-center items-center px-4 py-[16px] gap-2 w-[212px] h-[67px] border-2 border-[#2C3C2D] dark:border-[#0fcd1c] rounded-[16px]"
              >
                <span className="font-poppins font-bold text-[22px] leading-[160%] text-[#FBFBFB] dark:text-[#0fcd1c]">
                  Explore Projects
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default InvestmentPage;
