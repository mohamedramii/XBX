// components/Header.jsx

'use client';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../redux/slices/userSlice';
import { useRouter, usePathname } from 'next/navigation';
import { removeToken } from '../utils/token';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';
import '../styles/toggle.css';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  const user = useSelector((state) => state.user.userDetails);
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = () => {
    dispatch(clearUser());
    removeToken();
    router.push('/sign-in');
  };

  const handleToggle = (e) => {
    setIsDarkMode(e.target.checked);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('isDarkMode', isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const storedTheme = localStorage.getItem('isDarkMode');
    if (storedTheme === 'true') {
      setIsDarkMode(true);
      document.body.classList.add('dark');
    }
  }, []);

  return (
    <header className="relative flex justify-between h-[90px] sm:h-[100px] md:h-[120px] items-center w-full p-4 bg-[#E6F4E4] dark:bg-[#18281B] px-4 sm:px-8 md:px-12 lg:px-20 transition-colors duration-300">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="cursor-pointer">
          <h1 className="text-[32px] sm:text-[42px] md:text-[56px] font-black uppercase text-[#0D0D0D] dark:text-[#FBFBFB] transition-colors duration-300">
            XBX
          </h1>
        </Link>
      </div>

      {/* Hamburger Menu - Only visible on mobile and small tablets */}
      <div className="sm:hidden">
        <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>

      {/* Desktop Navigation - Hidden on mobile, custom layout for tablets */}
      <div className="hidden sm:flex items-center space-x-3 md:space-x-6">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 sm:pl-12 pr-3 py-2 sm:py-3 w-48 sm:w-56 md:w-64 bg-transparent border border-gray-300 dark:border-gray-600 rounded-[50px] focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 dark:text-[#FBFBFB] placeholder-[#CBCBCB] dark:placeholder-gray-400 transition-colors duration-300"
          />
          <Image
            width={24}
            height={24}
            src="/icons/iconamoon_search-bold.svg"
            alt="Search"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none dark:filter dark:brightness-0 dark:invert transition-all duration-300"
          />
        </div>
        {/* Icons */}
        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
          <Link href="/profile">
            <Image
              width={40}
              height={40}
              src="/icons/iconamoon_profile-bold.svg"
              alt="Profile"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 cursor-pointer dark:filter dark:brightness-0 dark:invert transition-all duration-300"
            />
          </Link>
          <Link href="/chat">
            <Image
              width={40}
              height={40}
              src="/icons/basil_chat-outline.svg"
              alt="Chat"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 cursor-pointer dark:filter dark:brightness-0 dark:invert transition-all duration-300"
            />
          </Link>
        </div>
        {/* Dark Mode Toggle */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="toggle"
            className="toggle--checkbox"
            checked={isDarkMode}
            onChange={handleToggle}
          />
          <label htmlFor="toggle" className="toggle--label">
            <span className="toggle--label-background"></span>
          </label>
        </div>
      </div>

      {/* Mobile Navigation - Modified for better small screen experience */}
      <div className={`
        sm:hidden
        ${isMenuOpen ? 'flex' : 'hidden'}
        absolute top-full left-0 right-0
        flex-col items-center
        space-y-4
        bg-[#E6F4E4] dark:bg-[#18281B]
        p-4
        shadow-lg
        transition-all duration-300 ease-in-out
        z-50
      `}>
        {/* Search Bar - Mobile */}
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-12 pr-3 py-2 bg-transparent border border-gray-300 dark:border-gray-600 rounded-[50px] focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 dark:text-[#FBFBFB] placeholder-[#CBCBCB] dark:placeholder-gray-400 transition-colors duration-300"
          />
          <Image
            width={24}
            height={24}
            src="/icons/iconamoon_search-bold.svg"
            alt="Search"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none dark:filter dark:brightness-0 dark:invert transition-all duration-300"
          />
        </div>
        {/* Icons - Mobile */}
        <div className="flex items-center space-x-4">
          <Link href="/profile">
            <Image
              width={32}
              height={32}
              src="/icons/iconamoon_profile-bold.svg"
              alt="Profile"
              className="cursor-pointer dark:filter dark:brightness-0 dark:invert transition-all duration-300"
            />
          </Link>
          <Link href="/chat">
            <Image
              width={32}
              height={32}
              src="/icons/basil_chat-outline.svg"
              alt="Chat"
              className="cursor-pointer dark:filter dark:brightness-0 dark:invert transition-all duration-300"
            />
          </Link>
        </div>
        {/* Dark Mode Toggle - Mobile */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="toggle"
            className="toggle--checkbox"
            checked={isDarkMode}
            onChange={handleToggle}
          />
          <label htmlFor="toggle" className="toggle--label">
            <span className="toggle--label-background"></span>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
