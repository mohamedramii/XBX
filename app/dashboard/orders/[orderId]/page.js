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

  const handleUpdate = (orderId) => {
    router.push(`/dashboard/orders/${orderId}/update`);
  };

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
          width: '100px',
          height: '100px',
          right: '10px',
          top: '10px',
        };
      case 'Cancelled':
        return {
          width: '120px',
          height: '120px',
          right: '10px',
          top: '5px',
        };
      default:
        return {};
    }
  };

  return (
    <div className="relative w-full max-w-[1131px] mx-auto px-4 sm:px-8 py-4 sm:py-8 flex flex-col gap-4 sm:gap-[30px]">
      <div className="flex flex-col items-start gap-4 sm:gap-[30px] w-full max-w-[484px]">
        {/* Title Section */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-[10px]">
          <div className="w-[5px] sm:w-[28px] h-[30px] sm:h-[50px] bg-[#11A900]" />
          <h1 className="text-[16px] sm:text-[20px] md:text-[30px] font-poppins font-semibold text-[#061404]">
            lordseif07
          </h1>
          <div className="hidden sm:block w-0 h-[30px] border-[2px] sm:border-[3px] border-black" />
          <span className="text-[14px] sm:text-[20px] md:text-[30px] font-poppins font-semibold text-[#787777]">
            Orders
          </span>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-[10px] w-full max-w-[484px]">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`flex justify-center items-center py-[2px] px-3 sm:px-[16px] gap-[5px] h-[30px] sm:h-[40px] rounded-[20px] text-[14px] sm:text-[20px] ${
                activeCategory === category.name
                  ? 'bg-[rgba(17,169,0,0.3)] text-[#11A900] font-bold'
                  : 'bg-[rgba(224,224,224,0.6)] text-[#787777] font-medium'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Orders List */}
      <div className="flex flex-col gap-4 sm:gap-[20px] w-full">
        {orders.map((order) => (
          <div key={order.id} className="relative w-full bg-white shadow-[0px_5px_10px_rgba(0,0,0,0.1)] rounded-[20px] overflow-hidden flex flex-col sm:flex-row items-start sm:items-center px-3 sm:px-0 py-3 sm:py-0 h-auto sm:h-[144px] gap-2 sm:gap-0">
            {/* Product Image */}
            <div className="w-full sm:w-[169px] h-[120px] sm:h-[144px] relative">
              <Image
                src={order.image}
                alt={order.productName}
                fill
                className="object-cover drop-shadow-[0px_5px_10px_rgba(0,0,0,0.25)]"
              />
            </div>

            {/* Order Details */}
            <div className="flex-1 flex flex-col items-start gap-[5px] sm:gap-[10px] px-2 sm:px-0 sm:ml-[187px-169px] mt-2 sm:mt-0">
              <h3 className="font-poppins font-semibold text-[14px] sm:text-[15px] text-[#061404]">
                {order.productName}
              </h3>
              <p className="font-poppins font-semibold text-[12px] sm:text-[14px] text-[#11A900]">
                Quantity : {order.quantity} | Price Per Piece : {order.pricePerPiece}$ | Total Price : {order.totalPrice}$ | Status : {order.status}
              </p>
              <p className="font-poppins font-semibold text-[12px] sm:text-[14px] text-[#061404]">
                UserName : {order.username} | OrderDate : {order.orderDate}
              </p>
            </div>

            {/* Status Icon */}
            {getStatusIcon(order.status) && (
              <div 
                className="absolute"
                style={getStatusIconStyle(order.status)}
              >
                <Image
                  src={getStatusIcon(order.status)}
                  alt={order.status}
                  fill
                  className="object-contain"
                />
              </div>
            )}

            {/* Update Button */}
            <div className="absolute right-3 bottom-3 sm:bottom-auto sm:top-auto sm:right-[40px] sm:top-[111px]">
              <button 
                className="font-poppins font-semibold text-[12px] sm:text-[15px] text-[#787777]"
                onClick={() => handleUpdate(order.id)}
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDetailsPage;
