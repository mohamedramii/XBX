'use client';

import { useState } from 'react';
import Image from 'next/image';

const AddServicePage = () => {
  const [formData, setFormData] = useState({
    title: '',
    overview: '',
    miniServices: [{ title: '', price: '', overview: '' }],
    originalPrice: '',
    salePrice: '',
    availability: true,
    category: '',
    instruction: '',
    implementationTime: '',
    confirmAccuracy: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className="flex flex-col items-end gap-6 sm:gap-[20px] md:gap-[30px] w-full max-w-[1104px] ">
      <div className="flex flex-col items-start gap-6 sm:gap-[20px] md:gap-[30px] w-full">
        {/* Header */}
        <div className="flex flex-col items-start gap-2 sm:gap-[10px] w-full">
          <div className="flex flex-row items-center gap-2 sm:gap-[10px]">
            <div className="w-[5px] sm:w-[10px] h-[30px] sm:h-[50px] bg-[#11A900]" />
            <h1 className="text-[20px] sm:text-[24px] md:text-[30px] font-semibold font-poppins text-[#061404]">
              Add Service
            </h1>
          </div>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#787777] leading-[21px] sm:leading-[27px]">
            Before adding any Services, please remember that it is essential to verify the accuracy
            and completeness of all Service information. This responsibility is crucial to
            maintaining our standards and ensuring a smooth process. We appreciate your diligence in
            checking descriptions, prices, and specifications before submission. Thank you for your
            attention to this important task.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-[20px] w-full">
          {/* Title */}
          <div className="flex flex-col gap-2 sm:gap-[10px]">
            <label className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
              Service Title (Required)
            </label>
            <input
              type="text"
              className="w-full max-w-[500px] h-[40px] sm:h-[50px] bg-[rgba(255,255,255,0.6)] border border-[#11A900] rounded-[20px] px-4 text-sm sm:text-base"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
            <p className="text-[13px] sm:text-[15px] text-[#787777]">
              Create a descriptive and engaging title for the service. Ensure it accurately reflects
              the nature of the service and captures user interest.
            </p>
          </div>

          {/* Overview */}
          <div className="flex flex-col gap-2 sm:gap-[10px]">
            <label className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
              Service Overview (Required)
            </label>
            <textarea
              className="w-full h-[80px] sm:h-[100px] bg-[rgba(255,255,255,0.6)] border border-[#11A900] rounded-[20px] p-4 resize-none text-sm sm:text-base"
              value={formData.overview}
              onChange={(e) => setFormData({ ...formData, overview: e.target.value })}
            />
            <p className="text-[13px] sm:text-[15px] text-[#787777]">
              Provide a concise and clear description of the service. Explain what the service
              entails, its purpose, and how it benefits the user. Ensure the language is engaging
              and professional.
            </p>
          </div>

          {/* Image Upload Section */}
          <div className="flex flex-col gap-2 sm:gap-[10px]">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-[20px]">
              {/* Cover Upload */}
              <div className="w-full max-w-[500px] flex-1">
                <label className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
                  Service Cover (Required)
                </label>
                <div className="mt-2 border-2 border-[#11A900] rounded-[20px] h-[150px] sm:h-[210px] flex flex-col items-center justify-center">
                  <div className="flex flex-col items-center gap-1 sm:gap-[5px]">
                    <Image src="/icons/add-green-dashboard.svg" width={25} height={25} alt="Add" />
                    <span className="text-[12px] sm:text-[15px] font-semibold text-[#8A8A8A]">
                      Upload Photo
                    </span>
                  </div>
                </div>
              </div>

              {/* Gallery Upload */}
              <div className="w-full max-w-[500px] flex-1">
                <label className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
                  Service Gallery (Required)
                </label>
                <div className="mt-2 flex flex-wrap gap-2 sm:gap-[10px]">
                  {[...Array(5)].map((_, index) => (
                    <div
                      key={index}
                      className="w-[60px] sm:w-[80px] md:w-[100px] h-[60px] sm:h-[80px] md:h-[100px] bg-[rgba(17,169,0,0.2)] rounded-[20px]"
                    />
                  ))}
                  <div className="w-[60px] sm:w-[80px] md:w-[100px] h-[60px] sm:h-[80px] md:h-[100px] border-2 border-[#11A900] rounded-[20px] flex flex-col items-center justify-center">
                    <Image src="/icons/add-green-dashboard.svg" width={20} height={20} alt="Add" />
                    <span className="text-[8px] sm:text-[10px] font-semibold text-[#8A8A8A]">
                      Upload Photo
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[13px] sm:text-[15px] text-[#787777]">
              Ensure that all gallery and cover photos are of high quality, clear, and
              professionally presented.
            </p>
          </div>

          {/* Mini Services */}
          <div className="flex flex-col gap-2 sm:gap-[10px]">
            <label className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
              Mini Services (Required)
            </label>
            <div className="flex flex-wrap lg:flex-nowrap items-center gap-2 sm:gap-[10px]">
              <input
                type="text"
                placeholder="Title"
                className="w-full max-w-[220px] h-[40px] sm:h-[50px] bg-white border border-[#11A900] rounded-[20px] px-4 text-sm sm:text-base"
              />
              <div className="flex items-center gap-1 sm:gap-[5px]">
                <input
                  type="text"
                  placeholder="Price"
                  className="w-full max-w-[130px] sm:max-w-[220px] h-[40px] sm:h-[50px] bg-white border border-[#11A900] rounded-[20px] px-4 text-sm sm:text-base"
                />
                <span className="text-[20px] sm:text-[25px] text-[#11A900]">$</span>
              </div>
              <input
                type="text"
                placeholder="Overview"
                className="w-full max-w-[350px] sm:max-w-[530px] h-[40px] sm:h-[50px] bg-white border border-[#11A900] rounded-[20px] px-4 text-sm sm:text-base"
              />
              <Image src="/icons/add-green-dashboard.svg" width={25} height={25} alt="Add" />
            </div>
          </div>

          {/* Pricing */}
          <div className="flex flex-wrap gap-4 sm:gap-[20px]">
            <div className="flex flex-col gap-2 sm:gap-[10px]">
              <label className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
                Original price (Required)
              </label>
              <div className="flex items-center gap-1 sm:gap-[5px]">
                <input
                  type="text"
                  className="w-[140px] sm:w-[220px] h-[40px] sm:h-[50px] bg-[rgba(255,255,255,0.6)] border border-[#11A900] rounded-[20px] px-4 text-sm sm:text-base"
                  value={formData.originalPrice}
                  onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
                />
                <span className="text-[20px] sm:text-[25px] text-[#11A900]">$</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:gap-[10px]">
              <label className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
                Sale price (Optional)
              </label>
              <div className="flex items-center gap-1 sm:gap-[5px]">
                <input
                  type="text"
                  className="w-[140px] sm:w-[220px] h-[40px] sm:h-[50px] bg-[rgba(255,255,255,0.6)] border border-[#11A900] rounded-[20px] px-4 text-sm sm:text-base"
                  value={formData.salePrice}
                  onChange={(e) => setFormData({ ...formData, salePrice: e.target.value })}
                />
                <span className="text-[20px] sm:text-[25px] text-[#11A900]">$</span>
              </div>
            </div>
          </div>

          {/* Availability and Category */}
          <div className="flex flex-wrap gap-4 sm:gap-[20px] justify-between">
            <div className="flex flex-col gap-2 sm:gap-[10px] w-full max-w-[320px] sm:max-w-[498px]">
              <label className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
                Service Availability (Required)
              </label>
              <button className="flex justify-between items-center px-3 sm:px-5 h-[40px] sm:h-[50px] bg-[#11A900] rounded-[20px] text-white">
                <span className="text-[14px] sm:text-[17px] font-semibold">True</span>
                <Image
                  src="/icons/arrow-down-dropdown-dashboard.svg"
                  width={20}
                  height={20}
                  alt="Arrow"
                />
              </button>
            </div>
            <div className="flex flex-col gap-2 sm:gap-[10px] w-full max-w-[320px] sm:max-w-[503px]">
              <label className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
                Service Category (Required)
              </label>
              <button className="flex justify-between items-center px-3 sm:px-5 h-[40px] sm:h-[50px] bg-[#11A900] rounded-[20px] text-white">
                <span className="text-[14px] sm:text-[17px] font-semibold">None</span>
                <Image
                  src="/icons/arrow-down-dropdown-dashboard.svg"
                  width={20}
                  height={20}
                  alt="Arrow"
                />
              </button>
            </div>
          </div>

          {/* Service Instruction */}
          <div className="flex flex-col gap-2 sm:gap-[10px] w-full max-w-[498px]">
            <label className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
              Service Instruction (Optional)
            </label>
            <div className="flex items-center gap-2 sm:gap-[15px] flex-wrap">
              <input
                type="text"
                className="w-full max-w-[250px] sm:max-w-[428px] h-[40px] sm:h-[50px] bg-[rgba(255,255,255,0.6)] border border-[#11A900] rounded-[20px] px-4 text-sm sm:text-base"
                value={formData.instruction}
                onChange={(e) => setFormData({ ...formData, instruction: e.target.value })}
              />
              <Image src="/icons/add-green-dashboard.svg" width={25} height={25} alt="Add" />
            </div>
            <p className="text-[13px] sm:text-[15px] text-[#787777]">
              If needed, provide clear and concise instructions for purchasing the product.
            </p>
          </div>

          {/* Implementation Time */}
          <div className="flex flex-col gap-2 sm:gap-[10px]">
            <label className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
              Service Implementation Time (Required)
            </label>
            <input
              type="text"
              className="w-full max-w-[300px] sm:max-w-[500px] h-[40px] sm:h-[50px] bg-[rgba(255,255,255,0.6)] border border-[#11A900] rounded-[20px] px-4 text-sm sm:text-base"
              value={formData.implementationTime}
              onChange={(e) => setFormData({ ...formData, implementationTime: e.target.value })}
            />
            <p className="text-[13px] sm:text-[15px] text-[#787777]">
              Specify the expected time required to complete the service.
            </p>
          </div>

          {/* Confirmation Checkbox */}
          <div className="flex items-center gap-2 sm:gap-[19px]">
            <input
              type="checkbox"
              className="w-4 sm:w-[20px] h-4 sm:h-[20px] border-2 border-[#11A900]"
              checked={formData.confirmAccuracy}
              onChange={(e) => setFormData({ ...formData, confirmAccuracy: e.target.checked })}
            />
            <span className="text-[14px] sm:text-[18px] text-[#787777]">
              I confirm that all details provided are accurate and complete.
            </span>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-[130px] sm:w-[160px] md:w-[213px] h-[35px] sm:h-[40px] bg-[#11A900] rounded-[20px] text-white font-semibold text-[16px] sm:text-[20px]"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddServicePage;
