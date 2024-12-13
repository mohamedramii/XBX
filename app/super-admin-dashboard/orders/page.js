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
    router.push(`/super-admin-dashboard/orders/${username}`);
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
    <div className="w-full min-h-screen bg-[#F4F4F4] p-4 md:p-8 lg:p-12">
      <div className="max-w-[1104px] mx-auto flex flex-col gap-5 md:gap-8">
        <div className="flex flex-col gap-6 md:gap-8 max-w-[788px]">
          <div className="flex flex-col gap-6 md:gap-7">
            {/* Title with green bar */}
            <div className="flex items-center gap-2.5">
              <div className="w-[10px] h-[50px] bg-[#11A900]" />
              <h1 className="font-poppins font-semibold text-2xl md:text-[30px] leading-[160%] text-[#061404]">
                XBX Orders
              </h1>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap items-center gap-2.5">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`flex justify-center items-center py-0.5 px-4 gap-[5px] h-10 rounded-[20px] transition-colors ${
                    activeCategory === category.name
                      ? 'bg-[rgba(17,169,0,0.3)] text-[#11A900]'
                      : 'bg-[rgba(224,224,224,0.6)] text-[#787777]'
                  }`}
                >
                  <span className={`text-base md:text-xl font-${activeCategory === category.name ? 'bold' : 'medium'}`}>
                    {category.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex items-center px-4 md:px-5 py-2.5 gap-1.5 w-full bg-[#FBFBFB] border border-[#919191] rounded-[20px]">
            <div className="w-6 md:w-[30px] h-6 md:h-[30px] border-2 border-[#909090] rounded-full" />
            <input
              type="text"
              placeholder="Looking for specific user ?"
              className="flex-1 font-poppins text-sm md:text-lg leading-[160%] text-[#909090] bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Users List */}
        <div className="flex flex-col gap-5">
          {users.map((user, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 md:px-8 md:py-5.5 gap-4 md:gap-2.5 w-full bg-white shadow-[0px_5px_10px_rgba(0,0,0,0.1)] rounded-[20px] relative"
            >
              <span className="font-poppins font-medium text-base md:text-lg leading-[160%] text-[#061404]">
                {user.username}
              </span>
              {user.verified ? (
                <div className={`hidden md:block absolute w-6 h-6 left-[143px] top-6 border-2 rounded-full`} style={{ borderColor: getStatusColor(user.status) }} />
              ) : (
                <div className={`hidden md:flex justify-center items-center w-7 h-7 left-[143px] top-[22px] bg-[rgba(${
                  user.status === 'active' ? '17,169,0' : user.status === 'pending' ? '205,223,7' : '120,119,119'
                },0.2)] rounded-full absolute`}>
                  <Image
                    src={getStatusIcon(user.status)}
                    alt={`${user.status} icon`}
                    width={16}
                    height={16}
                    className="w-4 md:w-[16px]"
                  />
                </div>
              )}
              <span className="font-poppins font-medium text-base md:text-lg leading-[160%] text-[#787777]">
                {user.email}
              </span>
              <span className={`font-poppins font-bold text-base md:text-lg leading-[160%]`} style={{ color: getStatusColor(user.status) }}>
                {user.orders} orders
              </span>
              <button 
                className="font-poppins font-bold text-base md:text-lg leading-[160%] text-[#11A900] hover:text-[#0e8a00] transition-colors"
                onClick={() => handleViewOrder(user.username.replace('@', ''))}
              >
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
