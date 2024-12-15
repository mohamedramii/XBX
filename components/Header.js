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
    <header className="relative flex justify-between h-[90px] md:h-[120px] items-center w-full p-4 bg-[#E6F4E4] dark:bg-[#18281B] px-6 md:px-20 transition-colors duration-300">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="cursor-pointer">
          <h1 className="text-[36px] md:text-[56px] font-black uppercase text-[#0D0D0D] dark:text-[#FBFBFB] transition-colors duration-300">
            XBX
          </h1>
        </Link>
      </div>

      {/* Hamburger Menu - Only visible on mobile */}
      <div className="md:hidden">
        <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>

      {/* Desktop Navigation - Hidden on mobile */}
      <div className="hidden md:flex items-center space-x-6">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-12 pr-3 py-3 w-64 bg-transparent border border-gray-300 dark:border-gray-600 rounded-[50px] focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 dark:text-[#FBFBFB] placeholder-[#CBCBCB] dark:placeholder-gray-400 transition-colors duration-300"
          />
          <Image
            width={32}
            height={32}
            src="/icons/iconamoon_search-bold.svg"
            alt="Search"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none dark:filter dark:brightness-0 dark:invert transition-all duration-300"
          />
        </div>
        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Link href="/profile">
            <Image
              width={56}
              height={56}
              src="/icons/iconamoon_profile-bold.svg"
              alt="Profile"
              className="cursor-pointer dark:filter dark:brightness-0 dark:invert transition-all duration-300"
            />
          </Link>
          <Link href="/chat">
            <Image
              width={56}
              height={56}
              src="/icons/basil_chat-outline.svg"
              alt="Chat"
              className="cursor-pointer dark:filter dark:brightness-0 dark:invert transition-all duration-300"
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

      {/* Mobile Navigation - Only visible when menu is open */}
      <div className={`
        md:hidden
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
