'use client';

import { useState } from 'react';
import Image from 'next/image';

const NotificationPage = () => {
  const [selectedTab, setSelectedTab] = useState('specific');
  const [searchQuery, setSearchQuery] = useState('');
  const [notificationContent, setNotificationContent] = useState('');
  const [selectedUserGroups, setSelectedUserGroups] = useState({
    allUsers: false,
    customers: false,
    investors: false,
  });

  const users = [
    {
      username: '@lordseif07',
      email: 'corosempi@gmail.com',
      role: 'Customer',
    },
    {
      username: '@corozan_45',
      email: 'corozan_45@gmail.com',
      role: 'Customer',
    },
  ];

  const handleCheckboxChange = (group) => {
    setSelectedUserGroups((prev) => ({
      ...prev,
      [group]: !prev[group],
    }));
  };

  const renderSpecificUsersContent = () => (
    <>
      {/* Search Bar */}
      <div className="flex flex-row items-center px-3 sm:px-5 py-2 sm:py-[10px] gap-[5px] w-full bg-[#FBFBFB] border border-[#919191] rounded-[20px]">
        <Image
          src="/icons/search-dashboard.svg"
          width={20}
          height={20}
          alt="Search"
          className="text-[#909090]"
        />
        <input
          type="text"
          placeholder="Looking for specific user ?"
          className="bg-transparent text-[14px] sm:text-[18px] text-[#909090] outline-none flex-1"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* User List */}
      <div className="flex flex-col gap-4 sm:gap-5 w-full">
        {users.map((user, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-[10px] w-full max-w-[678px]"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-[31px] py-3 sm:py-[22px] w-full max-w-[618px] bg-white shadow-[0px_5px_10px_rgba(0,0,0,0.1)] rounded-[20px] gap-2 sm:gap-0">
              <span className="text-[14px] sm:text-[18px] font-medium">{user.username}</span>
              <span className="text-[14px] sm:text-[18px] font-medium text-[#787777]">
                {user.email}
              </span>
              <span className="text-[14px] sm:text-[18px] font-bold text-[#11A900]">
                {user.role}
              </span>
            </div>
            <button className="p-2">
              <Image
                src="/icons/close-dashboard-icon.svg"
                width={35}
                height={35}
                alt="Delete"
                className="text-[#FF0101]"
              />
            </button>
          </div>
        ))}
      </div>
    </>
  );

  const renderBroadcastingContent = () => (
    <div className="flex flex-col gap-4 sm:gap-[30px] w-full">
      {/* User Groups Selection */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-[20px]">
        <div
          className="flex flex-row items-center gap-[10px] cursor-pointer"
          onClick={() => handleCheckboxChange('allUsers')}
        >
          <div
            className={`w-[15px] sm:w-[20px] h-[15px] sm:h-[20px] border-2 border-[#11A900] ${selectedUserGroups.allUsers ? 'bg-[#11A900]' : 'bg-[#FBFBFB]'}`}
          />
          <span className="text-[14px] sm:text-[18px] font-medium">All XBX Users</span>
        </div>
        <div
          className="flex flex-row items-center gap-[10px] cursor-pointer"
          onClick={() => handleCheckboxChange('customers')}
        >
          <div
            className={`w-[15px] sm:w-[20px] h-[15px] sm:h-[20px] border-2 border-[#11A900] ${selectedUserGroups.customers ? 'bg-[#11A900]' : 'bg-[#FBFBFB]'}`}
          />
          <span className="text-[14px] sm:text-[18px] font-medium">Customers</span>
        </div>
        <div
          className="flex flex-row items-center gap-[10px] cursor-pointer"
          onClick={() => handleCheckboxChange('investors')}
        >
          <div
            className={`w-[15px] sm:w-[20px] h-[15px] sm:h-[20px] border-2 border-[#11A900] ${selectedUserGroups.investors ? 'bg-[#11A900]' : 'bg-[#FBFBFB]'}`}
          />
          <span className="text-[14px] sm:text-[18px] font-medium">Investors</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative flex flex-col gap-4 sm:gap-[30px] w-full max-w-[1104px]   ">
      <div className="flex flex-col gap-4 sm:gap-[20px] w-full">
        <div className="flex flex-col gap-4 sm:gap-[30px] w-full max-w-[788px]">
          {/* Header */}
          <div className="flex flex-col gap-4 sm:gap-[27px] w-full max-w-[352px]">
            <div className="flex flex-row items-center gap-[10px]">
              <div className="w-[5px] sm:w-[10px] h-[30px] sm:h-[50px] bg-[#11A900]" />
              <h1 className="text-[20px] sm:text-[24px] md:text-[30px] font-semibold font-poppins text-[#061404]">
                Notification
              </h1>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-[10px] w-full">
              <button
                onClick={() => setSelectedTab('specific')}
                className={`px-3 sm:px-4 py-[2px] rounded-[20px] ${
                  selectedTab === 'specific'
                    ? 'bg-[rgba(17,169,0,0.3)] text-[#11A900] font-bold'
                    : 'bg-[rgba(224,224,224,0.6)] text-[#787777] font-medium'
                } text-[14px] sm:text-[20px]`}
              >
                specific Users
              </button>
              <button
                onClick={() => setSelectedTab('broadcasting')}
                className={`px-3 sm:px-4 py-[2px] rounded-[20px] ${
                  selectedTab === 'broadcasting'
                    ? 'bg-[rgba(17,169,0,0.3)] text-[#11A900] font-bold'
                    : 'bg-[rgba(224,224,224,0.6)] text-[#787777] font-medium'
                } text-[14px] sm:text-[20px]`}
              >
                Broadcasting
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {selectedTab === 'specific' ? renderSpecificUsersContent() : renderBroadcastingContent()}
        </div>

        {/* Warning Text */}
        <p className="text-[14px] sm:text-[18px] text-[#787777] leading-[20px] sm:leading-[27px]">
          Before sending any notification to users, ensure that the message is free of spelling
          errors and uses clear, professional language.
        </p>

        {/* Notification Content */}
        <div className="flex flex-col gap-2 sm:gap-[10px] w-full">
          <h2 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
            Notification Content
          </h2>
          <textarea
            className="w-full h-[80px] sm:h-[100px] bg-[rgba(255,255,255,0.6)] border border-[#11A900] rounded-[20px] p-4 resize-none outline-none text-sm sm:text-base"
            value={notificationContent}
            onChange={(e) => setNotificationContent(e.target.value)}
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end w-full">
        <button className="px-3 sm:px-4 py-[2px] bg-[#11A900] rounded-[20px] text-white font-semibold text-[14px] sm:text-[20px] w-[130px] sm:w-[213px] h-[35px] sm:h-[40px]">
          Submit
        </button>
      </div>
    </div>
  );
};

export default NotificationPage;
