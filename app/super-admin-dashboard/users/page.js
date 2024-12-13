'use client';
import Image from 'next/image';

const UsersPage = () => {
  const users = [
    {
      username: '@lordseif07',
      email: 'corosempi@gmail.com',
      type: 'Customer',
      status: 'active',
      iconColor: '#11A900',
    },
    {
      username: '@lordseif07',
      email: 'corosempi@gmail.com',
      type: 'Customer',
      status: 'inactive',
      iconColor: '#787777',
    },
    {
      username: '@lordseif07',
      email: 'corosempi@gmail.com',
      type: 'Customer',
      status: 'pending',
      iconColor: '#CDDF07',
    },
    {
      username: '@lordseif07',
      email: 'corozan07@gmail.com',
      type: 'Investor',
      status: 'inactive',
      iconColor: '#787777',
    },
    {
      username: '@lordseif07',
      email: 'corozan07@gmail.com',
      type: 'Investor',
      status: 'pending',
      iconColor: '#CDDF07',
    },
    {
      username: '@lordseif07',
      email: 'corozan07@gmail.com',
      type: 'Investor',
      status: 'active',
      iconColor: '#11A900',
    },
  ];

  return (
    <div className="relative w-full max-w-[1104px] mx-auto  p-4 flex flex-col items-start gap-[20px]">
      {/* Header Section */}
      <div className="w-full flex flex-col items-start gap-[30px]">
        <div className="w-full flex flex-col items-start gap-[27px]">
          {/* Title */}
          <div className="flex flex-row items-center gap-[10px]">
            <div className="w-[10px] h-[50px] bg-[#11A900]" />
            <h1 className="font-poppins font-semibold text-[24px] md:text-[30px] leading-[160%] text-[#061404]">
              XBX Users
            </h1>
          </div>

          {/* Categories */}
          <div className="flex flex-row flex-wrap items-center gap-[10px]">
            <div className="flex justify-center items-center px-[16px] py-[2px] gap-[5px] bg-[rgba(17,169,0,0.3)] rounded-[20px]">
              <span className="font-inter font-bold text-[16px] md:text-[20px] leading-[24px] text-[#11A900]">
                All Users
              </span>
            </div>
            <div className="flex justify-center items-center px-[16px] py-[2px] gap-[5px] bg-[rgba(224,224,224,0.6)] rounded-[20px]">
              <span className="font-poppins font-medium text-[16px] md:text-[20px] leading-[30px] text-[#787777]">
                XBX Customers
              </span>
            </div>
            <div className="flex justify-center items-center px-[16px] py-[2px] gap-[5px] bg-[rgba(224,224,224,0.6)] rounded-[20px]">
              <span className="font-poppins font-medium text-[16px] md:text-[20px] leading-[30px] text-[#787777]">
                XBX Investors
              </span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-full md:max-w-[788px] h-[50px] flex items-center px-5 gap-[5px] bg-[#FBFBFB] border border-[#919191] rounded-[20px]">
          <Image
            src="/icons/search-dashboard.svg"
            alt="Search"
            width={30}
            height={30}
            className="text-[#909090] w-5 h-5 md:w-6 md:h-6"
          />
          <input
            type="text"
            placeholder="Looking for specific user ?"
            className="flex-1 bg-transparent text-[14px] md:text-[18px] font-poppins text-[#909090] outline-none"
          />
        </div>
      </div>

      {/* Users List Section */}
      <div className="w-full flex flex-col items-start gap-[20px]">
        {/* Warning Message */}
        <p className="font-poppins font-normal text-[14px] md:text-[18px] leading-[27px] text-[#787777]">
          Before deleting any user or sending a notification, ensure that the action is necessary,
          justified, and aligns with the platform's guidelines. Double-check the details to avoid
          errors. Remember, you are responsible for the accuracy and impact of these actions.
        </p>

        {/* Users List */}
        <div className="w-full flex flex-col items-start gap-[20px]">
          {users.map((user, index) => (
            <div
              key={index}
              className="w-full bg-white shadow-[0px_5px_10px_rgba(0,0,0,0.1)] rounded-[20px] h-[73px] md:h-[73px] flex flex-col md:flex-row justify-between items-start md:items-center px-[31px] py-[22px] gap-[10px]"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-[10px] flex-wrap">
                <div className="flex items-center gap-[10px]">
                  <span className="font-poppins font-medium text-[16px] md:text-[18px] leading-[160%] text-black">
                    {user.username}
                  </span>
                  <div
                    className={`w-[28px] h-[28px] flex justify-center items-center p-[4px] rounded-full 
                      ${
                        user.status === 'active'
                          ? 'bg-[rgba(17,169,0,0.2)]'
                          : user.status === 'pending'
                            ? 'bg-[rgba(205,223,7,0.2)]'
                            : 'bg-[rgba(120,119,119,0.2)]'
                      }`}
                  >
                    <Image
                      src="/icons/verified-icon.svg"
                      width={24}
                      height={24}
                      alt="status-icon"
                      style={{
                        filter:
                          user.status === 'active'
                            ? 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%)'
                            : user.status === 'pending'
                              ? 'invert(89%) sepia(11%) saturate(6048%) hue-rotate(19deg) brightness(99%) contrast(94%)'
                              : 'invert(47%) sepia(3%) saturate(0%) hue-rotate(253deg) brightness(98%) contrast(92%)',
                      }}
                    />
                  </div>
                </div>
                <span className="font-poppins font-medium text-[14px] md:text-[18px] leading-[160%] text-[#787777]">
                  {user.email}
                </span>
                <span className="font-poppins font-bold text-[14px] md:text-[18px] leading-[160%] text-[#11A900]">
                  {user.type}
                </span>
              </div>
              <span className="font-poppins font-semibold text-[14px] md:text-[18px] leading-[160%] text-[#787777]">
                Send Notification Delete
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
