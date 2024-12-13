'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all-products')

  const products = [
    {
      id: 1,
      title: 'HP Victus 15-fa0031dx Gaming Laptop',
      description: 'Operating system: Windows 11 Home From a rejuvenated Start menu, to new ways to connect to your favorite people, news, games, and content—Windows 11 is the place to think, express, and create in a natural way, Good Quality with a high end,12th Generation Intel Core i5-12450H 12th Gen Intel Core processor distributes performance where you need it the most — saving you time and increasing your ability to do the things you actually want...',
      price: '1,232$',
      purchases: 201,
      category: 'Devices and Technology',
      uploadedBy: '@corozan09',
      uploadDate: '12 Oct 2024',
      image: '/images/laptopproduct.png',
      available: true
    },
    {
      id: 2,
      title: 'HP Victus 15-fa0031dx Gaming Laptop',
      description: 'Operating system: Windows 11 Home From a rejuvenated Start menu, to new ways to connect to your favorite people, news, games, and content—Windows 11 is the place to think, express, and create in a natural way, Good Quality with a high end,12th Generation Intel Core i5-12450H 12th Gen Intel Core processor distributes performance where you need it the most — saving you time and increasing your ability to do the things you actually want...',
      price: '1,232$',
      purchases: 201,
      category: 'Devices and Technology',
      uploadedBy: '@corozan09',
      uploadDate: '12 Oct 2024',
      image: '/images/laptopproduct.png',
      available: true
    }
  ]

  const orders = [
    {
      id: 1,
      title: 'HP Victus 15-fa0031dx Gaming Laptop',
      quantity: 4,
      pricePerPiece: '1,232$',
      totalPrice: '4,892$',
      status: 'Pending',
      username: '@lordseif07',
      orderDate: '20 Nov 2024',
      image: '/images/laptopproduct.png'
    },
    {
      id: 2,
      title: 'HP Victus 15-fa0031dx Gaming Laptop',
      quantity: 4,
      pricePerPiece: '1,232$',
      totalPrice: '4,892$',
      status: 'Delivered',
      username: '@lordseif07',
      orderDate: '20 Nov 2024',
      image: '/images/laptopproduct.png'
    },
    {
      id: 3,
      title: 'HP Victus 15-fa0031dx Gaming Laptop',
      quantity: 4,
      pricePerPiece: '1,232$',
      totalPrice: '4,892$',
      status: 'Pending',
      username: '@lordseif07',
      orderDate: '20 Nov 2024',
      image: '/images/laptopproduct.png'
    },
    {
      id: 4,
      title: 'HP Victus 15-fa0031dx Gaming Laptop',
      quantity: 4,
      pricePerPiece: '1,232$',
      totalPrice: '4,892$',
      status: 'Delivered',
      username: '@lordseif07',
      orderDate: '20 Nov 2024',
      image: '/images/laptopproduct.png'
    }
  ]

  return (
    <div className="w-full min-h-screen bg-[#F4F4F4] p-4 md:p-8">
      <div className="max-w-[1131px] mx-auto flex flex-col gap-6 md:gap-8">
        {/* Header and Category Section */}
        <div className="flex flex-col gap-6 md:gap-7">
          {/* Title with Green Bar */}
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 md:w-[10px] h-[50px] bg-[#11A900]" />
            <h1 className="font-poppins font-semibold text-2xl md:text-[30px] leading-[160%] text-[#061404]">
              Products
            </h1>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => setActiveCategory('all-products')}
              className={`flex justify-center items-center py-0.5 px-4 h-10 rounded-[20px] transition-colors ${
                activeCategory === 'all-products'
                  ? 'bg-[rgba(17,169,0,0.3)]'
                  : 'bg-[rgba(224,224,224,0.6)]'
              }`}
            >
              <span className={`font-inter font-bold text-base md:text-xl ${
                activeCategory === 'all-products'
                  ? 'text-[#11A900]'
                  : 'text-[#787777]'
              }`}>
                All Products
              </span>
            </button>
            <button
              onClick={() => setActiveCategory('orders')}
              className={`flex justify-center items-center py-0.5 px-4 h-10 rounded-[20px] transition-colors ${
                activeCategory === 'orders'
                  ? 'bg-[rgba(17,169,0,0.3)]'
                  : 'bg-[rgba(224,224,224,0.6)]'
              }`}
            >
              <span className={`font-poppins font-medium text-base md:text-xl ${
                activeCategory === 'orders'
                  ? 'text-[#11A900]'
                  : 'text-[#787777]'
              }`}>
                Orders
              </span>
            </button>
          </div>
        </div>

        {activeCategory === 'all-products' ? (
          /* Products List */
          <div className="flex flex-col gap-6 md:gap-8">
            {products.map((product) => (
              <div key={product.id} className="relative bg-white shadow-[0px_5px_10px_rgba(0,0,0,0.1)] rounded-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  {/* Product Image */}
                  <div className="w-full md:w-[324px] h-[200px] md:h-[288px] relative">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover shadow-[0px_5px_10px_rgba(0,0,0,0.25)]"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-col gap-2.5 p-4 md:p-10 flex-1">
                    <h2 className="font-poppins font-semibold text-lg md:text-xl text-[#061404]">
                      {product.title}
                    </h2>
                    <p className="font-poppins text-sm md:text-base text-[#787777] line-clamp-4 md:line-clamp-5">
                      {product.description}
                    </p>
                    <p className="font-poppins font-semibold text-xs md:text-sm text-[#11A900]">
                      Available | {product.price} | Purchases({product.purchases}) | {product.category}
                    </p>
                    <p className="font-poppins font-semibold text-xs md:text-sm text-[#061404]">
                      UploadedBy : {product.uploadedBy} | UploadDate : {product.uploadDate}
                    </p>
                  </div>
                </div>

                {/* View Button */}
                <Link href={`/super-admin-dashboard/products/${product.id}`}>
                  <span className="absolute top-4 right-4 font-poppins font-semibold text-lg md:text-xl text-[#11A900] cursor-pointer">
                    View
                  </span>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          /* Orders List */
          <div className="flex flex-col gap-5">
            {orders.map((order) => (
              <div key={order.id} className="relative bg-white shadow-[0px_5px_10px_rgba(0,0,0,0.1)] rounded-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  {/* Order Image */}
                  <div className="w-full md:w-[169px] h-[144px] relative">
                    <Image
                      src={order.image}
                      alt={order.title}
                      fill
                      className="object-cover shadow-[0px_5px_10px_rgba(0,0,0,0.25)]"
                    />
                  </div>

                  {/* Order Details */}
                  <div className="flex flex-col gap-2.5 p-4 md:p-[30px] flex-1">
                    <h2 className="font-poppins font-semibold text-sm md:text-[15px] leading-[22px] text-[#061404]">
                      {order.title}
                    </h2>
                    <p className="font-poppins font-semibold text-xs md:text-sm text-[#11A900]">
                      Quantity : {order.quantity} | Price Per Piece : {order.pricePerPiece} | Total Price : {order.totalPrice} | Status : {order.status}
                    </p>
                    <p className="font-poppins font-semibold text-xs md:text-sm text-[#061404]">
                      UserName : {order.username} | OrderDate : {order.orderDate}
                    </p>
                  </div>

                  {/* Status Icon */}
                  {order.status === 'Delivered' && (
                    <div className="absolute hidden md:block right-0 top-[-22px] w-[200px] h-[200px]">
                      <Image
                        src="/icons/Delivered - icon.svg"
                        alt="Delivered"
                        fill
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductsPage
