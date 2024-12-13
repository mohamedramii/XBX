'use client';

import React from 'react';
import Image from 'next/image';

export default function UsersPage() {
  return (
    <div className="flex flex-col items-start gap-4 sm:gap-[20px] px-4  w-full max-w-[1440px] ">
      {/* Header Section */}
      <div className="w-full max-w-[788px] flex flex-col items-start gap-4 sm:gap-[30px]">
        <div className="w-full max-w-[496px] flex flex-col items-start gap-4 sm:gap-[27px]">
          {/* Title */}
          <div className="flex flex-row items-center gap-2 sm:gap-[10px]">
            <div className="w-[5px] sm:w-[10px] h-[30px] sm:h-[50px] bg-[#11A900]" />
            <h1 className="text-[20px] sm:text-[24px] md:text-[30px] font-semibold font-poppins text-[#061404]">
              XBX Users
            </h1>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-[10px]">
            <button className="h-[30px] sm:h-[40px] px-3 sm:px-4 flex items-center justify-center bg-[rgba(17,169,0,0.3)] rounded-[20px]">
              <span className="text-[14px] sm:text-[20px] font-bold font-inter text-[#11A900]">
                All Users
              </span>
            </button>
            <button className="h-[30px] sm:h-[40px] px-3 sm:px-4 flex items-center justify-center bg-[rgba(224,224,224,0.6)] rounded-[20px]">
              <span className="text-[14px] sm:text-[20px] font-medium font-poppins text-[#787777]">
                XBX Customers
              </span>
            </button>
            <button className="h-[30px] sm:h-[40px] px-3 sm:px-4 flex items-center justify-center bg-[rgba(224,224,224,0.6)] rounded-[20px]">
              <span className="text-[14px] sm:text-[20px] font-medium font-poppins text-[#787777]">
                XBX Investors
              </span>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-[788px] h-[40px] sm:h-[50px] flex items-center px-3 sm:px-5 gap-[5px] bg-[#FBFBFB] border border-[#919191] rounded-[20px]">
          <Image
            src="/icons/search-dashboard.svg"
            alt="Search"
            width={20}
            height={20}
            className="text-[#909090]"
          />
          <input
            type="text"
            placeholder="Looking for specific user ?"
            className="flex-1 bg-transparent text-[14px] sm:text-[18px] font-poppins text-[#909090] outline-none"
          />
        </div>
      </div>

      {/* Users List Section */}
      <div className="w-full flex flex-col gap-4 sm:gap-[20px]">
        {/* Warning Message */}
        <p className="w-full text-[14px] sm:text-[18px] font-poppins text-[#787777] leading-[21px] sm:leading-[27px]">
          Before deleting any user or sending a notification, ensure that the action is necessary,
          justified, and aligns with the platform's guidelines.
        </p>

        {/* Users List */}
        <div className="w-full flex flex-col gap-4 sm:gap-[20px]">
          {[1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              className="w-full h-auto sm:h-[73px] flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-[31px] py-3 sm:py-[22px] bg-white shadow-[0px_5px_10px_rgba(0,0,0,0.1)] rounded-[20px] gap-2 sm:gap-0"
            >
              <div className="flex items-center gap-2 min-w-[150px]">
                <span className="text-[14px] sm:text-[18px] font-medium font-poppins">
                  @lordseif07
                </span>
                {index % 2 === 1 && (
                  <Image src="/icons/verified-icon.svg" alt="Verified" width={20} height={20} />
                )}
              </div>
              <span className="text-[14px] sm:text-[18px] font-medium font-poppins text-[#787777] min-w-[200px] sm:w-[250px]">
                {index % 2 === 1 ? 'corozan07@gmail.com' : 'corosempi@gmail.com'}
              </span>
              <span className="text-[14px] sm:text-[18px] font-bold font-poppins text-[#11A900] min-w-[80px] sm:w-[100px]">
                {index % 2 === 1 ? 'Investor' : 'Customer'}
              </span>
              <div className="text-[14px] sm:text-[18px] font-semibold font-poppins text-[#787777] cursor-pointer w-full sm:w-[250px] text-center sm:text-left">
                Send Notification Delete
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
