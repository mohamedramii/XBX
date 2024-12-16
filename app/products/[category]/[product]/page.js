'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const ProductPage = () => {
  const params = useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('description');
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity] = useState(1);

  // Mock product data - replace with your actual data
  const product = {
    title: 'Men Watch',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
    materials: 'High-quality stainless steel and genuine leather',
    warranty: '2 years international warranty',
    additionalServices: 'Free shipping and gift wrapping available',
    image: '/images/watches/1.png',
    sizes: ['24', '26', '28'],
    colors: [
      { name: 'gold', bg: '#F5D7B2' },
      { name: 'silver', bg: '#DDDDDD' },
      { name: 'black', bg: '#0E0E0E' },
    ],
    price: 299,
    minOrderQuantity: 'It is a long established fact',
    deliveryTime:
      'It is a long established fact It is a long established fact It is a long established fact It is a',
    paymentMethods:
      'It is a long established fact It is a long established fact It is a long established fact It is a',
    relatedProducts: [
      { image: '/images/watches/2.png', name: 'Classic Watch', width: 303, height: 379 },
      { image: '/images/watches/3.png', name: 'Sport Watch', width: 338, height: 386 },
      { image: '/images/watches/4.png', name: 'Smart Watch', width: 355, height: 379 },
      { image: '/images/watches/5.png', name: 'Luxury Watch', width: 374, height: 386 },
    ],
  };

  const getTabContent = () => {
    switch (activeTab) {
      case 'description':
        return product.description;
      case 'materials':
        return product.materials;
      case 'warranty':
        return product.warranty;
      case 'additionalServices':
        return product.additionalServices;
      default:
        return product.description;
    }
  };

  return (
    <main className="w-full max-w-[1440px] mx-auto flex flex-col items-start p-0 gap-[64px] mt-[60px] px-4 sm:px-8 lg:px-0 dark:bg-[#0e1b0f]">
      {/* Container for main product section */}
      <div className="flex flex-col items-center p-0 gap-[52px] w-full">
        {/* Top section with images and product details */}
        <div className="flex flex-col lg:flex-row justify-center items-center p-0 gap-[57px] w-full h-auto">
          {/* Left side: Product images */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-[654px]">
  {/* First Image */}
  <div className="relative w-full h-[200px] sm:h-[390px] bg-white border border-[#9C9C9C] rounded-[16px] overflow-hidden">
    <Image src={product.image} alt={product.title} fill className="object-cover" />
  </div>

  {/* Second Image */}
  <div className="relative w-full h-[200px] sm:h-[390px] bg-white border border-[#9C9C9C] rounded-[16px]" />

  {/* Third Image */}
  <div className="relative w-full h-[200px] sm:h-[390px] bg-white border border-[#9C9C9C] rounded-[16px]" />

  {/* Fourth Image with Overlay */}
  <div
    className="relative flex flex-col justify-center items-center w-full h-[200px] sm:h-[390px] rounded-[16px]"
    style={{
      background:
        "linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/watches/5.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <span className="font-poppins font-bold text-[20px] sm:text-[24px] md:text-[28px] leading-[160%] text-[#FBFBFB]">
      +2
    </span>
  </div>
</div>


          {/* Right side: Product details */}
          <div className="flex flex-col items-start p-0 gap-[32px] w-full max-w-[597px]">
            {/* Product Title and Tabs */}
            <div className="flex flex-col items-start p-0 gap-[20px] w-full relative">
              <h1 className="font-poppins font-bold text-[24px] sm:text-[32px] md:text-[40px] leading-[160%] text-[#192B1A] dark:text-[#0fcd1c]
 w-full">
                {product.title}
              </h1>
              <div className="relative w-full max-w-[560px] h-auto">
                <div className="flex flex-wrap items-center gap-[24px] w-full">
                  {['description', 'materials', 'warranty', 'additionalServices'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`font-poppins text-[16px] sm:text-[18px] md:text-[20px] leading-[160%] ${
                        activeTab === tab ? 'text-[#192B1A] dark:text-[#0fcd1c]  ' : 'text-[#818C82] '
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                {activeTab === 'description' && (
                  <div className="border border-[#192B1A] w-[80px] sm:w-[100px] md:w-[113px] mt-2" />
                )}
              </div>

              <p className="font-poppins font-semibold text-[16px] sm:text-[18px] md:text-[20px] leading-[160%] text-[#192B1A] dark:text-[#fbfbfb] w-full max-w-[597px]">
                {getTabContent()}
              </p>
            </div>

            {/* Sizes and Colors */}
            <div className="flex flex-col md:flex-row items-start p-0 gap-[32px] w-full max-w-[290px] md:max-w-none">
              <div className="flex flex-col gap-[16px] w-[170px]">
                <h3 className="font-poppins font-bold text-[20px] sm:text-[22px] md:text-[24px] leading-[160%] text-[#192B1A] dark:text-[#0fcd1c]
">
                  sizes
                </h3>
                <div className="flex flex-row flex-wrap gap-[16px] w-[170px] h-[54px]">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`flex justify-center items-center p-2 w-[46px] h-[54px] border border-[#192B1A] dark:border-[#0fcd1c] rounded-[16px] ${
                        selectedSize === size ? 'bg-[#192B1A] text-white ' : 'text-[#192B1A] dark:text-[#0fcd1c]'
                      } font-poppins font-bold text-[20px] sm:text-[22px] md:text-[24px]`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-[16px] w-[290px]">
                <h3 className="font-poppins font-bold text-[20px] sm:text-[22px] md:text-[24px] leading-[160%] text-[#192B1A] dark:text-[#0fcd1c]">
                  colors
                </h3>
                <div className="flex flex-row flex-wrap gap-[16px] w-full">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className="flex justify-center items-center px-[16px] py-[8px] gap-[8px] rounded-[16px]"
                      style={{
                        backgroundColor: color.bg,
                      }}
                    >
                      <span
                        className={`font-poppins font-bold text-[16px] sm:text-[18px] md:text-[20px] leading-[160%] ${
                          color.name === 'black' ? 'text-[#FBFBFB]' : 'text-[#192B1A]'
                        }`}
                      >
                        {color.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Price and Order */}
            <div className="flex flex-col md:flex-row md:justify-end items-start md:items-end p-0 gap-[32px] w-full max-w-[597px]">
              <div className="flex flex-col items-start p-0 gap-[10px] w-full max-w-[419px]">
                <h3 className="font-poppins font-bold text-[20px] sm:text-[22px] md:text-[24px] leading-[160%] text-[#192B1A] dark:text-[#0fcd1c] ">
                  Price
                </h3>
                <span className="font-poppins font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-[160%] line-through text-black  dark:text-[#fbfbfb]  ">
                  30000
                </span>
                <span className="font-poppins font-bold text-[20px] sm:text-[22px] md:text-[24px] leading-[160%] text-black dark:text-[#fbfbfb]">
                  20500 PER MINIMUM QUANTITY
                </span>
              </div>
              <Link
                href={`/products/${params.category}/${params.product}/order`}
                className="flex justify-center items-center p-4 gap-2 w-[146px] h-[67px] border-2 border-[#192B1A] dark:border-[#0fcd1c] rounded-[16px]"
              >
                <span className="font-poppins font-bold text-[18px] sm:text-[20px] md:text-[22px] leading-[160%] text-[#192B1A] dark:text-[#0fcd1c]">
                  order now
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="flex flex-col items-center p-0 gap-[51px] w-full max-w-[1204px]">
          <div className="flex flex-col sm:flex-row items-start p-0 gap-[40px] sm:gap-[77px] w-full flex-wrap">
            <div className="flex flex-col items-start gap-[16px] w-full sm:w-[310px]">
              <h3 className="font-poppins font-bold text-[20px] sm:text-[22px] md:text-[24px] text-[#192B1A] dark:text-[#0fcd1c]">
                Minimum Order Quantity
              </h3>
              <p className="font-poppins font-medium text-[16px] sm:text-[18px] md:text-[20px] text-[#192B1A] dark:text-[#fbfbfb]">
                {product.minOrderQuantity}
              </p>
            </div>
            <div className="flex flex-col items-start gap-[16px] w-full sm:w-[370px]">
              <h3 className="font-poppins font-bold text-[20px] sm:text-[22px] md:text-[24px] text-[#192B1A] dark:text-[#0fcd1c]">
                Delivery and Production Time
              </h3>
              <p className="font-poppins font-medium text-[16px] sm:text-[18px] md:text-[20px] text-[#192B1A] dark:text-[#fbfbfb]">
                {product.deliveryTime}
              </p>
            </div>
            <div className="flex flex-col items-start gap-[16px] w-full sm:w-[370px]">
              <h3 className="font-poppins font-bold text-[20px] sm:text-[22px] md:text-[24px] text-[#192B1A] dark:text-[#0fcd1c]">
                Payment Methods
              </h3>
              <p className="font-poppins font-medium text-[16px] sm:text-[18px] md:text-[20px] text-[#192B1A] dark:text-[#fbfbfb]">
                {product.paymentMethods}
              </p>
            </div>
          </div>
          <button className="flex justify-center items-center p-4 gap-2 w-[220px] h-[67px] border-2 border-[#192B1A] dark:border-[#0fcd1c] rounded-[16px]">
            <span className="font-poppins font-bold text-[18px] sm:text-[20px] md:text-[22px] leading-[160%] text-[#192B1A] dark:text-[#0fcd1c]">
              proceed to order
            </span>
          </button>
        </div>
      </div>

      {/* Related Products */}
      <div className="flex flex-col items-start p-0 gap-[16px] w-full px-[62px] overflow-x-auto">
        <h2 className="font-poppins font-bold text-[20px] sm:text-[24px] md:text-[28px] leading-[160%] text-[#192B1A] dark:text-[#0fcd1c]">
          more like this
        </h2>
        <div className="flex flex-row items-start p-0 gap-[32px] w-full h-auto overflow-x-auto">
          {product.relatedProducts.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-[24px]"
              style={{ width: item.width + 'px', height: item.height + 62 + 'px' }}
            >
              <div
                className="relative"
                style={{ width: item.width + 'px', height: item.height + 'px' }}
              >
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <h3 className="font-poppins font-bold text-[20px] sm:text-[22px] md:text-[24px] leading-[160%] text-center text-[#192B1A] dark:text-[#fbfbfb]">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
