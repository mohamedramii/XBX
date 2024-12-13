'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const messages = [
  {
    id: 1,
    userId: 'lordseif07',
    username: '@lordseif07',
    userType: 'Client',
    isVerified: true,
    unreadCount: 2,
    timestamp: '7:08 PM 12 Dec 2024',
    message: 'Hello , I need more details about HP Victus 15-fa0031dx Gaming Laptop . Can you clarify its features and availability?',
    isUnread: true
  },
  {
    id: 2,
    userId: 'Mark_Zuck342',
    username: '@Mark_Zuck342',
    userType: 'Investor',
    isVerified: true,
    unreadCount: 0,
    timestamp: '2:08 PM 12 Dec 2024',
    message: "Hi , I'm interested in investing in Revolutionizing the Way We Rent and Stay. Could you provide me with details about current opportunities and the project's roadmap?",
    isUnread: false
  },
  {
    id: 3,
    userId: 'Mark_Zuck342',
    username: '@Mark_Zuck342',
    userType: 'Investor',
    isVerified: true,
    unreadCount: 0,
    timestamp: '2:08 PM 12 Dec 2024',
    message: "Hi , I'm interested in investing in Revolutionizing the Way We Rent and Stay. Could you provide me with details about current opportunities and the project's roadmap?",
    isUnread: false
  },
  {
    id: 4,
    userId: 'lordseif07',
    username: '@lordseif07',
    userType: 'Client',
    isVerified: false,
    unreadCount: 8,
    timestamp: '7:08 PM 12 Dec 2024',
    message: 'Hello , I need more details about HP Victus 15-fa0031dx Gaming Laptop . Can you clarify its features and availability?',
    isUnread: true
  },
  {
    id: 5,
    userId: 'admin2',
    username: '@lordseif07',
    userType: 'Admin',
    isVerified: false,
    unreadCount: 0,
    timestamp: '2:38 AM 12 Dec 2024',
    message: "Hi [Admin 2's Name], could you share the latest list of products available on the platform? I need it for an upcoming update/report. If there have been any recent additions or removals, please include those as well. Thanks!",
    isUnread: false
  }
]

export default function InboxPage() {
  return (
    <div className="flex flex-col gap-6 md:gap-8 w-full p-4 md:p-8">
      {/* Header Section */}
      <div className="flex flex-col gap-6 md:gap-7">
        {/* Title */}
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 md:w-[10px] h-[50px] bg-[#11A900]" />
          <h1 className="text-2xl md:text-[30px] font-semibold font-poppins text-[#061404]">Inbox</h1>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button className="h-10 px-4 flex items-center justify-center bg-[rgba(17,169,0,0.3)] rounded-[20px] transition-colors">
            <span className="text-base md:text-xl font-bold font-poppins text-[#11A900]">All</span>
          </button>
          <button className="h-10 px-4 flex items-center justify-center bg-[rgba(224,224,224,0.6)] rounded-[20px] transition-colors">
            <span className="text-base md:text-xl font-normal font-poppins text-[#787777]">Admins</span>
          </button>
          <button className="h-10 px-4 flex items-center justify-center bg-[rgba(224,224,224,0.6)] rounded-[20px] transition-colors">
            <span className="text-base md:text-xl font-normal font-poppins text-[#787777]">Clients</span>
          </button>
          <button className="h-10 px-4 flex items-center justify-center bg-[rgba(224,224,224,0.6)] rounded-[20px] transition-colors">
            <span className="text-base md:text-xl font-normal font-poppins text-[#787777]">Investors</span>
          </button>
        </div>
      </div>

      {/* Messages List */}
      <div className="flex flex-col w-full divide-y divide-[rgba(0,0,0,0.4)]">
        {messages.map((message) => (
          <Link
            href={`/super-admin-dashboard/inbox/chat/${message.userId}`}
            key={message.id}
            className={`w-full p-4 md:p-5 ${
              message.isUnread ? 'bg-[rgba(17,169,0,0.05)]' : 'bg-white'
            }`}
          >
            {/* Message Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4 md:mb-5">
              {/* User Info */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-base md:text-xl font-semibold text-[#11A900]">
                  {message.username}
                </span>
                <div className="hidden md:block w-0 h-5 border-l-2 border-black" />
                <span className={`text-base md:text-xl ${
                  message.isUnread ? 'font-semibold text-[#11A900]' : 'font-medium text-[#AEADAD]'
                }`}>
                  {message.userType}
                </span>
                {message.isVerified && (
                  <Image
                    src="/icons/verified-icon.svg"
                    width={20}
                    height={20}
                    alt="Verified"
                    className="w-5 md:w-6"
                  />
                )}
                {message.unreadCount > 0 && (
                  <div className="w-7 h-7 md:w-[30px] md:h-[30px] flex items-center justify-center bg-[#FF0101] rounded-full">
                    <span className="text-base md:text-xl font-semibold text-white">
                      {message.unreadCount}
                    </span>
                  </div>
                )}
              </div>
              {/* Timestamp */}
              <span className="text-sm md:text-base text-[#AEADAD]">{message.timestamp}</span>
            </div>
            {/* Message Content */}
            <p className="text-sm md:text-base text-[#787777] leading-relaxed md:leading-[30px] line-clamp-2 md:line-clamp-none">
              {message.message}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
