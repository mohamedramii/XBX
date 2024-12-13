'use client'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import ProductsService from '@/services/api/products.service'

export default function AddProductPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: '',
    overView: '',
    price: '',
    salePrice: '',
    shippingCost: '',
    availability: true,
    category: 'None',
    instruction: '',
    minOrderQuantity: '',
    color: '',
    specifications: '',
    sizes: '',
    shippingTime: '',
    cover: null,
    gallery: []
  })

  const [coverPreview, setCoverPreview] = useState(null)
  const [galleryPreviews, setGalleryPreviews] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const categories = ['None', 'Electronics', 'Clothing', 'Books', 'Home & Garden']

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const productData = new FormData()
      
      // Add required type field
      productData.append('type', 'Products')

      // Add all text fields
      Object.keys(formData).forEach(key => {
        if (key !== 'cover' && key !== 'gallery' && formData[key]) {
          productData.append(key, formData[key])
        }
      })

      // Add cover image
      if (formData.cover) {
        productData.append('cover', formData.cover)
      }

      // Add gallery images
      formData.gallery.forEach(image => {
        productData.append('gallery', image)
      })

      await ProductsService.addProduct(productData)
      router.push('/dashboard/products')
    } catch (err) {
      setError(err.message || 'Failed to add product. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative w-[1104px] h-[1804px] flex flex-col items-start p-0 gap-5">
      {/* Title Section */}
      <div className="flex flex-col items-start p-0 gap-2.5 w-[498px] h-[123px]">
        <label className="w-full h-[30px] font-poppins font-semibold text-xl flex items-center text-black">
          Product Title (Required)
        </label>
        <input
          type="text"
          required
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="box-border w-[500px] h-[50px] bg-white/60 border border-[#11A900] rounded-[20px] px-4"
        />
        <p className="w-[377px] h-[23px] font-poppins font-normal text-sm text-[#787777] text-right">
          Ensure that the title clearly describes the product.
        </p>
      </div>

      {/* Overview Section */}
      <div className="flex flex-col items-start p-0 gap-2.5 w-full h-[196px]">
        <label className="w-full h-[30px] font-poppins font-semibold text-xl flex items-center text-black">
          Product Overview (Required)
        </label>
        <textarea
          required
          value={formData.overView}
          onChange={(e) => setFormData({ ...formData, overView: e.target.value })}
          className="box-border w-full h-[100px] bg-white/60 border border-[#11A900] rounded-[20px] p-4 resize-none"
        />
        <p className="w-full h-[46px] font-poppins font-normal text-sm text-[#787777]">
          Provide a concise and clear overview of the product. Highlight its main purpose, key features, and how it benefits users.
        </p>
      </div>

      {/* Images Section */}
      <div className="flex flex-col justify-center items-start p-0 gap-2.5 w-full h-[329px]">
        <div className="flex justify-between items-start p-0 gap-[5px] w-full h-[250px]">
          {/* Cover Image */}
          <div className="w-[500px] h-[244px]">
            <div className="flex flex-row items-center p-0 gap-0.5 w-[231px] h-[30px]">
              <span className="font-poppins font-semibold text-xl text-black">
                Product Cover (Required)
              </span>
            </div>
            <div className="box-border flex justify-center items-center p-9 gap-2.5 w-[503px] h-[210px] border-2 border-[#11A900] rounded-[20px] mt-[10px]">
              {coverPreview ? (
                <Image
                  src={coverPreview}
                  alt="Cover preview"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              ) : (
                <div className="flex flex-col justify-center items-center gap-[5px] w-[103px] h-[81px]">
                  <div className="w-[60px] h-[60px] text-[#11A900]">+</div>
                  <span className="font-poppins font-semibold text-sm text-[#8A8A8A]">
                    Upload Photo
                  </span>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0]
                  if (file) {
                    setFormData({ ...formData, cover: file })
                    setCoverPreview(URL.createObjectURL(file))
                  }
                }}
                className="hidden"
                id="cover-upload"
              />
            </div>
          </div>

          {/* Gallery */}
          <div className="w-[503px] h-[250px]">
            <div className="flex flex-row items-center p-0 gap-0.5 w-[243px] h-[30px]">
              <span className="font-poppins font-semibold text-xl text-black">
                Product Gallery (Required)
              </span>
            </div>
            <div className="flex flex-row flex-wrap items-center content-start p-0 gap-2.5 w-[500px] h-[210px] mt-[10px]">
              {[...Array(7)].map((_, index) => (
                <div
                  key={index}
                  className={`flex justify-center items-center w-[100px] h-[100px] ${
                    index < 6 && galleryPreviews[index]
                      ? 'bg-[rgba(17,169,0,0.2)]'
                      : 'border-2 border-[#11A900]'
                  } rounded-[20px]`}
                >
                  {index < 6 && galleryPreviews[index] ? (
                    <Image
                      src={galleryPreviews[index]}
                      alt={`Gallery preview ${index + 1}`}
                      width={90}
                      height={90}
                      className="object-contain"
                    />
                  ) : (
                    <div className="flex flex-col justify-center items-center">
                      <div className="w-[50px] h-[50px] text-[#11A900]">+</div>
                      <span className="font-poppins font-semibold text-[10px] text-[#8A8A8A]">
                        Upload Photo
                      </span>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0]
                      if (file && index < 6) {
                        const newGallery = [...formData.gallery]
                        newGallery[index] = file
                        setFormData({ ...formData, gallery: newGallery })
                        
                        const newPreviews = [...galleryPreviews]
                        newPreviews[index] = URL.createObjectURL(file)
                        setGalleryPreviews(newPreviews)
                      }
                    }}
                    className="hidden"
                    id={`gallery-upload-${index}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="w-full font-poppins font-normal text-sm text-[#787777]">
          Ensure that all gallery and cover photos are of high quality, clear, and professionally presented.
        </p>
      </div>

      {/* Prices Section */}
      <div className="flex flex-col items-start p-0 gap-2.5 w-[860px] h-[123px]">
        <div className="flex flex-row items-start p-0 gap-5 w-[763px] h-[90px]">
          {/* Original Price */}
          <div className="flex flex-col items-start p-0 gap-2.5 w-[241px] h-[90px]">
            <label className="font-poppins font-semibold text-xl text-black">
              Original price (Required)
            </label>
            <div className="flex flex-row justify-center items-center p-0 gap-[5px] w-[241px] h-[50px]">
              <input
                type="number"
                required
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="box-border w-[220px] h-[50px] bg-white/60 border border-[#11A900] rounded-[20px] px-4"
              />
              <span className="w-4 h-[38px] font-poppins font-normal text-2xl text-[#11A900]">
                $
              </span>
            </div>
          </div>

          {/* Sale Price */}
          <div className="flex flex-col items-start p-0 gap-2.5 w-[241px] h-[90px]">
            <label className="font-poppins font-semibold text-xl text-black">
              Sale price (Optional)
            </label>
            <div className="flex flex-row justify-center items-center p-0 gap-[5px] w-[241px] h-[50px]">
              <input
                type="number"
                value={formData.salePrice}
                onChange={(e) => setFormData({ ...formData, salePrice: e.target.value })}
                className="box-border w-[220px] h-[50px] bg-white/60 border border-[#11A900] rounded-[20px] px-4"
              />
              <span className="w-4 h-[38px] font-poppins font-normal text-2xl text-[#11A900]">
                $
              </span>
            </div>
          </div>

          {/* Shipping Cost */}
          <div className="flex flex-col items-start p-0 gap-2.5 w-[241px] h-[90px]">
            <label className="font-poppins font-semibold text-xl text-black">
              Shipping Cost (Required)
            </label>
            <div className="flex flex-row justify-center items-center p-0 gap-[5px] w-[241px] h-[50px]">
              <input
                type="number"
                required
                value={formData.shippingCost}
                onChange={(e) => setFormData({ ...formData, shippingCost: e.target.value })}
                className="box-border w-[220px] h-[50px] bg-white/60 border border-[#11A900] rounded-[20px] px-4"
              />
              <span className="w-4 h-[38px] font-poppins font-normal text-2xl text-[#11A900]">
                $
              </span>
            </div>
          </div>
        </div>
        <p className="w-[860px] h-[23px] font-poppins font-normal text-sm text-[#787777]">
          Only fill in the sale price field if there is an active sale.
        </p>
      </div>

      {/* Availability and Category Section */}
      <div className="flex flex-row justify-between items-start p-0 gap-5 w-full h-[146px]">
        {/* Availability */}
        <div className="flex flex-col items-start p-0 gap-2.5 w-[498px] h-[146px]">
          <label className="font-poppins font-semibold text-xl text-black">
            Product Availability (Required)
          </label>
          <div className="flex flex-row justify-between items-center px-5 w-[500px] h-[50px] bg-[#11A900] rounded-[20px]">
            <span className="font-poppins font-semibold text-[17px] text-white">
              {formData.availability ? 'True' : 'False'}
            </span>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, availability: !formData.availability })}
              className="w-6 h-6 transform rotate-180"
            >
              <span className="text-white">▼</span>
            </button>
          </div>
          <p className="w-[500px] h-[46px] font-poppins font-normal text-sm text-[#787777]">
            Set the availability to 'true' by default when adding a new product.
          </p>
        </div>

        {/* Category */}
        <div className="flex flex-col items-start p-0 gap-2.5 w-[503px] h-[90px]">
          <label className="font-poppins font-semibold text-xl text-black">
            Product Category (Required)
          </label>
          <select
            required
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="flex flex-row justify-between items-center px-5 w-[500px] h-[50px] bg-[#11A900] text-white rounded-[20px] appearance-none"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-[200px] h-[50px] bg-[#11A900] text-white rounded-[20px] font-poppins font-semibold text-lg mt-8"
      >
        {isLoading ? 'Adding...' : 'Add Product'}
      </button>
    </div>
  )
}
