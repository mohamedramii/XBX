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
      <div className="flex items-center px-4 md:px-5 py-2.5 gap-1.5 w-full bg-[#FBFBFB] border border-[#919191] rounded-[20px]">
        <Image
          src="/icons/search-dashboard.svg"
          width={30}
          height={30}
          alt="Search"
          className="text-[#909090] w-6 md:w-[30px]"
        />
        <input
          type="text"
          placeholder="Looking for specific user ?"
          className="bg-transparent text-sm md:text-lg text-[#909090] outline-none flex-1"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* User List */}
      <div className="flex flex-col gap-5 w-full">
        {users.map((user, index) => (
          <div key={index} className="flex items-center gap-2.5 w-full">
            <div className="flex-1 flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-8 py-4 md:py-5.5 bg-white shadow-[0px_5px_10px_rgba(0,0,0,0.1)] rounded-[20px] gap-2 md:gap-0">
              <span className="text-base md:text-lg font-medium">{user.username}</span>
              <span className="text-base md:text-lg font-medium text-[#787777]">{user.email}</span>
              <span className="text-base md:text-lg font-bold text-[#11A900]">{user.role}</span>
            </div>
            <button className="p-1.5 md:p-2 hover:bg-red-50 rounded-lg transition-colors">
              <Image
                src="/icons/close-dashboard-icon.svg"
                width={40}
                height={40}
                alt="Delete"
                className="text-[#FF0101] w-8 md:w-[50px]"
              />
            </button>
          </div>
        ))}
      </div>
    </>
  );

  const renderBroadcastingContent = () => (
    <div className="flex flex-col gap-6 md:gap-[30px] w-full">
      {/* User Groups Selection */}
      <div className="flex flex-wrap md:flex-row items-center gap-4 md:gap-5">
        <div className="flex items-center gap-2.5">
          <div
            className={`w-5 h-5 bg-[${selectedUserGroups.allUsers ? '#11A900' : '#FBFBFB'}] border-2 border-[#11A900] cursor-pointer`}
            onClick={() => handleCheckboxChange('allUsers')}
          />
          <span className="text-base md:text-lg font-medium">All XBX Users</span>
        </div>
        <div className="flex items-center gap-2.5">
          <div
            className={`w-5 h-5 bg-[${selectedUserGroups.customers ? '#11A900' : '#FBFBFB'}] border-2 border-[#11A900] cursor-pointer`}
            onClick={() => handleCheckboxChange('customers')}
          />
          <span className="text-base md:text-lg font-medium">Customers</span>
        </div>
        <div className="flex items-center gap-2.5">
          <div
            className={`w-5 h-5 bg-[${selectedUserGroups.investors ? '#11A900' : '#FBFBFB'}] border-2 border-[#11A900] cursor-pointer`}
            onClick={() => handleCheckboxChange('investors')}
          />
          <span className="text-base md:text-lg font-medium">Investors</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-[#F4F4F4] p-4 md:p-8 lg:p-12">
      <div className="max-w-[1104px] mx-auto flex flex-col gap-6 md:gap-8">
        <div className="flex flex-col gap-5 md:gap-6 w-full">
          <div className="flex flex-col gap-6 md:gap-8 max-w-[788px]">
            {/* Header */}
            <div className="flex flex-col gap-6 md:gap-7">
              <div className="flex items-center gap-2.5">
                <div className="w-[10px] h-[50px] bg-[#11A900]" />
                <h1 className="text-2xl md:text-[30px] font-semibold font-poppins text-[#061404] text-nowrap">
                  Notification
                </h1>
              </div>

              {/* Category Tabs */}
              <div className="flex items-center gap-2.5 flex-wrap">
                <button
                  onClick={() => setSelectedTab('specific')}
                  className={`px-4 py-0.5 rounded-[20px] transition-colors ${
                    selectedTab === 'specific'
                      ? 'bg-[rgba(17,169,0,0.3)] text-[#11A900] font-bold'
                      : 'bg-[rgba(224,224,224,0.6)] text-[#787777] font-medium'
                  }`}
                >
                  <span className="text-base md:text-xl">specific Users</span>
                </button>
                <button
                  onClick={() => setSelectedTab('broadcasting')}
                  className={`px-4 py-0.5 rounded-[20px] transition-colors ${
                    selectedTab === 'broadcasting'
                      ? 'bg-[rgba(17,169,0,0.3)] text-[#11A900] font-bold'
                      : 'bg-[rgba(224,224,224,0.6)] text-[#787777] font-medium'
                  }`}
                >
                  <span className="text-base md:text-xl">Broadcasting</span>
                </button>
              </div>
            </div>

            {/* Tab Content */}
            {selectedTab === 'specific'
              ? renderSpecificUsersContent()
              : renderBroadcastingContent()}
          </div>

          {/* Warning Text */}
          <p className="text-sm md:text-lg text-[#787777] leading-relaxed">
            Before sending any notification to users, ensure that the message is free of spelling
            errors and uses clear, professional language. Double-check for proper grammar, tone, and
            formatting. Remember, notifications represent our platform, so they should be polished
            and easy to understand to maintain our credibility and user trust.
          </p>

          {/* Notification Content */}
          <div className="flex flex-col gap-2.5 w-full">
            <h2 className="text-lg md:text-xl font-semibold">Notification Content</h2>
            <textarea
              className="w-full h-[100px] bg-[rgba(255,255,255,0.6)] border border-[#11A900] rounded-[20px] p-4 resize-none outline-none text-base md:text-lg"
              value={notificationContent}
              onChange={(e) => setNotificationContent(e.target.value)}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end w-full">
          <button className="px-4 py-0.5 bg-[#11A900] rounded-[20px] text-white font-semibold text-base md:text-xl h-10 w-[160px] md:w-[213px] transition-colors hover:bg-[#0e8a00]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
