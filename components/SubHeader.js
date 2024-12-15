'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const SubHeader = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const pathname = usePathname();

  const headerItems = [
    {
      icon: '/icons/storeIcon.svg',
      name: 'XBX Products',
      href: '/products',
    },
    {
      icon: '/icons/service.svg',
      name: 'XBX Services',
      href: '/services',
    },
    {
      icon: '/icons/INVEST.svg',
      name: 'XBX Investment',
      href: '/investment',
    },
  ];

  return (
    <div className="w-full bg-[#FBFBFB] dark:bg-[#FBFBFB] h-[80px] md:h-[104px] rounded-b-[30px] py-2 px-6 md:px-20">
      <div className="flex justify-between items-center space-x-4 md:space-x-6">
        {headerItems.map((item, index) => (
          <Link href={item.href} key={index}>
            <div
              className={`
                flex flex-col items-center cursor-pointer transition-all duration-300
                ${hoveredItem === index ? 'scale-105' : ''}
              `}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div
                className={`
                  w-[80px] md:w-[100px] h-[70px] md:h-[88px] flex flex-col items-center justify-center rounded-[20px]
                  transition-all duration-300
                  ${hoveredItem === index ? 'bg-[#CCF495]' : pathname === item.href || (item.href === '/products' && pathname === '/products/details') ? 'bg-[#CCF495]' : 'bg-[#F8FFEF] dark:bg-[#F8FFEF] dark:text-[#11A900]'}
                  shadow-[4px_4px_4px_0px_#E6E6E6,-4px_-4px_4px_0px_#E6E6E6]
                `}
              >
                <Image 
                  src={item.icon} 
                  alt={item.name} 
                  width={36} 
                  height={36}
                  className="w-[36px] h-[36px] md:w-[48px] md:h-[48px]" 
                />
                <p className="mt-1 md:mt-2 w-full text-nowrap text-[10px] md:text-xs text-center font-bold text-primary dark:text-[#11A900]">
                  {item.name}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubHeader;
