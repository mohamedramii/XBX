'use client'

import React from 'react'
import Image from 'next/image'

const OverviewPage = () => {
  const statisticsCards = [
    {
      title: 'Total Users',
      value: '1,150',
      icon: '/icons/total-user-dashboard.svg',
      description: 'Including normal users and investors',
      iconBg: 'rgba(17, 169, 0, 0.1)',
    },
    {
      title: 'Total Admins',
      value: '12',
      icon: '/icons/admin-dashboard.svg',
      description: 'Including all admins',
      iconBg: 'rgba(17, 169, 0, 0.1)',
    },
    {
      title: 'Total Investors',
      value: '400',
      icon: '/icons/total-investors-dashboard.svg',
      description: 'Including only verified investors',
      iconBg: 'rgba(17, 169, 0, 0.1)',
    },
    {
      title: 'Total Sales',
      value: '12,000$',
      icon: '/icons/total-sales-dashboard.svg',
      description: 'Including Store, Services',
      iconBg: 'rgba(17, 169, 0, 0.1)',
    },
    {
      title: 'Total Investments',
      value: '5,221$',
      icon: '/icons/total-investments-dashboard.svg',
      description: 'Including Investments',
      iconBg: 'rgba(17, 169, 0, 0.1)',
    },
  ]

  const latestOrders = [
    {
      userName: 'lordseif07',
      category: 'Services',
      orderDate: '30 Nov 2024',
      orderTime: '22 : 20',
      totalPrice: '2,002$',
      paid: true,
    },
    {
      userName: 'ali_mo23',
      category: 'Services',
      orderDate: '30 Nov 2024',
      orderTime: '19 : 34',
      totalPrice: '32$',
      paid: true,
    },
    {
      userName: 'ahmed0Saleh',
      category: 'Services',
      orderDate: '30 Nov 2024',
      orderTime: '14 : 2',
      totalPrice: '229$',
      paid: true,
    },
    {
      userName: 'mohsen_aa90',
      category: 'Products',
      orderDate: '30 Nov 2024',
      orderTime: '9 : 01',
      totalPrice: '99$',
      paid: true,
    },
  ]

  return (
    <div className="relative w-full max-w-[1154px] mx-auto  p-6  flex flex-col gap-6 sm:gap-12">
      {/* Dashboard Title */}
      <div className="flex flex-row items-center gap-2.5">
        <div className="w-2 h-[30px] sm:h-[50px] bg-[#11A900]" />
        <h1 className="text-[20px] sm:text-[24px] md:text-[30px] font-poppins font-semibold text-[#061404]">
          Dashboard
        </h1>
      </div>

      {/* Statistics Cards */}
      <div className="flex gap-4 sm:gap-5 overflow-x-auto py-2">
        {statisticsCards.map((card, index) => (
          <div
            key={index}
            className="flex-none min-w-[200px] sm:min-w-[250px] bg-white rounded-[20px] shadow-[0px_5px_10px_rgba(0,0,0,0.1)] p-3 sm:p-[26px_20px] flex flex-col gap-2.5"
          >
            <div className="flex justify-between items-center mb-1 sm:mb-2.5">
              <div>
                <p className="font-poppins font-semibold text-[12px] sm:text-[13px] text-[#8A8A8A] mb-1">
                  {card.title}
                </p>
                <p className="font-poppins font-semibold text-[24px] sm:text-[30px] text-[#061404]">
                  {card.value}
                </p>
              </div>
              <div
                className="w-[40px] sm:w-[74px] h-[40px] sm:h-[74px] flex items-center justify-center rounded-[20px]"
                style={{ background: card.iconBg }}
              >
                <Image
                  src={card.icon}
                  width={30}
                  height={30}
                  alt={card.title}
                  className="w-6 sm:w-8 h-6 sm:h-8"
                />
              </div>
            </div>
            <span className="font-poppins font-medium text-[8px] sm:text-[10px] text-[#A9ADA8]">
              {card.description}
            </span>
          </div>
        ))}
      </div>

      {/* Latest Orders Section */}
      <div className="flex flex-row items-center gap-1 sm:gap-[5px]">
        <div className="w-1 h-[20px] sm:w-[5px] sm:h-[30px] bg-[#11A900]" />
        <h2 className="text-lg sm:text-xl font-poppins font-semibold text-[#061404]">
          Latest Orders
        </h2>
      </div>

      {/* Orders Table */}
      <div className="w-full bg-white rounded-[20px] shadow-[0px_5px_10px_rgba(0,0,0,0.1)] p-3 sm:p-5 overflow-auto">
        <table className="w-full text-left text-[12px] sm:text-base md:text-xl">
          <thead>
            <tr className="border-b border-[#B7B7B7]">
              <th className="py-2 sm:py-[15px] px-2 sm:px-[10px] font-medium text-[#061404]">userName</th>
              <th className="py-2 sm:py-[15px] px-2 sm:px-[10px] font-medium text-[#061404]">Category</th>
              <th className="py-2 sm:py-[15px] px-2 sm:px-[10px] font-medium text-[#061404]">OrderDate</th>
              <th className="py-2 sm:py-[15px] px-2 sm:px-[10px] font-medium text-[#061404]">OrderTime</th>
              <th className="py-2 sm:py-[15px] px-2 sm:px-[10px] font-medium text-[#061404]">TotalPrice</th>
              <th className="py-2 sm:py-[15px] px-2 sm:px-[10px] font-medium text-[#061404]">paid</th>
            </tr>
          </thead>
          <tbody>
            {latestOrders.map((order, index) => (
              <tr key={index} className="border-b border-[#B7B7B7] last:border-none">
                <td className="py-2 sm:py-[15px] px-2 sm:px-[10px] text-[#061404] font-medium">{order.userName}</td>
                <td className="py-2 sm:py-[15px] px-2 sm:px-[10px] text-[#061404] font-medium">{order.category}</td>
                <td className="py-2 sm:py-[15px] px-2 sm:px-[10px] text-[#061404] font-medium">{order.orderDate}</td>
                <td className="py-2 sm:py-[15px] px-2 sm:px-[10px] text-[#061404] font-medium">{order.orderTime}</td>
                <td className="py-2 sm:py-[15px] px-2 sm:px-[10px] text-[#061404] font-medium">{order.totalPrice}</td>
                <td className="py-2 sm:py-[15px] px-2 sm:px-[10px] text-[#11A900] font-medium">{order.paid ? 'True' : 'False'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OverviewPage
