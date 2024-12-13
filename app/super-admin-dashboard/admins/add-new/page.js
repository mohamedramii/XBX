'use client'

import React, { useState } from 'react'

const AddNewAdmin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    repeatPassword: '',
    authorities: {
      superAdmin: false,
      investments: false,
      store: false,
      services: false,
      notification: false
    }
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckboxChange = (authority) => {
    setFormData(prev => ({
      ...prev,
      authorities: {
        ...prev.authorities,
        [authority]: !prev.authorities[authority]
      }
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add form submission logic here
    console.log(formData)
  }

  return (
    <div className="flex flex-col items-start p-0 gap-[30px] absolute w-[1105px] h-[555px] left-[382px] top-[120px]">
      <div className="flex flex-col items-start p-0 gap-[20px] w-[1105px]">
        {/* Title Section */}
        <div className="flex flex-col items-start p-0 gap-[20px] w-[1105px]">
          <div className="flex flex-row items-center p-0 gap-[10px] w-[206px] h-[50px]">
            <div className="w-[10px] h-[50px] bg-[#11A900]" />
            <h1 className="font-poppins font-semibold text-[30px] leading-[160%] text-[#061404]">
              XBX Admins
            </h1>
          </div>
          <p className="font-poppins font-normal text-[18px] leading-[27px] text-[#787777] w-[1105px]">
            When adding new admins, please ensure that they understand their responsibilities clearly. It is essential that they are aware of the importance of accuracy and integrity in all tasks they undertake. Your role in providing guidance and support to new admins is vital for maintaining our standards and ensuring smooth operations. Thank you for your leadership in this process.
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="w-full">
          {/* Username Input */}
          <div className="flex flex-col items-start p-0 gap-[10px] w-[420px] h-[90px] mb-5">
            <label className="font-poppins font-semibold text-[20px] leading-[30px] text-[#061404]">
              Admin UserName
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="lordseif07"
              className="box-border flex flex-row items-center p-[13px_16px] gap-[10px] w-[420px] h-[50px] bg-[#FBFBFB] border border-[#11A900] rounded-[20px] font-poppins font-semibold text-[18px] text-[#787777]"
            />
          </div>

          {/* Password Fields */}
          <div className="flex flex-row items-center gap-[30px] mb-5">
            <div className="flex flex-col items-start p-0 gap-[10px] w-[420px] h-[90px]">
              <label className="font-poppins font-semibold text-[20px] leading-[30px] text-[#061404]">
                Admin Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="XXXXXXXX"
                className="box-border flex flex-row items-center p-[13px_16px] gap-[10px] w-[420px] h-[50px] bg-[#FBFBFB] border border-[#11A900] rounded-[20px] font-poppins font-semibold text-[18px] text-[#787777]"
              />
            </div>
            <div className="flex flex-col items-start p-0 gap-[10px] w-[420px] h-[90px]">
              <label className="font-poppins font-semibold text-[20px] leading-[30px] text-[#061404]">
                Repeat Password
              </label>
              <input
                type="password"
                name="repeatPassword"
                value={formData.repeatPassword}
                onChange={handleInputChange}
                placeholder="XXXXXXXX"
                className="box-border flex flex-row items-center p-[13px_16px] gap-[10px] w-[420px] h-[50px] bg-[#FBFBFB] border border-[#11A900] rounded-[20px] font-poppins font-semibold text-[18px] text-[#787777]"
              />
            </div>
          </div>

          {/* Authorities Section */}
          <div className="flex flex-col items-start p-0 gap-[10px] w-[725px] mb-5">
            <label className="font-poppins font-semibold text-[20px] leading-[30px] text-[#061404]">
              Admin Authorities
            </label>
            <div className="flex flex-row items-start gap-[30px]">
              {Object.entries({
                superAdmin: 'SuperAdmin',
                investments: 'Investments',
                store: 'Store',
                services: 'Services',
                notification: 'Notification'
              }).map(([key, label]) => (
                <div key={key} className="flex flex-row items-center gap-[10px]">
                  <input
                    type="checkbox"
                    checked={formData.authorities[key]}
                    onChange={() => handleCheckboxChange(key)}
                    className="w-[20px] h-[20px] bg-[#FBFBFB] border-2 border-[#11A900] rounded-sm"
                  />
                  <span className="font-poppins font-medium text-[18px] leading-[27px] text-[#061404]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end w-full mt-5">
            <button
              type="submit"
              className="flex flex-row justify-center items-center py-[2px] px-[16px] w-[160px] h-[40px] bg-[#11A900] rounded-[20px]"
            >
              <span className="font-poppins font-semibold text-[20px] leading-[30px] text-white">
                Submit
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddNewAdmin
