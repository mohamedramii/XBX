'use client';

import { useState } from 'react';
import { redirect } from 'next/navigation';

const DashboardPage = () => {
  redirect('/dashboard/overview');

  const stats = [
    {
      label: 'Total Users',
      value: '1,150',
      description: 'Including normal users and investors',
      icon: 'users',
    },
    {
      label: 'Total Investors',
      value: '400',
      description: 'Including only verified investors',
      icon: 'investors',
    },
    {
      label: 'Total Sales',
      value: '12,000$',
      description: 'Including Store ,Services',
      icon: 'sales',
    },
    {
      label: 'Total Investments',
      value: '5,221$',
      description: 'Including Investments',
      icon: 'investments',
    },
  ];

  const orders = [
    {
      userName: 'lordseif07',
      category: 'Services',
      date: '30 Nov 2024',
      time: '22:20',
      price: '2,002$',
      paid: true,
    },
    {
      userName: 'ali_mo23',
      category: 'Services',
      date: '30 Nov 2024',
      time: '19:34',
      price: '32$',
      paid: true,
    },
    {
      userName: 'ahmed0Saleh',
      category: 'Services',
      date: '30 Nov 2024',
      time: '14:2',
      price: '229$',
      paid: true,
    },
    {
      userName: 'mohsen_aa90',
      category: 'Products',
      date: '30 Nov 2024',
      time: '9:01',
      price: '99$',
      paid: true,
    },
    {
      userName: 'mohsen_aa90',
      category: 'Products',
      date: '30 Nov 2024',
      time: '9:01',
      price: '99$',
      paid: true,
    },
    {
      userName: 'mohsen_aa90',
      category: 'Products',
      date: '30 Nov 2024',
      time: '9:01',
      price: '99$',
      paid: true,
    },
  ];

  return (
    <div className="space-y-[30px]">
      {/* Dashboard Header */}
      <div className="flex items-center gap-2.5">
        <div className="w-2.5 h-[50px] bg-[#11A900]" />
        <h1 className="text-[30px] font-semibold text-[#061404]">Dashboard</h1>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-5">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-[26px_20px] rounded-[20px] shadow-[0px_5px_10px_rgba(0,0,0,0.1)]"
          >
            <div className="flex justify-between items-center mb-2.5">
              <div>
                <p className="text-[13px] font-semibold text-[#8A8A8A] mb-1">{stat.label}</p>
                <p className="text-[30px] font-semibold text-[#061404]">{stat.value}</p>
              </div>
              <div className="w-[74px] h-[74px] flex items-center justify-center bg-[rgba(17,169,0,0.1)] rounded-[20px]">
                {/* Icon placeholder - replace with actual icons */}
                <div className="w-10 h-10 bg-[#11A900]"></div>
              </div>
            </div>
            <p className="text-[10px] text-[#A9ADA8]">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Latest Orders Section */}
      <div className="space-y-12">
        {/* Section Header */}
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-[30px] bg-[#11A900]" />
          <h2 className="text-xl font-semibold text-[#061404]">Latest Orders</h2>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-[20px] shadow-[0px_5px_10px_rgba(0,0,0,0.1)] p-5">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#B7B7B7]">
                  <th className="text-left py-[15px] px-[10px] text-xl font-medium text-[#061404]">
                    userName
                  </th>
                  <th className="text-left py-[15px] px-[10px] text-xl font-medium text-[#061404]">
                    Category
                  </th>
                  <th className="text-left py-[15px] px-[10px] text-xl font-medium text-[#061404]">
                    OrderDate
                  </th>
                  <th className="text-left py-[15px] px-[10px] text-xl font-medium text-[#061404]">
                    OrderTime
                  </th>
                  <th className="text-left py-[15px] px-[10px] text-xl font-medium text-[#061404]">
                    TotalPrice
                  </th>
                  <th className="text-left py-[15px] px-[10px] text-xl font-medium text-[#061404]">
                    paid
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index} className="border-b border-[#B7B7B7] last:border-none">
                    <td className="py-[15px] px-[10px] text-xl text-[#061404]">{order.userName}</td>
                    <td className="py-[15px] px-[10px] text-xl text-[#061404]">{order.category}</td>
                    <td className="py-[15px] px-[10px] text-xl text-[#061404]">{order.date}</td>
                    <td className="py-[15px] px-[10px] text-xl text-[#061404]">{order.time}</td>
                    <td className="py-[15px] px-[10px] text-xl text-[#061404]">{order.price}</td>
                    <td className="py-[15px] px-[10px] text-xl text-[#11A900]">
                      {order.paid ? 'True' : 'False'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
