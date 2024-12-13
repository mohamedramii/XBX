'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const AllServices = () => {
  const router = useRouter();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const services = [
    {
      title: 'Mobile App Development',
      description:
        'Crafting intuitive and powerful mobile applications for iOS and Android platforms. Our team specializes in creating seamless user experiences with modern technologies and frameworks.',
      workingHours: '20 - 25 hours',
      category: 'Mobile Development',
      images: [
        '/images/all-services-imgs.svg',
        '/images/all-services-imgs.svg',
        '/images/all-services-imgs.svg',
      ],
    },
    {
      title: 'Web Application Design',
      description:
        'Building responsive and dynamic web applications using cutting-edge technologies. We focus on creating scalable solutions that meet modern business needs.',
      workingHours: '30 - 35 hours',
      category: 'Web Development',
      images: [
        '/images/all-services-imgs.svg',
        '/images/all-services-imgs.svg',
        '/images/all-services-imgs.svg',
      ],
    },
    {
      title: 'UI/UX Design Services',
      description:
        'Creating beautiful and functional user interfaces with a focus on user experience. Our design process ensures both aesthetic appeal and practical usability.',
      workingHours: '15 - 20 hours',
      category: 'Design',
      images: [
        '/images/all-services-imgs.svg',
        '/images/all-services-imgs.svg',
        '/images/all-services-imgs.svg',
      ],
    },
    {
      title: 'AI Integration Services',
      description:
        'Implementing cutting-edge artificial intelligence solutions to enhance your applications. From machine learning to natural language processing, we bring smart features to your projects.',
      workingHours: '40 - 45 hours',
      category: 'AI & ML',
      images: [
        '/images/all-services-imgs.svg',
        '/images/all-services-imgs.svg',
        '/images/all-services-imgs.svg',
      ],
    },
    {
      title: 'Cloud Infrastructure',
      description:
        'Setting up and managing robust cloud infrastructure for your applications. We ensure scalability, security, and optimal performance for your digital solutions.',
      workingHours: '25 - 30 hours',
      category: 'Cloud Services',
      images: [
        '/images/all-services-imgs.svg',
        '/images/all-services-imgs.svg',
        '/images/all-services-imgs.svg',
      ],
    },
  ];

  const categories = [
    'All',
    'Mobile Development',
    'Web Development',
    'Design',
    'AI & ML',
    'Cloud Services',
  ];

  const filteredServices =
    selectedCategory === 'All'
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <main className="relative w-full max-w-[full] mx-auto">
      {/* Hero Section */}
      <div className="relative h-[60vh] sm:h-[70vh] md:h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/all-services-hero-img.svg"
            alt="XBX Services Background"
            fill
            className="object-cover"
          />
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <div className="p-4 sm:p-8 flex flex-col w-full max-w-[976px] h-auto justify-center items-center rounded-xl">
            <h1 className="text-[24px] sm:text-[32px] md:text-[40px] font-bold text-[#2C3C2D] mb-4 sm:mb-6 md:text-nowrap ">
              A Diverse Journey of Creativity and Achievement
            </h1>
            <p className="text-[16px] sm:text-[18px] md:text-[22px] w-full max-w-[885px] text-center text-[#2C3C2D] mb-6 sm:mb-8 font-regular">
              Explore this showcase of diverse projects we have worked on across various fields.
              From creative design to strategic planning and the implementation of unique ideas,
              each project reflects a rich journey of challenges and innovation. Here, you'll find a
              blend of skills and expertise, always aimed at delivering added value and leaving a
              distinctive mark in every domain we engage with.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="flex flex-col items-center py-10 sm:py-16 w-full px-4 sm:px-8">
        {/* Title with Filter */}
        <div className="relative flex justify-center w-full mb-10 sm:mb-16">
          <h2 className="font-poppins font-bold text-[22px] sm:text-[24px] md:text-[28px] text-[#2C3C2D]">
            The Creativity and Diversity Showcase
          </h2>
          <div
            className="absolute left-2 sm:left-9 -top-4 w-[50px] sm:w-[74px] h-[50px] sm:h-[74px] bg-[#FBFBFB] border border-[#11A900] rounded-[16px] flex items-center justify-center cursor-pointer"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Image
              src="/icons/filter-fill.svg"
              alt="Filter"
              width={30}
              height={30}
              className="text-[#11A900]"
            />
          </div>
          {/* Filter Menu */}
          <div
            className={`absolute left-[60px] sm:left-[100px] -top-4 bg-white border border-[#11A900] rounded-[16px] transition-all duration-300 overflow-hidden ${isFilterOpen ? 'w-[200px] sm:w-[300px] opacity-100' : 'w-0 opacity-0 pointer-events-none'}`}
          >
            <div className="p-4">
              <h3 className="font-poppins font-semibold text-[16px] sm:text-[18px] text-[#2C3C2D] mb-4">
                Filter by Category
              </h3>
              <div className="flex flex-col gap-2">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer p-2 rounded-lg transition-colors text-[14px] sm:text-[16px] ${selectedCategory === category ? 'bg-[#11A900] text-white' : 'hover:bg-[#F4F4F4] text-[#2C3C2D]'}`}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsFilterOpen(false);
                    }}
                  >
                    {category}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="flex flex-col gap-8 w-full max-w-[1440px] px-2 sm:px-8">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 sm:py-[42px] border-b border-[#B9B9B9] gap-8 sm:gap-0"
            >
              <div className="flex flex-col gap-6 sm:gap-[39px] w-full max-w-[600px]">
                <h3 className="font-poppins font-semibold text-[22px] sm:text-[24px] md:text-[28px] text-[#3CB82E]">
                  {service.title}
                </h3>
                <div className="flex flex-col gap-2">
                  <span className="font-poppins font-semibold text-[18px] sm:text-[20px] md:text-[22px] text-[#717171]">
                    description
                  </span>
                  <p className="font-poppins font-semibold text-[16px] sm:text-[18px] md:text-[20px] text-[#192B1A]">
                    {service.description}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-poppins font-semibold text-[18px] sm:text-[20px] md:text-[22px] text-[#717171]">
                    Working Hours
                  </span>
                  <p className="font-poppins font-semibold text-[16px] sm:text-[18px] md:text-[20px] text-[#192B1A]">
                    {service.workingHours}
                  </p>
                </div>

                <div className="w-full flex justify-between">
                  <div className="flex flex-col gap-2">
                    <span className="font-poppins font-semibold text-[18px] sm:text-[20px] md:text-[22px] text-[#717171]">
                      Category
                    </span>
                    <p className="font-poppins font-semibold text-[16px] sm:text-[18px] md:text-[20px] text-[#192B1A]">
                      {service.category}
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      router.push(
                        `/services/request?category=${encodeURIComponent(service.category)}&service=${encodeURIComponent(service.title)}`
                      )
                    }
                    className="flex flex-row justify-center items-center p-3 sm:p-[12px_14px] gap-[8px] w-[150px] sm:w-[160px] border-2 border-[#192B1A] rounded-[16px]"
                  >
                    <span className="font-poppins font-bold text-[16px] sm:text-[18px] md:text-[20px] leading-[160%] text-[#0D0D0D]">
                      Start Service
                    </span>
                  </button>
                </div>
              </div>
              <div className="relative w-full max-w-[540px] h-auto flex justify-center md:justify-end">
                <div className="relative w-[263px] h-[394px] mr-auto">
                  <Image
                    src={service.images[0]}
                    alt={service.title}
                    fill
                    className="rounded-[16px] object-cover"
                  />
                </div>
                <div className="absolute left-[150px] sm:left-[279px] top-[62px] w-[143px] h-[270px] hidden sm:block">
                  <Image
                    src={service.images[1]}
                    alt={service.title}
                    fill
                    className="rounded-[16px] object-cover"
                  />
                </div>
                <div className="absolute left-[250px] sm:left-[438px] top-[100px] w-[102px] h-[193px] hidden sm:block">
                  <Image
                    src={service.images[2]}
                    alt={service.title}
                    fill
                    className="rounded-[16px] object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center p-0 gap-[32px] w-full max-w-[631px] h-auto pt-10 px-4">
          {/* Request Service Button */}
          <div className="box-border flex flex-row justify-center items-center p-[16px] gap-[8px] w-[160px] sm:w-[200px] md:w-[226px] h-[50px] sm:h-[67px] border-2 border-[#2C3C2D] rounded-[16px]">
            <div className="font-poppins font-bold text-[16px] sm:text-[18px] md:text-[22px] leading-[160%] text-[#0D0D0D] flex-none">
              REQUEST SERVICE
            </div>
          </div>

          {/* Pagination Container */}
          <div className="flex flex-row items-center p-0 gap-[20px] sm:gap-[30px] w-full max-w-[631px] h-[61px] self-stretch justify-center">
            {/* Numbers Container */}
            <div className="flex flex-row items-center p-0 gap-[10px] sm:gap-[16px] w-full max-w-[567px] h-[61px] flex-wrap justify-center">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num, index) => (
                <div
                  key={num}
                  className={`relative flex items-center justify-center ${
                    index === 0
                      ? 'w-[50px] h-[50px] sm:w-[70px] sm:h-[61px] bg-[#2C3C2D]'
                      : 'w-[40px] h-[40px] sm:w-[55px] sm:h-[48px] bg-[#FBFBFB] border border-[#2C3C2D]'
                  } rounded-[16px]`}
                >
                  <span
                    className={`font-poppins font-semibold leading-[160%] ${
                      index === 0
                        ? 'text-[20px] sm:text-[30px] text-[#FBFBFB]'
                        : 'text-[16px] sm:text-[24px] text-[#2C3C2D]'
                    }`}
                  >
                    {num}
                  </span>
                </div>
              ))}
            </div>

            {/* Next Button */}
            <div className="flex flex-col justify-center items-center p-[8px] gap-[10px] w-[34px] h-[34px] bg-[rgba(136,209,128,0.6)] border border-black rounded-[17px] cursor-pointer">
              <Image
                src="/icons/back-arrow.svg"
                alt="Next"
                width={16}
                height={16}
                className="transform rotate-180"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AllServices;
