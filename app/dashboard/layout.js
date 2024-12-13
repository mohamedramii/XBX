'use client';

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAdmin, selectAdminUser } from '@/redux/slices/adminSlice';

const DashboardLayout = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const adminUser = useSelector(selectAdminUser);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSignOut = async () => {
    const success = await dispatch(logoutAdmin());
    if (success) {
      router.push('/admin-sign-in');
    }
  };

  const menuItems = [
    {
      title: 'Dashboard',
      path: '/dashboard/overview',
      icon: '/icons/dashboard-icon.svg',
      name: 'Dashboard',
    },
    {
      title: 'Products',
      path: '/dashboard/products',
      icon: '/icons/products-icon.svg',
      name: 'Products',
    },
    {
      title: 'Services',
      path: '/dashboard/services',
      icon: '/icons/services-icon.svg',
      name: 'Services',
    },
    {
      title: 'Users',
      path: '/dashboard/users',
      icon: '/icons/users-icon.svg',
      name: 'Users',
    },
    {
      title: 'Investments',
      path: '/dashboard/investments',
      icon: '/icons/investments-icon.svg',
      name: 'Investments',
    },
    {
      title: 'Inbox',
      path: '/dashboard/inbox',
      icon: '/icons/inbox-icon.svg',
      name: 'Inbox',
    },
    null, // divider
    {
      title: 'Notification',
      path: '/dashboard/notification',
      icon: '/icons/notification-icon.svg',
      name: 'Notification',
    },
    {
      title: 'Orders',
      path: '/dashboard/orders',
      icon: '/icons/orders-icon.svg',
      name: 'Orders',
    },
    null, // divider
    {
      title: 'LogOut',
      action: handleSignOut,
      icon: '/icons/logout-icon.svg',
      name: 'LogOut',
      className: 'text-[#C30000] cursor-pointer',
    },
  ];

  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-screen bg-white transform transition-transform duration-300 ease-in-out z-50 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ width: '280px' }} // narrower sidebar for better responsiveness
      >
        {/* Logo */}
        <div className="px-4 sm:px-8 pt-[40px] sm:pt-[66px] pb-[30px] sm:pb-[57px]">
          <h1 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold">
            <span className="text-[#11A900]">XBX</span> Dashboard
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-[8px] sm:gap-[12px] px-4 sm:px-10">
          {menuItems.map((item, index) =>
            item === null ? (
              <div key={index} className="h-px bg-[rgba(151,151,151,0.4)]" />
            ) : item.action ? (
              <div
                key={index}
                onClick={item.action}
                className={`block text-base sm:text-xl relative ${item.className || 'text-[#061404]'} flex items-center gap-[10px] py-[8px] sm:py-[10px] px-3 sm:px-5 transition-all hover:bg-[rgba(17,169,0,0.1)] cursor-pointer`}
              >
                <span className="text-[14px] sm:text-base text-[#787777]">{item.title}</span>
              </div>
            ) : (
              <Link
                href={item.path}
                key={index}
                className={`block text-base sm:text-xl relative ${
                  (pathname.includes(item.path) && item.path === '/dashboard/products') ||
                  pathname === item.path
                    ? 'bg-[rgba(17,169,0,0.1)] -mx-3 sm:-mx-10 px-3 sm:px-10 py-[8px] sm:py-4 before:content-[""] before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-[#11A900]'
                    : ''
                } ${item.className || 'text-[#061404]'} flex items-center gap-[10px] py-[8px] sm:py-[10px] px-3 sm:px-5 transition-all hover:bg-[rgba(17,169,0,0.1)]`}
              >
                <span
                  className={`text-[14px] sm:text-base ${
                    pathname.includes(item.path) || pathname === item.path
                      ? 'text-[#11A900] font-semibold'
                      : 'text-[#787777]'
                  }`}
                >
                  {item.title}
                </span>
              </Link>
            )
          )}
        </nav>
      </div>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ease-in-out flex-1 flex flex-col h-screen ${
          isSidebarOpen ? 'ml-[280px]' : 'ml-0'
        }`}
      >
        {/* Header */}
        <header className="h-[70px] sm:h-[90px] bg-white px-4 sm:px-[34px] flex justify-between items-center shrink-0">
          <div className="flex items-center gap-[10px] sm:gap-[30px]">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="w-8 h-8 sm:w-10 sm:h-10"
            >
              <Image
                src="/icons/hamburger-menu-dashboard.svg"
                width={35}
                height={25}
                alt="Menu"
                className="w-6 sm:w-8"
              />
            </button>
            <div className="hidden sm:flex items-center gap-1.5 px-3 sm:px-5 py-2.5 border border-[#919191] rounded-[20px] w-[200px] sm:w-[460px]">
              <span className="text-[#909090]">
                <Image src="/icons/search-dashboard.svg" width={20} height={20} alt="Search" />
              </span>
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none flex-1 text-[#909090] text-sm sm:text-base"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-5">
            <span className="text-sm sm:text-2xl font-semibold">
              Hi, {adminUser?.name || 'Admin'}
            </span>
            <button className="w-8 h-8 sm:w-10 sm:h-10 text-[#11A900]">
              <Image src="/icons/inbox-dashboard.svg" width={30} height={30} alt="Inbox" />
            </button>
            <button onClick={handleSignOut} className="w-8 h-8 sm:w-10 sm:h-10 text-[#C30000]">
              <Image src="/icons/logout-dashboard.svg" width={30} height={30} alt="Sign Out" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 bg-[#F4F4F4] overflow-auto">
          <div className="p-4 sm:p-12">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
