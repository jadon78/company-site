"use client";
import React, { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
import Image from "next/image";
import "../css/home.css";
import { EnquiryCredentials } from "@/lib/actions/auth/enquiry";
import { CardContent } from "@/components/ui/card";
import BImg from "../components/assets/img/b-img.png";
import Image1 from "../components/assets/img/img-1.png";
import Gloab1 from "../components/assets/img/gloab.png";
import Painting from "../components/assets/img/painting-icon.png";
import WaveImg from "../components/assets/img/waveShape's.png";
import { Footer } from "@/components/shared/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Index ()
{
  const [ tabs, setTabs ] = useState( "frontend" );
  const swiperRef: any = useRef( null );
  const handleTabChange = ( tabname: string ) =>
  {
    setTabs( tabname );
  };

  const [ formData, setFormData ] = useState( {
    name: "",
    email: "",
    mobile_number: "",
    message: "",
  } );

  const [ formStatus, setFormStatus ] = useState( { success: "", error: "" } );

  const handleNextSlide = () =>
  {
    if ( swiperRef.current )
    {
      swiperRef.current.slidePrev();
    }
  };
  useEffect( () =>
  {
    AOS.init( {
      duration: 800, // Animation duration in ms
      once: true,    // Whether animation should happen only once
      easing: "ease-in-out",
    } );
  }, [] );

  return (
    <>
      <div className="mt-[90px]">
        <div>
          <section className="relative h-[700px] flex items-center justify-center text-center text-white p-0">
            <svg
              className="absolute bottom-[-30px] left-0 w-full z-[9]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#ffff"
                fill-opacity="0.6"
                d="M0,160L48,165.3C96,171,192,181,288,176C384,171,480,149,576,144C672,139,768,149,864,144C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              >
                <animate
                  attributeName="d"
                  dur="4s"
                  repeatCount="indefinite"
                  values=" 
        M0,160L48,165.3C96,171,192,181,288,176C384,171,480,149,576,144C672,139,768,149,864,144C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
        M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,128C672,128,768,160,864,165.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
        M0,160L48,165.3C96,171,192,181,288,176C384,171,480,149,576,144C672,139,768,149,864,144C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
              </path>

              <path
                fill="#fff"
                fill-opacity="0.5"
                d="M0,192L60,200C120,208,240,224,360,208C480,192,600,160,720,144C840,128,960,128,1080,133.3C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              >
                <animate
                  attributeName="d"
                  dur="8s"
                  repeatCount="indefinite"
                  values="
        M0,192L60,200C120,208,240,224,360,208C480,192,600,160,720,144C840,128,960,128,1080,133.3C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z;
        M0,160L60,170.7C120,181,240,203,360,202.7C480,203,600,181,720,170.7C840,160,960,160,1080,181.3C1200,203,1320,245,1380,266.7L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z;
        M0,192L60,200C120,208,240,224,360,208C480,192,600,160,720,144C840,128,960,128,1080,133.3C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                />
              </path>
            </svg>

            <div className="bg-gif-background bg-cover bg-center w-full h-full flex ">
              <div className="absolute inset-0 bg-cover bg-center">
                <div className="absolute inset-0 bg-black/60" /> 
              </div>
              <div className="relative z-10 max-w-[860px] mx-auto px-4 m-auto">
                <h1 className="text-[36px] md:text-[44px] md:text-[56px] lg:text-[72px]  font-[700] leading-[60px]  md:leading-[72px]  lg:leading-[95px] md:text-[72px] font-bold mb-0 text-white">
                  DISCOVER A WORLD OF OPPORTUNITIES
                </h1>
                <p className=" text-[20px] md:text-[22px] mb-8 text-white text-center">
                  We empower a diverse IT service ecosystem where strong
                  individuals are united by a clear common purpose. To deliver
                  excellence and high level of customer satisfaction.
                </p>
              </div>
              <Image
                alt=""
                src={ WaveImg }
                className="absolute bottom-[-55px] w-full left-0"
              />
            </div>
          </section>
          <div className=" max-w-[1100px] mx-auto text-center mt-[-130px] p-0 w-[95%] lg:w-full">
            <div data-aos="fade-up" className="custom-counter relative  z-[99]  grid grid-cols-4 md:grid-cols-4 bg-[#fff] text-[#000] rounded-[16px] p-8   shadow-[0px_4px_17px_0px_#00000040]">
              <div className="border-r-[1px] border-r-[#ddd] border-solid">
                <div className=" text-[16px] md:text-[36px] lg:text-[44px]   font-[500]  leading-[50px] md: leading-[70px]">
                  <CountUp end={ 500 } duration={ 2 } />+
                </div>
                <div className=" text-[12px] md:text-[16px] lg:text-[24px]  font-[500]">Projects</div>
              </div>
              <div className="border-r-[1px] border-r-[#ddd] border-solid">
                <div className=" text-[16px] md:text-[36px] lg:text-[44px]  font-[500]  leading-[50px] md: leading-[70px]">
                  <CountUp end={ 40 } duration={ 2 } />+
                </div>
                <div className=" text-[12px] md:text-[16px] lg:text-[24px]  font-[500]">Our Client</div>
              </div>
              <div className="border-r-[1px] border-r-[#ddd] border-solid">
                <div className=" text-[16px] md:text-[36px] lg:text-[44px]  font-[500]  leading-[50px] md: leading-[70px]">
                  <CountUp end={ 40 } duration={ 2 } />+
                </div>
                <div className=" text-[12px] md:text-[16px] lg:text-[24px]  font-[500]">Happy Customers</div>
              </div>
              <div>
                <div className=" text-[16px] md:text-[36px] lg:text-[44px]  font-[500]  leading-[50px] md: leading-[70px]">
                  <CountUp end={ 5 } duration={ 2 } />
                  yr+
                </div>
                <div className=" text-[12px] md:text-[16px] lg:text-[24px]  font-[500]">Years Experience</div>
              </div>
            </div>
          </div>
          <section className="py-20 px-4 relative overflow-hidden ">
            <video className="absolute w-full object-cover z-[-1] h-full top-0 rotate-[105deg] mix-blend-difference opacity-[12%] grayscale-[1] left-[-40%]"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src="/videos/dots.webm"
                    // src="https://youtu.be/vwSlYG7hFk0?si=Th4STFWzm5yzMFUF"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center pt-10">
              <div data-aos="fade-right" className="rounded-lg overflow-hidden text-center">
                
                <Image
                  src={ Image1 }
                  alt="Team meeting"
                  className="max-w-[450px] h-auto mx-auto w-full"
                />
              </div>
              <div data-aos="fade-left"  className="">
                <h3 className="text-[24px]  gradient-text mb-2">
                  Our Mission & Vision
                </h3>
                <h2 className="text-[24px] md:text-[36px] lg:text-[44px]  font-bold mb-4 pb-0">
                  Achieve excellence and deliver innovative IT solutions.
                </h2>
                <p className="text-gray-600 mb-6 text-[16px] lg:text-[24px] ">
                  Empower businesses with cutting-edge technology and digital
                  transformation strategies.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[20px]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 33 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.75"
                        y="1.125"
                        width="31.0833"
                        height="31.0833"
                        rx="1.5"
                        fill="white"
                        stroke="#0958B6"
                      />
                      <path
                        d="M13.9796 19.9892L10.1571 16.1667L8.85547 17.4592L13.9796 22.5834L24.9796 11.5834L23.6871 10.2909L13.9796 19.9892Z"
                        fill="url(#paint0_linear_715_4865)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_715_4865"
                          x1="16.9176"
                          y1="10.2909"
                          x2="16.9176"
                          y2="22.5834"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#0958B5" />
                          <stop offset="1" stop-color="#04264F" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <span>Requirement Analysis</span>
                  </div>
                  <div className="flex items-center gap-2 text-[20px]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 33 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.75"
                        y="1.125"
                        width="31.0833"
                        height="31.0833"
                        rx="1.5"
                        fill="white"
                        stroke="#0958B6"
                      />
                      <path
                        d="M13.9796 19.9892L10.1571 16.1667L8.85547 17.4592L13.9796 22.5834L24.9796 11.5834L23.6871 10.2909L13.9796 19.9892Z"
                        fill="url(#paint0_linear_715_4865)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_715_4865"
                          x1="16.9176"
                          y1="10.2909"
                          x2="16.9176"
                          y2="22.5834"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#0958B5" />
                          <stop offset="1" stop-color="#04264F" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <span>Solution Design</span>
                  </div>
                  <div className="flex items-center gap-2 text-[20px]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 33 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.75"
                        y="1.125"
                        width="31.0833"
                        height="31.0833"
                        rx="1.5"
                        fill="white"
                        stroke="#0958B6"
                      />
                      <path
                        d="M13.9796 19.9892L10.1571 16.1667L8.85547 17.4592L13.9796 22.5834L24.9796 11.5834L23.6871 10.2909L13.9796 19.9892Z"
                        fill="url(#paint0_linear_715_4865)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_715_4865"
                          x1="16.9176"
                          y1="10.2909"
                          x2="16.9176"
                          y2="22.5834"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#0958B5" />
                          <stop offset="1" stop-color="#04264F" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <span>Project Implementation</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-4 bg-[#fff] overflow-hidden">
            <div className=" mx-auto" data-aos="fade-up">

              <div>
                <Swiper
                  centeredSlides={ true }
                  pagination={ {
                    clickable: true,
                  } }
                  loop={ true }
                  navigation={ false }
                  modules={ [ Pagination, Navigation ] }
                  className="mySwiper firstslider-technology"
                  breakpoints={ {
                    640: {
                      slidesPerView: 1, 
                      spaceBetween: 20, 
                    },
                    768: {
                      slidesPerView: 2, 
                      spaceBetween: 30, 
                    },
                    1024: {
                      slidesPerView: 3, 
                      spaceBetween: 50, 
                    },
                    1440: {
                      slidesPerView: 3,
                      spaceBetween: 70, 
                    },
                  } }
                >
                  <SwiperSlide>
                    <div className="bg-[#fff]">
                      <CardContent className="p-6 flex gap-4 align-items-center ">
                        <Image alt="bg" src={ BImg } className="ml-[-50px]" />
                        <div>
                          <h3 className="text-[30px] font-[400] mb-2">
                            Information Technology
                          </h3>
                          <p className="text-gray-600 text-[16px]">
                            Leverage our expertise to enhance your business
                            operations and promote the seamless flow of information.
                          </p>
                        </div>
                      </CardContent>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="bg-[#fff] ">
                      <CardContent className="p-6 flex gap-4 align-items-center ">
                        <Image alt="bg" src={ BImg } className="ml-[-50px]" />
                        <div>
                          <h3 className="text-[30px] font-[400] mb-2">
                            Information Technology
                          </h3>
                          <p className="text-gray-600 text-[16px]">
                            Leverage our expertise to enhance your business
                            operations and promote the seamless flow of information.
                          </p>
                        </div>
                      </CardContent>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="bg-[#fff] ">
                      <CardContent className="p-6 flex gap-4 align-items-center ">
                        <Image alt="bg" src={ BImg } className="ml-[-50px]" />
                        <div>
                          <h3 className="text-[30px] font-[400] mb-2">
                            Information Technology
                          </h3>
                          <p className="text-gray-600 text-[16px]">
                            Leverage our expertise to enhance your business
                            operations and promote the seamless flow of information.
                          </p>
                        </div>
                      </CardContent>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="bg-[#fff] ">
                      <CardContent className="p-6 flex gap-4 align-items-center ">
                        <Image alt="bg" src={ BImg } className="ml-[-50px]" />
                        <div>
                          <h3 className="text-[30px] font-[400] mb-2">
                            Information Technology
                          </h3>
                          <p className="text-gray-600 text-[16px]">
                            Leverage our expertise to enhance your business
                            operations and promote the seamless flow of information.
                          </p>
                        </div>
                      </CardContent>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="bg-[#fff] ">
                      <CardContent className="p-6 flex gap-4 align-items-center ">
                        <Image alt="bg" src={ BImg } className="ml-[-50px]" />
                        <div>
                          <h3 className="text-[30px] font-[400] mb-2">
                            Information Technology
                          </h3>
                          <p className="text-gray-600 text-[16px]">
                            Leverage our expertise to enhance your business
                            operations and promote the seamless flow of information.
                          </p>
                        </div>
                      </CardContent>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="bg-[#fff] ">
                      <CardContent className="p-6 flex gap-4 align-items-center ">
                        <Image alt="bg" src={ BImg } className="ml-[-50px]" />
                        <div>
                          <h3 className="text-[30px] font-[400] mb-2">
                            Information Technology
                          </h3>
                          <p className="text-gray-600 text-[16px]">
                            Leverage our expertise to enhance your business
                            operations and promote the seamless flow of information.
                          </p>
                        </div>
                      </CardContent>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </section>
          <div className=" ourtechnoloysection bg-cover bg-center w-full h-full relative ">
            <div className="bg-[#E9E9E9B2] py-16 mt-8">
              <div className="max-w-[1600px] mx-auto">
                <div className="w-[95%] mx-auto p-2 md:px-4 lg:px-8">
                  <div className="grid grid-cols-1 gap-12 md:grid-cols-2 align-items-center ">
                    <div data-aos="fade-right" className="text-left">
                      <h2 className="text-[16px] md:text-[24px]  text-[#000]">
                        Technology Stack
                      </h2>
                      <h2 className="text-[24px] md:text-[36px] lg:text-[44px]  font-bold text-left mb-6">
                        Empower Your Business with Cutting-Edge Technologies
                      </h2>
                      <p className="text-left text-gray-600 mb-8">
                        Leverage our expertise in the latest technologies to
                        build innovative, scalable, and efficient solutions
                        tailored to your business needs. Stay ahead in the
                        competitive landscape with our future-ready development
                        services.
                      </p>
                      <ul className="mt-8 text-left text-gray-600">
                        <li className="mb-2 flex gap-2 align-items-center">
                          <svg
                            width="20"
                            height="17"
                            viewBox="0 0 20 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.00004 16.4199L0.790039 10.2099L3.62004 7.37988L7.00004 10.7699L16.88 0.879883L19.71 3.70988L7.00004 16.4199Z"
                              fill="#696DF3"
                            />
                          </svg>
                          End-to-End Application Development
                        </li>
                        <li className="mb-2 flex gap-2 align-items-center">
                          <svg
                            width="20"
                            height="17"
                            viewBox="0 0 20 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.00004 16.4199L0.790039 10.2099L3.62004 7.37988L7.00004 10.7699L16.88 0.879883L19.71 3.70988L7.00004 16.4199Z"
                              fill="#696DF3"
                            />
                          </svg>
                          Customized Web Solutions
                        </li>
                        <li className="flex gap-2 align-items-center">
                          <svg
                            width="20"
                            height="17"
                            viewBox="0 0 20 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.00004 16.4199L0.790039 10.2099L3.62004 7.37988L7.00004 10.7699L16.88 0.879883L19.71 3.70988L7.00004 16.4199Z"
                              fill="#696DF3"
                            />
                          </svg>
                          Cross-Platform Mobile Apps
                        </li>
                      </ul>
                    </div>

                    <div data-aos="fade-left" className="flex gap-[20px] md:gap-[41px] flex-wrap justify-center">
                      <div className="w-[150px] md:w-[170px] h-40 bg-[#F4F2ED] hover:bg-[#8488f4] hover:text-[#fff]  rounded-[10px] text-center ">
                        <svg
                          className="mx-auto mb-2"
                          width="71"
                          height="71"
                          viewBox="0 0 71 71"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M35.4997 41.8234C38.992 41.8234 41.8231 38.9923 41.8231 35.5C41.8231 32.0076 38.992 29.1765 35.4997 29.1765C32.0074 29.1765 29.1763 32.0076 29.1763 35.5C29.1763 38.9923 32.0074 41.8234 35.4997 41.8234Z"
                            fill="#61DAFB"
                          />
                          <path
                            d="M59.5178 25.0718C58.2975 24.6281 57.0217 24.1843 55.6904 23.796C56.0232 22.4648 56.3006 21.1335 56.5225 19.8578C57.6873 12.5359 56.4115 7.37729 52.8615 5.38042C51.8076 4.77026 50.6428 4.49292 49.3115 4.49292C45.4287 4.49292 40.492 7.37729 35.4998 12.2031C30.5076 7.37729 25.5709 4.49292 21.6881 4.49292C20.3568 4.49292 19.192 4.77026 18.1381 5.38042C14.5881 7.43276 13.3123 12.5914 14.4771 19.8578C14.699 21.1335 14.9764 22.4648 15.3092 23.796C13.9779 24.1843 12.7021 24.5726 11.4818 25.0718C4.54824 27.7343 0.776367 31.3953 0.776367 35.5C0.776367 39.6046 4.60371 43.2656 11.4818 45.9281C12.7021 46.3718 13.9779 46.8156 15.3092 47.2039C14.9764 48.5351 14.699 49.8664 14.4771 51.1421C13.3123 58.464 14.5881 63.6226 18.1381 65.6195C19.192 66.2296 20.3568 66.507 21.6881 66.507C25.6264 66.507 30.5631 63.6226 35.4998 58.7968C40.492 63.6226 45.4287 66.507 49.3115 66.507C50.6428 66.507 51.8076 66.2296 52.8615 65.6195C56.4115 63.5671 57.6873 58.4085 56.5225 51.1421C56.3006 49.8664 56.0232 48.5351 55.6904 47.2039C57.0217 46.8156 58.2975 46.4273 59.5178 45.9281C66.4514 43.2656 70.2232 39.6046 70.2232 35.5C70.2232 31.3953 66.4514 27.7343 59.5178 25.0718ZM51.3084 8.15386C53.5826 9.48511 54.3592 13.5898 53.4162 19.414C53.2498 20.5789 52.9725 21.7992 52.6396 23.075C49.7553 22.4093 46.7045 21.9656 43.4873 21.6882C41.6014 19.0257 39.66 16.6406 37.7186 14.4773C41.8232 10.4281 45.9834 7.65464 49.367 7.65464C50.0881 7.65464 50.7537 7.82104 51.3084 8.15386ZM45.0959 41.0468C44.0975 42.8218 42.9326 44.5968 41.7123 46.3718C39.66 46.5382 37.6076 46.5937 35.4998 46.5937C33.3365 46.5937 31.2842 46.5382 29.2873 46.3718C28.067 44.5968 26.9576 42.8218 25.9592 41.0468C24.9053 39.2164 23.9068 37.3304 23.0193 35.5C23.9068 33.6695 24.9053 31.7835 25.9592 29.9531C26.9576 28.1781 28.1225 26.4031 29.3428 24.6281C31.3951 24.4617 33.4475 24.4062 35.5553 24.4062C37.7186 24.4062 39.7709 24.4617 41.7678 24.6281C42.9881 26.4031 44.0975 28.1781 45.0959 29.9531C46.1498 31.7835 47.1482 33.6695 48.0357 35.5C47.0928 37.3304 46.1498 39.1609 45.0959 41.0468ZM49.6998 39.2164C50.5318 41.1578 51.1975 43.0437 51.8076 44.9296C49.9217 45.3734 47.9248 45.7062 45.817 45.9835C46.4826 44.9296 47.2037 43.8203 47.8139 42.6554C48.4795 41.4906 49.0896 40.3257 49.6998 39.2164ZM35.4998 54.2484C34.1686 52.8062 32.8928 51.2531 31.6725 49.6445C32.9482 49.7 34.224 49.7554 35.4998 49.7554C36.7756 49.7554 38.0514 49.7 39.3271 49.6445C38.1068 51.2531 36.8311 52.8062 35.4998 54.2484ZM25.1826 45.9281C23.0748 45.6507 21.0779 45.3179 19.192 44.8742C19.8021 43.0437 20.4678 41.1023 21.2998 39.1609C21.91 40.2703 22.5201 41.4351 23.1857 42.5445C23.8514 43.7648 24.517 44.8187 25.1826 45.9281ZM21.2998 31.7835C20.4678 29.8421 19.8021 27.9562 19.192 26.0703C21.0779 25.6265 23.0748 25.2937 25.1826 25.0164C24.517 26.0703 23.7959 27.1796 23.1857 28.3445C22.5201 29.5093 21.91 30.6742 21.2998 31.7835ZM35.4998 16.7515C36.8311 18.1937 38.1068 19.7468 39.3271 21.3554C38.0514 21.3 36.7756 21.2445 35.4998 21.2445C34.224 21.2445 32.9482 21.3 31.6725 21.3554C32.8928 19.7468 34.1686 18.1937 35.4998 16.7515ZM47.8139 28.4L45.817 25.0718C47.9248 25.3492 49.9217 25.682 51.8076 26.1257C51.1975 27.9562 50.5318 29.8976 49.6998 31.839C49.0896 30.6742 48.4795 29.5093 47.8139 28.4ZM17.5834 19.414C16.6404 13.5898 17.417 9.48511 19.6912 8.15386C20.2459 7.82104 20.9115 7.65464 21.6326 7.65464C24.9607 7.65464 29.1209 10.3726 33.2811 14.4773C31.3396 16.5851 29.3982 19.0257 27.5123 21.6882C24.2951 21.9656 21.2443 22.4648 18.36 23.075C18.0271 21.7992 17.8053 20.5789 17.5834 19.414ZM3.88262 35.5C3.88262 32.8929 7.04434 30.1195 12.5912 28.0671C13.7006 27.6234 14.9209 27.2351 16.1412 26.9023C17.0287 29.6757 18.1381 32.6156 19.4693 35.5554C18.1381 38.4953 16.9732 41.3796 16.1412 44.1531C8.48652 41.9343 3.88262 38.6062 3.88262 35.5ZM19.6912 62.846C17.417 61.5148 16.6404 57.4101 17.5834 51.5859C17.7498 50.421 18.0271 49.2007 18.36 47.925C21.2443 48.5906 24.2951 49.0343 27.5123 49.3117C29.3982 51.9742 31.3396 54.3593 33.2811 56.5226C29.1764 60.5718 25.0162 63.3453 21.6326 63.3453C20.9115 63.3453 20.2459 63.1789 19.6912 62.846ZM53.4162 51.5859C54.3592 57.4101 53.5826 61.5148 51.3084 62.846C50.7537 63.1789 50.0881 63.3453 49.367 63.3453C46.0389 63.3453 41.8787 60.6273 37.7186 56.5226C39.66 54.4148 41.6014 51.9742 43.4873 49.3117C46.7045 49.0343 49.7553 48.5351 52.6396 47.925C52.9725 49.2007 53.1943 50.421 53.4162 51.5859ZM58.4084 42.9328C57.299 43.3765 56.0787 43.7648 54.8584 44.0976C53.9709 41.3242 52.8615 38.3843 51.5303 35.4445C52.8615 32.5046 54.0264 29.6203 54.8584 26.8468C62.5131 29.0656 67.117 32.3937 67.117 35.5C67.117 38.107 63.8998 40.8804 58.4084 42.9328Z"
                            fill="#61DAFB"
                          />
                        </svg>
                        React
                      </div>
                      <div className="w-[150px] md:w-[170px] h-40 bg-[#F4F2ED] hover:bg-[#8488f4] hover:text-[#fff]  rounded-[10px] text-center ">
                        <svg
                          className="mx-auto mb-2"
                          width="71"
                          height="71"
                          viewBox="0 0 71 71"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M35.4997 41.8234C38.992 41.8234 41.8231 38.9923 41.8231 35.5C41.8231 32.0076 38.992 29.1765 35.4997 29.1765C32.0074 29.1765 29.1763 32.0076 29.1763 35.5C29.1763 38.9923 32.0074 41.8234 35.4997 41.8234Z"
                            fill="#61DAFB"
                          />
                          <path
                            d="M59.5178 25.0718C58.2975 24.6281 57.0217 24.1843 55.6904 23.796C56.0232 22.4648 56.3006 21.1335 56.5225 19.8578C57.6873 12.5359 56.4115 7.37729 52.8615 5.38042C51.8076 4.77026 50.6428 4.49292 49.3115 4.49292C45.4287 4.49292 40.492 7.37729 35.4998 12.2031C30.5076 7.37729 25.5709 4.49292 21.6881 4.49292C20.3568 4.49292 19.192 4.77026 18.1381 5.38042C14.5881 7.43276 13.3123 12.5914 14.4771 19.8578C14.699 21.1335 14.9764 22.4648 15.3092 23.796C13.9779 24.1843 12.7021 24.5726 11.4818 25.0718C4.54824 27.7343 0.776367 31.3953 0.776367 35.5C0.776367 39.6046 4.60371 43.2656 11.4818 45.9281C12.7021 46.3718 13.9779 46.8156 15.3092 47.2039C14.9764 48.5351 14.699 49.8664 14.4771 51.1421C13.3123 58.464 14.5881 63.6226 18.1381 65.6195C19.192 66.2296 20.3568 66.507 21.6881 66.507C25.6264 66.507 30.5631 63.6226 35.4998 58.7968C40.492 63.6226 45.4287 66.507 49.3115 66.507C50.6428 66.507 51.8076 66.2296 52.8615 65.6195C56.4115 63.5671 57.6873 58.4085 56.5225 51.1421C56.3006 49.8664 56.0232 48.5351 55.6904 47.2039C57.0217 46.8156 58.2975 46.4273 59.5178 45.9281C66.4514 43.2656 70.2232 39.6046 70.2232 35.5C70.2232 31.3953 66.4514 27.7343 59.5178 25.0718ZM51.3084 8.15386C53.5826 9.48511 54.3592 13.5898 53.4162 19.414C53.2498 20.5789 52.9725 21.7992 52.6396 23.075C49.7553 22.4093 46.7045 21.9656 43.4873 21.6882C41.6014 19.0257 39.66 16.6406 37.7186 14.4773C41.8232 10.4281 45.9834 7.65464 49.367 7.65464C50.0881 7.65464 50.7537 7.82104 51.3084 8.15386ZM45.0959 41.0468C44.0975 42.8218 42.9326 44.5968 41.7123 46.3718C39.66 46.5382 37.6076 46.5937 35.4998 46.5937C33.3365 46.5937 31.2842 46.5382 29.2873 46.3718C28.067 44.5968 26.9576 42.8218 25.9592 41.0468C24.9053 39.2164 23.9068 37.3304 23.0193 35.5C23.9068 33.6695 24.9053 31.7835 25.9592 29.9531C26.9576 28.1781 28.1225 26.4031 29.3428 24.6281C31.3951 24.4617 33.4475 24.4062 35.5553 24.4062C37.7186 24.4062 39.7709 24.4617 41.7678 24.6281C42.9881 26.4031 44.0975 28.1781 45.0959 29.9531C46.1498 31.7835 47.1482 33.6695 48.0357 35.5C47.0928 37.3304 46.1498 39.1609 45.0959 41.0468ZM49.6998 39.2164C50.5318 41.1578 51.1975 43.0437 51.8076 44.9296C49.9217 45.3734 47.9248 45.7062 45.817 45.9835C46.4826 44.9296 47.2037 43.8203 47.8139 42.6554C48.4795 41.4906 49.0896 40.3257 49.6998 39.2164ZM35.4998 54.2484C34.1686 52.8062 32.8928 51.2531 31.6725 49.6445C32.9482 49.7 34.224 49.7554 35.4998 49.7554C36.7756 49.7554 38.0514 49.7 39.3271 49.6445C38.1068 51.2531 36.8311 52.8062 35.4998 54.2484ZM25.1826 45.9281C23.0748 45.6507 21.0779 45.3179 19.192 44.8742C19.8021 43.0437 20.4678 41.1023 21.2998 39.1609C21.91 40.2703 22.5201 41.4351 23.1857 42.5445C23.8514 43.7648 24.517 44.8187 25.1826 45.9281ZM21.2998 31.7835C20.4678 29.8421 19.8021 27.9562 19.192 26.0703C21.0779 25.6265 23.0748 25.2937 25.1826 25.0164C24.517 26.0703 23.7959 27.1796 23.1857 28.3445C22.5201 29.5093 21.91 30.6742 21.2998 31.7835ZM35.4998 16.7515C36.8311 18.1937 38.1068 19.7468 39.3271 21.3554C38.0514 21.3 36.7756 21.2445 35.4998 21.2445C34.224 21.2445 32.9482 21.3 31.6725 21.3554C32.8928 19.7468 34.1686 18.1937 35.4998 16.7515ZM47.8139 28.4L45.817 25.0718C47.9248 25.3492 49.9217 25.682 51.8076 26.1257C51.1975 27.9562 50.5318 29.8976 49.6998 31.839C49.0896 30.6742 48.4795 29.5093 47.8139 28.4ZM17.5834 19.414C16.6404 13.5898 17.417 9.48511 19.6912 8.15386C20.2459 7.82104 20.9115 7.65464 21.6326 7.65464C24.9607 7.65464 29.1209 10.3726 33.2811 14.4773C31.3396 16.5851 29.3982 19.0257 27.5123 21.6882C24.2951 21.9656 21.2443 22.4648 18.36 23.075C18.0271 21.7992 17.8053 20.5789 17.5834 19.414ZM3.88262 35.5C3.88262 32.8929 7.04434 30.1195 12.5912 28.0671C13.7006 27.6234 14.9209 27.2351 16.1412 26.9023C17.0287 29.6757 18.1381 32.6156 19.4693 35.5554C18.1381 38.4953 16.9732 41.3796 16.1412 44.1531C8.48652 41.9343 3.88262 38.6062 3.88262 35.5ZM19.6912 62.846C17.417 61.5148 16.6404 57.4101 17.5834 51.5859C17.7498 50.421 18.0271 49.2007 18.36 47.925C21.2443 48.5906 24.2951 49.0343 27.5123 49.3117C29.3982 51.9742 31.3396 54.3593 33.2811 56.5226C29.1764 60.5718 25.0162 63.3453 21.6326 63.3453C20.9115 63.3453 20.2459 63.1789 19.6912 62.846ZM53.4162 51.5859C54.3592 57.4101 53.5826 61.5148 51.3084 62.846C50.7537 63.1789 50.0881 63.3453 49.367 63.3453C46.0389 63.3453 41.8787 60.6273 37.7186 56.5226C39.66 54.4148 41.6014 51.9742 43.4873 49.3117C46.7045 49.0343 49.7553 48.5351 52.6396 47.925C52.9725 49.2007 53.1943 50.421 53.4162 51.5859ZM58.4084 42.9328C57.299 43.3765 56.0787 43.7648 54.8584 44.0976C53.9709 41.3242 52.8615 38.3843 51.5303 35.4445C52.8615 32.5046 54.0264 29.6203 54.8584 26.8468C62.5131 29.0656 67.117 32.3937 67.117 35.5C67.117 38.107 63.8998 40.8804 58.4084 42.9328Z"
                            fill="#61DAFB"
                          />
                        </svg>
                        React
                      </div>
                      <div className="w-[150px] md:w-[170px] h-40 bg-[#F4F2ED] hover:bg-[#8488f4] hover:text-[#fff]  rounded-[10px] text-center ">
                        <svg
                          className="mx-auto mb-2"
                          width="71"
                          height="71"
                          viewBox="0 0 71 71"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M35.4997 41.8234C38.992 41.8234 41.8231 38.9923 41.8231 35.5C41.8231 32.0076 38.992 29.1765 35.4997 29.1765C32.0074 29.1765 29.1763 32.0076 29.1763 35.5C29.1763 38.9923 32.0074 41.8234 35.4997 41.8234Z"
                            fill="#61DAFB"
                          />
                          <path
                            d="M59.5178 25.0718C58.2975 24.6281 57.0217 24.1843 55.6904 23.796C56.0232 22.4648 56.3006 21.1335 56.5225 19.8578C57.6873 12.5359 56.4115 7.37729 52.8615 5.38042C51.8076 4.77026 50.6428 4.49292 49.3115 4.49292C45.4287 4.49292 40.492 7.37729 35.4998 12.2031C30.5076 7.37729 25.5709 4.49292 21.6881 4.49292C20.3568 4.49292 19.192 4.77026 18.1381 5.38042C14.5881 7.43276 13.3123 12.5914 14.4771 19.8578C14.699 21.1335 14.9764 22.4648 15.3092 23.796C13.9779 24.1843 12.7021 24.5726 11.4818 25.0718C4.54824 27.7343 0.776367 31.3953 0.776367 35.5C0.776367 39.6046 4.60371 43.2656 11.4818 45.9281C12.7021 46.3718 13.9779 46.8156 15.3092 47.2039C14.9764 48.5351 14.699 49.8664 14.4771 51.1421C13.3123 58.464 14.5881 63.6226 18.1381 65.6195C19.192 66.2296 20.3568 66.507 21.6881 66.507C25.6264 66.507 30.5631 63.6226 35.4998 58.7968C40.492 63.6226 45.4287 66.507 49.3115 66.507C50.6428 66.507 51.8076 66.2296 52.8615 65.6195C56.4115 63.5671 57.6873 58.4085 56.5225 51.1421C56.3006 49.8664 56.0232 48.5351 55.6904 47.2039C57.0217 46.8156 58.2975 46.4273 59.5178 45.9281C66.4514 43.2656 70.2232 39.6046 70.2232 35.5C70.2232 31.3953 66.4514 27.7343 59.5178 25.0718ZM51.3084 8.15386C53.5826 9.48511 54.3592 13.5898 53.4162 19.414C53.2498 20.5789 52.9725 21.7992 52.6396 23.075C49.7553 22.4093 46.7045 21.9656 43.4873 21.6882C41.6014 19.0257 39.66 16.6406 37.7186 14.4773C41.8232 10.4281 45.9834 7.65464 49.367 7.65464C50.0881 7.65464 50.7537 7.82104 51.3084 8.15386ZM45.0959 41.0468C44.0975 42.8218 42.9326 44.5968 41.7123 46.3718C39.66 46.5382 37.6076 46.5937 35.4998 46.5937C33.3365 46.5937 31.2842 46.5382 29.2873 46.3718C28.067 44.5968 26.9576 42.8218 25.9592 41.0468C24.9053 39.2164 23.9068 37.3304 23.0193 35.5C23.9068 33.6695 24.9053 31.7835 25.9592 29.9531C26.9576 28.1781 28.1225 26.4031 29.3428 24.6281C31.3951 24.4617 33.4475 24.4062 35.5553 24.4062C37.7186 24.4062 39.7709 24.4617 41.7678 24.6281C42.9881 26.4031 44.0975 28.1781 45.0959 29.9531C46.1498 31.7835 47.1482 33.6695 48.0357 35.5C47.0928 37.3304 46.1498 39.1609 45.0959 41.0468ZM49.6998 39.2164C50.5318 41.1578 51.1975 43.0437 51.8076 44.9296C49.9217 45.3734 47.9248 45.7062 45.817 45.9835C46.4826 44.9296 47.2037 43.8203 47.8139 42.6554C48.4795 41.4906 49.0896 40.3257 49.6998 39.2164ZM35.4998 54.2484C34.1686 52.8062 32.8928 51.2531 31.6725 49.6445C32.9482 49.7 34.224 49.7554 35.4998 49.7554C36.7756 49.7554 38.0514 49.7 39.3271 49.6445C38.1068 51.2531 36.8311 52.8062 35.4998 54.2484ZM25.1826 45.9281C23.0748 45.6507 21.0779 45.3179 19.192 44.8742C19.8021 43.0437 20.4678 41.1023 21.2998 39.1609C21.91 40.2703 22.5201 41.4351 23.1857 42.5445C23.8514 43.7648 24.517 44.8187 25.1826 45.9281ZM21.2998 31.7835C20.4678 29.8421 19.8021 27.9562 19.192 26.0703C21.0779 25.6265 23.0748 25.2937 25.1826 25.0164C24.517 26.0703 23.7959 27.1796 23.1857 28.3445C22.5201 29.5093 21.91 30.6742 21.2998 31.7835ZM35.4998 16.7515C36.8311 18.1937 38.1068 19.7468 39.3271 21.3554C38.0514 21.3 36.7756 21.2445 35.4998 21.2445C34.224 21.2445 32.9482 21.3 31.6725 21.3554C32.8928 19.7468 34.1686 18.1937 35.4998 16.7515ZM47.8139 28.4L45.817 25.0718C47.9248 25.3492 49.9217 25.682 51.8076 26.1257C51.1975 27.9562 50.5318 29.8976 49.6998 31.839C49.0896 30.6742 48.4795 29.5093 47.8139 28.4ZM17.5834 19.414C16.6404 13.5898 17.417 9.48511 19.6912 8.15386C20.2459 7.82104 20.9115 7.65464 21.6326 7.65464C24.9607 7.65464 29.1209 10.3726 33.2811 14.4773C31.3396 16.5851 29.3982 19.0257 27.5123 21.6882C24.2951 21.9656 21.2443 22.4648 18.36 23.075C18.0271 21.7992 17.8053 20.5789 17.5834 19.414ZM3.88262 35.5C3.88262 32.8929 7.04434 30.1195 12.5912 28.0671C13.7006 27.6234 14.9209 27.2351 16.1412 26.9023C17.0287 29.6757 18.1381 32.6156 19.4693 35.5554C18.1381 38.4953 16.9732 41.3796 16.1412 44.1531C8.48652 41.9343 3.88262 38.6062 3.88262 35.5ZM19.6912 62.846C17.417 61.5148 16.6404 57.4101 17.5834 51.5859C17.7498 50.421 18.0271 49.2007 18.36 47.925C21.2443 48.5906 24.2951 49.0343 27.5123 49.3117C29.3982 51.9742 31.3396 54.3593 33.2811 56.5226C29.1764 60.5718 25.0162 63.3453 21.6326 63.3453C20.9115 63.3453 20.2459 63.1789 19.6912 62.846ZM53.4162 51.5859C54.3592 57.4101 53.5826 61.5148 51.3084 62.846C50.7537 63.1789 50.0881 63.3453 49.367 63.3453C46.0389 63.3453 41.8787 60.6273 37.7186 56.5226C39.66 54.4148 41.6014 51.9742 43.4873 49.3117C46.7045 49.0343 49.7553 48.5351 52.6396 47.925C52.9725 49.2007 53.1943 50.421 53.4162 51.5859ZM58.4084 42.9328C57.299 43.3765 56.0787 43.7648 54.8584 44.0976C53.9709 41.3242 52.8615 38.3843 51.5303 35.4445C52.8615 32.5046 54.0264 29.6203 54.8584 26.8468C62.5131 29.0656 67.117 32.3937 67.117 35.5C67.117 38.107 63.8998 40.8804 58.4084 42.9328Z"
                            fill="#61DAFB"
                          />
                        </svg>
                        React
                      </div>
                      <div className="w-[150px] md:w-[170px] h-40 bg-[#F4F2ED] hover:bg-[#8488f4] hover:text-[#fff]  rounded-[10px] text-center ">
                        <svg
                          className="mx-auto mb-2"
                          width="71"
                          height="71"
                          viewBox="0 0 71 71"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M35.4997 41.8234C38.992 41.8234 41.8231 38.9923 41.8231 35.5C41.8231 32.0076 38.992 29.1765 35.4997 29.1765C32.0074 29.1765 29.1763 32.0076 29.1763 35.5C29.1763 38.9923 32.0074 41.8234 35.4997 41.8234Z"
                            fill="#61DAFB"
                          />
                          <path
                            d="M59.5178 25.0718C58.2975 24.6281 57.0217 24.1843 55.6904 23.796C56.0232 22.4648 56.3006 21.1335 56.5225 19.8578C57.6873 12.5359 56.4115 7.37729 52.8615 5.38042C51.8076 4.77026 50.6428 4.49292 49.3115 4.49292C45.4287 4.49292 40.492 7.37729 35.4998 12.2031C30.5076 7.37729 25.5709 4.49292 21.6881 4.49292C20.3568 4.49292 19.192 4.77026 18.1381 5.38042C14.5881 7.43276 13.3123 12.5914 14.4771 19.8578C14.699 21.1335 14.9764 22.4648 15.3092 23.796C13.9779 24.1843 12.7021 24.5726 11.4818 25.0718C4.54824 27.7343 0.776367 31.3953 0.776367 35.5C0.776367 39.6046 4.60371 43.2656 11.4818 45.9281C12.7021 46.3718 13.9779 46.8156 15.3092 47.2039C14.9764 48.5351 14.699 49.8664 14.4771 51.1421C13.3123 58.464 14.5881 63.6226 18.1381 65.6195C19.192 66.2296 20.3568 66.507 21.6881 66.507C25.6264 66.507 30.5631 63.6226 35.4998 58.7968C40.492 63.6226 45.4287 66.507 49.3115 66.507C50.6428 66.507 51.8076 66.2296 52.8615 65.6195C56.4115 63.5671 57.6873 58.4085 56.5225 51.1421C56.3006 49.8664 56.0232 48.5351 55.6904 47.2039C57.0217 46.8156 58.2975 46.4273 59.5178 45.9281C66.4514 43.2656 70.2232 39.6046 70.2232 35.5C70.2232 31.3953 66.4514 27.7343 59.5178 25.0718ZM51.3084 8.15386C53.5826 9.48511 54.3592 13.5898 53.4162 19.414C53.2498 20.5789 52.9725 21.7992 52.6396 23.075C49.7553 22.4093 46.7045 21.9656 43.4873 21.6882C41.6014 19.0257 39.66 16.6406 37.7186 14.4773C41.8232 10.4281 45.9834 7.65464 49.367 7.65464C50.0881 7.65464 50.7537 7.82104 51.3084 8.15386ZM45.0959 41.0468C44.0975 42.8218 42.9326 44.5968 41.7123 46.3718C39.66 46.5382 37.6076 46.5937 35.4998 46.5937C33.3365 46.5937 31.2842 46.5382 29.2873 46.3718C28.067 44.5968 26.9576 42.8218 25.9592 41.0468C24.9053 39.2164 23.9068 37.3304 23.0193 35.5C23.9068 33.6695 24.9053 31.7835 25.9592 29.9531C26.9576 28.1781 28.1225 26.4031 29.3428 24.6281C31.3951 24.4617 33.4475 24.4062 35.5553 24.4062C37.7186 24.4062 39.7709 24.4617 41.7678 24.6281C42.9881 26.4031 44.0975 28.1781 45.0959 29.9531C46.1498 31.7835 47.1482 33.6695 48.0357 35.5C47.0928 37.3304 46.1498 39.1609 45.0959 41.0468ZM49.6998 39.2164C50.5318 41.1578 51.1975 43.0437 51.8076 44.9296C49.9217 45.3734 47.9248 45.7062 45.817 45.9835C46.4826 44.9296 47.2037 43.8203 47.8139 42.6554C48.4795 41.4906 49.0896 40.3257 49.6998 39.2164ZM35.4998 54.2484C34.1686 52.8062 32.8928 51.2531 31.6725 49.6445C32.9482 49.7 34.224 49.7554 35.4998 49.7554C36.7756 49.7554 38.0514 49.7 39.3271 49.6445C38.1068 51.2531 36.8311 52.8062 35.4998 54.2484ZM25.1826 45.9281C23.0748 45.6507 21.0779 45.3179 19.192 44.8742C19.8021 43.0437 20.4678 41.1023 21.2998 39.1609C21.91 40.2703 22.5201 41.4351 23.1857 42.5445C23.8514 43.7648 24.517 44.8187 25.1826 45.9281ZM21.2998 31.7835C20.4678 29.8421 19.8021 27.9562 19.192 26.0703C21.0779 25.6265 23.0748 25.2937 25.1826 25.0164C24.517 26.0703 23.7959 27.1796 23.1857 28.3445C22.5201 29.5093 21.91 30.6742 21.2998 31.7835ZM35.4998 16.7515C36.8311 18.1937 38.1068 19.7468 39.3271 21.3554C38.0514 21.3 36.7756 21.2445 35.4998 21.2445C34.224 21.2445 32.9482 21.3 31.6725 21.3554C32.8928 19.7468 34.1686 18.1937 35.4998 16.7515ZM47.8139 28.4L45.817 25.0718C47.9248 25.3492 49.9217 25.682 51.8076 26.1257C51.1975 27.9562 50.5318 29.8976 49.6998 31.839C49.0896 30.6742 48.4795 29.5093 47.8139 28.4ZM17.5834 19.414C16.6404 13.5898 17.417 9.48511 19.6912 8.15386C20.2459 7.82104 20.9115 7.65464 21.6326 7.65464C24.9607 7.65464 29.1209 10.3726 33.2811 14.4773C31.3396 16.5851 29.3982 19.0257 27.5123 21.6882C24.2951 21.9656 21.2443 22.4648 18.36 23.075C18.0271 21.7992 17.8053 20.5789 17.5834 19.414ZM3.88262 35.5C3.88262 32.8929 7.04434 30.1195 12.5912 28.0671C13.7006 27.6234 14.9209 27.2351 16.1412 26.9023C17.0287 29.6757 18.1381 32.6156 19.4693 35.5554C18.1381 38.4953 16.9732 41.3796 16.1412 44.1531C8.48652 41.9343 3.88262 38.6062 3.88262 35.5ZM19.6912 62.846C17.417 61.5148 16.6404 57.4101 17.5834 51.5859C17.7498 50.421 18.0271 49.2007 18.36 47.925C21.2443 48.5906 24.2951 49.0343 27.5123 49.3117C29.3982 51.9742 31.3396 54.3593 33.2811 56.5226C29.1764 60.5718 25.0162 63.3453 21.6326 63.3453C20.9115 63.3453 20.2459 63.1789 19.6912 62.846ZM53.4162 51.5859C54.3592 57.4101 53.5826 61.5148 51.3084 62.846C50.7537 63.1789 50.0881 63.3453 49.367 63.3453C46.0389 63.3453 41.8787 60.6273 37.7186 56.5226C39.66 54.4148 41.6014 51.9742 43.4873 49.3117C46.7045 49.0343 49.7553 48.5351 52.6396 47.925C52.9725 49.2007 53.1943 50.421 53.4162 51.5859ZM58.4084 42.9328C57.299 43.3765 56.0787 43.7648 54.8584 44.0976C53.9709 41.3242 52.8615 38.3843 51.5303 35.4445C52.8615 32.5046 54.0264 29.6203 54.8584 26.8468C62.5131 29.0656 67.117 32.3937 67.117 35.5C67.117 38.107 63.8998 40.8804 58.4084 42.9328Z"
                            fill="#61DAFB"
                          />
                        </svg>
                        React
                      </div>
                      <div className="w-[150px] md:w-[170px] h-40 bg-[#F4F2ED] hover:bg-[#8488f4] hover:text-[#fff]  rounded-[10px] text-center ">
                        <svg
                          className="mx-auto mb-2"
                          width="71"
                          height="71"
                          viewBox="0 0 71 71"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M35.4997 41.8234C38.992 41.8234 41.8231 38.9923 41.8231 35.5C41.8231 32.0076 38.992 29.1765 35.4997 29.1765C32.0074 29.1765 29.1763 32.0076 29.1763 35.5C29.1763 38.9923 32.0074 41.8234 35.4997 41.8234Z"
                            fill="#61DAFB"
                          />
                          <path
                            d="M59.5178 25.0718C58.2975 24.6281 57.0217 24.1843 55.6904 23.796C56.0232 22.4648 56.3006 21.1335 56.5225 19.8578C57.6873 12.5359 56.4115 7.37729 52.8615 5.38042C51.8076 4.77026 50.6428 4.49292 49.3115 4.49292C45.4287 4.49292 40.492 7.37729 35.4998 12.2031C30.5076 7.37729 25.5709 4.49292 21.6881 4.49292C20.3568 4.49292 19.192 4.77026 18.1381 5.38042C14.5881 7.43276 13.3123 12.5914 14.4771 19.8578C14.699 21.1335 14.9764 22.4648 15.3092 23.796C13.9779 24.1843 12.7021 24.5726 11.4818 25.0718C4.54824 27.7343 0.776367 31.3953 0.776367 35.5C0.776367 39.6046 4.60371 43.2656 11.4818 45.9281C12.7021 46.3718 13.9779 46.8156 15.3092 47.2039C14.9764 48.5351 14.699 49.8664 14.4771 51.1421C13.3123 58.464 14.5881 63.6226 18.1381 65.6195C19.192 66.2296 20.3568 66.507 21.6881 66.507C25.6264 66.507 30.5631 63.6226 35.4998 58.7968C40.492 63.6226 45.4287 66.507 49.3115 66.507C50.6428 66.507 51.8076 66.2296 52.8615 65.6195C56.4115 63.5671 57.6873 58.4085 56.5225 51.1421C56.3006 49.8664 56.0232 48.5351 55.6904 47.2039C57.0217 46.8156 58.2975 46.4273 59.5178 45.9281C66.4514 43.2656 70.2232 39.6046 70.2232 35.5C70.2232 31.3953 66.4514 27.7343 59.5178 25.0718ZM51.3084 8.15386C53.5826 9.48511 54.3592 13.5898 53.4162 19.414C53.2498 20.5789 52.9725 21.7992 52.6396 23.075C49.7553 22.4093 46.7045 21.9656 43.4873 21.6882C41.6014 19.0257 39.66 16.6406 37.7186 14.4773C41.8232 10.4281 45.9834 7.65464 49.367 7.65464C50.0881 7.65464 50.7537 7.82104 51.3084 8.15386ZM45.0959 41.0468C44.0975 42.8218 42.9326 44.5968 41.7123 46.3718C39.66 46.5382 37.6076 46.5937 35.4998 46.5937C33.3365 46.5937 31.2842 46.5382 29.2873 46.3718C28.067 44.5968 26.9576 42.8218 25.9592 41.0468C24.9053 39.2164 23.9068 37.3304 23.0193 35.5C23.9068 33.6695 24.9053 31.7835 25.9592 29.9531C26.9576 28.1781 28.1225 26.4031 29.3428 24.6281C31.3951 24.4617 33.4475 24.4062 35.5553 24.4062C37.7186 24.4062 39.7709 24.4617 41.7678 24.6281C42.9881 26.4031 44.0975 28.1781 45.0959 29.9531C46.1498 31.7835 47.1482 33.6695 48.0357 35.5C47.0928 37.3304 46.1498 39.1609 45.0959 41.0468ZM49.6998 39.2164C50.5318 41.1578 51.1975 43.0437 51.8076 44.9296C49.9217 45.3734 47.9248 45.7062 45.817 45.9835C46.4826 44.9296 47.2037 43.8203 47.8139 42.6554C48.4795 41.4906 49.0896 40.3257 49.6998 39.2164ZM35.4998 54.2484C34.1686 52.8062 32.8928 51.2531 31.6725 49.6445C32.9482 49.7 34.224 49.7554 35.4998 49.7554C36.7756 49.7554 38.0514 49.7 39.3271 49.6445C38.1068 51.2531 36.8311 52.8062 35.4998 54.2484ZM25.1826 45.9281C23.0748 45.6507 21.0779 45.3179 19.192 44.8742C19.8021 43.0437 20.4678 41.1023 21.2998 39.1609C21.91 40.2703 22.5201 41.4351 23.1857 42.5445C23.8514 43.7648 24.517 44.8187 25.1826 45.9281ZM21.2998 31.7835C20.4678 29.8421 19.8021 27.9562 19.192 26.0703C21.0779 25.6265 23.0748 25.2937 25.1826 25.0164C24.517 26.0703 23.7959 27.1796 23.1857 28.3445C22.5201 29.5093 21.91 30.6742 21.2998 31.7835ZM35.4998 16.7515C36.8311 18.1937 38.1068 19.7468 39.3271 21.3554C38.0514 21.3 36.7756 21.2445 35.4998 21.2445C34.224 21.2445 32.9482 21.3 31.6725 21.3554C32.8928 19.7468 34.1686 18.1937 35.4998 16.7515ZM47.8139 28.4L45.817 25.0718C47.9248 25.3492 49.9217 25.682 51.8076 26.1257C51.1975 27.9562 50.5318 29.8976 49.6998 31.839C49.0896 30.6742 48.4795 29.5093 47.8139 28.4ZM17.5834 19.414C16.6404 13.5898 17.417 9.48511 19.6912 8.15386C20.2459 7.82104 20.9115 7.65464 21.6326 7.65464C24.9607 7.65464 29.1209 10.3726 33.2811 14.4773C31.3396 16.5851 29.3982 19.0257 27.5123 21.6882C24.2951 21.9656 21.2443 22.4648 18.36 23.075C18.0271 21.7992 17.8053 20.5789 17.5834 19.414ZM3.88262 35.5C3.88262 32.8929 7.04434 30.1195 12.5912 28.0671C13.7006 27.6234 14.9209 27.2351 16.1412 26.9023C17.0287 29.6757 18.1381 32.6156 19.4693 35.5554C18.1381 38.4953 16.9732 41.3796 16.1412 44.1531C8.48652 41.9343 3.88262 38.6062 3.88262 35.5ZM19.6912 62.846C17.417 61.5148 16.6404 57.4101 17.5834 51.5859C17.7498 50.421 18.0271 49.2007 18.36 47.925C21.2443 48.5906 24.2951 49.0343 27.5123 49.3117C29.3982 51.9742 31.3396 54.3593 33.2811 56.5226C29.1764 60.5718 25.0162 63.3453 21.6326 63.3453C20.9115 63.3453 20.2459 63.1789 19.6912 62.846ZM53.4162 51.5859C54.3592 57.4101 53.5826 61.5148 51.3084 62.846C50.7537 63.1789 50.0881 63.3453 49.367 63.3453C46.0389 63.3453 41.8787 60.6273 37.7186 56.5226C39.66 54.4148 41.6014 51.9742 43.4873 49.3117C46.7045 49.0343 49.7553 48.5351 52.6396 47.925C52.9725 49.2007 53.1943 50.421 53.4162 51.5859ZM58.4084 42.9328C57.299 43.3765 56.0787 43.7648 54.8584 44.0976C53.9709 41.3242 52.8615 38.3843 51.5303 35.4445C52.8615 32.5046 54.0264 29.6203 54.8584 26.8468C62.5131 29.0656 67.117 32.3937 67.117 35.5C67.117 38.107 63.8998 40.8804 58.4084 42.9328Z"
                            fill="#61DAFB"
                          />
                        </svg>
                        React
                      </div>
                      <div className="w-[150px] md:w-[170px] h-40 bg-[#F4F2ED] hover:bg-[#8488f4] hover:text-[#fff]  rounded-[10px] text-center ">
                        <svg
                          className="mx-auto mb-2"
                          width="71"
                          height="71"
                          viewBox="0 0 71 71"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M35.4997 41.8234C38.992 41.8234 41.8231 38.9923 41.8231 35.5C41.8231 32.0076 38.992 29.1765 35.4997 29.1765C32.0074 29.1765 29.1763 32.0076 29.1763 35.5C29.1763 38.9923 32.0074 41.8234 35.4997 41.8234Z"
                            fill="#61DAFB"
                          />
                          <path
                            d="M59.5178 25.0718C58.2975 24.6281 57.0217 24.1843 55.6904 23.796C56.0232 22.4648 56.3006 21.1335 56.5225 19.8578C57.6873 12.5359 56.4115 7.37729 52.8615 5.38042C51.8076 4.77026 50.6428 4.49292 49.3115 4.49292C45.4287 4.49292 40.492 7.37729 35.4998 12.2031C30.5076 7.37729 25.5709 4.49292 21.6881 4.49292C20.3568 4.49292 19.192 4.77026 18.1381 5.38042C14.5881 7.43276 13.3123 12.5914 14.4771 19.8578C14.699 21.1335 14.9764 22.4648 15.3092 23.796C13.9779 24.1843 12.7021 24.5726 11.4818 25.0718C4.54824 27.7343 0.776367 31.3953 0.776367 35.5C0.776367 39.6046 4.60371 43.2656 11.4818 45.9281C12.7021 46.3718 13.9779 46.8156 15.3092 47.2039C14.9764 48.5351 14.699 49.8664 14.4771 51.1421C13.3123 58.464 14.5881 63.6226 18.1381 65.6195C19.192 66.2296 20.3568 66.507 21.6881 66.507C25.6264 66.507 30.5631 63.6226 35.4998 58.7968C40.492 63.6226 45.4287 66.507 49.3115 66.507C50.6428 66.507 51.8076 66.2296 52.8615 65.6195C56.4115 63.5671 57.6873 58.4085 56.5225 51.1421C56.3006 49.8664 56.0232 48.5351 55.6904 47.2039C57.0217 46.8156 58.2975 46.4273 59.5178 45.9281C66.4514 43.2656 70.2232 39.6046 70.2232 35.5C70.2232 31.3953 66.4514 27.7343 59.5178 25.0718ZM51.3084 8.15386C53.5826 9.48511 54.3592 13.5898 53.4162 19.414C53.2498 20.5789 52.9725 21.7992 52.6396 23.075C49.7553 22.4093 46.7045 21.9656 43.4873 21.6882C41.6014 19.0257 39.66 16.6406 37.7186 14.4773C41.8232 10.4281 45.9834 7.65464 49.367 7.65464C50.0881 7.65464 50.7537 7.82104 51.3084 8.15386ZM45.0959 41.0468C44.0975 42.8218 42.9326 44.5968 41.7123 46.3718C39.66 46.5382 37.6076 46.5937 35.4998 46.5937C33.3365 46.5937 31.2842 46.5382 29.2873 46.3718C28.067 44.5968 26.9576 42.8218 25.9592 41.0468C24.9053 39.2164 23.9068 37.3304 23.0193 35.5C23.9068 33.6695 24.9053 31.7835 25.9592 29.9531C26.9576 28.1781 28.1225 26.4031 29.3428 24.6281C31.3951 24.4617 33.4475 24.4062 35.5553 24.4062C37.7186 24.4062 39.7709 24.4617 41.7678 24.6281C42.9881 26.4031 44.0975 28.1781 45.0959 29.9531C46.1498 31.7835 47.1482 33.6695 48.0357 35.5C47.0928 37.3304 46.1498 39.1609 45.0959 41.0468ZM49.6998 39.2164C50.5318 41.1578 51.1975 43.0437 51.8076 44.9296C49.9217 45.3734 47.9248 45.7062 45.817 45.9835C46.4826 44.9296 47.2037 43.8203 47.8139 42.6554C48.4795 41.4906 49.0896 40.3257 49.6998 39.2164ZM35.4998 54.2484C34.1686 52.8062 32.8928 51.2531 31.6725 49.6445C32.9482 49.7 34.224 49.7554 35.4998 49.7554C36.7756 49.7554 38.0514 49.7 39.3271 49.6445C38.1068 51.2531 36.8311 52.8062 35.4998 54.2484ZM25.1826 45.9281C23.0748 45.6507 21.0779 45.3179 19.192 44.8742C19.8021 43.0437 20.4678 41.1023 21.2998 39.1609C21.91 40.2703 22.5201 41.4351 23.1857 42.5445C23.8514 43.7648 24.517 44.8187 25.1826 45.9281ZM21.2998 31.7835C20.4678 29.8421 19.8021 27.9562 19.192 26.0703C21.0779 25.6265 23.0748 25.2937 25.1826 25.0164C24.517 26.0703 23.7959 27.1796 23.1857 28.3445C22.5201 29.5093 21.91 30.6742 21.2998 31.7835ZM35.4998 16.7515C36.8311 18.1937 38.1068 19.7468 39.3271 21.3554C38.0514 21.3 36.7756 21.2445 35.4998 21.2445C34.224 21.2445 32.9482 21.3 31.6725 21.3554C32.8928 19.7468 34.1686 18.1937 35.4998 16.7515ZM47.8139 28.4L45.817 25.0718C47.9248 25.3492 49.9217 25.682 51.8076 26.1257C51.1975 27.9562 50.5318 29.8976 49.6998 31.839C49.0896 30.6742 48.4795 29.5093 47.8139 28.4ZM17.5834 19.414C16.6404 13.5898 17.417 9.48511 19.6912 8.15386C20.2459 7.82104 20.9115 7.65464 21.6326 7.65464C24.9607 7.65464 29.1209 10.3726 33.2811 14.4773C31.3396 16.5851 29.3982 19.0257 27.5123 21.6882C24.2951 21.9656 21.2443 22.4648 18.36 23.075C18.0271 21.7992 17.8053 20.5789 17.5834 19.414ZM3.88262 35.5C3.88262 32.8929 7.04434 30.1195 12.5912 28.0671C13.7006 27.6234 14.9209 27.2351 16.1412 26.9023C17.0287 29.6757 18.1381 32.6156 19.4693 35.5554C18.1381 38.4953 16.9732 41.3796 16.1412 44.1531C8.48652 41.9343 3.88262 38.6062 3.88262 35.5ZM19.6912 62.846C17.417 61.5148 16.6404 57.4101 17.5834 51.5859C17.7498 50.421 18.0271 49.2007 18.36 47.925C21.2443 48.5906 24.2951 49.0343 27.5123 49.3117C29.3982 51.9742 31.3396 54.3593 33.2811 56.5226C29.1764 60.5718 25.0162 63.3453 21.6326 63.3453C20.9115 63.3453 20.2459 63.1789 19.6912 62.846ZM53.4162 51.5859C54.3592 57.4101 53.5826 61.5148 51.3084 62.846C50.7537 63.1789 50.0881 63.3453 49.367 63.3453C46.0389 63.3453 41.8787 60.6273 37.7186 56.5226C39.66 54.4148 41.6014 51.9742 43.4873 49.3117C46.7045 49.0343 49.7553 48.5351 52.6396 47.925C52.9725 49.2007 53.1943 50.421 53.4162 51.5859ZM58.4084 42.9328C57.299 43.3765 56.0787 43.7648 54.8584 44.0976C53.9709 41.3242 52.8615 38.3843 51.5303 35.4445C52.8615 32.5046 54.0264 29.6203 54.8584 26.8468C62.5131 29.0656 67.117 32.3937 67.117 35.5C67.117 38.107 63.8998 40.8804 58.4084 42.9328Z"
                            fill="#61DAFB"
                          />
                        </svg>
                        React
                      </div>
                      <div className="w-[150px] md:w-[170px] h-40 bg-[#F4F2ED] hover:bg-[#8488f4] hover:text-[#fff]  rounded-[10px] text-center ">
                        <svg
                          className="mx-auto mb-2"
                          width="71"
                          height="71"
                          viewBox="0 0 71 71"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M35.4997 41.8234C38.992 41.8234 41.8231 38.9923 41.8231 35.5C41.8231 32.0076 38.992 29.1765 35.4997 29.1765C32.0074 29.1765 29.1763 32.0076 29.1763 35.5C29.1763 38.9923 32.0074 41.8234 35.4997 41.8234Z"
                            fill="#61DAFB"
                          />
                          <path
                            d="M59.5178 25.0718C58.2975 24.6281 57.0217 24.1843 55.6904 23.796C56.0232 22.4648 56.3006 21.1335 56.5225 19.8578C57.6873 12.5359 56.4115 7.37729 52.8615 5.38042C51.8076 4.77026 50.6428 4.49292 49.3115 4.49292C45.4287 4.49292 40.492 7.37729 35.4998 12.2031C30.5076 7.37729 25.5709 4.49292 21.6881 4.49292C20.3568 4.49292 19.192 4.77026 18.1381 5.38042C14.5881 7.43276 13.3123 12.5914 14.4771 19.8578C14.699 21.1335 14.9764 22.4648 15.3092 23.796C13.9779 24.1843 12.7021 24.5726 11.4818 25.0718C4.54824 27.7343 0.776367 31.3953 0.776367 35.5C0.776367 39.6046 4.60371 43.2656 11.4818 45.9281C12.7021 46.3718 13.9779 46.8156 15.3092 47.2039C14.9764 48.5351 14.699 49.8664 14.4771 51.1421C13.3123 58.464 14.5881 63.6226 18.1381 65.6195C19.192 66.2296 20.3568 66.507 21.6881 66.507C25.6264 66.507 30.5631 63.6226 35.4998 58.7968C40.492 63.6226 45.4287 66.507 49.3115 66.507C50.6428 66.507 51.8076 66.2296 52.8615 65.6195C56.4115 63.5671 57.6873 58.4085 56.5225 51.1421C56.3006 49.8664 56.0232 48.5351 55.6904 47.2039C57.0217 46.8156 58.2975 46.4273 59.5178 45.9281C66.4514 43.2656 70.2232 39.6046 70.2232 35.5C70.2232 31.3953 66.4514 27.7343 59.5178 25.0718ZM51.3084 8.15386C53.5826 9.48511 54.3592 13.5898 53.4162 19.414C53.2498 20.5789 52.9725 21.7992 52.6396 23.075C49.7553 22.4093 46.7045 21.9656 43.4873 21.6882C41.6014 19.0257 39.66 16.6406 37.7186 14.4773C41.8232 10.4281 45.9834 7.65464 49.367 7.65464C50.0881 7.65464 50.7537 7.82104 51.3084 8.15386ZM45.0959 41.0468C44.0975 42.8218 42.9326 44.5968 41.7123 46.3718C39.66 46.5382 37.6076 46.5937 35.4998 46.5937C33.3365 46.5937 31.2842 46.5382 29.2873 46.3718C28.067 44.5968 26.9576 42.8218 25.9592 41.0468C24.9053 39.2164 23.9068 37.3304 23.0193 35.5C23.9068 33.6695 24.9053 31.7835 25.9592 29.9531C26.9576 28.1781 28.1225 26.4031 29.3428 24.6281C31.3951 24.4617 33.4475 24.4062 35.5553 24.4062C37.7186 24.4062 39.7709 24.4617 41.7678 24.6281C42.9881 26.4031 44.0975 28.1781 45.0959 29.9531C46.1498 31.7835 47.1482 33.6695 48.0357 35.5C47.0928 37.3304 46.1498 39.1609 45.0959 41.0468ZM49.6998 39.2164C50.5318 41.1578 51.1975 43.0437 51.8076 44.9296C49.9217 45.3734 47.9248 45.7062 45.817 45.9835C46.4826 44.9296 47.2037 43.8203 47.8139 42.6554C48.4795 41.4906 49.0896 40.3257 49.6998 39.2164ZM35.4998 54.2484C34.1686 52.8062 32.8928 51.2531 31.6725 49.6445C32.9482 49.7 34.224 49.7554 35.4998 49.7554C36.7756 49.7554 38.0514 49.7 39.3271 49.6445C38.1068 51.2531 36.8311 52.8062 35.4998 54.2484ZM25.1826 45.9281C23.0748 45.6507 21.0779 45.3179 19.192 44.8742C19.8021 43.0437 20.4678 41.1023 21.2998 39.1609C21.91 40.2703 22.5201 41.4351 23.1857 42.5445C23.8514 43.7648 24.517 44.8187 25.1826 45.9281ZM21.2998 31.7835C20.4678 29.8421 19.8021 27.9562 19.192 26.0703C21.0779 25.6265 23.0748 25.2937 25.1826 25.0164C24.517 26.0703 23.7959 27.1796 23.1857 28.3445C22.5201 29.5093 21.91 30.6742 21.2998 31.7835ZM35.4998 16.7515C36.8311 18.1937 38.1068 19.7468 39.3271 21.3554C38.0514 21.3 36.7756 21.2445 35.4998 21.2445C34.224 21.2445 32.9482 21.3 31.6725 21.3554C32.8928 19.7468 34.1686 18.1937 35.4998 16.7515ZM47.8139 28.4L45.817 25.0718C47.9248 25.3492 49.9217 25.682 51.8076 26.1257C51.1975 27.9562 50.5318 29.8976 49.6998 31.839C49.0896 30.6742 48.4795 29.5093 47.8139 28.4ZM17.5834 19.414C16.6404 13.5898 17.417 9.48511 19.6912 8.15386C20.2459 7.82104 20.9115 7.65464 21.6326 7.65464C24.9607 7.65464 29.1209 10.3726 33.2811 14.4773C31.3396 16.5851 29.3982 19.0257 27.5123 21.6882C24.2951 21.9656 21.2443 22.4648 18.36 23.075C18.0271 21.7992 17.8053 20.5789 17.5834 19.414ZM3.88262 35.5C3.88262 32.8929 7.04434 30.1195 12.5912 28.0671C13.7006 27.6234 14.9209 27.2351 16.1412 26.9023C17.0287 29.6757 18.1381 32.6156 19.4693 35.5554C18.1381 38.4953 16.9732 41.3796 16.1412 44.1531C8.48652 41.9343 3.88262 38.6062 3.88262 35.5ZM19.6912 62.846C17.417 61.5148 16.6404 57.4101 17.5834 51.5859C17.7498 50.421 18.0271 49.2007 18.36 47.925C21.2443 48.5906 24.2951 49.0343 27.5123 49.3117C29.3982 51.9742 31.3396 54.3593 33.2811 56.5226C29.1764 60.5718 25.0162 63.3453 21.6326 63.3453C20.9115 63.3453 20.2459 63.1789 19.6912 62.846ZM53.4162 51.5859C54.3592 57.4101 53.5826 61.5148 51.3084 62.846C50.7537 63.1789 50.0881 63.3453 49.367 63.3453C46.0389 63.3453 41.8787 60.6273 37.7186 56.5226C39.66 54.4148 41.6014 51.9742 43.4873 49.3117C46.7045 49.0343 49.7553 48.5351 52.6396 47.925C52.9725 49.2007 53.1943 50.421 53.4162 51.5859ZM58.4084 42.9328C57.299 43.3765 56.0787 43.7648 54.8584 44.0976C53.9709 41.3242 52.8615 38.3843 51.5303 35.4445C52.8615 32.5046 54.0264 29.6203 54.8584 26.8468C62.5131 29.0656 67.117 32.3937 67.117 35.5C67.117 38.107 63.8998 40.8804 58.4084 42.9328Z"
                            fill="#61DAFB"
                          />
                        </svg>
                        React
                      </div>
                      <div className="w-[150px] md:w-[170px] h-40 bg-[#F4F2ED] hover:bg-[#8488f4] hover:text-[#fff]  rounded-[10px] text-center ">
                        <svg
                          className="mx-auto mb-2"
                          width="71"
                          height="71"
                          viewBox="0 0 71 71"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M35.4997 41.8234C38.992 41.8234 41.8231 38.9923 41.8231 35.5C41.8231 32.0076 38.992 29.1765 35.4997 29.1765C32.0074 29.1765 29.1763 32.0076 29.1763 35.5C29.1763 38.9923 32.0074 41.8234 35.4997 41.8234Z"
                            fill="#61DAFB"
                          />
                          <path
                            d="M59.5178 25.0718C58.2975 24.6281 57.0217 24.1843 55.6904 23.796C56.0232 22.4648 56.3006 21.1335 56.5225 19.8578C57.6873 12.5359 56.4115 7.37729 52.8615 5.38042C51.8076 4.77026 50.6428 4.49292 49.3115 4.49292C45.4287 4.49292 40.492 7.37729 35.4998 12.2031C30.5076 7.37729 25.5709 4.49292 21.6881 4.49292C20.3568 4.49292 19.192 4.77026 18.1381 5.38042C14.5881 7.43276 13.3123 12.5914 14.4771 19.8578C14.699 21.1335 14.9764 22.4648 15.3092 23.796C13.9779 24.1843 12.7021 24.5726 11.4818 25.0718C4.54824 27.7343 0.776367 31.3953 0.776367 35.5C0.776367 39.6046 4.60371 43.2656 11.4818 45.9281C12.7021 46.3718 13.9779 46.8156 15.3092 47.2039C14.9764 48.5351 14.699 49.8664 14.4771 51.1421C13.3123 58.464 14.5881 63.6226 18.1381 65.6195C19.192 66.2296 20.3568 66.507 21.6881 66.507C25.6264 66.507 30.5631 63.6226 35.4998 58.7968C40.492 63.6226 45.4287 66.507 49.3115 66.507C50.6428 66.507 51.8076 66.2296 52.8615 65.6195C56.4115 63.5671 57.6873 58.4085 56.5225 51.1421C56.3006 49.8664 56.0232 48.5351 55.6904 47.2039C57.0217 46.8156 58.2975 46.4273 59.5178 45.9281C66.4514 43.2656 70.2232 39.6046 70.2232 35.5C70.2232 31.3953 66.4514 27.7343 59.5178 25.0718ZM51.3084 8.15386C53.5826 9.48511 54.3592 13.5898 53.4162 19.414C53.2498 20.5789 52.9725 21.7992 52.6396 23.075C49.7553 22.4093 46.7045 21.9656 43.4873 21.6882C41.6014 19.0257 39.66 16.6406 37.7186 14.4773C41.8232 10.4281 45.9834 7.65464 49.367 7.65464C50.0881 7.65464 50.7537 7.82104 51.3084 8.15386ZM45.0959 41.0468C44.0975 42.8218 42.9326 44.5968 41.7123 46.3718C39.66 46.5382 37.6076 46.5937 35.4998 46.5937C33.3365 46.5937 31.2842 46.5382 29.2873 46.3718C28.067 44.5968 26.9576 42.8218 25.9592 41.0468C24.9053 39.2164 23.9068 37.3304 23.0193 35.5C23.9068 33.6695 24.9053 31.7835 25.9592 29.9531C26.9576 28.1781 28.1225 26.4031 29.3428 24.6281C31.3951 24.4617 33.4475 24.4062 35.5553 24.4062C37.7186 24.4062 39.7709 24.4617 41.7678 24.6281C42.9881 26.4031 44.0975 28.1781 45.0959 29.9531C46.1498 31.7835 47.1482 33.6695 48.0357 35.5C47.0928 37.3304 46.1498 39.1609 45.0959 41.0468ZM49.6998 39.2164C50.5318 41.1578 51.1975 43.0437 51.8076 44.9296C49.9217 45.3734 47.9248 45.7062 45.817 45.9835C46.4826 44.9296 47.2037 43.8203 47.8139 42.6554C48.4795 41.4906 49.0896 40.3257 49.6998 39.2164ZM35.4998 54.2484C34.1686 52.8062 32.8928 51.2531 31.6725 49.6445C32.9482 49.7 34.224 49.7554 35.4998 49.7554C36.7756 49.7554 38.0514 49.7 39.3271 49.6445C38.1068 51.2531 36.8311 52.8062 35.4998 54.2484ZM25.1826 45.9281C23.0748 45.6507 21.0779 45.3179 19.192 44.8742C19.8021 43.0437 20.4678 41.1023 21.2998 39.1609C21.91 40.2703 22.5201 41.4351 23.1857 42.5445C23.8514 43.7648 24.517 44.8187 25.1826 45.9281ZM21.2998 31.7835C20.4678 29.8421 19.8021 27.9562 19.192 26.0703C21.0779 25.6265 23.0748 25.2937 25.1826 25.0164C24.517 26.0703 23.7959 27.1796 23.1857 28.3445C22.5201 29.5093 21.91 30.6742 21.2998 31.7835ZM35.4998 16.7515C36.8311 18.1937 38.1068 19.7468 39.3271 21.3554C38.0514 21.3 36.7756 21.2445 35.4998 21.2445C34.224 21.2445 32.9482 21.3 31.6725 21.3554C32.8928 19.7468 34.1686 18.1937 35.4998 16.7515ZM47.8139 28.4L45.817 25.0718C47.9248 25.3492 49.9217 25.682 51.8076 26.1257C51.1975 27.9562 50.5318 29.8976 49.6998 31.839C49.0896 30.6742 48.4795 29.5093 47.8139 28.4ZM17.5834 19.414C16.6404 13.5898 17.417 9.48511 19.6912 8.15386C20.2459 7.82104 20.9115 7.65464 21.6326 7.65464C24.9607 7.65464 29.1209 10.3726 33.2811 14.4773C31.3396 16.5851 29.3982 19.0257 27.5123 21.6882C24.2951 21.9656 21.2443 22.4648 18.36 23.075C18.0271 21.7992 17.8053 20.5789 17.5834 19.414ZM3.88262 35.5C3.88262 32.8929 7.04434 30.1195 12.5912 28.0671C13.7006 27.6234 14.9209 27.2351 16.1412 26.9023C17.0287 29.6757 18.1381 32.6156 19.4693 35.5554C18.1381 38.4953 16.9732 41.3796 16.1412 44.1531C8.48652 41.9343 3.88262 38.6062 3.88262 35.5ZM19.6912 62.846C17.417 61.5148 16.6404 57.4101 17.5834 51.5859C17.7498 50.421 18.0271 49.2007 18.36 47.925C21.2443 48.5906 24.2951 49.0343 27.5123 49.3117C29.3982 51.9742 31.3396 54.3593 33.2811 56.5226C29.1764 60.5718 25.0162 63.3453 21.6326 63.3453C20.9115 63.3453 20.2459 63.1789 19.6912 62.846ZM53.4162 51.5859C54.3592 57.4101 53.5826 61.5148 51.3084 62.846C50.7537 63.1789 50.0881 63.3453 49.367 63.3453C46.0389 63.3453 41.8787 60.6273 37.7186 56.5226C39.66 54.4148 41.6014 51.9742 43.4873 49.3117C46.7045 49.0343 49.7553 48.5351 52.6396 47.925C52.9725 49.2007 53.1943 50.421 53.4162 51.5859ZM58.4084 42.9328C57.299 43.3765 56.0787 43.7648 54.8584 44.0976C53.9709 41.3242 52.8615 38.3843 51.5303 35.4445C52.8615 32.5046 54.0264 29.6203 54.8584 26.8468C62.5131 29.0656 67.117 32.3937 67.117 35.5C67.117 38.107 63.8998 40.8804 58.4084 42.9328Z"
                            fill="#61DAFB"
                          />
                        </svg>
                        React
                      </div>
                      <div className="w-[150px] md:w-[170px] h-40 bg-[#F4F2ED] hover:bg-[#8488f4] hover:text-[#fff]  rounded-[10px] text-center ">
                        <svg
                          className="mx-auto mb-2"
                          width="71"
                          height="71"
                          viewBox="0 0 71 71"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M35.4997 41.8234C38.992 41.8234 41.8231 38.9923 41.8231 35.5C41.8231 32.0076 38.992 29.1765 35.4997 29.1765C32.0074 29.1765 29.1763 32.0076 29.1763 35.5C29.1763 38.9923 32.0074 41.8234 35.4997 41.8234Z"
                            fill="#61DAFB"
                          />
                          <path
                            d="M59.5178 25.0718C58.2975 24.6281 57.0217 24.1843 55.6904 23.796C56.0232 22.4648 56.3006 21.1335 56.5225 19.8578C57.6873 12.5359 56.4115 7.37729 52.8615 5.38042C51.8076 4.77026 50.6428 4.49292 49.3115 4.49292C45.4287 4.49292 40.492 7.37729 35.4998 12.2031C30.5076 7.37729 25.5709 4.49292 21.6881 4.49292C20.3568 4.49292 19.192 4.77026 18.1381 5.38042C14.5881 7.43276 13.3123 12.5914 14.4771 19.8578C14.699 21.1335 14.9764 22.4648 15.3092 23.796C13.9779 24.1843 12.7021 24.5726 11.4818 25.0718C4.54824 27.7343 0.776367 31.3953 0.776367 35.5C0.776367 39.6046 4.60371 43.2656 11.4818 45.9281C12.7021 46.3718 13.9779 46.8156 15.3092 47.2039C14.9764 48.5351 14.699 49.8664 14.4771 51.1421C13.3123 58.464 14.5881 63.6226 18.1381 65.6195C19.192 66.2296 20.3568 66.507 21.6881 66.507C25.6264 66.507 30.5631 63.6226 35.4998 58.7968C40.492 63.6226 45.4287 66.507 49.3115 66.507C50.6428 66.507 51.8076 66.2296 52.8615 65.6195C56.4115 63.5671 57.6873 58.4085 56.5225 51.1421C56.3006 49.8664 56.0232 48.5351 55.6904 47.2039C57.0217 46.8156 58.2975 46.4273 59.5178 45.9281C66.4514 43.2656 70.2232 39.6046 70.2232 35.5C70.2232 31.3953 66.4514 27.7343 59.5178 25.0718ZM51.3084 8.15386C53.5826 9.48511 54.3592 13.5898 53.4162 19.414C53.2498 20.5789 52.9725 21.7992 52.6396 23.075C49.7553 22.4093 46.7045 21.9656 43.4873 21.6882C41.6014 19.0257 39.66 16.6406 37.7186 14.4773C41.8232 10.4281 45.9834 7.65464 49.367 7.65464C50.0881 7.65464 50.7537 7.82104 51.3084 8.15386ZM45.0959 41.0468C44.0975 42.8218 42.9326 44.5968 41.7123 46.3718C39.66 46.5382 37.6076 46.5937 35.4998 46.5937C33.3365 46.5937 31.2842 46.5382 29.2873 46.3718C28.067 44.5968 26.9576 42.8218 25.9592 41.0468C24.9053 39.2164 23.9068 37.3304 23.0193 35.5C23.9068 33.6695 24.9053 31.7835 25.9592 29.9531C26.9576 28.1781 28.1225 26.4031 29.3428 24.6281C31.3951 24.4617 33.4475 24.4062 35.5553 24.4062C37.7186 24.4062 39.7709 24.4617 41.7678 24.6281C42.9881 26.4031 44.0975 28.1781 45.0959 29.9531C46.1498 31.7835 47.1482 33.6695 48.0357 35.5C47.0928 37.3304 46.1498 39.1609 45.0959 41.0468ZM49.6998 39.2164C50.5318 41.1578 51.1975 43.0437 51.8076 44.9296C49.9217 45.3734 47.9248 45.7062 45.817 45.9835C46.4826 44.9296 47.2037 43.8203 47.8139 42.6554C48.4795 41.4906 49.0896 40.3257 49.6998 39.2164ZM35.4998 54.2484C34.1686 52.8062 32.8928 51.2531 31.6725 49.6445C32.9482 49.7 34.224 49.7554 35.4998 49.7554C36.7756 49.7554 38.0514 49.7 39.3271 49.6445C38.1068 51.2531 36.8311 52.8062 35.4998 54.2484ZM25.1826 45.9281C23.0748 45.6507 21.0779 45.3179 19.192 44.8742C19.8021 43.0437 20.4678 41.1023 21.2998 39.1609C21.91 40.2703 22.5201 41.4351 23.1857 42.5445C23.8514 43.7648 24.517 44.8187 25.1826 45.9281ZM21.2998 31.7835C20.4678 29.8421 19.8021 27.9562 19.192 26.0703C21.0779 25.6265 23.0748 25.2937 25.1826 25.0164C24.517 26.0703 23.7959 27.1796 23.1857 28.3445C22.5201 29.5093 21.91 30.6742 21.2998 31.7835ZM35.4998 16.7515C36.8311 18.1937 38.1068 19.7468 39.3271 21.3554C38.0514 21.3 36.7756 21.2445 35.4998 21.2445C34.224 21.2445 32.9482 21.3 31.6725 21.3554C32.8928 19.7468 34.1686 18.1937 35.4998 16.7515ZM47.8139 28.4L45.817 25.0718C47.9248 25.3492 49.9217 25.682 51.8076 26.1257C51.1975 27.9562 50.5318 29.8976 49.6998 31.839C49.0896 30.6742 48.4795 29.5093 47.8139 28.4ZM17.5834 19.414C16.6404 13.5898 17.417 9.48511 19.6912 8.15386C20.2459 7.82104 20.9115 7.65464 21.6326 7.65464C24.9607 7.65464 29.1209 10.3726 33.2811 14.4773C31.3396 16.5851 29.3982 19.0257 27.5123 21.6882C24.2951 21.9656 21.2443 22.4648 18.36 23.075C18.0271 21.7992 17.8053 20.5789 17.5834 19.414ZM3.88262 35.5C3.88262 32.8929 7.04434 30.1195 12.5912 28.0671C13.7006 27.6234 14.9209 27.2351 16.1412 26.9023C17.0287 29.6757 18.1381 32.6156 19.4693 35.5554C18.1381 38.4953 16.9732 41.3796 16.1412 44.1531C8.48652 41.9343 3.88262 38.6062 3.88262 35.5ZM19.6912 62.846C17.417 61.5148 16.6404 57.4101 17.5834 51.5859C17.7498 50.421 18.0271 49.2007 18.36 47.925C21.2443 48.5906 24.2951 49.0343 27.5123 49.3117C29.3982 51.9742 31.3396 54.3593 33.2811 56.5226C29.1764 60.5718 25.0162 63.3453 21.6326 63.3453C20.9115 63.3453 20.2459 63.1789 19.6912 62.846ZM53.4162 51.5859C54.3592 57.4101 53.5826 61.5148 51.3084 62.846C50.7537 63.1789 50.0881 63.3453 49.367 63.3453C46.0389 63.3453 41.8787 60.6273 37.7186 56.5226C39.66 54.4148 41.6014 51.9742 43.4873 49.3117C46.7045 49.0343 49.7553 48.5351 52.6396 47.925C52.9725 49.2007 53.1943 50.421 53.4162 51.5859ZM58.4084 42.9328C57.299 43.3765 56.0787 43.7648 54.8584 44.0976C53.9709 41.3242 52.8615 38.3843 51.5303 35.4445C52.8615 32.5046 54.0264 29.6203 54.8584 26.8468C62.5131 29.0656 67.117 32.3937 67.117 35.5C67.117 38.107 63.8998 40.8804 58.4084 42.9328Z"
                            fill="#61DAFB"
                          />
                        </svg>
                        React
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="services-page">
            <h2 className="text-[24px]  text-center gradient-text">Services</h2>
            <h3 className="text-[36px] lg:text-[44px]  text-center font-[500]">
              Additional Services that will 
              Grow Your Business
            </h3>
            <div className="bg-circle-img mt-5 overflow-hidden py-5">
              <div className="serviceimg">
                <div className="flex flex-col w-full gap-4 md:gap-[58px]">
                  <div className="flex flex-col md:flex-row gap-4 justify-between w-full max-w-[900px] mx-auto items-center">
                    <div
                      data-aos="fade-up-right"  className="service-card shadow-[0px_4px_4px_0px_#00000040]  max-w-[300px] p-0  rounded-[24px] text-center text-white  md:mx-0 md:mr-auto"
                      style={ {
                        background:
                          "linear-gradient(270deg, #083ca7 0%, #862ff1 100%)",
                      } }
                    >
                      <div className="square p-4">
                        <div>
                          <Image
                            alt=""
                            src={ Painting }
                            className="mx-auto mb-4"
                          />
                        </div>
                        <h5 className="text-white text-[24px] font-semibold">Web design</h5>
                        <p className="text-center text-white pt-0">
                          Lorem ipsum dolor sit amet, contop ctetur adipisic.
                          Google first page marketing.
                        </p>
                        <a href="#" className="relative">Read More</a>
                      </div>
                    </div>
                    <div data-aos="fade-up-left"
                      className="service-card shadow-[0px_4px_4px_0px_#00000040]  max-w-[300px] p-0  rounded-[24px] text-center text-white  md:mx-0"
                      style={ {
                        background:
                          " linear-gradient(90deg, #297679 0%, #3FA6C1 100%)",
                      } }
                    >
                      <div className="square p-4">
                        <div>
                          <Image
                            alt=""
                            src={ Painting }
                            className="mx-auto mb-4"
                          />
                        </div>
                        <h5 className="text-white text-[24px] font-semibold">Web design</h5>
                        <p className="text-center text-white pt-0">
                          Lorem ipsum dolor sit amet, contop ctetur adipisic.
                          Google first page marketing.
                        </p>
                        <a href="#" className="relative">Read More</a>
                      </div>
                    </div>
                  </div>
                  <div className="flex  flex-col md:flex-row gap-4 justify-between w-full max-w-[1000px] mx-auto items-center">
                    <div data-aos="fade-up-right"
                      className="service-card shadow-[0px_4px_4px_0px_#00000040]  max-w-[300px] p-0  rounded-[24px] text-center text-white  md:mx-0"
                      style={ {
                        background:
                          "linear-gradient(90deg, #FCB731 0%, #F67526 100%)",
                      } }
                    >
                      <div className="square p-4">
                        <div>
                          <Image
                            alt=""
                            src={ Painting }
                            className="mx-auto mb-4"
                          />
                        </div>
                        <h5 className="text-white text-[24px] font-semibold">Web design</h5>
                        <p className="text-center text-white pt-0">
                          Lorem ipsum dolor sit amet, contop ctetur adipisic.
                          Google first page marketing.
                        </p>
                        <a href="#" className="relative">Read More</a>
                      </div>
                    </div>
                    <div data-aos="fade-up-left"
                      className="service-card shadow-[0px_4px_4px_0px_#00000040]  max-w-[300px] p-0  rounded-[24px] text-center text-white  md:mx-0"
                      style={ {
                        background:
                          "linear-gradient(90deg, #FE6F7B 0%, #FA5B9D 100%)",
                      } }
                    >
                      <div className="square p-4">
                        <div>
                          <Image
                            alt=""
                            src={ Painting }
                            className="mx-auto mb-4"
                          />
                        </div>
                        <h5 className="text-white text-[24px] font-semibold">Web design</h5>
                        <p className="text-center text-white pt-0">
                          Lorem ipsum dolor sit amet, contop ctetur adipisic.
                          Google first page marketing.
                        </p>
                        <a href="#" className="relative">Read More</a>
                      </div>
                    </div>{ " " }
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="pt-20 pb-0">
            <div>
              <div className="relative py-20 w-full overflow-hidden">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-[11%] bg-[#d9e2ff]"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src="/videos/bgVideo.mp4"
                    // src="https://youtu.be/vwSlYG7hFk0?si=Th4STFWzm5yzMFUF"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                <div className="max-w-7xl mx-auto relative z-10 flex min-h-full flex-col items-center justify-center text-white text-center px-4">
                  <div className="md:flex justify-between w-full items-center px-4">
                    <div data-aos="fade-right" className="md:w-[45%] text-left">
                      <h4 className="text-[44px] lg:text-[75px] pb-[50px] leading-[112px]">
                        Technologies{ " " }
                      </h4>
                      <p className="text-[#000] text-[18px]">
                        As a versatile service provider, we cater to diverse
                        industries, offering tailored solutions to meet specific
                        needs. We ensure success across varied business
                        landscapes with comprehensive and adaptable services.
                      </p>
                    </div>
                    <div data-aos="fade-left"  className="md:w-[50%] overflow-hidden">
                      <div className="ani-slider-container">
                        <span className="slide-box-1"></span>
                        <span className="slide-box-2"></span>
                        <span className="slide-box-3"></span>
                        <span className="slide-box-4"></span>
                        <span className="slide-box-5"></span>

                        <Swiper
                          grabCursor={ true }
                          effect={ "creative" }
                          creativeEffect={ {
                            prev: {
                              shadow: true,
                              translate: [ 0, 0, -400 ],
                            },
                            next: {
                              translate: [ "100%", 0, 0 ],
                            },
                          } }
                          loop={ true } // Enable infinite loop
                          modules={ [ EffectCreative ] }
                          className="mySwiper customslider"
                          onSwiper={ ( swiper ) => ( swiperRef.current = swiper ) } // Save Swiper instance

                        >

                          <SwiperSlide className="p-4 bg-gray-200  bg-[#fff] border-r p-4 text-left shadow-[0px_4px_7.5px_0px_#945DFF40] rounded-[26px] z-[99] ">
                            <div className="">
                              <h4 className="text-[24px] md:text-[36px] lg:text-[44px] leading-[50px] lg:leading-[100px]">
                                Technology
                              </h4>
                              <p className="text-[16px] md:text-[18px] font-normal leading-7 text-left">
                                we propel tech advancement through bespoke
                                solutions, ensuring seamless integration and
                                innovation for businesses. Our expertise drives
                                digital transformation, providing customized
                                strategies to navigate the evolving landscape of
                                technology. We are committed to delivering
                                excellence, empowering our clients to thrive in the
                                ever-changing world of technology.
                              </p>
                              <span onClick={ handleNextSlide }>
                                <svg
                                  className="ml-auto"
                                  width="41"
                                  height="13"
                                  viewBox="0 0 41 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0.943579 6.64421C0.951029 7.12084 1.14728 7.57505 1.48925 7.90714C1.83123 8.23923 2.29099 8.42208 2.76763 8.41555L33.3583 8.41555V12.0742C33.3583 12.8498 34.2945 13.2381 34.8415 12.6893L40.2996 7.23115C40.6397 6.89105 40.6397 6.34115 40.2996 6.00105L34.8415 0.542942C34.2945 -0.0058918 33.3583 0.384224 33.3583 1.15799V4.81664L2.76763 4.81664C2.52689 4.81335 2.28792 4.85839 2.0649 4.94911C1.84188 5.03984 1.63932 5.17439 1.46924 5.3448C1.29915 5.51521 1.16499 5.71803 1.0747 5.94123C0.984405 6.16442 0.939819 6.40347 0.943579 6.64421Z"
                                    fill="black"
                                  />
                                </svg>
                              </span>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="p-4 bg-gray-200  bg-[#fff] border-r p-4 text-left shadow-[0px_4px_7.5px_0px_#945DFF40] rounded-[26px] z-[99] ">
                            <div className="">
                              <h4 className="text-[24px] md:text-[36px] lg:text-[44px] leading-[50px] lg:leading-[100px]">
                                Technology
                              </h4>
                              <p className="text-[16px] md:text-[18px] font-normal leading-7 text-left">
                                we propel tech advancement through bespoke
                                solutions, ensuring seamless integration and
                                innovation for businesses. Our expertise drives
                                digital transformation, providing customized
                                strategies to navigate the evolving landscape of
                                technology. We are committed to delivering
                                excellence, empowering our clients to thrive in the
                                ever-changing world of technology.
                              </p>
                              <span onClick={ handleNextSlide }>
                                <svg
                                  className="ml-auto"
                                  width="41"
                                  height="13"
                                  viewBox="0 0 41 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0.943579 6.64421C0.951029 7.12084 1.14728 7.57505 1.48925 7.90714C1.83123 8.23923 2.29099 8.42208 2.76763 8.41555L33.3583 8.41555V12.0742C33.3583 12.8498 34.2945 13.2381 34.8415 12.6893L40.2996 7.23115C40.6397 6.89105 40.6397 6.34115 40.2996 6.00105L34.8415 0.542942C34.2945 -0.0058918 33.3583 0.384224 33.3583 1.15799V4.81664L2.76763 4.81664C2.52689 4.81335 2.28792 4.85839 2.0649 4.94911C1.84188 5.03984 1.63932 5.17439 1.46924 5.3448C1.29915 5.51521 1.16499 5.71803 1.0747 5.94123C0.984405 6.16442 0.939819 6.40347 0.943579 6.64421Z"
                                    fill="black"
                                  />
                                </svg>
                              </span>
                            </div>
                          </SwiperSlide>      <SwiperSlide className="p-4 bg-gray-200  bg-[#fff] border-r p-4 text-left shadow-[0px_4px_7.5px_0px_#945DFF40] rounded-[26px] z-[99] ">
                            <div className="">
                              <h4 className="text-[24px] md:text-[36px] lg:text-[44px] leading-[50px] lg:leading-[100px]">
                                Technology
                              </h4>
                              <p className="text-[16px] md:text-[18px] font-normal leading-7 text-left">
                                we propel tech advancement through bespoke
                                solutions, ensuring seamless integration and
                                innovation for businesses. Our expertise drives
                                digital transformation, providing customized
                                strategies to navigate the evolving landscape of
                                technology. We are committed to delivering
                                excellence, empowering our clients to thrive in the
                                ever-changing world of technology.
                              </p>
                              <span onClick={ handleNextSlide }>
                                <svg
                                  className="ml-auto"
                                  width="41"
                                  height="13"
                                  viewBox="0 0 41 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0.943579 6.64421C0.951029 7.12084 1.14728 7.57505 1.48925 7.90714C1.83123 8.23923 2.29099 8.42208 2.76763 8.41555L33.3583 8.41555V12.0742C33.3583 12.8498 34.2945 13.2381 34.8415 12.6893L40.2996 7.23115C40.6397 6.89105 40.6397 6.34115 40.2996 6.00105L34.8415 0.542942C34.2945 -0.0058918 33.3583 0.384224 33.3583 1.15799V4.81664L2.76763 4.81664C2.52689 4.81335 2.28792 4.85839 2.0649 4.94911C1.84188 5.03984 1.63932 5.17439 1.46924 5.3448C1.29915 5.51521 1.16499 5.71803 1.0747 5.94123C0.984405 6.16442 0.939819 6.40347 0.943579 6.64421Z"
                                    fill="black"
                                  />
                                </svg>
                              </span>
                            </div>
                          </SwiperSlide>      <SwiperSlide className="p-4 bg-gray-200  bg-[#fff] border-r p-4 text-left shadow-[0px_4px_7.5px_0px_#945DFF40] rounded-[26px] z-[99] ">
                            <div className="">
                              <h4 className="text-[24px] md:text-[36px] lg:text-[44px] leading-[50px] lg:leading-[100px]">
                                Technology
                              </h4>
                              <p className="text-[16px] md:text-[18px] font-normal leading-7 text-left">
                                we propel tech advancement through bespoke
                                solutions, ensuring seamless integration and
                                innovation for businesses. Our expertise drives
                                digital transformation, providing customized
                                strategies to navigate the evolving landscape of
                                technology. We are committed to delivering
                                excellence, empowering our clients to thrive in the
                                ever-changing world of technology.
                              </p>
                              <span onClick={ handleNextSlide }>
                                <svg
                                  className="ml-auto"
                                  width="41"
                                  height="13"
                                  viewBox="0 0 41 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0.943579 6.64421C0.951029 7.12084 1.14728 7.57505 1.48925 7.90714C1.83123 8.23923 2.29099 8.42208 2.76763 8.41555L33.3583 8.41555V12.0742C33.3583 12.8498 34.2945 13.2381 34.8415 12.6893L40.2996 7.23115C40.6397 6.89105 40.6397 6.34115 40.2996 6.00105L34.8415 0.542942C34.2945 -0.0058918 33.3583 0.384224 33.3583 1.15799V4.81664L2.76763 4.81664C2.52689 4.81335 2.28792 4.85839 2.0649 4.94911C1.84188 5.03984 1.63932 5.17439 1.46924 5.3448C1.29915 5.51521 1.16499 5.71803 1.0747 5.94123C0.984405 6.16442 0.939819 6.40347 0.943579 6.64421Z"
                                    fill="black"
                                  />
                                </svg>
                              </span>
                            </div>
                          </SwiperSlide>      <SwiperSlide className="p-4 bg-gray-200  bg-[#fff] border-r p-4 text-left shadow-[0px_4px_7.5px_0px_#945DFF40] rounded-[26px] z-[99] ">
                            <div className="">
                              <h4 className="text-[24px] md:text-[36px] lg:text-[44px] leading-[50px] lg:leading-[100px]">
                                Technology
                              </h4>
                              <p className="text-[16px] md:text-[18px] font-normal leading-7 text-left">
                                we propel tech advancement through bespoke
                                solutions, ensuring seamless integration and
                                innovation for businesses. Our expertise drives
                                digital transformation, providing customized
                                strategies to navigate the evolving landscape of
                                technology. We are committed to delivering
                                excellence, empowering our clients to thrive in the
                                ever-changing world of technology.
                              </p>
                              <span onClick={ handleNextSlide }>
                                <svg
                                  className="ml-auto"
                                  width="41"
                                  height="13"
                                  viewBox="0 0 41 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0.943579 6.64421C0.951029 7.12084 1.14728 7.57505 1.48925 7.90714C1.83123 8.23923 2.29099 8.42208 2.76763 8.41555L33.3583 8.41555V12.0742C33.3583 12.8498 34.2945 13.2381 34.8415 12.6893L40.2996 7.23115C40.6397 6.89105 40.6397 6.34115 40.2996 6.00105L34.8415 0.542942C34.2945 -0.0058918 33.3583 0.384224 33.3583 1.15799V4.81664L2.76763 4.81664C2.52689 4.81335 2.28792 4.85839 2.0649 4.94911C1.84188 5.03984 1.63932 5.17439 1.46924 5.3448C1.29915 5.51521 1.16499 5.71803 1.0747 5.94123C0.984405 6.16442 0.939819 6.40347 0.943579 6.64421Z"
                                    fill="black"
                                  />
                                </svg>
                              </span>
                            </div>
                          </SwiperSlide>      <SwiperSlide className="p-4 bg-gray-200  bg-[#fff] border-r p-4 text-left shadow-[0px_4px_7.5px_0px_#945DFF40] rounded-[26px] z-[99] ">
                            <div className="">
                              <h4 className="text-[24px] md:text-[36px] lg:text-[44px] leading-[50px] lg:leading-[100px]">
                                Technology
                              </h4>
                              <p className="text-[16px] md:text-[18px] font-normal leading-7 text-left">
                                we propel tech advancement through bespoke
                                solutions, ensuring seamless integration and
                                innovation for businesses. Our expertise drives
                                digital transformation, providing customized
                                strategies to navigate the evolving landscape of
                                technology. We are committed to delivering
                                excellence, empowering our clients to thrive in the
                                ever-changing world of technology.
                              </p>
                              <span onClick={ handleNextSlide }>
                                <svg
                                  className="ml-auto"
                                  width="41"
                                  height="13"
                                  viewBox="0 0 41 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0.943579 6.64421C0.951029 7.12084 1.14728 7.57505 1.48925 7.90714C1.83123 8.23923 2.29099 8.42208 2.76763 8.41555L33.3583 8.41555V12.0742C33.3583 12.8498 34.2945 13.2381 34.8415 12.6893L40.2996 7.23115C40.6397 6.89105 40.6397 6.34115 40.2996 6.00105L34.8415 0.542942C34.2945 -0.0058918 33.3583 0.384224 33.3583 1.15799V4.81664L2.76763 4.81664C2.52689 4.81335 2.28792 4.85839 2.0649 4.94911C1.84188 5.03984 1.63932 5.17439 1.46924 5.3448C1.29915 5.51521 1.16499 5.71803 1.0747 5.94123C0.984405 6.16442 0.939819 6.40347 0.943579 6.64421Z"
                                    fill="black"
                                  />
                                </svg>
                              </span>
                            </div>
                          </SwiperSlide>      <SwiperSlide className="p-4 bg-gray-200  bg-[#fff] border-r p-4 text-left shadow-[0px_4px_7.5px_0px_#945DFF40] rounded-[26px] z-[99] ">
                            <div className="">
                              <h4 className="text-[24px] md:text-[36px] lg:text-[44px] leading-[50px] lg:leading-[100px]">
                                Technology
                              </h4>
                              <p className="text-[16px] md:text-[18px] font-normal leading-7 text-left">
                                we propel tech advancement through bespoke
                                solutions, ensuring seamless integration and
                                innovation for businesses. Our expertise drives
                                digital transformation, providing customized
                                strategies to navigate the evolving landscape of
                                technology. We are committed to delivering
                                excellence, empowering our clients to thrive in the
                                ever-changing world of technology.
                              </p>
                              <span onClick={ handleNextSlide }>
                                <svg
                                  className="ml-auto"
                                  width="41"
                                  height="13"
                                  viewBox="0 0 41 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0.943579 6.64421C0.951029 7.12084 1.14728 7.57505 1.48925 7.90714C1.83123 8.23923 2.29099 8.42208 2.76763 8.41555L33.3583 8.41555V12.0742C33.3583 12.8498 34.2945 13.2381 34.8415 12.6893L40.2996 7.23115C40.6397 6.89105 40.6397 6.34115 40.2996 6.00105L34.8415 0.542942C34.2945 -0.0058918 33.3583 0.384224 33.3583 1.15799V4.81664L2.76763 4.81664C2.52689 4.81335 2.28792 4.85839 2.0649 4.94911C1.84188 5.03984 1.63932 5.17439 1.46924 5.3448C1.29915 5.51521 1.16499 5.71803 1.0747 5.94123C0.984405 6.16442 0.939819 6.40347 0.943579 6.64421Z"
                                    fill="black"
                                  />
                                </svg>
                              </span>
                            </div>
                          </SwiperSlide>      <SwiperSlide className="p-4 bg-gray-200  bg-[#fff] border-r p-4 text-left shadow-[0px_4px_7.5px_0px_#945DFF40] rounded-[26px] z-[99] ">
                            <div className="">
                              <h4 className="text-[24px] md:text-[36px] lg:text-[44px] leading-[50px] lg:leading-[100px]">
                                Technology
                              </h4>
                              <p className="text-[16px] md:text-[18px] font-normal leading-7 text-left">
                                we propel tech advancement through bespoke
                                solutions, ensuring seamless integration and
                                innovation for businesses. Our expertise drives
                                digital transformation, providing customized
                                strategies to navigate the evolving landscape of
                                technology. We are committed to delivering
                                excellence, empowering our clients to thrive in the
                                ever-changing world of technology.
                              </p>
                              <span onClick={ handleNextSlide }>
                                <svg
                                  className="ml-auto"
                                  width="41"
                                  height="13"
                                  viewBox="0 0 41 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0.943579 6.64421C0.951029 7.12084 1.14728 7.57505 1.48925 7.90714C1.83123 8.23923 2.29099 8.42208 2.76763 8.41555L33.3583 8.41555V12.0742C33.3583 12.8498 34.2945 13.2381 34.8415 12.6893L40.2996 7.23115C40.6397 6.89105 40.6397 6.34115 40.2996 6.00105L34.8415 0.542942C34.2945 -0.0058918 33.3583 0.384224 33.3583 1.15799V4.81664L2.76763 4.81664C2.52689 4.81335 2.28792 4.85839 2.0649 4.94911C1.84188 5.03984 1.63932 5.17439 1.46924 5.3448C1.29915 5.51521 1.16499 5.71803 1.0747 5.94123C0.984405 6.16442 0.939819 6.40347 0.943579 6.64421Z"
                                    fill="black"
                                  />
                                </svg>
                              </span>
                            </div>
                          </SwiperSlide>

                        </Swiper>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-[rgb(165_176_212_/_51%)]"></div>
              </div>
            </div>
          </section>
          {/* <video
                  className="top-0 left-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src="/videos/bgVideo.mp4"
                    // src="https://youtu.be/vwSlYG7hFk0?si=Th4STFWzm5yzMFUF"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video> */}
          <section className="px-4 relative why-choose-us relative">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center pt-10">
              <div className="rounded-lg overflow-hidden">
                {/* <Image
                  src={Gloab1}
                  alt="gloab"
                  className="max-w-[450px] h-auto"
                /> */}
                <video
                  className="absolute top-0 left-[-35%] w-full h-full z-[9]  object-contain aspect-[1] opacity-[10%]  md:opacity-[40%] "
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src="/videos/globe.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div data-aos="zoom-in" className="">
                <h3 className="text-[16px] lg:text-[24px]  gradient-text mb-2">
                  Why Choose Us
                </h3>
                <h2 className="text-[36px] lg:text-[44px]  font-bold mb-4 pb-0">
                  We prioritize our clients’ satisfaction above all else.
                </h2>
                <p className="text-gray-600 mb-6 text-[16px] lg:text-[24px] ">
                  Engitech is the partner of choice for many of the world’s
                  leading enterprises, SMEs and technology challengers. We help
                  businesses custom software development.
                </p>
              </div>
            </div>
          </section>
          <section data-aos="fade-up"
            data-aos-duration="3000" className="relative py-0 ">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover ]"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/colorwave.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="max-w-7xl mx-auto  flex flex-col md:flex-row gap-12 md:items-center  relative z-[9] md:h-[400px] p-4">
              <div className="max-w-[700px]">
                <h4 className="text-[24px] md:text-[36px] lg:text-[44px]  font-normal leading-[40px] md:leading-[62px] text-left text-[#fff]">
                  Secure the future of your company with company name{ " " }
                </h4>
              </div>
              <div>
                <button className="text-[16px] md:text-[34px] overflow-hidden leading-[25px] text-left bg-[#D9E2FF40] w-[60px] h-[60px] md:w-[100px] md:h-[100px] transition-all hover:w-[180px] md:hover:w-[310px] duration-1000 flex items-center gap-5 justify-end p-4 rounded-[100px] group">
                  <div className="flex items-center gap-4">
                    <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[#fff]">
                      Get in touch
                    </span>
                    <div>
                      <svg
                        viewBox="0 0 41 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[24px] w-[24px] md:w-[41px] md:h-[41px]"
                      >
                        <path
                          d="M0.813208 7.028C0.820658 7.50463 1.01691 7.95884 1.35888 8.29093C1.70086 8.62302 2.16062 8.80587 2.63726 8.79934L33.228 8.79934V12.458C33.228 13.2336 34.1641 13.6219 34.7111 13.073L40.1692 7.61493C40.5093 7.27484 40.5093 6.72494 40.1692 6.38484L34.7111 0.926731C34.1641 0.377897 33.228 0.768013 33.228 1.54178V5.20043L2.63726 5.20043C2.39652 5.19714 2.15755 5.24218 1.93453 5.3329C1.7115 5.42362 1.50895 5.55818 1.33886 5.72859C1.16878 5.899 1.03462 6.10182 0.944325 6.32501C0.854034 6.54821 0.809448 6.78726 0.813208 7.028Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
