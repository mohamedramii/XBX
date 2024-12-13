'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const OrderDetailsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { name: 'All', count: 12 },
    { name: 'Completed', count: 8 },
    { name: 'Pending', count: 4 },
    { name: 'Cancelled', count: 2 }
  ];

  const orders = [
    {
      id: 1,
      productName: 'HP Victus 15-fa0031dx Gaming Laptop',
      quantity: 4,
      pricePerPiece: 1232,
      totalPrice: 4892,
      status: 'Pending',
      username: '@lordseif07',
      orderDate: '20 Nov 2024',
      image: '/images/laptopproduct.png'
    },
    {
      id: 2,
      productName: 'HP Victus 15-fa0031dx Gaming Laptop',
      quantity: 4,
      pricePerPiece: 1232,
      totalPrice: 4892,
      status: 'Delivered',
      username: '@lordseif07',
      orderDate: '20 Nov 2024',
      image: '/images/laptopproduct.png'
    },
    {
      id: 3,
      productName: 'HP Victus 15-fa0031dx Gaming Laptop',
      quantity: 4,
      pricePerPiece: 1232,
      totalPrice: 4892,
      status: 'Cancelled',
      username: '@lordseif07',
      orderDate: '20 Nov 2024',
      image: '/images/laptopproduct.png'
    }
  ];

  const router = useRouter();

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Delivered':
        return '/icons/Delivered - icon.svg';
      case 'Cancelled':
        return '/icons/canceled.svg';
      default:
        return null;
    }
  };

  const getStatusIconStyle = (status) => {
    switch (status) {
      case 'Delivered':
        return {
          width: '200px',
          height: '200px',
          right: '0',
          top: '-22px',
        };
      case 'Cancelled':
        return {
          width: '230px',
          height: '230px',
          right: '0',
          top: '-40px',
        };
      default:
        return {};
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F4F4F4] p-4 md:p-8 lg:p-12">
      <div className="max-w-[1131px] mx-auto flex flex-col gap-6 md:gap-8">
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Title Section */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <div className="w-7 h-[50px] bg-[#11A900]" />
            <h1 className="font-poppins font-semibold text-2xl md:text-[30px] leading-[160%] text-[#061404]">
              lordseif07
            </h1>
            <div className="w-0 h-[30px] border-[3px] border-black mx-2" />
            <span className="font-poppins font-semibold text-2xl md:text-[30px] leading-[160%] text-[#787777]">
              Orders
            </span>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2.5">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex justify-center items-center py-0.5 px-4 gap-[5px] h-10 rounded-[20px] transition-colors ${
                  activeCategory === category.name
                    ? 'bg-[rgba(17,169,0,0.3)] text-[#11A900] font-bold'
                    : 'bg-[rgba(224,224,224,0.6)] text-[#787777] font-medium'
                }`}
              >
                <span className="text-base md:text-xl leading-[30px]">
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Orders List */}
        <div className="flex flex-col gap-5">
          {orders.map((order) => (
            <div key={order.id} className="relative bg-white shadow-[0px_5px_10px_rgba(0,0,0,0.1)] rounded-[20px] overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Product Image */}
                <div className="w-full md:w-[169px] h-[144px] relative">
                  <Image
                    src={order.image}
                    alt={order.productName}
                    fill
                    className="object-cover filter drop-shadow-[0px_5px_10px_rgba(0,0,0,0.25)]"
                  />
                </div>

                {/* Order Details */}
                <div className="flex flex-col gap-2.5 p-4 md:p-[30px] flex-1">
                  <h3 className="font-poppins font-semibold text-sm md:text-[15px] leading-[22px] text-[#061404]">
                    {order.productName}
                  </h3>
                  <p className="font-poppins font-semibold text-xs md:text-[14px] leading-[21px] text-[#11A900]">
                    Quantity : {order.quantity} | Price Per Piece : {order.pricePerPiece}$ | Total Price : {order.totalPrice}$ | Status : {order.status}
                  </p>
                  <p className="font-poppins font-semibold text-xs md:text-[14px] leading-[21px] text-[#061404]">
                    UserName : {order.username} | OrderDate : {order.orderDate}
                  </p>
                </div>

                {/* Status Icon */}
                {getStatusIcon(order.status) && (
                  <div 
                    className="absolute hidden md:block"
                    style={getStatusIconStyle(order.status)}
                  >
                    <Image
                      src={getStatusIcon(order.status)}
                      alt={order.status}
                      fill
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
