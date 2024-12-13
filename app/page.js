"use client";
import { useSelector } from "react-redux";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer"; 

export default function HomePage() {
  const user = useSelector((state) => state.user.userDetails);
  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-img.png"
            alt="XBX Hero Background"
            fill
            className="object-cover"
            quality={100}
          />
          <div className="absolute inset-0 transition-colors duration-300" />
        </div>

        {/* Hero Patterns */}
        <Image
          src="/pattern/pattern-dots-hero.svg"
          alt="Hero Pattern"
          width={420.45}
          height={340.63}
          className="absolute top-[3em] -left-[6.25em] z-10 scale-50 transition-opacity duration-300"
        />
        <Image
          src="/pattern/pattern-dots-hero.svg"
          alt="Hero Pattern"
          width={420.45}
          height={340.63}
          className="absolute top-[3em] -right-[6.25em] z-10 scale-50 transition-opacity duration-300"
        />

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <div className="p-4 flex flex-col justify-center items-center rounded-xl max-w-2xl backdrop-blur-sm transition-colors duration-300">
            <h1 className="text-[2.5rem] font-bold text-white mb-4">
              WELCOME TO <span className="text-[#0FCD1C]">XBX</span>
            </h1>
            <p className="text-[1.375rem] w-full max-w-[52.8125em] text-center text-white mb-4">
              Explore our comprehensive range of services designed to elevate
              your ideas into impactful solutions. From cutting-edge industrial
              automation to creative digital marketing strategies, our expert
              team is dedicated to helping you achieve your goals.
            </p>
            <button className="w-[270px] h-16 bg-gradient-to-b from-[#11510D] to-[#03230F] border border-[#FBFBFB] dark:border-dark-secondary shadow-lg rounded-2xl text-[#EBEEF4] font-bold text-2xl hover:opacity-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0FCD1C]">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="relative w-full bg-[#FBFBFB] dark:bg-[#0e1b0f] py-20 overflow-hidden">
        {/* Background Patterns Layer */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/pattern/pattern-dots2.svg"
            alt="Dots Pattern"
            width={300}
            height={300}
            className="absolute top-10 -right-10 [filter:brightness(1)_invert(0)] dark:[filter:brightness(0.6)_invert(0.3)_sepia(1)_saturate(3)_hue-rotate(90deg)]"
          />
          <Image
            src="/pattern/bwithheart.png"
            alt="Heart Pattern"
            width={300}
            height={300}
            className="absolute bottom-0 right-0 opacity-20"
          />
            <Image
            src="/pattern/bwithheart.png"
            alt="Heart Pattern"
            width={300}
            height={300}
            className="absolute -top-10 -left-10 opacity-20"
          />
          <Image
            src="/pattern/line-pattern.svg"
            alt="Line Pattern"
            width={220.58}
            height={520}
            className="absolute top-20 left-0 [filter:brightness(1)_invert(0)] dark:[filter:brightness(0.6)_invert(0.3)_sepia(1)_saturate(3)_hue-rotate(90deg)]"
          />
        </div>

        {/* Content Layer */}
        <div className="relative">
          {/* About XBX Title */}
          <h2 className="text-center text-[#0D0D0D] dark:text-[#FBFBFB] font-bold text-[40px] leading-[80px] font-poppins mb-12 transition-colors duration-300">
            About <span className="text-[#0FCD1C]">XBX</span>
          </h2>

          {/* Flex Container */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-[40px] max-w-[1142px] mx-auto px-4">
            {/* Left Item (Image and Overlay) */}
            <div className="relative w-full md:w-[507px] h-[518.58px]">
              {/* Overlay */}
              <div className="absolute inset-0 bg-[rgba(13,22,24,0.6)] dark:bg-[rgba(13,22,24,0.8)] border border-[rgba(242,220,194,0.16)] dark:border-dark-accent rounded-[24px] transition-all duration-300" />
              {/* Image */}
              <div className="absolute top-[21.38px] left-[29.4px] w-[477.6px] h-[497.2px]">
                <Image
                  src="/images/Office chair still life-sec1.png"
                  alt="Office chair still life"
                  width={477.6}
                  height={497.2}
                  className="rounded-[24px] object-cover"
                />
              </div>
            </div>

            {/* Right Item (Paragraph) */}
            <div className="w-full md:w-[595px]">
              <p className="font-poppins font-normal text-[20px] leading-[160%] text-[#0D0D0D] dark:text-[#FBFBFB] transition-colors duration-300">
                We are XBX, an industrial and commercial company created by
                innovators from around the globe, specializing in technological
                services and digital transformation solutions. Our mission is to
                be your primary partner in turning every idea into an achievement
                and every system into advanced technology. We transform your
                vision into a tangible reality.
              </p>
              <p className="font-poppins font-normal text-[20px] leading-[160%] text-[#0D0D0D] dark:text-[#FBFBFB] transition-colors duration-300 mt-4">
                Our core goal is to convert everything we touch into technology
                and drive progress across all sectors we serve, from heavy
                industries to daily services, along with support and development.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Overview Section */}
      <div className="relative w-full bg-[#FBFBFB] dark:bg-[#0e1b0f] py-20 transition-colors duration-300">
        {/* Background Pattern */}
        <Image
          src="/pattern/line-pattern.svg"
          alt="Line Pattern"
          width={358}
          height={826.45}
          className="absolute -top-0 right-[-100px] z-0 [filter:brightness(1)_invert(0)] dark:[filter:brightness(0.6)_invert(0.3)_sepia(1)_saturate(3)_hue-rotate(90deg)]"
        />
        <h2 className="text-center text-[#0D0D0D] dark:text-[#FBFBFB] font-bold text-[36px] leading-[80px] font-poppins mb-8 transition-colors duration-300">
          Our <span className="text-[#0FCD1C]">Overview</span>
        </h2>
        <div className="relative w-full flex flex-col md:flex-row items-center gap-8">
          {/* Left Section */}
          <div className="relative w-[991px] l:w-[1200px]  h-[412px] overflow-hidden flex flex-col justify-center items-start">
            {/* Background Image */}
          
            {/* White Rectangle */}
            <Image
              src="/pattern/rec-white.svg"
              alt="White Rectangle"
              width={1200}
              height={426}
              className="absolute top-0 left-0 z-10 transition-opacity duration-300  2xl:w-[1400px]"
            />
            {/* Green Rectangle */}
            <Image
              src="/pattern/rec-green.svg"
              alt="Green Rectangle"
              width={991}
              height={426}
              className="absolute top-0 -left-[20px] z-10 transition-opacity duration-300  2xl:w-[1400px]"
            />
            {/* Overview Items */}
            <div className="relative z-20 pl-20 space-y-8">
              {/* Vision */}
              <div className="flex items-center gap-4">
                <div className="w-[80px] h-[80px] rounded-full bg-[#0FCD1C] flex items-center justify-center">
                  <Image
                    src="/icons/vision.svg"
                    alt="Vision Icon"
                    width={40}
                    height={40}
                    className="dark:filter dark:invert"
                  />
                </div>
                <div>
                  <h3 className="text-[24px] font-bold text-[#f7f7f7] dark:text-[#FBFBFB] transition-colors duration-300">Vision</h3>
                  <p className="text-[16px] text-[#f7f7f7] dark:text-[#FBFBFB] transition-colors duration-300">
                    To be the leading technology partner in industrial and digital transformation
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className="flex items-center gap-4">
                <div className="w-[80px] h-[80px] rounded-full bg-[#0FCD1C] flex items-center justify-center">
                  <Image
                    src="/icons/mission.svg"
                    alt="Mission Icon"
                    width={40}
                    height={40}
                    className="dark:filter dark:invert"
                  />
                </div>
                <div>
                  <h3 className="text-[24px] font-bold text-[#f7f7f7] dark:text-[#FBFBFB] transition-colors duration-300">Mission</h3>
                  <p className="text-[16px] text-[#f7f7f7] dark:text-[#FBFBFB] transition-colors duration-300">
                    Empowering businesses through innovative technological solutions
                  </p>
                </div>
              </div>

              {/* Values */}
              <div className="flex items-center gap-4">
                <div className="w-[80px] h-[80px] rounded-full bg-[#0FCD1C] flex items-center justify-center">
                  <Image
                    src="/icons/values.svg"
                    alt="Values Icon"
                    width={40}
                    height={40}
                    className="dark:filter dark:invert"
                  />
                </div>
                <div>
                  <h3 className="text-[24px] font-bold text-[#f7f7f7] dark:text-[#FBFBFB] transition-colors duration-300">Values</h3>
                  <p className="text-[16px] text-[#f7f7f7] dark:text-[#FBFBFB] transition-colors duration-300">
                    Innovation, Excellence, Integrity, and Customer Success
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Overview Right Image */}
          <div className="absolute right-0 w-[900px]   xl:w-[1200px]  h-[412px]">
            <Image
              src="/images/sec3.png"
              alt="Overview Section Image"
              fill
              className="object-cover rounded-[20px]"
            />
          </div>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="relative w-full bg-[#FBFBFB] dark:bg-[#0e1b0f] py-20 transition-colors duration-300">
        {/* Section Title and Subtitle */}
        <div className="flex flex-col items-center gap-2 mb-12">
          <h2 className="text-center text-[#0D0D0D] dark:text-[#FBFBFB] font-bold text-[40px] leading-[80px] font-poppins transition-colors duration-300">
            What We Offer
          </h2>
          <p className="text-center text-[#0D0D0D] dark:text-[#FBFBFB] font-medium text-[24px] leading-[160%] max-w-[899px] transition-colors duration-300">
            At <span className="text-[#0FCD1C]">XBX</span>, we provide integrated solutions across various domains,
            including:
          </p>
        </div>

        {/* Background Images */}
        <Image
          src="/images/XBXfingerprintG.png"
          alt="Fingerprint Graphic"
          width={424}
          height={424}
          className="absolute top-[178px] right-[50px]  transition-opacity duration-300"
        />
    

        {/* Main Content */}
        <div className="max-w-[1234px] mx-auto flex flex-col md:flex-row items-start md:items-center gap-8 relative px-4">
          {/* Left Side (Image with Overlay and Text) */}
          <div className="relative w-full md:w-[446px] h-[529px]">
            {/* Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/sec4.png"
                alt="Hands of businessman or student filling application form"
                fill
                className="rounded-[16px] object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0    rounded-[16px] transition-opacity duration-300" />
            </div>
            {/* Text on Image */}
            <div className="absolute inset-0 flex flex-col justify-center items-center p-6 gap-6">
              <h3 className="font-poppins font-bold text-[28px] leading-[170%] text-[#FBFBFB] text-center">
                (XBX Marketing)
              </h3>
              <p className="font-poppins font-medium text-[20px] leading-[170%] text-[#FBFBFB] text-start">
                - Digital marketing (SEO, paid advertising, and performance
                analysis).
                <br /><br />
                - Social media marketing.
                <br /><br />
                - Traditional and creative advertising campaigns.
                <br /><br />
                - Production of distinctive marketing content to enhance brand
                awareness.
              </p>
            </div>
          </div>

          {/* Right Side (Service Cards) */}
          <div className="w-full md:w-auto flex flex-col gap-8">
            {/* First Row */}
            <div className="flex flex-col md:flex-row gap-8">
              {/* Industrial Services */}
              <div className="flex justify-center items-center px-6 py-4 bg-[#E7FFE7] dark:bg-[#E7FFE7] rounded-[20px] w-full md:w-[288px] h-[114px] hover:bg-[#505F50] dark:hover:bg-[#324733] group transition-all duration-300">
                <p className="font-poppins font-bold text-[24px] leading-[170%] text-[#000000] dark:text-[#000000] text-center group-hover:text-[#FBFBFB] transition-colors duration-300">
                  Industrial Services (XBX Industrial)
                </p>
              </div>
              {/* Business Solutions */}
              <div className="flex justify-center items-center px-6 py-4 bg-[#E7FFE7] dark:bg-[#E7FFE7] rounded-[20px] w-full md:w-[357px] h-[114px] hover:bg-[#505F50] dark:hover:bg-[#324733] group transition-all duration-300">
                <p className="font-poppins font-bold text-[24px] leading-[170%] text-[#000000] dark:text-[#000000] text-center group-hover:text-[#FBFBFB] transition-colors duration-300">
                  Business Solutions (XBX Business Solutions)
                </p>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-col md:flex-row gap-8">
              {/* Design and Creativity */}
              <div className="flex justify-center items-center px-6 py-4 bg-[#E7FFE7] dark:bg-[#E7FFE7] rounded-[20px] w-full md:w-[321px] h-[114px] hover:bg-[#505F50] dark:hover:bg-[#324733] group transition-all duration-300">
                <p className="font-poppins font-bold text-[24px] leading-[170%] text-[#000000] dark:text-[#000000] text-center group-hover:text-[#FBFBFB] transition-colors duration-300">
                  Design and Creativity (XBX Creative)
                </p>
              </div>
              {/* Technological Solutions */}
              <div className="flex justify-center items-center px-6 py-4 bg-[#E7FFE7] dark:bg-[#E7FFE7] rounded-[20px] w-full md:w-[343px] h-[114px] hover:bg-[#505F50] dark:hover:bg-[#324733] group transition-all duration-300">
                <p className="font-poppins font-bold text-[24px] leading-[170%] text-[#000000] dark:text-[#000000] text-center group-hover:text-[#FBFBFB] transition-colors duration-300">
                  Technological Solutions (XBX Tech)
                </p>
              </div>
            </div>

            {/* Third Row */}
            <div className="flex flex-col md:flex-row gap-8">
              {/* Projects */}
              <div className="flex justify-center items-center px-6 py-4 bg-[#E7FFE7] dark:bg-[#E7FFE7] rounded-[20px] w-full md:w-[227px] h-[114px] hover:bg-[#505F50] dark:hover:bg-[#324733] group transition-all duration-300">
                <p className="font-poppins font-bold text-[24px] leading-[170%] text-[#000000] dark:text-[#000000] text-center group-hover:text-[#FBFBFB] transition-colors duration-300">
                  Projects (XBX Projects)
                </p>
              </div>
              {/* Operations and Development */}
              <div className="flex justify-center items-center px-6 py-4 bg-[#E7FFE7] dark:bg-[#E7FFE7] rounded-[20px] w-full md:w-[417px] h-[114px] hover:bg-[#505F50] dark:hover:bg-[#324733] group transition-all duration-300">
                <p className="font-poppins font-bold text-[24px] leading-[170%] text-[#000000] dark:text-[#000000] text-center group-hover:text-[#FBFBFB] transition-colors duration-300">
                  Operations and Development (XBX Operations)
                </p>
              </div>
            </div>

            {/* Fourth Row */}
            <div className="flex justify-center items-center px-6 py-4 bg-[#E7FFE7] dark:bg-[#E7FFE7] rounded-[20px] w-full md:w-[417px] h-[114px] hover:bg-[#505F50] dark:hover:bg-[#324733] group transition-all duration-300">
              <p className="font-poppins font-bold text-[24px] leading-[170%] text-[#000000] dark:text-[#000000] text-center group-hover:text-[#FBFBFB] transition-colors duration-300">
                Advertising and Marketing (XBX Marketing)
              </p>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <button
            className="
              w-[270px]
              h-16
              bg-gradient-to-b
              from-[#11510D]
              to-[#03230F]
              dark:from-[#0FCD1C]
              dark:to-[#11510D]
              border
              border-[#FBFBFB]
              shadow-lg
              rounded-2xl
              text-[#EBEEF4]
              font-bold
              text-[26px]
              leading-[150%]
              hover:opacity-90
              transition-all
              focus:outline-none
              focus:ring-2
              focus:ring-white
            "
          >
            View All
          </button>
        </div>
      </div>

      {/* Our Vision and Goals Section */}
      <div className="relative w-full bg-[#FBFBFB] dark:bg-[#0e1b0f] py-20 overflow-hidden">
        {/* Background Patterns Layer */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/pattern/pattern-dots2.svg"
            alt="Dots Pattern"
            width={309.62}
            height={298.61}
            className="absolute top-40 -left-20 -rotate-[6deg] [filter:brightness(1)_invert(0)] dark:[filter:brightness(0.6)_invert(0.3)_sepia(1)_saturate(3)_hue-rotate(90deg)]"
          />
          <Image
            src="/pattern/line-pattern.svg"
            alt="Line Pattern"
            width={259}
            height={449.75}
            className="absolute top-0 right-0 [filter:brightness(1)_invert(0)] dark:[filter:brightness(0.6)_invert(0.3)_sepia(1)_saturate(3)_hue-rotate(90deg)]"
          />
          <Image
            src="/pattern/bwithheart.png"
            alt="Heart Pattern"
            width={300}
            height={300}
            className="absolute top-0 -left-[6rem] opacity-20"
          />
          <Image
            src="/pattern/heart.png"
            alt="Heart Icon"
            width={424}
            height={424}
            className="absolute bottom-20 -right-10 rotate-[80deg]"
          />
        </div>

        {/* Content Layer */}
        <div className="relative">
          {/* Frame 978 */}
          <div className="flex flex-col items-center gap-7 mx-auto max-w-[1440px] px-4">
            {/* Frame 977 */}
            <div className="flex flex-col md:flex-row justify-around items-center w-full h-auto">
              {/* Frame 975 */}
              <div className="flex flex-col items-start w-full md:w-[596px] h-auto">
                {/* Our Vision and Goals Title */}
                <h3 className="text-[40px] font-bold text-[#0D0D0D] dark:text-[#FBFBFB] font-poppins transition-colors duration-300">
                  Our Vision and Goals
                </h3>

                {/* Frame 974 */}
                <div className="flex flex-col items-start gap-4 w-full mt-9 mb-9">
                  {/* Our Goals */}
                  <h4 className="text-[32px] font-semibold text-[#0D0D0D] dark:text-[#FBFBFB] font-poppins transition-colors duration-300">
                    Our Goals
                  </h4>
                  <p className="font-poppins font-normal text-[20px] leading-[160%] text-[#192B1A] dark:text-[#FBFBFB] transition-colors duration-300">
                    - Support individuals and businesses to achieve their full potential.
                    <br /><br />
                    - Develop sustainable solutions that enhance operational efficiency and improve quality of life.
                    <br /><br />
                    - Promote creativity and innovation across all sectors we serve.
                  </p>
                </div>

                {/* Frame 973 */}
                <div className="flex flex-col items-start gap-4 w-full h-[161px]">
                  {/* Our Vision */}
                  <h4 className="text-[32px] font-semibold text-[#0D0D0D] dark:text-[#FBFBFB] font-poppins transition-colors duration-300">
                    Our Vision
                  </h4>
                  <p className="font-poppins font-normal text-[20px] leading-[160%] text-[#192B1A] dark:text-[#FBFBFB] transition-colors duration-300">
                    To be the leading company in transforming everything into innovative technology.
                  </p>
                </div>
              </div>

              {/* Frame 976 */}
              <div className="flex flex-col items-start gap-4 w-full md:w-[499px] h-[512px] relative">
                {/* Background Pattern */}
                <div className="absolute top-[-50px] left-[-100px] w-[600px] h-[600px] z-0">
                  <Image
                    src="/pattern/circlesec5.svg"
                    alt="Background Circle Pattern"
                    fill
                    className="object-contain transition-opacity duration-300"
                  />
                </div>

                {/* First Image */}
                <div className="absolute top-0 left-[-50px] w-[423.81px] h-[310.95px] bg-gradient-to-t from-[rgba(25,43,26,0.1)] to-[rgba(25,43,26,0.1)] bg-cover shadow-md rounded-[20px] z-10">
                  <Image
                    src="/images/sec52.png"
                    alt="Target with arrows"
                    fill
                    className="object-cover rounded-[20px]"
                  />
                  <div className="absolute inset-0 bg-black opacity-0  rounded-[20px] transition-opacity duration-300" />
                </div>

                {/* Second Image (Overlapping and Shifted) */}
                <div className="absolute top-[200px] left-[30px] w-[423.81px] h-[310.95px] bg-gradient-to-t from-[rgba(25,43,26,0.1)] to-[rgba(25,43,26,0.1)] bg-cover shadow-md rounded-[20px] z-20">
                  <Image
                    src="/images/sec51.png"
                    alt="Face recognition and personal identification collage"
                    fill
                    className="object-cover rounded-[20px]"
                  />
                  <div className="absolute inset-0 bg-black opacity-0  rounded-[20px] transition-opacity duration-300" />
                </div>
              </div>
            </div>

            {/* Button XBX */}
            <button
              className="
                w-[270px]
                h-16
                bg-gradient-to-b
                from-[#11510D]
                to-[#03230F]
                dark:from-[#0FCD1C]
                dark:to-[#11510D]
                border
                border-[#FBFBFB]
                shadow-lg
                rounded-[20px]
                text-[#EBEEF4]
                font-poppins
                font-bold
                text-[26px]
                leading-[39px]
                hover:opacity-90
                transition-all
                focus:outline-none
                focus:ring-2
                focus:ring-white
              "
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Our Core Values Section */}
      <div className="relative w-full bg-[#FBFBFB] dark:bg-[#0e1b0f] py-20 overflow-hidden">
        {/* Background Patterns Layer */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/pattern/bwithheart.png"
            alt="Heart Pattern"
            width={300}
            height={300}
            className="absolute top-60 right-40 opacity-20"
          />
          <Image
            src="/pattern/heart.png"
            alt="Heart Icon"
            width={424}
            height={424}
            className="absolute top-0 -left-[11rem] rotate-90"
          />
          <Image
            src="/pattern/heart.png"
            alt="Heart Icon"
            width={424}
            height={424}
            className="absolute -bottom-12 left-4"
          />
        </div>

        {/* Content Layer */}
        <div className="relative">
          {/* Frame 980 */}
          <div className="flex flex-row justify-center items-center gap-[75px] mx-auto max-w-[1105px] px-4">
            {/* Woman accessories with leaves on black */}
            <div className="w-[385px] h-[578px] bg-cover rounded-[20px]">
              <Image
                src="/images/sec6.png"
                alt="Woman accessories with leaves on black"
                width={385}
                height={578}
                className="object-cover rounded-[20px]"
              />
            </div>

            {/* Our Core Values (XBX Values) */}
            <div className="flex flex-col items-start gap-4 w-[645px] h-[606px]">
              {/* Our Core Values Title */}
              <h3 className="text-[40px] font-bold text-[#0D0D0D] dark:text-[#FBFBFB] font-poppins">
                Our Core Values (XBX Values)
              </h3>

              {/* Our Values Description */}
              <p className="font-poppins font-normal text-[22px] leading-[42px] text-[#192B1A] dark:text-[#FBFBFB] transition-colors duration-300">
                - Creativity: We constantly strive to create new ideas and solutions.
                <br /><br />
                - Quality: We adhere to the highest quality standards in everything we provide.
                <br /><br />
                - Partnership: We build long-term relationships with our clients and partners, as success is what matters most to us.
                <br /><br />
                - Sustainability: We aim to balance technology with environmental responsibility and our duty towards humanity, developing technologies to assist people, not to surpass them.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Section */}
      <div className="relative w-full bg-[#2C3C2D] dark:bg-[#192B1A] py-20 overflow-hidden">
        {/* Background Patterns Layer */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/pattern/bwithheart.png"
            alt="Heart Pattern"
            width={300}
            height={300}
            className="absolute top-40 right-20"
          />
          <Image
            src="/pattern/heart.png"
            alt="Heart Icon"
            width={235.39}
            height={235.39}
            className="absolute -top-10 right-40"
          />
          <Image
            src="/pattern/heart.png"
            alt="Heart Icon"
            width={235.39}
            height={235.39}
            className="absolute top-10 left-40"
          />
          <Image
            src="/pattern/heart.png"
            alt="Heart Icon"
            width={235.39}
            height={235.39}
            className="absolute bottom-0 left-80"
          />
        </div>

        {/* Content Layer */}
        <div className="relative">
          {/* Content */}
          <div className="container mx-auto px-4 relative z-[3]">
            <div className="max-w-[full] mx-auto flex flex-col items-center">
              {/* Title and Subtitle */}
              <div className="text-center mb-12">
                <h2 className="font-poppins font-bold text-[40px] leading-[80px] text-[#FBFBFB] mb-3">
                  Privacy Policy (XBX Privacy Policy)
                </h2>
                <p className="font-poppins font-semibold text-[24px] leading-[41px] text-center text-[#FBFBFB]">
                  At XBX, we prioritize our clients' privacy.
                </p>
              </div>

              {/* Policy Details */}
              <div className="font-poppins font-normal text-[22px] leading-[33px] text-[#FBFBFB] space-y-8">
                <p>- Data Collection: We only collect data to improve the services we offer our clients.</p>
                <p>- Data Usage: No personal information is shared with third parties without prior consent.</p>
                <p>- Security: We utilize the latest technologies to ensure data protection.</p>
                <p>- Client Rights: Our clients have full control over their data.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose XBX Section */}
      <div className="relative w-full bg-transparent dark:bg-[#0e1b0f] py-20 overflow-hidden">
        {/* Background Pattern Layer */}
        <div className="absolute inset-0 pointer-events-none">
        <Image
            src="/pattern/heart.png"
            alt="Heart Icon"
            width={424}
            height={424}
            className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          /><Image
          src="/pattern/heart.png"
          alt="Heart Icon"
          width={424}
          height={424}
          className="absolute top-[6rem] right-0 transform translate-x-[8rem] -translate-y-1/2"
        />
        </div>

        {/* Content Layer */}
        <div className="relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-[120px] w-full max-w-[1065px] mx-auto h-auto py-0">
            {/* Left Side */}
            <div className="flex flex-col items-start gap-2 w-full md:w-[645px] h-auto">
              <h2 className="text-[40px] leading-[80px] font-bold text-[#0D0D0D] dark:text-[#E7FFE7]">
                Why Choose <span className="text-[#0FCD1C]">XBX</span>?
              </h2>
              <p className="text-[22px] w-auto leading-[190%] font-medium text-[#192B1A] dark:text-[#E7FFE7]">
                Because we do not merely aim to provide services; we strive to participate in your success. We believe that our partnership begins with understanding your needs and ends with achieving your goals in an innovative and efficient manner.
              </p>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block h-[300px] border-r-2 border-solid border-[black] dark:border-[white]"></div>

            {/* Right Side */}
            <div className="flex-shrink-0 w-[300px] h-[300px]">
              <Image
                src="/images/XBXBG 4.png"
                alt="XBX Background"
                width={300}
                height={300}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="relative w-full bg-[#FBFBFB] dark:bg-[#0e1b0f] py-20 transition-colors duration-300">
        <div className="relative w-full bg-[#E4F3E2] dark:bg-[#49584A]  rounded-[56px] mx-auto py-10 px-4 max-w-[1013px] transition-colors duration-300">
          <div className="flex flex-col items-center gap-7 mx-auto max-w-[638px]">
            {/* Title and Subtitle */}
            <div className="flex flex-col items-center gap-1">
              <h2 className="text-[40px] leading-[80px] font-bold text-[#19272B] dark:text-[#FBFBFB] text-center">
                Contact Us
              </h2>
              <p className="text-[24px] leading-[150%] font-semibold text-[#19272B]  dark:text-[#FBFBFB] text-center">
                Contact us without hesitation
              </p>
            </div>
            {/* Contact Information */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-[104px] w-full mt-6">
              {/* Email Info */}
              <div className="flex flex-col items-start">
                <div className="flex flex-row items-center gap-2">
                  <Image
                    src="/icons/email.svg"
                    alt="Email Icon"
                    width={32}
                    height={32}
                  />
                  <p className="text-[32px] leading-[64px] font-bold text-[#0D0D0D] dark:text-[#FBFBFB]">
                    Email:
                  </p>
                </div>
                <p className="text-[24px] leading-[48px] font-bold text-[#0D0D0D] dark:text-[#FBFBFB]">
                  info@xbx.com
                </p>
              </div>

              {/* Phone Number Info */}
              <div className="flex flex-col items-start">
                <div className="flex flex-row items-center gap-2">
                  <Image
                    src="/icons/phone.svg"
                    alt="Phone Icon"
                    width={32}
                    height={32}
                  />
                  <p className="text-[32px] leading-[64px] font-bold text-[#0D0D0D] dark:text-[#FBFBFB]">
                    Phone Number:
                  </p>
                </div>
                <p className="text-[24px] leading-[48px] font-bold text-[#0D0D0D] dark:text-[#FBFBFB]">
                  insert your phone number
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
