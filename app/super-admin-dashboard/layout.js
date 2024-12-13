'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { logoutSuperAdmin, selectSuperAdminUser } from '@/redux/slices/adminSlice';

const SuperAdminDashboardLayout = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const superAdminUser = useSelector(selectSuperAdminUser);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (pathname === '/super-admin-dashboard') {
      router.replace('/super-admin-dashboard/overview');
    }
  }, [pathname, router]);

  const handleSignOut = async () => {
    const success = await dispatch(logoutSuperAdmin());
    if (success) {
      router.push('/super-admin-sign-in');
    }
  };

  const menuItems = [
    {
      title: 'Dashboard',
      path: '/super-admin-dashboard/overview',
      name: 'Dashboard',
    },
    {
      title: 'Products',
      path: '/super-admin-dashboard/products',
      name: 'Products',
    },
    {
      title: 'Services',
      path: '/super-admin-dashboard/services',
      name: 'Services',
    },
    {
      title: 'Users',
      path: '/super-admin-dashboard/users',
      name: 'Users',
    },
    {
      title: 'Investments',
      path: '/super-admin-dashboard/investments',
      name: 'Investments',
    },
    {
      title: 'Inbox',
      path: '/super-admin-dashboard/inbox',
      name: 'Inbox',
    },
    null, // divider
    {
      title: 'Admins',
      path: '/super-admin-dashboard/admins',
      name: 'Admins',
    },
    {
      title: 'Notification',
      path: '/super-admin-dashboard/notification',
      name: 'Notification',
    },
    {
      title: 'Orders',
      path: '/super-admin-dashboard/orders',
      name: 'Orders',
    },
    null, // divider
    {
      title: 'LogOut',
      action: handleSignOut,
      name: 'LogOut',
      className: 'text-[#C30000] cursor-pointer',
    },
  ];

  const isActiveLink = (path) => {
    if (path === '/super-admin-dashboard/overview') {
      return pathname === path || pathname === '/super-admin-dashboard';
    }
    return pathname.startsWith(path);
  };

  return (
    <div className="flex min-h-screen w-full bg-[#F4F4F4]">
      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-screen bg-white transform transition-transform duration-300 ease-in-out z-50 w-[280px] md:w-[320px] lg:w-[354px] ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="px-6 md:px-8 lg:px-10 pt-6 md:pt-8 lg:pt-[30px] pb-6 md:pb-8 lg:pb-[30px]">
          <h1 className="text-2xl md:text-[26px] lg:text-[28px] font-semibold">
            <span className="text-[#11A900]">XBX</span> Dashboard
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 md:gap-3 lg:gap-[12px] px-6 md:px-8 lg:px-10">
          {menuItems.map((item, index) =>
            item === null ? (
              <div key={index} className="h-px bg-[rgba(151,151,151,0.4)]" />
            ) : item.action ? (
              <div
                key={index}
                onClick={item.action}
                className={`block relative ${item.className || 'text-[#061404]'} flex items-center gap-[10px] py-2.5 md:py-3 lg:py-[10px] px-4 md:px-5 transition-all hover:bg-[rgba(17,169,0,0.1)] rounded-md`}
              >
                <span className="text-sm md:text-[15px] lg:text-base text-[#787777]">
                  {item.title}
                </span>
              </div>
            ) : (
              <Link
                href={item.path}
                key={index}
                className={`block relative ${
                  isActiveLink(item.path)
                    ? 'bg-[rgba(17,169,0,0.1)] -mx-6 md:-mx-8 lg:-mx-10 px-6 md:px-8 lg:px-10 py-2.5 md:py-3 lg:py-4 before:content-[""] before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-[#11A900]'
                    : ''
                } ${item.className || 'text-[#061404]'} flex items-center gap-[10px] py-2.5 md:py-3 lg:py-[10px] px-4 md:px-5 transition-all hover:bg-[rgba(17,169,0,0.1)] rounded-md`}
              >
                <span
                  className={`text-sm md:text-[15px] lg:text-base ${
                    isActiveLink(item.path) ? 'text-[#11A900] font-semibold' : 'text-[#787777]'
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
        className={`flex-1 min-h-screen flex flex-col transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'ml-[280px] md:ml-[320px] lg:ml-[354px]' : 'ml-0'
        }`}
      >
        {/* Header */}
        <header className="sticky top-0 h-[70px] md:h-[80px] lg:h-[90px] bg-white px-4 md:px-6 lg:px-[34px] flex justify-between items-center z-40 shadow-sm">
          <div className="flex items-center gap-3 md:gap-5 lg:gap-[30px]">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Image
                src="/icons/hamburger-menu-dashboard.svg"
                width={28}
                height={28}
                alt="Menu"
                className="w-6 md:w-7 lg:w-[35px]"
              />
            </button>
            <div className="hidden md:flex items-center gap-1.5 px-4 md:px-5 py-2.5 border border-[#919191] rounded-[20px] w-[280px] lg:w-[460px]">
              <span className="text-[#909090]">
                <Image
                  src="/icons/search-dashboard.svg"
                  width={20}
                  height={20}
                  alt="Search"
                  className="w-5 lg:w-[30px]"
                />
              </span>
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none flex-1 text-[#909090] text-sm lg:text-base placeholder:text-[#909090]"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-4 lg:gap-5">
            <span className="text-sm md:text-xl lg:text-2xl font-semibold">
              Hi, {superAdminUser?.name || 'Super Admin'}
            </span>
            <button className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 flex items-center justify-center text-[#11A900] hover:bg-[rgba(17,169,0,0.1)] rounded-lg transition-colors">
              <Image
                src="/icons/inbox-dashboard.svg"
                width={24}
                height={24}
                alt="Inbox"
                className="w-5 md:w-6 lg:w-[30px]"
              />
            </button>
            <button
              onClick={handleSignOut}
              className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 flex items-center justify-center text-[#C30000] hover:bg-[rgba(195,0,0,0.1)] rounded-lg transition-colors"
            >
              <Image
                src="/icons/logout-dashboard.svg"
                width={24}
                height={24}
                alt="Sign Out"
                className="w-5 md:w-6 lg:w-[30px]"
              />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1  overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default SuperAdminDashboardLayout;
