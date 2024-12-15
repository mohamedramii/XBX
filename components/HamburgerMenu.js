'use client';
import { useState, useEffect } from 'react';

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      className="flex flex-col justify-center items-center md:hidden w-8 h-8 space-y-1.5 focus:outline-none"
      aria-label="Toggle menu"
    >
      <span
        className={`block w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ease-out
          ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
      />
      <span
        className={`block w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ease-out
          ${isOpen ? 'opacity-0' : 'opacity-100'}`}
      />
      <span
        className={`block w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ease-out
          ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
      />
    </button>
  );
};

export default HamburgerMenu;
