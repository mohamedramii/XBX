'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const UpdateOrderPage = () => {
  const [selectedStatus, setSelectedStatus] = useState('');
  const router = useRouter();

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  const handleUpdate = () => {
    // Handle update logic here
    router.back();
  };

  return (
    <div className="relative w-full max-w-[1131px]  flex flex-col items-start gap-4 sm:gap-[26px]">
      {/* Header Section */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-[10px] w-full">
        <div className="w-[5px] sm:w-[28px] h-[30px] sm:h-[50px] bg-[#11A900]" />
        <span className="text-[16px] sm:text-[20px] md:text-[30px] font-poppins font-semibold text-[#061404]">
          lordseif07
        </span>
        <div className="hidden sm:block w-0 h-[30px] border-[2px] sm:border-[3px] border-black" />
        <span className="text-[16px] sm:text-[20px] md:text-[30px] font-poppins font-semibold text-[#787777]">
          Orders
        </span>
        <div className="hidden sm:block w-0 h-[30px] border-[2px] sm:border-[3px] border-black" />
        <span className="text-[14px] sm:text-[18px] md:text-[30px] font-poppins font-semibold text-[#787777]">
          HP Victus 15-fa0031dx Gaming Laptop
        </span>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-start gap-4 sm:gap-[25px] w-full">
        {/* Order Details Card */}
        <div className="flex flex-col justify-center items-start px-3 sm:px-[24px] gap-2 sm:gap-[20px] w-full bg-white shadow-[0px_5px_10px_rgba(0,0,0,0.1)] rounded-[20px] py-3 sm:py-5">
          <div className="flex flex-col items-start gap-2 sm:gap-[10px] w-full max-w-[756px]">
            <h3 className="font-poppins font-semibold text-[16px] sm:text-[20px] text-[#061404]">
              HP Victus 15-fa0031dx Gaming Laptop
            </h3>
            <p className="font-poppins font-semibold text-[14px] sm:text-[18px] text-[#11A900]">
              Quantity : 4 | Price Per Piece : 1,232$ | Total Price : 4892$ | Status : Pending
            </p>
            <p className="font-poppins font-semibold text-[14px] sm:text-[18px] text-[#11A900]">
              OrderDate : 20 Nov 2024 | Paid : True
            </p>
          </div>
        </div>

        {/* Update Options */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 sm:gap-0">
          <div className="flex flex-row items-center justify-center gap-4 sm:gap-[20px]">
            {/* Delivered Option */}
            <div
              className="flex items-center gap-2 sm:gap-[10px] cursor-pointer"
              onClick={() => handleStatusChange('Delivered')}
            >
              <div
                className={`w-[15px] sm:w-[20px] h-[15px] sm:h-[20px] bg-[#FBFBFB] border-2 border-[#11A900] relative ${
                  selectedStatus === 'Delivered'
                    ? 'after:content-[""] after:absolute after:w-[8px] sm:after:w-[12px] after:h-[8px] sm:after:h-[12px] after:bg-[#11A900] after:left-[2px] sm:after:left-[2px] after:top-[2px] sm:after:top-[2px]'
                    : ''
                }`}
              />
              <span className="font-poppins font-semibold text-[14px] sm:text-[18px] text-[#061404]">
                Delivered
              </span>
            </div>

            {/* Cancelled Option */}
            <div
              className="flex items-center gap-2 sm:gap-[10px] cursor-pointer"
              onClick={() => handleStatusChange('Cancelled')}
            >
              <div
                className={`w-[15px] sm:w-[20px] h-[15px] sm:h-[20px] bg-[#FBFBFB] border-2 border-[#11A900] relative ${
                  selectedStatus === 'Cancelled'
                    ? 'after:content-[""] after:absolute after:w-[8px] sm:after:w-[12px] after:h-[8px] sm:after:h-[12px] after:bg-[#11A900] after:left-[2px] sm:after:left-[2px] after:top-[2px] sm:after:top-[2px]'
                    : ''
                }`}
              />
              <span className="font-poppins font-semibold text-[14px] sm:text-[18px] text-[#061404]">
                Cancelled
              </span>
            </div>
          </div>

          {/* Update Button */}
          <button
            className="flex justify-center items-center py-[2px] px-3 sm:px-[16px] gap-[10px] w-[130px] sm:w-[213px] h-[35px] sm:h-[40px] bg-[#11A900] rounded-[20px]"
            onClick={handleUpdate}
          >
            <span className="font-poppins font-semibold text-[14px] sm:text-[20px] text-white">
              Update
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateOrderPage;
