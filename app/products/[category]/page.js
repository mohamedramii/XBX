"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useRef } from "react";

const CategoryHero = ({ title, description, backgroundImage }) => {
  return (
    <div 
      className="relative w-full min-h-[400px] sm:min-h-[600px] md:min-h-[739px] flex items-center justify-center"
      style={{
        background: `linear-gradient(0deg, rgba(51, 68, 51, 0.7), rgba(51, 68, 51, 0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col items-center gap-8 max-w-[751px] w-full px-4 text-center">
        <h1 className="font-poppins font-bold text-2xl sm:text-3xl md:text-[40px] leading-[160%] text-[#FBFBFB]">
          {title}
        </h1>
        <p className="font-poppins font-semibold text-base sm:text-lg md:text-[24px] leading-[160%] text-[#FBFBFB]">
          {description}
        </p>
      </div>
    </div>
  );
};

const CategoryContent = ({ items }) => {
  const router = useRouter();
  const params = useParams();
  const scrollRefs = useRef(items.map(() => null));

  useEffect(() => {
    // Auto scroll function for each slider
    const intervals = items.map((_, index) => {
      const scrollContainer = scrollRefs.current[index];
      let scrollPosition = 0;

      return setInterval(() => {
        if (scrollContainer) {
          scrollPosition += scrollContainer.clientWidth / 5; // Scroll one image width
          if (scrollPosition >= scrollContainer.scrollWidth) {
            scrollPosition = 0;
          }
          scrollContainer.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
          });
        }
      }, 3000); // Scroll every 3 seconds
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, [items]);

  const handleProductClick = (item, imageIndex) => {
    const productSlug = item.title.toLowerCase().replace(/\s+/g, '-');
    router.push(`/products/${params.category}/${productSlug}-${imageIndex + 1}`);
  };

  return (
    <div className="relative w-full max-w-[1798px] mx-auto py-10 sm:py-[80px] flex flex-col gap-8 sm:gap-[68px] px-4 sm:px-[40px] md:px-[80px]">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col items-start gap-4 w-full">
          <h2 className="font-poppins font-bold text-xl sm:text-2xl md:text-[28px] leading-[160%] text-[#192B1A] w-full">
            {item.title}
          </h2>
          
          <div 
            ref={el => scrollRefs.current[index] = el}
            className="flex flex-row items-start gap-[32px] w-full overflow-x-auto scrollbar-hide"
          >
            {item.images && item.images.map((image, imgIndex) => (
              <div 
                key={imgIndex} 
                className="relative flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105"
                style={{
                  width: image.width || '300px',
                  height: image.height || '386px'
                }}
                onClick={() => handleProductClick(item, imgIndex)}
              >
                <Image
                  src={image.src}
                  alt={`${item.title} ${imgIndex + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const categoryData = {
  'jewelry-and-accessories': {
    title: "Welcome to Jewelry and Accessories Department",
    description: "Discover our collection of elegant jewelry, stylish accessories, and more",
    backgroundImage: "/images/jewelry.png",
    items: [
      {
        title: "Sun Glasses",
        images: [
          { src: "/images/sunglasses/1.png", width: "300px", height: "386px" },
          { src: "/images/sunglasses/2.png", width: "303px", height: "379px" },
          { src: "/images/sunglasses/3.png", width: "338px", height: "386px" },
          { src: "/images/sunglasses/4.png", width: "355px", height: "379px" },
          { src: "/images/sunglasses/5.png", width: "374px", height: "386px" }
        ]
      },
      {
        title: "Watches",
        images: [
          { src: "/images/watches/1.png", width: "303px", height: "379px" },
          { src: "/images/watches/2.png", width: "300px", height: "386px" },
          { src: "/images/watches/3.png", width: "355px", height: "379px" },
          { src: "/images/watches/4.png", width: "374px", height: "386px" },
          { src: "/images/watches/5.png", width: "338px", height: "386px" }
        ]
      },
      {
        title: "Ear Rings",
        images: [
          { src: "/images/earrings/1.png", width: "374px", height: "386px" },
          { src: "/images/earrings/2.png", width: "338px", height: "386px" },
          { src: "/images/earrings/3.png", width: "300px", height: "386px" },
          { src: "/images/earrings/4.png", width: "355px", height: "379px" },
          { src: "/images/earrings/5.png", width: "303px", height: "379px" }
        ]
      }
    ]
  },
  'health-and-beauty': {
    title: "Welcome to Health and Beauty Department",
    description: "Explore our range of beauty products, skincare, and wellness items",
    backgroundImage: "/images/beauty.png",
    items: [
      {
        title: "Skincare",
        images: [
          { src: "/images/skincare/1.png", width: "300px", height: "386px" },
          { src: "/images/skincare/2.png", width: "303px", height: "379px" },
          { src: "/images/skincare/3.png", width: "338px", height: "386px" },
          { src: "/images/skincare/4.png", width: "355px", height: "379px" },
          { src: "/images/skincare/5.png", width: "374px", height: "386px" }
        ]
      },
      {
        title: "Makeup",
        images: [
          { src: "/images/makeup/1.png", width: "303px", height: "379px" },
          { src: "/images/makeup/2.png", width: "300px", height: "386px" },
          { src: "/images/makeup/3.png", width: "355px", height: "379px" },
          { src: "/images/makeup/4.png", width: "374px", height: "386px" },
          { src: "/images/makeup/5.png", width: "338px", height: "386px" }
        ]
      },
      {
        title: "Personal Care",
        images: [
          { src: "/images/personal-care/1.png", width: "374px", height: "386px" },
          { src: "/images/personal-care/2.png", width: "338px", height: "386px" },
          { src: "/images/personal-care/3.png", width: "300px", height: "386px" },
          { src: "/images/personal-care/4.png", width: "355px", height: "379px" },
          { src: "/images/personal-care/5.png", width: "303px", height: "379px" }
        ]
      }
    ]
  },
  'cars-and-transportation': {
    title: "Welcome to Cars and Transportation Department",
    description: "Find everything for your vehicle and transportation needs",
    backgroundImage: "/images/cars.png",
    items: [
      {
        title: "Car Accessories",
        images: [
          { src: "/images/car-accessories/1.png", width: "300px", height: "386px" },
          { src: "/images/car-accessories/2.png", width: "303px", height: "379px" },
          { src: "/images/car-accessories/3.png", width: "338px", height: "386px" },
          { src: "/images/car-accessories/4.png", width: "355px", height: "379px" },
          { src: "/images/car-accessories/5.png", width: "374px", height: "386px" }
        ]
      },
      {
        title: "Maintenance",
        images: [
          { src: "/images/maintenance/1.png", width: "303px", height: "379px" },
          { src: "/images/maintenance/2.png", width: "300px", height: "386px" },
          { src: "/images/maintenance/3.png", width: "355px", height: "379px" },
          { src: "/images/maintenance/4.png", width: "374px", height: "386px" },
          { src: "/images/maintenance/5.png", width: "338px", height: "386px" }
        ]
      },
      {
        title: "Safety",
        images: [
          { src: "/images/safety/1.png", width: "374px", height: "386px" },
          { src: "/images/safety/2.png", width: "338px", height: "386px" },
          { src: "/images/safety/3.png", width: "300px", height: "386px" },
          { src: "/images/safety/4.png", width: "355px", height: "379px" },
          { src: "/images/safety/5.png", width: "303px", height: "379px" }
        ]
      }
    ]
  }
  // Add other categories following the same pattern...
};

export default function CategoryPage() {
  const params = useParams();
  const category = params.category;
  const data = categoryData[category];

  if (!data) {
    return <div className="py-20 text-center font-poppins text-xl">Category not found</div>;
  }

  return (
    <div className="w-full">
      <CategoryHero 
        title={data.title}
        description={data.description}
        backgroundImage={data.backgroundImage}
      />
      <CategoryContent items={data.items} />
    </div>
  );
}
