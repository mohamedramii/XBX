'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServicesPage = () => {
  const [selectedTab, setSelectedTab] = useState('all');

  const services = [
    {
      id: 1,
      title: 'Mern Stack Development',
      description:
        'The MERN stack is a powerful framework for building modern web applications, combining MongoDB, Express.js, React.js, and Node.js. MongoDB serves as a scalable NoSQL database, enabling flexible data storage, while Express.js simplifies backend logic and API development. React.js powers dynamic and interactive user interfaces through its component-based architecture, enhancing modularity and reusability.',
      image: '/images/laptopproduct.png',
      status: 'Available',
      price: 299,
      purchases: 12,
      category: 'programming',
      uploadedBy: '@corozan09',
      uploadDate: '12 Oct 2024',
    },
    {
      id: 2,
      title: 'Mern Stack Development',
      description:
        'The MERN stack is a powerful framework for building modern web applications, combining MongoDB, Express.js, React.js, and Node.js. MongoDB serves as a scalable NoSQL database, enabling flexible data storage, while Express.js simplifies backend logic and API development. React.js powers dynamic and interactive user interfaces through its component-based architecture, enhancing modularity and reusability.',
      image: '/images/laptopproduct.png',
      status: 'Available',
      price: 299,
      purchases: 12,
      category: 'programming',
      uploadedBy: '@corozan09',
      uploadDate: '12 Oct 2024',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F4F4F4] p-4 md:p-8">
      <div className="max-w-[1131px] mx-auto flex flex-col gap-6 md:gap-8">
        {/* Header Section */}
        <div className="flex flex-col gap-6 md:gap-7">
          {/* Title */}
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 md:w-[10px] h-[50px] bg-[#11A900]" />
            <h1 className="font-poppins font-semibold text-2xl md:text-[30px] text-[#061404]">
              Services
            </h1>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => setSelectedTab('all')}
              className={`h-10 px-4 flex items-center justify-center rounded-[20px] transition-colors ${
                selectedTab === 'all'
                  ? 'bg-[rgba(17,169,0,0.3)] text-[#11A900] font-bold'
                  : 'bg-[rgba(224,224,224,0.6)] text-[#787777] font-medium'
              }`}
            >
              <span className="text-base md:text-xl font-inter">All Services</span>
            </button>
            <button
              onClick={() => setSelectedTab('orders')}
              className={`h-10 px-4 flex items-center justify-center rounded-[20px] transition-colors ${
                selectedTab === 'orders'
                  ? 'bg-[rgba(17,169,0,0.3)] text-[#11A900] font-bold'
                  : 'bg-[rgba(224,224,224,0.6)] text-[#787777] font-medium'
              }`}
            >
              <span className="text-base md:text-xl font-poppins">Orders</span>
            </button>
          </div>
        </div>

        {/* Services List */}
        <div className="flex flex-col gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative bg-white shadow-[0px_5px_10px_rgba(0,0,0,0.1)] rounded-lg overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Service Image */}
                <div className="w-full md:w-[324px] h-[200px] md:h-[288px] relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover filter drop-shadow-[0px_5px_10px_rgba(0,0,0,0.25)]"
                  />
                </div>

                {/* Service Content */}
                <div className="flex flex-col gap-2.5 p-4 md:p-10 flex-1">
                  <h2 className="font-poppins font-semibold text-lg md:text-xl text-[#061404]">
                    {service.title}
                  </h2>
                  <p className="font-poppins text-sm md:text-base text-[#787777] line-clamp-4 md:line-clamp-5">
                    {service.description}
                  </p>
                  <p className="font-poppins font-semibold text-xs md:text-sm text-[#11A900]">
                    {`${service.status} | ${service.price}$ | Purchases(${service.purchases}) | ${service.category}`}
                  </p>
                  <p className="font-poppins font-semibold text-xs md:text-sm text-[#061404]">
                    {`UploadedBy : ${service.uploadedBy} | UploadDate : ${service.uploadDate}`}
                  </p>
                </div>
              </div>

              {/* View Button */}
              <button className="absolute top-4 right-4 font-poppins font-semibold text-lg md:text-xl text-[#11A900]">
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
