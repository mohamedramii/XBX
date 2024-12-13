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
    // Add more services as needed
  ];

  return (
    <div className="relative flex flex-col items-end gap-6 sm:gap-[20px] md:gap-[30px] lg:gap-[39px] w-full max-w-[1131px]    ">
      <div className="flex flex-col md:flex-row items-start md:items-end gap-4 sm:gap-[20px] md:gap-[100px] lg:gap-[249px] w-full">
        {/* Header Section */}
        <div className="flex flex-col items-start gap-4 sm:gap-[20px] md:gap-[27px] w-full max-w-[715px]">
          {/* Title */}
          <div className="flex flex-row items-center gap-2 sm:gap-[10px]">
            <div className="w-[5px] sm:w-[10px] h-[30px] sm:h-[50px] bg-[#11A900]" />
            <h1 className="text-[20px] sm:text-[24px] md:text-[30px] font-semibold font-poppins text-[#061404]">
              Services
            </h1>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-[10px] w-full">
            {[
              { key: 'all', label: 'All Services' },
              { key: 'uploaded', label: 'Uploaded By You' },
              { key: 'others', label: 'Uploaded By Others' },
              { key: 'orders', label: 'Orders' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelectedTab(tab.key)}
                className={`px-3 sm:px-4 py-0.5 rounded-[20px] text-[14px] sm:text-[16px] md:text-[20px] ${
                  selectedTab === tab.key
                    ? 'bg-[rgba(17,169,0,0.3)] text-[#11A900] font-bold'
                    : 'bg-[rgba(224,224,224,0.6)] text-[#787777] font-medium'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Add New Button */}
        <Link
          href="/dashboard/services/add"
          className="flex justify-center items-center gap-2 sm:gap-[10px] w-[100px] sm:w-[130px] md:w-[160px] h-[35px] sm:h-[40px] bg-[#11A900] rounded-[20px] text-white"
        >
          <span className="text-[14px] sm:text-[16px] md:text-[20px] font-semibold">
            Add New
          </span>
          <div className="w-[8px] sm:w-[10px] md:w-[14px] h-[8px] sm:h-[10px] md:h-[14px] border-2 sm:border-4 border-white rounded-full" />
        </Link>
      </div>

      {/* Services List */}
      <div className="flex flex-col gap-6 sm:gap-[20px] md:gap-[30px] w-full">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative w-full bg-white shadow-[0px_5px_10px_rgba(0,0,0,0.1)] flex flex-col sm:flex-row"
          >
            {/* Service Image */}
            <div className="relative w-full sm:w-[200px] md:w-[250px] lg:w-[324px] h-[180px] sm:h-[240px] md:h-[288px] flex-shrink-0">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover shadow-[0px_5px_10px_rgba(0,0,0,0.25)] rounded-l-[8px]"
              />
            </div>

            {/* Service Content */}
            <div className="p-4 sm:p-6 md:p-8 flex flex-col gap-2 sm:gap-[10px]">
              <h2 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-[#061404]">
                {service.title}
              </h2>
              <p className="text-[12px] sm:text-[14px] leading-[18px] sm:leading-[21px] text-[#787777]">
                {service.description}
              </p>
              <p className="text-[12px] sm:text-[14px] font-semibold text-[#11A900]">
                {`${service.status} | ${service.price}$ | Purchases(${service.purchases}) | ${service.category}`}
              </p>
              <p className="text-[12px] sm:text-[14px] font-semibold text-[#061404]">
                {`UploadedBy : ${service.uploadedBy} | UploadDate : ${service.uploadDate}`}
              </p>
            </div>

            {/* View Button */}
            <button className="absolute right-2 sm:right-[15px] top-2 sm:top-[15px] text-[14px] sm:text-[16px] md:text-[20px] font-semibold text-[#11A900]">
              View
            </button>

            {/* Edit/Delete */}
            <div className="absolute flex flex-row items-center gap-2 sm:gap-[15px] right-2 sm:right-[20px] bottom-2 sm:bottom-[15px]">
              <button className="text-[12px] sm:text-[15px] font-semibold text-[#787777]">
                Edit
              </button>
              <button className="text-[12px] sm:text-[15px] font-semibold text-[#FF0101]">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
