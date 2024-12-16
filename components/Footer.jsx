// components/Footer.jsx

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full max-w-[1440px] mx-auto bg-[#2C3C2D] rounded-t-[100px] py-8 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-[98px] w-full max-w-7xl mx-auto">
        {/* Logo */}
        <div className="w-full max-w-[300px] lg:max-w-[407px] h-[250px] lg:h-[426px] relative">
          <Image
            src="/images/XBXBG.svg"
            alt="XBX Background"
            fill
            className="object-contain"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-8 w-full lg:w-[662px]">
          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-[56px]">
            {/* Quick Links */}
            <div className="flex flex-col gap-[19px]">
              <h3 className="font-inter font-semibold text-[16px] text-[#FBFBFB] capitalize">
                quick links
              </h3>
              <Link href="/store" className="font-inter text-[16px] text-[#FBFBFB]">
                xbx store
              </Link>
              <Link href="/investment" className="font-inter text-[16px] text-[#FBFBFB]">
                xbx investment
              </Link>
              <Link href="/services" className="font-inter text-[16px] text-[#FBFBFB]">
                xbx services
              </Link>
            </div>

            {/* About */}
            <div className="flex flex-col gap-[21px]">
              <h3 className="font-inter font-semibold text-[16px] text-[#FBFBFB]">
                About
              </h3>
              <Link href="/privacy" className="font-inter text-[16px] text-[#FBFBFB]">
                privacy policy
              </Link>
              <Link href="/about" className="font-inter text-[16px] text-[#FBFBFB]">
                About us
              </Link>
            </div>

            {/* Support */}
            <div className="flex flex-col gap-[21px]">
              <h3 className="font-inter font-semibold text-[16px] text-[#FBFBFB]">
                Support
              </h3>
              <Link href="/support" className="font-inter text-[16px] text-[#FBFBFB]">
                Support Request
              </Link>
              <Link href="/contact" className="font-inter text-[16px] text-[#FBFBFB]">
                Contact
              </Link>
            </div>

            {/* Forms */}
            <div className="flex flex-col gap-[21px]">
              <h3 className="font-inter font-semibold text-[16px] text-[#FBFBFB] capitalize">
                forms
              </h3>
              <Link href="/forms/product" className="font-inter text-[16px] text-[#FBFBFB] leading-[150%]">
                product request form
              </Link>
              <Link href="/forms/service" className="font-inter text-[16px] text-[#FBFBFB] leading-[150%]">
                service request form
              </Link>
              <Link href="/forms/investment" className="font-inter text-[16px] text-[#FBFBFB] leading-[150%]">
                investment request form
              </Link>
            </div>
          </div>

          {/* Contact and Social */}
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 w-full md:w-[399px]">
            {/* Contact Icons */}
            <div className="flex items-center gap-6">
              <div className="w-6 h-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM16.7 16.7L11 13V7H12.5V12.2L17.5 15.4L16.7 16.7Z" fill="#65BEFF"/>
                </svg>
              </div>
              <div className="w-6 h-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#FF7D7D"/>
                </svg>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex justify-center gap-4">
              {/* Facebook */}
              <Link href="#" className="w-10 h-10 bg-[#2C3C2D] rounded-full flex items-center justify-center">
                <svg width="12" height="23" viewBox="0 0 12 23" fill="none">
                  <path d="M3 23V12H0V8H3V5C3 1.791 4.791 0 8 0C9.209 0 10.5 0.104 11 0.5V4H9C7.5 4 7 4.5 7 6V8H11L10 12H7V23H3Z" fill="#FBFBFB"/>
                </svg>
              </Link>
              {/* Twitter */}
              <Link href="#" className="w-10 h-10 bg-[#2C3C2D] rounded-full flex items-center justify-center">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                  <path d="M20 1.894C19.264 2.215 18.474 2.43 17.643 2.523C18.491 2.022 19.141 1.229 19.447 0.291C18.656 0.75 17.777 1.087 16.838 1.275C16.085 0.488 15.017 0 13.847 0C11.581 0 9.743 1.838 9.743 4.103C9.743 4.425 9.779 4.738 9.849 5.038C6.437 4.868 3.417 3.234 1.392 0.751C1.039 1.357 0.837 2.022 0.837 2.73C0.837 4.11 1.563 5.328 2.663 6.038C1.99 6.017 1.357 5.835 0.804 5.522C0.804 5.539 0.804 5.556 0.804 5.573C0.804 7.5 2.218 9.115 4.094 9.491C3.751 9.584 3.388 9.633 3.014 9.633C2.749 9.633 2.492 9.608 2.242 9.56C2.764 11.147 4.279 12.314 6.075 12.347C4.67 13.43 2.901 14.072 0.978 14.072C0.647 14.072 0.321 14.053 0 14.016C1.816 15.161 3.973 15.828 6.29 15.828C13.837 15.828 17.965 9.74 17.965 4.459C17.965 4.283 17.961 4.108 17.953 3.934C18.754 3.37 19.449 2.674 20 1.894Z" fill="#FBFBFB"/>
                </svg>
              </Link>
              {/* Instagram */}
              <Link href="#" className="w-10 h-10 bg-[#2C3C2D] rounded-full flex items-center justify-center">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M7.5 1.35C9.49 1.35 9.73 1.358 10.496 1.393C11.021 1.397 11.539 1.511 12.016 1.727C12.374 1.889 12.694 2.127 12.956 2.424C13.253 2.686 13.491 3.006 13.653 3.364C13.869 3.841 13.983 4.359 13.987 4.884C14.022 5.65 14.03 5.89 14.03 7.88C14.03 9.87 14.022 10.11 13.987 10.876C13.983 11.401 13.869 11.919 13.653 12.396C13.491 12.754 13.253 13.074 12.956 13.336C12.694 13.633 12.374 13.871 12.016 14.033C11.539 14.249 11.021 14.363 10.496 14.367C9.73 14.402 9.49 14.41 7.5 14.41C5.51 14.41 5.27 14.402 4.504 14.367C3.979 14.363 3.461 14.249 2.984 14.033C2.626 13.871 2.306 13.633 2.044 13.336C1.747 13.074 1.509 12.754 1.347 12.396C1.131 11.919 1.017 11.401 1.013 10.876C0.978 10.11 0.97 9.87 0.97 7.88C0.97 5.89 0.978 5.65 1.013 4.884C1.017 4.359 1.131 3.841 1.347 3.364C1.509 3.006 1.747 2.686 2.044 2.424C2.306 2.127 2.626 1.889 2.984 1.727C3.461 1.511 3.979 1.397 4.504 1.393C5.27 1.358 5.51 1.35 7.5 1.35ZM7.5 0C5.47 0 5.21 0.009 4.433 0.044C3.748 0.052 3.074 0.208 2.454 0.502C1.913 0.762 1.433 1.137 1.048 1.602C0.583 1.987 0.208 2.467 -0.052 3.008C-0.346 3.628 -0.502 4.302 -0.51 4.987C-0.545 5.764 -0.554 6.024 -0.554 8.054C-0.554 10.084 -0.545 10.344 -0.51 11.121C-0.502 11.806 -0.346 12.48 -0.052 13.1C0.208 13.641 0.583 14.121 1.048 14.506C1.433 14.971 1.913 15.346 2.454 15.606C3.074 15.9 3.748 16.056 4.433 16.064C5.21 16.099 5.47 16.108 7.5 16.108C9.53 16.108 9.79 16.099 10.567 16.064C11.252 16.056 11.926 15.9 12.546 15.606C13.087 15.346 13.567 14.971 13.952 14.506C14.417 14.121 14.792 13.641 15.052 13.1C15.346 12.48 15.502 11.806 15.51 11.121C15.545 10.344 15.554 10.084 15.554 8.054C15.554 6.024 15.545 5.764 15.51 4.987C15.502 4.302 15.346 3.628 15.052 3.008C14.792 2.467 14.417 1.987 13.952 1.602C13.567 1.137 13.087 0.762 12.546 0.502C11.926 0.208 11.252 0.052 10.567 0.044C9.79 0.009 9.53 0 7.5 0Z" fill="#FBFBFB"/>
                  <path d="M7.5 3.92C6.76 3.92 6.037 4.127 5.413 4.517C4.79 4.907 4.294 5.463 3.987 6.116C3.68 6.769 3.575 7.493 3.684 8.193C3.793 8.893 4.111 9.543 4.596 10.064C5.081 10.585 5.718 10.962 6.422 11.107C7.127 11.252 7.862 11.161 8.532 10.844C9.202 10.527 9.776 9.995 10.181 9.333C10.586 8.671 10.8 7.906 10.8 7.124C10.8 6.085 10.4 5.089 9.689 4.341C8.978 3.593 8.029 3.171 7.037 3.171L7.5 3.92ZM7.5 9.81C7.037 9.81 6.585 9.679 6.198 9.433C5.811 9.187 5.507 8.837 5.322 8.422C5.137 8.007 5.079 7.544 5.154 7.097C5.229 6.65 5.434 6.237 5.743 5.91C6.052 5.583 6.444 5.365 6.868 5.285C7.292 5.205 7.731 5.266 8.124 5.462C8.517 5.658 8.849 5.977 9.082 6.383C9.315 6.789 9.438 7.262 9.438 7.747C9.438 8.396 9.191 9.018 8.752 9.481C8.313 9.944 7.724 10.204 7.11 10.204L7.5 9.81ZM11.025 3.764C11.025 3.574 10.97 3.389 10.866 3.231C10.762 3.073 10.614 2.95 10.441 2.876C10.268 2.802 10.077 2.781 9.893 2.816C9.709 2.851 9.539 2.94 9.405 3.074C9.271 3.208 9.182 3.378 9.147 3.562C9.112 3.746 9.133 3.937 9.207 4.11C9.281 4.283 9.404 4.431 9.562 4.535C9.72 4.639 9.905 4.694 10.095 4.694C10.352 4.694 10.599 4.592 10.785 4.406C10.971 4.22 11.073 3.973 11.073 3.716L11.025 3.764Z" fill="#FBFBFB"/>
                </svg>
              </Link>
              {/* LinkedIn */}
              <Link href="#" className="w-10 h-10 bg-[#2C3C2D] rounded-full flex items-center justify-center">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M13.5 0H1.5C0.675 0 0 0.675 0 1.5V13.5C0 14.325 0.675 15 1.5 15H13.5C14.325 15 15 14.325 15 13.5V1.5C15 0.675 14.325 0 13.5 0ZM4.5 12.75H2.25V5.25H4.5V12.75ZM3.375 4.5C2.925 4.5 2.25 3.825 2.25 3.375C2.25 2.925 2.925 2.25 3.375 2.25C3.825 2.25 4.5 2.925 4.5 3.375C4.5 3.825 3.825 4.5 3.375 4.5ZM12.75 12.75H10.5V9C10.5 8.175 9.825 7.5 9 7.5C8.175 7.5 7.5 8.175 7.5 9V12.75H5.25V5.25H7.5V6.075C7.875 5.55 8.85 5.025 9.75 5.025C11.325 5.025 12.75 6.45 12.75 8.025V12.75Z" fill="#FBFBFB"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
