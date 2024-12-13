'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const OrdersPage = () => {
  const [activeCategory, setActiveCategory] = useState('All Users');

  const categories = [
    { name: 'All Users', count: 12 },
    { name: 'XBX Customers', count: 8 },
    { name: 'XBX Investors', count: 4 }
  ];

  const users = [
    { username: '@lordseif07', email: 'corosempi@gmail.com', orders: 12, status: 'active' },
    { username: '@lordseif07', email: 'corosempi@gmail.com', orders: 0, status: 'inactive' },
    { username: '@lordseif07', email: 'corosempi@gmail.com', orders: 3, status: 'pending' },
    { username: '@lordseif07', email: 'corozan07@gmail.com', orders: 0, status: 'inactive', verified: true },
    { username: '@lordseif07', email: 'corozan07@gmail.com', orders: 6, status: 'active', verified: true },
    { username: '@lordseif07', email: 'corozan07@gmail.com', orders: 6, status: 'active', verified: true },
    { username: '@lordseif07', email: 'corozan07@gmail.com', orders: 5, status: 'pending', verified: true },
    { username: '@lordseif07', email: 'corozan07@gmail.com', orders: 6, status: 'active', verified: true },
    { username: '@lordseif07', email: 'corozan07@gmail.com', orders: 6, status: 'active', verified: true }
  ];

  const router = useRouter();

  const handleViewOrder = (username) => {
    router.push(`/dashboard/orders/${username}`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return '#11A900';
      case 'inactive':
        return '#787777';
      case 'pending':
        return '#CDDF07';
      default:
        return '#787777';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active':
        return '/icons/icon-park-outline_buy.svg';
      case 'inactive':
        return '/icons/icon-park-outline_buy-gray.svg';
      case 'pending':
        return '/icons/icon-park-outline_buy-yellow.svg';
      default:
        return '/icons/icon-park-outline_buy-gray.svg';
    }
  };

  return (
    <div className="relative flex flex-col items-start gap-4 sm:gap-[20px] w-full max-w-[1104px] ">
      <div className="flex flex-col items-start gap-4 sm:gap-[30px] w-full max-w-[788px]">
        <div className="flex flex-col items-start gap-4 sm:gap-[27px] w-full max-w-[496px]">
          {/* Title with green bar */}
          <div className="flex flex-row items-center gap-[10px]">
            <div className="w-[5px] sm:w-[10px] h-[30px] sm:h-[50px] bg-[#11A900]" />
            <h1 className="text-[20px] sm:text-[24px] md:text-[30px] font-poppins font-semibold text-[#061404]">
              XBX Orders
            </h1>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-[10px] w-full max-w-[496px]">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex flex-row justify-center items-center py-[2px] px-3 sm:px-[16px] gap-[5px] h-[30px] sm:h-[40px] rounded-[20px] text-[14px] sm:text-[20px] ${
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

        {/* Search Bar */}
        <div className="flex flex-row items-center px-3 sm:px-[20px] py-[5px] sm:py-[10px] gap-[5px] w-full max-w-[788px] h-[40px] sm:h-[50px] bg-[#FBFBFB] border border-[#919191] rounded-[20px]">
          {/* Placeholder for Search Icon */}
          <div className="w-[20px] sm:w-[30px] h-[20px] sm:h-[30px] border-2 border-[#909090] rounded-full" />
          <input
            type="text"
            placeholder="Looking for specific user ?"
            className="w-[130px] sm:w-[230px] h-[20px] sm:h-[29px] font-poppins text-[14px] sm:text-[18px] text-[#909090] bg-transparent outline-none"
          />
        </div>
      </div>

      {/* Users List */}
      <div className="flex flex-col items-start gap-4 sm:gap-[20px] w-full">
        {users.map((user, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-[31px] py-3 sm:py-[22px] gap-[10px] w-full bg-white shadow-[0px_5px_10px_rgba(0,0,0,0.1)] rounded-[20px]"
          >
            <div className="flex items-center gap-2">
              <span className="font-poppins font-medium text-[14px] sm:text-[18px] text-[#061404]">
                {user.username}
              </span>
              {user.verified && (
                <div className="flex justify-center items-center w-[20px] sm:w-[28px] h-[20px] sm:h-[28px] rounded-full" style={{ backgroundColor: `${getStatusColor(user.status)}33` }}>
                  <img src={getStatusIcon(user.status)} alt={`${user.status} icon`} className="w-4 sm:w-6 h-4 sm:h-6" />
                </div>
              )}
            </div>
            <span className="font-poppins font-medium text-[14px] sm:text-[18px] text-[#787777]">
              {user.email}
            </span>
            <span className="font-poppins font-bold text-[14px] sm:text-[18px]" style={{ color: getStatusColor(user.status) }}>
              {user.orders} orders
            </span>
            <button 
              className="font-poppins font-bold text-[14px] sm:text-[18px] text-[#11A900]"
              onClick={() => handleViewOrder(user.username.replace('@', ''))}
            >
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;
