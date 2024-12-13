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
      description: 'Operating system: Windows 11 Home From a rejuvenated Start menu, ...',
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
      description: 'Operating system: Windows 11 Home From a rejuvenated Start menu, ...',
      price: '1,232$',
      purchases: 201,
      category: 'Devices and Technology',
      uploadedBy: '@lordseif07',
      uploadDate: '12 Oct 2024',
      image: '/images/laptopproduct.png',
      available: true,
      canEdit: true
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
    }
  ]

  const renderContent = () => {
    if (activeCategory === 'orders') {
      return (
        <div className="flex flex-col gap-[20px] w-full">
          {orders.map((order) => (
            <div key={order.id} className="relative w-full h-auto sm:h-[144px] bg-white shadow-[0px_5px_10px_rgba(0,0,0,0.1)] flex flex-col sm:flex-row">
              {/* Product Image */}
              <div className="relative w-full sm:w-[169px] h-[144px] shadow-[0px_5px_10px_rgba(0,0,0,0.25)]">
                <Image
                  src={order.image}
                  alt={order.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Order Info */}
              <div className="sm:absolute sm:left-[187px] sm:top-[30px] flex flex-col gap-[10px] w-full sm:w-[756px] p-4 sm:p-0">
                <h2 className="font-poppins font-semibold text-[14px] sm:text-[15px] text-[#061404]">
                  {order.title}
                </h2>
                <p className="font-poppins font-semibold text-[13px] sm:text-[14px] leading-[21px]">
                  <span className="text-[#11A900]">Quantity</span>
                  <span className="text-[#061404]"> : {order.quantity} | </span>
                  <span className="text-[#11A900]">Price Per Piece</span>
                  <span className="text-[#061404]"> : {order.pricePerPiece} | </span>
                  <span className="text-[#11A900]">Total Price</span>
                  <span className="text-[#061404]"> : {order.totalPrice} | </span>
                  <span className="text-[#11A900]">Status</span>
                  <span className="text-[#061404]"> : {order.status}</span>
                </p>
                <p className="font-poppins font-semibold text-[13px] sm:text-[14px] leading-[21px] text-[#061404]">
                  Username : {order.username} | OrderDate : {order.orderDate}
                </p>
              </div>

              {/* Status Icon for Delivered Orders */}
              {order.status === 'Delivered' && (
                <div className="hidden sm:block absolute w-[200px] h-[200px] left-[840px] top-[0px]">
                  <Image
                    src="/icons/Delivered - icon.svg"
                    width={200}
                    height={200}
                    alt="Delivered"
                  />
                </div>
              )}

              {/* Action Buttons */}
              <div className="absolute flex items-center gap-[15px] right-[10px] bottom-[10px]">
                <button className="font-poppins font-semibold text-[13px] sm:text-[15px] leading-[22px] text-[#787777]">
                  Update
                </button>
                <button className="font-poppins font-semibold text-[13px] sm:text-[15px] leading-[22px] text-[#11A900]">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      )
    }

    return (
      <div className="flex flex-col gap-[20px] sm:gap-[30px] w-full">
        {products.map((product) => (
          <div key={product.id} className="relative w-full h-auto sm:h-[288px] bg-white shadow-[0px_5px_10px_rgba(0,0,0,0.1)] flex flex-col sm:flex-row">
            {/* Product Image */}
            <div className="relative w-full sm:w-[324px] h-[200px] sm:h-[288px] shadow-[0px_5px_10px_rgba(0,0,0,0.25)]">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="sm:absolute sm:left-[344px] sm:top-[40px] flex flex-col gap-[10px] w-full sm:w-[756px] p-4 sm:p-0 mt-2 sm:mt-0">
              <h2 className="font-poppins font-semibold text-[16px] sm:text-[20px] leading-[30px] text-[#061404]">
                {product.title}
              </h2>
              <p className="font-poppins font-normal text-[12px] sm:text-[14px] leading-[21px] text-[#787777]">
                {product.description}
              </p>
              <p className="font-poppins font-semibold text-[12px] sm:text-[14px] leading-[21px] text-[#11A900]">
                Available | {product.price} | Purchases({product.purchases}) | {product.category}
              </p>
              <p className="font-poppins font-semibold text-[12px] sm:text-[14px] leading-[21px] text-[#061404]">
                UploadedBy : {product.uploadedBy} | UploadDate : {product.uploadDate}
              </p>
            </div>

            {/* View Button */}
            <Link
              href={`/dashboard/products/${product.id}`}
              className="absolute right-[15px] top-[15px] font-poppins font-semibold text-[16px] sm:text-[20px] leading-[30px] text-[#11A900]"
            >
              View
            </Link>

            {/* Edit/Delete Buttons */}
            {product.canEdit && (
              <div className="absolute right-[15px] bottom-[15px] flex items-center gap-[10px] sm:gap-[15px]">
                <button className="font-poppins font-semibold text-[13px] sm:text-[15px] leading-[22px] text-[#787777]">
                  Edit
                </button>
                <button className="font-poppins font-semibold text-[13px] sm:text-[15px] leading-[22px] text-[#FF0101]">
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex-1 bg-[#F4F4F4] overflow-y-auto">
      <div className="px-4 sm:px-0">
        <div className="flex flex-col items-end gap-[20px] sm:gap-[39px] w-full max-w-[1131px] ">
          {/* Header Section */}
          <div className="flex flex-col items-start gap-[20px] sm:gap-[27px] w-full">
            {/* Title */}
            <div className="flex items-center gap-[10px] w-full max-w-[200px] sm:max-w-[156px] h-[50px]">
              <div className="w-[5px] sm:w-[10px] h-[30px] sm:h-[50px] bg-[#11A900]" />
              <h1 className="font-poppins font-semibold text-[20px] sm:text-[30px] leading-[160%] text-[#061404]">
                Products
              </h1>
            </div>

            {/* Categories and Add Button */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4">
              {/* Categories */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-[10px] w-full sm:w-[716px]">
                {[
                  { key: 'all-products', label: 'All Products' },
                  { key: 'uploaded-by-you', label: 'Uploaded By You' },
                  { key: 'uploaded-by-others', label: 'Uploaded By Others' },
                  { key: 'orders', label: 'Orders' }
                ].map((cat) => (
                  <button 
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`flex justify-center items-center px-4 py-[2px] gap-[5px] h-[30px] sm:h-[40px] rounded-[20px] text-sm sm:text-base ${
                      activeCategory === cat.key ? 'bg-[rgba(17,169,0,0.3)]' : 'bg-[rgba(224,224,224,0.6)]'
                    }`}
                  >
                    <span className={`font-poppins font-medium sm:font-bold text-[14px] sm:text-[20px] leading-[30px] ${
                      activeCategory === cat.key ? 'text-[#11A900]' : 'text-[#787777]'
                    }`}>
                      {cat.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Add New Button */}
              <Link href="/dashboard/products/add">
                <button className="flex items-center justify-center gap-2.5 px-3 sm:px-4 py-[2px] w-[120px] sm:w-[160px] h-[35px] sm:h-[40px] bg-[#11A900] rounded-[20px]">
                  <span className="font-poppins font-semibold text-[14px] sm:text-[20px] leading-[30px] text-white">Add New</span>
                  <Image
                    src="/icons/add-new-product-dashboard.svg"
                    width={14}
                    height={14}
                    alt="Add new"
                  />
                </button>
              </Link>
            </div>
          </div>

          {/* Content */}
          {renderContent()}
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
