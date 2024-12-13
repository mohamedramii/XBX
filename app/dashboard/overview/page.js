'use client'

import { useState } from 'react'
import Image from 'next/image'

const DashboardOverviewPage = () => {
  const stats = [
    {
      label: 'Total Users',
      value: '1,150',
      description: 'Including normal users and investors',
      icon: '/icons/total-user-dashboard.svg'
    },
    {
      label: 'Total Investors',
      value: '400',
      description: 'Including only verified investors',
      icon: '/icons/total-investors-dashboard.svg'
    },
    {
      label: 'Total Sales',
      value: '12,000$',
      description: 'Including Store ,Services',
      icon: '/icons/total-sales-dashboard.svg'
    },
    {
      label: 'Total Investments',
      value: '5,221$',
      description: 'Including Investments',
      icon: '/icons/total-investments-dashboard.svg'
    }
  ]

  const orders = [
    { userName: 'lordseif07', category: 'Services', date: '30 Nov 2024', time: '22:20', price: '2,002$', paid: true },
    { userName: 'ali_mo23', category: 'Services', date: '30 Nov 2024', time: '19:34', price: '32$', paid: true },
    { userName: 'ahmed0Saleh', category: 'Services', date: '30 Nov 2024', time: '14:2', price: '229$', paid: true },
    { userName: 'mohsen_aa90', category: 'Products', date: '30 Nov 2024', time: '9:01', price: '99$', paid: true },
    { userName: 'mohsen_aa90', category: 'Products', date: '30 Nov 2024', time: '9:01', price: '99$', paid: true },
    { userName: 'mohsen_aa90', category: 'Products', date: '30 Nov 2024', time: '9:01', price: '99$', paid: true }
  ]

  return (
    <div className="space-y-5 sm:space-y-[30px]   py-4  w-full max-w-[1440px] ">
      {/* Dashboard Header */}
      <div className="flex items-center gap-2">
        <div className="w-2 h-[30px] sm:h-[50px] bg-[#11A900]" />
        <h1 className="text-[20px] sm:text-[24px] md:text-[30px] font-semibold text-[#061404]">
          Dashboard
        </h1>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-4 sm:p-[26px_20px] rounded-[20px] shadow-[0px_5px_10px_rgba(0,0,0,0.1)]">
            <div className="flex justify-between items-center mb-2.5">
              <div>
                <p className="text-[12px] sm:text-[13px] font-semibold text-[#8A8A8A] mb-1">{stat.label}</p>
                <p className="text-[24px] sm:text-[30px] font-semibold text-[#061404]">{stat.value}</p>
              </div>
              <div className="w-[50px] sm:w-[74px] h-[50px] sm:h-[74px] flex items-center justify-center bg-[rgba(17,169,0,0.1)] rounded-[20px]">
                <Image 
                  src={stat.icon}
                  width={30}
                  height={30}
                  alt={stat.label}
                />
              </div>
            </div>
            <p className="text-[8px] sm:text-[10px] text-[#A9ADA8]">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Latest Orders Section */}
      <div className="space-y-5 sm:space-y-12">
        {/* Section Header */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          <div className="w-1 h-[20px] sm:w-1.5 sm:h-[30px] bg-[#11A900]" />
          <h2 className="text-lg sm:text-xl font-semibold text-[#061404]">Latest Orders</h2>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-[20px] shadow-[0px_5px_10px_rgba(0,0,0,0.1)] p-3 sm:p-5 overflow-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[#B7B7B7]">
                {['userName','Category','OrderDate','OrderTime','TotalPrice','paid'].map(header => (
                  <th key={header} className="py-2 sm:py-[15px] px-2 sm:px-[10px] text-base sm:text-xl font-medium text-[#061404] capitalize">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="border-b border-[#B7B7B7] last:border-none">
                  <td className="py-2 sm:py-[15px] px-2 sm:px-[10px] text-[14px] sm:text-xl text-[#061404]">{order.userName}</td>
                  <td className="py-2 sm:py-[15px] px-2 sm:px-[10px] text-[14px] sm:text-xl text-[#061404]">{order.category}</td>
                  <td className="py-2 sm:py-[15px] px-2 sm:px-[10px] text-[14px] sm:text-xl text-[#061404]">{order.date}</td>
                  <td className="py-2 sm:py-[15px] px-2 sm:px-[10px] text-[14px] sm:text-xl text-[#061404]">{order.time}</td>
                  <td className="py-2 sm:py-[15px] px-2 sm:px-[10px] text-[14px] sm:text-xl text-[#061404]">{order.price}</td>
                  <td className="py-2 sm:py-[15px] px-2 sm:px-[10px] text-[14px] sm:text-xl text-[#11A900]">{order.paid ? 'True' : 'False'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default DashboardOverviewPage
