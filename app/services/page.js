'use client';

import Image from 'next/image';
import Link from 'next/link';

const ServicesPage = () => {
  const services = [
    {
      title: 'design',
      description:
        'Offering all design services: digital, graphic, fashion, architectural, products, and more',
      icon: '/icons/design.svg',
    },
    {
      title: 'programming',
      description: 'Providing all programming services: web, apps, software, AI, games, and more.',
      icon: '/icons/programming.svg',
    },
    {
      title: 'marketing',
      description:
        'Providing all marketing services: digital, social media, branding, advertising, and more',
      icon: '/icons/marketing.svg',
    },
    {
      title: 'Cyber security',
      description:
        'Offering comprehensive cyber security services: risk assessment, threat protection, data security, and more.',
      icon: '/icons/security.svg',
    },
    {
      title: 'Artificial Intelligence',
      description:
        'Offering a wide range of other services, such as consulting, support, training, and more, powered by AI solutions to achieve the best results',
      icon: '/icons/ai.svg',
    },
    {
      title: 'other services',
      description:
        'Offering a wide range of other services: consulting, support, training, and more.',
      icon: '/icons/other.svg',
    },
  ];

  return (
    <main className="relative w-full min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[700px] w-full bg-[url('/images/services-bg.svg')] bg-cover bg-center flex items-center justify-center 
      px-4 sm:px-8 md:px-12 lg:px-0"
      >
        <div className="flex flex-col items-center gap-[43px] max-w-[885px] w-full px-4 text-center">
          <div className="flex flex-col items-center gap-8 w-full">
            <h1 className="font-poppins font-bold text-[32px] sm:text-[36px] md:text-[40px] leading-[160%] text-[#FBFBFB] w-full">
              Innovative Digital Solutions{' '}
            </h1>
            <p className="font-poppins font-semibold text-[18px] sm:text-[20px] md:text-[22px] leading-[160%] text-[#FBFBFB] w-full">
              "AT XBX we offer a comprehensive range of innovative services to meet your business
              needs. From UI/UX design and software development to integrated digital marketing
              solutions, we are dedicated to delivering your vision with the highest standards of
              quality and professionalism."{' '}
            </p>
          </div>

          <Link href="/services/all-services">
            <button className="flex justify-center items-center w-[180px] sm:w-[212px] md:w-[212px] h-[50px] sm:h-[60px] md:h-[67px] border-2 border-[#FBFBFB] rounded-2xl">
              <span className="font-poppins font-bold text-[18px] sm:text-[20px] md:text-[22px] leading-[160%] text-white">
                start now
              </span>
            </button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="mt-[64px] flex flex-col items-center gap-20 sm:gap-[200px] lg:gap-[300px] xl:gap-[407px] w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-0">
        <div className="flex flex-col items-center gap-10 sm:gap-[80px] lg:gap-[127px] w-full max-w-[1432px] mx-auto">
          {/* Services We Provide */}
          <div className="flex flex-col items-start gap-4 sm:gap-[16px] w-full max-w-[1249px]">
            <h1 className="w-full font-poppins font-bold text-[24px] sm:text-[28px] md:text-[32px] leading-[160%] text-[#192B1A] capitalize">
              services we provide
            </h1>
            <div className="flex flex-col items-start gap-6 sm:gap-[53px] w-full">
              <p className="w-full max-w-[1023px] font-poppins font-semibold text-[16px] sm:text-[18px] md:text-[20px] leading-[160%] text-[#192B1A]">
                We offer a comprehensive range of services in design, programming, marketing, and
                cybersecurity. We specialize in digital, graphic, fashion, and architectural design,
                along with programming solutions, digital marketing, and data protection. We also
                provide consulting, technical support, and training to ensure your sustained
                success.
              </p>

              {/* Services Grid */}
              <div className="flex flex-col justify-end items-center gap-6 w-full">
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-[20px] w-full flex-wrap">
                  {services.slice(0, 3).map((service, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-start p-4 sm:p-[18px_16px] gap-[25px] w-full max-w-[376px] h-auto sm:h-[365px] bg-[linear-gradient(158.73deg,#F7FED0_14.01%,#FDFFEF_52.67%)] rounded-[24px]"
                    >
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={163}
                        height={142}
                        priority={index === 0}
                        className="w-auto h-auto"
                      />
                      <h3 className="w-full max-w-[344px] font-poppins font-bold text-[20px] sm:text-[24px] md:text-[28px] leading-[160%] text-[#192B1A] capitalize">
                        {service.title}
                      </h3>
                      <p className="w-full max-w-[344px] font-poppins font-medium text-[16px] sm:text-[18px] md:text-[19px] leading-[160%] text-[#192B1A]">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-[20px] w-full flex-wrap">
                  {services.slice(3).map((service, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-start p-4 sm:p-[18px_16px] gap-[25px] w-full max-w-[376px] h-auto sm:h-[365px] bg-[linear-gradient(158.73deg,#F7FED0_14.01%,#FDFFEF_52.67%)] rounded-[24px]"
                    >
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={154}
                        height={135}
                        priority={index === 0}
                        className="w-auto h-auto"
                      />
                      <h3 className="w-full max-w-[344px] font-poppins font-bold text-[20px] sm:text-[24px] md:text-[28px] leading-[160%] text-[#192B1A] capitalize">
                        {service.title}
                      </h3>
                      <p className="w-full max-w-[344px] font-poppins font-medium text-[16px] sm:text-[18px] md:text-[19px] leading-[160%] text-[#192B1A]">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
                <Link href="/services/all-services">
                  <button className="flex flex-row justify-center items-center p-3 sm:p-[12px_14px] gap-[8px] w-[100px] sm:w-[124px] border-2 border-[#192B1A] rounded-[16px]">
                    <span className="font-poppins font-bold text-[16px] sm:text-[18px] md:text-[20px] leading-[160%] text-[#0D0D0D]">
                      see more
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Professional Team Section */}
          <div className="flex flex-col items-center p-0 gap-[10px] w-full max-w-[1600px] h-[400px] bg-[#192B1A] z-50">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-start w-full max-w-[1398px] py-8 sm:py-12 lg:py-16 px-4 sm:px-8">
              {/* Team Image */}
              <div className="flex justify-center items-center relative w-full max-w-[693px] h-auto mb-8 lg:mb-0">
                <div className="absolute w-[300px] sm:w-[500px] md:w-[650px] lg:w-[731px] h-[300px] sm:h-[500px] md:h-[650px] lg:h-[729px] bg-[#334A34] rounded-full -z-10" />
                <Image
                  src="/icons/team.svg"
                  alt="Professional Team"
                  width={693}
                  height={729}
                  className="rounded-full z-10 object-cover max-w-full h-auto"
                />
              </div>

              {/* Team Content */}
              <div className="flex flex-col items-start gap-[28px] w-full max-w-[669px] text-center lg:text-left">
                <h2 className="font-poppins font-bold text-[24px] sm:text-[28px] md:text-[32px] leading-[160%] text-[#FBFBFB] capitalize">
                  Our Professional Team Delivers Excellence
                </h2>
                <p className="font-poppins font-semibold text-[16px] sm:text-[18px] md:text-[20px] leading-[160%] text-[#FBFBFB]">
                  Our team is made up of skilled professionals with extensive experience across
                  various fields. We prioritize innovation, quality, and a deep understanding of our
                  clients' needs, ensuring that we provide top-tier services that drive long-term
                  success.
                </p>
                <Link href="/contact">
                  <button className="flex justify-center items-center p-3 sm:p-[12px_14px] gap-[8px] w-[100px] sm:w-[126px] border-2 border-[#FBFBFB] rounded-[16px] mx-auto lg:mx-0">
                    <span className="font-poppins font-bold text-[16px] sm:text-[18px] md:text-[20px] leading-[160%] text-[#FBFBFB]">
                      start now
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Steps Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center p-0 w-full max-w-[1356px] mx-auto gap-8 sm:gap-12 lg:gap-0">
          <div className="flex flex-col justify-center items-start p-0 gap-[32px] w-full max-w-[1056px] h-auto px-4 sm:px-8">
            <div className="flex flex-col items-start p-0 gap-[24px] w-full">
              <h2 className="w-full font-poppins font-bold text-[20px] sm:text-[24px] md:text-[28px] leading-[160%] text-[#192B1A]">
                Steps to Request a Service:
              </h2>
              <div className="w-full font-poppins text-[16px] sm:text-[18px] md:text-[20px] leading-[160%] flex flex-col gap-6 sm:gap-8">
                <div>
                  <h3 className="font-bold text-black">Choose the desired service</h3>
                  <p className="font-semibold text-black">
                    Review our list of services and select the one that best suits your needs.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-black">Fill out the request form</h3>
                  <p className="font-semibold text-black">
                    Complete the service or consultation request form on the website, ensuring all
                    necessary details are provided.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-black">Connect with our team</h3>
                  <p className="font-semibold text-black">
                    Once we receive your request, one of our team members will reach out to clarify
                    service details and schedule a consultation if needed.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-black">Receive a customized offer</h3>
                  <p className="font-semibold text-black">
                    Based on your requirements, a tailored offer will be provided, including all
                    details related to the chosen service.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-black">Start working with the team</h3>
                  <p className="font-semibold text-black">
                    After approving the offer, our team will begin working on delivering the
                    requested service efficiently and professionally.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-black">Delivery and follow-up</h3>
                  <p className="font-semibold text-black">
                    Once the service is completed, we will deliver the work to you and follow up to
                    ensure your complete satisfaction.
                  </p>
                </div>
              </div>
            </div>
            <Link href="/contact">
              <button className="flex flex-row justify-center items-center p-3 sm:p-[16px] gap-[8px] w-[180px] sm:w-[220px] md:w-[265px] h-auto border-2 border-[#0D0D0D] rounded-[16px] mt-4">
                <span className="font-poppins font-bold text-[16px] sm:text-[18px] md:text-[22px] leading-[160%] text-[#192B1A]">
                  submit request form
                </span>
              </button>
            </Link>
          </div>
          <div className="relative w-[200px] sm:w-[250px] md:w-[300px] h-[200px] sm:h-[250px] md:h-[300px]">
            <Image src="/images/XBXBG 4.png" alt="XBX Background" fill className="object-cover" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
