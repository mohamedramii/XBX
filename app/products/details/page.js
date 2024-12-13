'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const ProductDetails = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNext = () => {
    if (currentPage < 2) {
      handlePageChange(currentPage + 1);
    }
  };

  const handleBack = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const headerSection = (
    <div className="flex flex-col lg:flex-row items-start px-4 sm:px-8 lg:px-0 gap-8 lg:gap-[255px] w-full max-w-[1240px] mx-auto mt-[60px] sm:mt-[80px] md:mt-[120px]">
      <div className="flex flex-col items-start gap-4 max-w-full lg:max-w-[685px] h-auto">
        <h1 className="font-poppins font-bold text-2xl sm:text-3xl md:text-[40px] leading-[160%] text-[#192B1A]">
          Targeted Industries for Financing Support
        </h1>
        <p className="font-poppins font-semibold text-base sm:text-lg md:text-[24px] leading-[160%] text-[#192B1A]">
          we are dedicated to supporting and providing products for these industries. our goal is to
          offer the necessary resources and financing to help drive growth and success in these
          sectors
        </p>
      </div>
      <div className="hidden lg:block">
        <Image src="/images/XBXBG 4.png" alt="XBX Background" width={300} height={300} />
      </div>
    </div>
  );

  const pagination = (
    <div className="flex flex-col items-center gap-8 sm:gap-[33px] w-[124px] h-auto">
      <div className="flex flex-row items-center gap-6 w-[124px] h-[50px]">
        <button
          onClick={handleBack}
          className={`w-[50px] h-[50px] rounded-full border border-black ${currentPage === 1 ? 'bg-[#B6E2B1]' : 'bg-[rgba(136,209,128,0.6)]'} flex items-center justify-center`}
        >
          {currentPage === 2 && (
            <Image src="/icons/back-arrow.svg" alt="Previous page" width={24} height={24} />
          )}
        </button>
        <button
          onClick={handleNext}
          className={`w-[50px] h-[50px] rounded-full border border-black ${currentPage === 2 ? 'bg-[#B6E2B1]' : 'bg-[rgba(136,209,128,0.6)]'} flex items-center justify-center`}
        >
          {currentPage === 1 && (
            <Image
              src="/icons/back-arrow.svg"
              alt="Next page"
              width={24}
              height={24}
              className="rotate-180"
            />
          )}
        </button>
      </div>
      <div className="flex flex-col items-center gap-4">
        <p className="font-poppins font-semibold text-base sm:text-lg md:text-[20px] leading-[160%] text-black">
          page {currentPage} of 2
        </p>
        <div className="flex flex-row items-center gap-2">
          <div
            className={`w-[10px] sm:w-[17.33px] h-2 sm:h-4 rounded-full ${currentPage === 1 ? 'bg-[#192B1A]' : 'bg-[#4EAD43]'}`}
          />
          <div
            className={`w-[8px] sm:w-[13px] h-[6px] sm:h-3 rounded-full ${currentPage === 2 ? 'bg-[#192B1A]' : 'bg-[#4EAD43]'}`}
          />
        </div>
      </div>
    </div>
  );

  const page1Categories = [
    {
      id: 1,
      title: 'Jewelry and Accessories',
      items: [
        'Luxury Jewelry: Rings, bracelets, necklaces.',
        'Watches: Traditional, smart, sports watches',
        'Accessories: Sunglasses, decorative pins, cufflinks.',
      ],
      image: '/images/jewelry.png',
    },
    {
      id: 2,
      title: 'Health and Beauty',
      items: [
        'Skin Care Products: Moisturizing creams, sunscreens, anti-aging products.',
        'Hair Care Products: Shampoo, balm, oils, hair treatment products.',
        'Health Products: Nutritional supplements, vitamins, home medical equipment.',
        "Perfumes: Men's perfumes, women's perfumes, body sprays.",
        'Makeup: Lipstick, foundation, mascara, eyeshadow.',
      ],
      image: '/images/beauty.png',
    },
    {
      id: 3,
      title: 'Vehicles and Transportation',
      items: [
        'Cars: Sports cars, luxury vehicles',
        'Motorcycles: Racing and classic bikes',
        'Accessories: Tires, audio systems, and navigation tools.',
      ],
      image: '/images/cars.png',
    },
    {
      id: 4,
      title: 'Food and Beverages',
      items: [
        'Foods: Fast food, packaged meals.',
        'Beverages: Juices, tea, coffee, soft drinks, alcoholic beverages.',
        'Dietary Products: Health supplements and nutrition aids',
      ],
      image: '/images/nutrition.png',
    },
    {
      id: 5,
      title: 'Industrial and Technical Products',
      items: [
        'Industrial Equipment: Tools, machinery, safety equipment',
        'Motorcycles: Racing and classic bikes',
        'Technical Devices: Measuring tools, detectors, and precision instruments',
      ],
      image: '/images/industrial.png',
    },
    {
      id: 6,
      title: 'Games and Hobbies',
      items: [
        "Children's Toys: Dolls, electronic toys, video games.",
        'Hobby Tools: Art supplies, drones, model kits.',
      ],
      image: '/images/games.png',
    },
  ];

  const page2Categories = [
    {
      id: 7,
      title: 'Devices and Technology',
      items: [
        'Electronics: Smartphones, laptops, tablets.',
        'Home Appliances: Refrigerators, washing machines, microwaves.',
        'Entertainment Devices: TVs, sound systems, cameras.',
      ],
      image: '/images/tech.png',
    },
    {
      id: 8,
      title: 'Clothing and Fashion',
      items: [
        "Men's Clothing: Shirts, suits, trousers, sportswear.",
        "Women's Clothing: Dresses, skirts, blouses, lingerie.",
        "Children's Clothing: Babywear, playwear, school uniforms.",
        'Footwear: Sports shoes, high heels, formal shoes.',
        'Accessories: Belts, hats, scarves.',
      ],
      image: '/images/fashion.png',
    },
    {
      id: 9,
      title: 'Furniture and Decor',
      items: [
        'Indoor Furniture: Chairs, sofas, dining tables.',
        'Outdoor Furniture: Garden sets, outdoor umbrellas, patio furniture.',
      ],
      image: '/images/furniture.png',
    },
    {
      id: 10,
      title: 'Sports and Fitness',
      items: [
        'Fitness Equipment: Treadmills, bicycles, yoga mats.',
        'Sportswear: Athletic shoes, outdoor and gym clothing.',
        'Sports Tools: Balls, rackets, and other equipment.',
      ],
      image: '/images/sports.png',
    },
    {
      id: 11,
      title: 'Eco-friendly Products',
      items: [
        'Sustainable Items: Solar-powered devices.',
        'Eco-Friendly Products: Recyclable bags, biodegradable utensils.',
      ],
      image: '/images/eco.png',
    },
    {
      id: 12,
      title: 'Art and Culture',
      items: [
        'Artworks: Classical paintings, modern, experimental art.',
        'Products: Wooden, stone, metal items.',
        'Handicrafts: Pottery, handmade rugs.',
        'Books and Publications: Novels, educational books, magazines.',
        'Musical Instruments: Guitars, pianos, wind and string instruments, drums.',
      ],
      image: '/images/art.png',
    },
  ];

  const currentCategories = currentPage === 1 ? page1Categories : page2Categories;

  return (
    <main className="min-h-screen w-full bg-white">
      <div className="relative">
        {/* Header Section */}
        {headerSection}

        {/* Main Content */}
        <div className="relative w-full max-w-[1200px] mx-auto pt-[40px] sm:pt-[60px] md:pt-[80px] pb-[40px] sm:pb-[60px] md:pb-[80px] px-4 sm:px-8">
          {currentCategories.map((category, index) => (
            <div
              key={category.id}
              className="mb-[64px] sm:mb-[80px] md:mb-[104px] flex flex-col lg:flex-row items-start gap-8 md:gap-[56px]"
            >
              {/* For even/odd handling, we flip the order for mobile and rely on CSS for large screens */}
              <div className={`flex-1 order-2 lg:order-${index % 2 === 0 ? '1' : '2'}`}>
                <div className="flex flex-row items-center gap-4 mb-6 sm:mb-10">
                  <span className="font-poppins font-bold text-2xl sm:text-3xl md:text-[32px] leading-[160%] text-black">
                    {category.id}
                  </span>
                  <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-[32px] leading-[160%] text-[#0D0D0D]">
                    {category.title}
                  </h2>
                </div>

                <div className="relative ml-4 sm:ml-9 pl-4 sm:pl-8">
                  <div className="absolute left-[-4px] sm:left-[6px] top-[15px] bottom-[15px] w-[1px] bg-[#192B1A]" />
                  <div className="flex flex-col gap-4 sm:gap-6">
                    {category.items.map((item, i) => (
                      <div key={i} className="relative">
                        <div className="absolute -left-6 sm:-left-8 top-[10px] w-[8px] sm:w-[13px] h-[8px] sm:h-[12px] bg-[#192B1A] rounded-full" />
                        <p className="font-poppins font-semibold text-base sm:text-lg md:text-[20px] leading-[160%] text-[#192B1A]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className={`relative w-full max-w-[425px] h-[200px] sm:h-[250px] md:h-[306px] flex-shrink-0 order-1 lg:order-${index % 2 === 0 ? '2' : '1'} mx-auto`}
              >
                <div className="absolute w-[70%] sm:w-[80%] h-[60%] sm:h-[70%] right-0 bottom-0 rounded-[16px] sm:rounded-[32px] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover opacity-20"
                  />
                </div>
                <div className="absolute w-[75%] sm:w-[85%] h-[65%] sm:h-[75%] left-0 top-0 rounded-[16px] sm:rounded-[32px] overflow-hidden">
                  <Image src={category.image} alt={category.title} fill className="object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mb-10 sm:mb-20">{pagination}</div>
      </div>
    </main>
  );
};

export default ProductDetails;
