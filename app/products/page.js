'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ProductsPage = () => {
  const router = useRouter();
  const industries = [
    { name: 'Jewelry and Accessories', image: '/images/jewelry.png' },
    { name: 'Health and Beauty', image: '/images/beauty.png' },
    { name: 'Cars and Transportation', image: '/images/cars.png' },
    { name: 'Health and Nutrition', image: '/images/nutrition.png' },
    { name: 'Industrial and Professional Products', image: '/images/industrial.png' },
    { name: 'Games and Hobbies', image: '/images/games.png' },
    { name: 'Devices and Technology', image: '/images/tech.png' },
    { name: 'Clothing and Fashion', image: '/images/fashion.png' },
    { name: 'Furniture and Decor', image: '/images/furniture.png' },
    { name: 'Sports and Fitness', image: '/images/sports.png' },
    { name: 'Eco-friendly Products', image: '/images/eco.png' },
    { name: 'Art and Culture', image: '/images/art.png' },
  ];

  const handleCategoryClick = (categoryName) => {
    const slug = categoryName.toLowerCase().replace(/\s+/g, '-');
    router.push(`/products/${slug}`);
  };

  return (
    <main className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[700px] w-full bg-[url('/images/heroprodcts.png')] bg-cover bg-center flex items-center justify-center 
      px-4 sm:px-8 md:px-12 lg:px-0">
        <div className="flex flex-col items-center gap-[43px] max-w-[885px] w-full px-4 text-center">
          <div className="flex flex-col items-center gap-8 w-full">
            <h1 className="font-poppins font-bold text-[32px] sm:text-[36px] md:text-[40px] leading-[160%] text-[#FBFBFB] w-full">
              Empowering Your Business Growth
            </h1>
            <p className="font-poppins font-semibold text-[18px] sm:text-[20px] md:text-[22px] leading-[160%] text-[#FBFBFB] w-full">
              We provide innovative financing solutions to support businesses and retail stores. Achieve your goals and expand your operations with ease through flexible terms and a simple process. Start your journey to success today!
            </p>
          </div>
          
          <button className="flex justify-center items-center w-[120px] sm:w-[130px] md:w-[140px] h-[50px] sm:h-[60px] md:h-[67px] border-2 border-[#FBFBFB] rounded-2xl">
            <span className="font-poppins font-bold text-[18px] sm:text-[20px] md:text-[22px] leading-[160%] text-white">
              start now
            </span>
          </button>
        </div>
      </section>

      {/* Flexible Financing Section */}
      <section className="relative w-full px-4 sm:px-8 md:px-12 lg:px-16 py-10 md:py-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-8">
          <div className="flex flex-col items-start gap-4 max-w-full md:max-w-[600px]">
            <h2 className="font-poppins font-bold text-[24px] sm:text-[28px] md:text-[32px] leading-[160%] text-[#192B1A]">
              Flexible Financing for Businesses
            </h2>
            <p className="font-poppins font-semibold text-base sm:text-lg md:text-xl leading-[160%] text-[#192B1A]">
              Here, I provide the financing you need to acquire the products and resources essential for your business growth. Whether you're looking to purchase equipment, stock up on inventory, or invest in new technologies, our funding solutions are designed to meet your specific requirements and help you move forward with confidence.
            </p>
          </div>
          <div className="flex justify-center">
            <Image 
              src="/images/XBXBG 4.png"
              alt="XBX Background"
              width={300}
              height={300}
              className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px]"
            />
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="px-4 sm:px-8 md:px-[91px] py-10 md:py-20 flex flex-col items-start gap-10">
        <div className="max-w-full md:max-w-[685px]">
          <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-3xl leading-[160%] text-[#192B1A] mb-4">
            Targeted Industries for Financing Support
          </h2>
          <p className="font-poppins font-semibold text-lg sm:text-xl leading-[160%] text-[#192B1A]">
            We are dedicated to supporting and providing products for these industries. Our goal is to offer the necessary resources and financing to help drive growth and success in these sectors
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center gap-6 w-auto mx-auto py-0">
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                onClick={() => handleCategoryClick(industry.name)}
                className="flex flex-col items-center gap-4 w-[200px] sm:w-[250px] md:w-[291px] cursor-pointer"
              >
                <div className="relative w-full h-[150px] sm:h-[180px] md:h-[200px] rounded-[20px] sm:rounded-[24px] md:rounded-[32px] overflow-hidden group">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>
                <h3 className="font-poppins font-semibold text-lg sm:text-xl leading-[160%] text-center text-[#0D0D0D] hover:text-[#334433] h-auto">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={() => router.push('/products/details')}
          className="mx-auto mt-8 flex justify-center items-center w-[150px] sm:w-[160px] md:w-[175px] h-[50px] sm:h-[60px] md:h-[67px] border-2 border-[#0D0D0D] rounded-2xl font-poppins font-bold text-[18px] sm:text-[20px] md:text-[22px] leading-[160%] text-[#192B1A]"
        >
          more details
        </button>
      </section>

      {/* Steps Section */}
      <section className="w-full px-4 sm:px-8 md:px-24 py-10 md:py-20 mb-10 md:mb-20">
        <div className="max-w-full md:max-w-[1056px] flex flex-col justify-center items-start gap-8 mx-auto">
          <div className="flex flex-col items-start gap-6 w-full">
            <h2 className="font-poppins font-bold text-[22px] sm:text-[24px] md:text-[28px] leading-[160%] text-[#192B1A] w-full">
              Steps to Obtain Support and Products
            </h2>
            <p className="font-poppins font-semibold text-base sm:text-lg md:text-xl leading-[160%] text-black">
              submit Your Application: Fill out the application form with the necessary details about your business and the products you need.
              <br/><br/>
              Assessment and Review: Our team will review your application and assess your requirements to ensure we offer the best solutions.
              <br/><br/>
              Approval and Offer: Once your application is approved, we will provide you with tailored financing options and product solutions.
              <br/><br/>
              Product Delivery: After confirming your selection, we will arrange for the delivery of the products and disbursement of the funding.
              <br/><br/>
              Support and Follow-up: We offer continuous support to ensure your business grows and thrives with the resources provided.
            </p>
          </div>
          
          <button className="flex justify-center items-center w-[200px] sm:w-[220px] md:w-[249px] h-[50px] sm:h-[60px] md:h-[67px] border-2 border-[#0D0D0D] rounded-2xl">
            <span className="font-poppins font-bold text-[18px] sm:text-[20px] md:text-[22px] leading-[160%] text-[#192B1A]">
              submit Application
            </span>
          </button>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
