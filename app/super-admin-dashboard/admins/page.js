'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AdminsManagement = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Admins')
  
  const categories = [
    { name: 'All Admins', count: 13 },
    { name: 'Super Admins', count: 0 },
    { name: 'Investments Admins', count: 0 },
    { name: 'Services Admins', count: 0 },
    { name: 'Store Admins', count: 0 },
    { name: 'Others', count: 0 }
  ]

  const admins = [
    {
      id: 1,
      username: '@lordseif07',
      items: 13,
      type: ['invest', 'store', 'service']
    },
    {
      id: 2,
      username: '@lordseif07',
      items: 52,
      type: ['store']
    },
    {
      id: 3,
      username: '@lordseif07',
      items: 1,
      type: ['super']
    },
    {
      id: 4,
      username: '@lordseif07',
      items: 22,
      type: ['invest']
    },
    {
      id: 5,
      username: '@lordseif07',
      items: 102,
      type: ['invest', 'store', 'notification']
    },
    {
      id: 6,
      username: '@lordseif07',
      items: 22,
      type: ['invest']
    }
  ]

  return (
    <div className="w-full min-h-screen bg-[#F4F4F4] p-4 md:p-8 lg:p-12">
      <div className="max-w-[1104px] mx-auto flex flex-col gap-5 md:gap-8">
        {/* Header Section */}
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="flex flex-col gap-6 md:gap-7">
            {/* Title */}
            <div className="flex items-center gap-2.5">
              <div className="w-[10px] h-[50px] bg-[#11A900]" />
              <h1 className="font-poppins font-semibold text-2xl md:text-[30px] leading-[160%] text-[#061404]">
                XBX Admins
              </h1>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap items-center gap-2.5">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center py-0.5 px-4 gap-[5px] h-10 rounded-[20px] text-base md:text-xl transition-colors
                    ${
                      selectedCategory === category.name
                        ? 'bg-[rgba(17,169,0,0.3)] text-[#11A900] font-bold'
                        : 'bg-[rgba(224,224,224,0.6)] text-[#787777] font-medium'
                    }`}
                >
                  <span className="font-poppins leading-[30px]">
                    {category.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Search and Add Section */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-center">
            <div className="flex-1 flex items-center gap-1.5 py-2.5 px-5 bg-[#FBFBFB] border border-[#919191] rounded-[20px]">
              <Image
                src="/icons/search.svg"
                alt="Search"
                width={30}
                height={30}
                className="text-[#909090] w-6 md:w-[30px]"
              />
              <input
                type="text"
                placeholder="Looking for specific admin ?"
                className="flex-1 font-poppins text-sm md:text-lg text-[#909090] bg-transparent outline-none"
              />
            </div>

            <Link 
              href="/super-admin-dashboard/admins/add-new" 
              className="flex justify-center items-center py-0.5 px-4 gap-2.5 bg-[#11A900] rounded-[20px] text-white font-poppins font-semibold text-base md:text-xl leading-[30px] h-10 md:w-[160px]"
            >
              Add New
              <div className="w-3.5 h-3.5 border-[4px] border-white" />
            </Link>
          </div>
        </div>

        {/* Admins List */}
        <div className="flex flex-col gap-5">
          {admins.map((admin) => (
            <div
              key={admin.id}
              className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 md:py-5.5 md:px-8 gap-4 md:gap-2.5 w-full bg-white shadow-[0px_5px_10px_rgba(0,0,0,0.1)] rounded-[20px]"
            >
              <span className="font-poppins font-medium text-base md:text-lg text-[#061404]">
                {admin.username}
              </span>
              <span className="font-poppins font-bold text-base md:text-lg text-[#11A900]">
                {admin.items} Item
              </span>
              <div className="flex items-center gap-1.5">
                {admin.type.map((type, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center w-7 h-7 bg-[rgba(17,169,0,0.2)] rounded-full"
                  >
                    <Image
                      src={`/icons/${type}-icon.svg`}
                      alt={type}
                      width={16}
                      height={16}
                      className="w-4 md:w-[16px]"
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-5 py-0.5 px-2.5">
                <span className="font-poppins font-semibold text-base md:text-lg text-[#11A900]">
                  Edit Work History Delete
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdminsManagement
