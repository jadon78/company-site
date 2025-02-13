"use client";
import React, { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
import Image from "next/image";
import "../css/home.css";
import { CardContent } from "@/components/ui/card";
import BImg from "../components/assets/img/b-img.png";
import Image1 from "../components/assets/img/img-1.png";
import Painting from "../components/assets/img/painting-icon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactIcon from "../components/assets/img/react.png";
import AngularIcon from "../components/assets/img/angular.png";
import ReactNative from "../components/assets/img/android.png";
import IOSIcon from "../components/assets/img/ios.png";
import NodeJSIcon from "../components/assets/img/nodejs.png";
import DevOpsIcon from "../components/assets/img/devops.png";
import PythonIcon from "../components/assets/img/python.png";
import MongoDBIcon from "../components/assets/img/devicon_mongodb.png";
import VueIcon from "../components/assets/img/vuejs.png";


export default function Index ()
{
  const swiperRef: any = useRef( null );

  const techStacksData = [
    {
      name: "ReactJS",
      icon: ReactIcon
    },
    {
      name: "React Native",
      icon: ReactNative
    },
    {
      name: "iOS",
      icon: IOSIcon
    },
    {
      name: "Angular",
      icon: AngularIcon
    },
    {
      name: "NodeJS",
      icon: NodeJSIcon
    },
    {
      name: "Cloud & DevOps",
      icon: DevOpsIcon
    },
    {
      name: "Python",
      icon: PythonIcon
    },
    {
      name: "MongoDB",
      icon: MongoDBIcon
    },
    {
      name: "Vue.js",
      icon: VueIcon
    },
  ]

  const handleNextSlide = () => {
    if (swiperRef.current) {
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
          <section className="relative h-[500px] md:h-[700px] flex items-center justify-center text-center text-white p-0 overflow-hidden">
            <svg className="absolute bottom-[0] md:bottom-[-100px] w-full left-0 z-[1] "
              version="1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 1600 900"
              preserveAspectRatio="xMidYMax slice"
            // className="w-full h-full"
            >
              <defs>
                <linearGradient id="bg">
                  <stop offset="0%" stopColor="rgba(255, 255, 255, 0.8)" />
                  <stop offset="50%" stopColor="rgba(255, 255, 255, 1)" />
                  <stop offset="100%" stopColor="rgba(255, 255, 255, 0.6)" />
                </linearGradient>
                <path
                  id="wave"
                  fill="url(#bg)"
                  d="M-363.852,502.589c0,0,236.988-41.997,505.475,0s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
                />
              </defs>
              <g>
                <use xlinkHref="#wave" opacity="0.8">
                  <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="translate"
                    dur="4s"
                    calcMode="spline"
                    values="270 230; -334 180; 270 230"
                    keyTimes="0; .5; 1"
                    keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                    repeatCount="indefinite"
                  />
                </use>
                <use xlinkHref="#wave" opacity="0.7">
                  <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="translate"
                    dur="8s"
                    calcMode="spline"
                    values="-270 230;243 220;-270 230"
                    keyTimes="0; .6; 1"
                    keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                    repeatCount="indefinite"
                  />
                </use>
                <use xlinkHref="#wave" opacity="0.9">
                  <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="translate"
                    dur="6s"
                    calcMode="spline"
                    values="0 230;-140 200;0 230"
                    keyTimes="0; .4; 1"
                    keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                    repeatCount="indefinite"
                  />
                </use>
              </g>
            </svg>

            <div className="bg-gif-background bg-cover bg-center w-full h-full flex ">
              <div className="absolute inset-0 bg-cover bg-center">
                <div className="absolute inset-0 bg-black/60" /> 
              </div>
              <div className="relative z-10 max-w-[860px] mx-auto px-4 m-auto">
                <h1 className="text-[36px] md:text-[44px] md:text-[56px] lg:text-[72px]  font-[700] leading-[40px]  md:leading-[72px]  lg:leading-[95px] md:text-[72px] font-bold mb-0 text-white">
                  DISCOVER A WORLD OF OPPORTUNITIES
                </h1>
                <p className=" text-[16px] md:text-[22px] mb-8 text-white text-center">
                  We empower a diverse IT service ecosystem where strong
                  individuals are united by a clear common purpose. To deliver
                  excellence and high level of customer satisfaction.
                </p>
              </div>
              {/* <Image
                alt=""
                src={ WaveImg }
                className="absolute bottom-[-55px] w-full left-0"
              /> */}
            </div>
          </section>
          <div className=" max-w-[1100px] mx-auto text-center mt-[-80px] md:mt-[-130px] p-0 w-[95%] lg:w-full">
            <div data-aos="fade-up" className="custom-counter relative  z-[8]  grid grid-cols-4 md:grid-cols-4 bg-[#fff] text-[#000] rounded-[16px] md:p-8   shadow-[0px_4px_17px_0px_#00000040]">
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
            <video className="absolute w-full object-cover z-[-1] h-full top-0 sm:rotate-[70deg]  opacity-[8%] grayscale-[1] left-[0] sm:left-[-40%]"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                src="/videos/dotswave.mp4"
                    // src="/videos/dots.webm"
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
                  className="max-w-[450px] h-auto mx-auto w-full rounded-[50%] border-[5px] md:border-[0px] border-solid border-[#1e96d3]"
                />
              </div>
              <div data-aos="fade-left"  className="">
                <h3 className="text-[24px]  gradient-text mb-2">
                  Our Mission & Vision
                </h3>
                <h2 className="text-[24px] md:text-[36px] lg:text-[44px]  font-bold mb-4 pb-0">
                  Achieve excellence and deliver innovative IT solutions.
                </h2>
                <p className="text-gray-600 sm:mb-6 text-[16px] lg:text-[24px] ">
                  Empower businesses with cutting-edge technology and digital
                  transformation strategies.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[14px] md:text-[20px]">
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
                  <div className="flex items-center gap-2 text-[14px] md:text-[20px]">
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
                  <div className="flex items-center gap-2 text-[14px] md:text-[20px]">
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
            <div className=" mx-auto px-2" data-aos="fade-up">

              <div>
                <Swiper
                  centeredSlides={ true }
                  navigation={ false }
                  modules={ [ Pagination, Navigation ] }
                  loop={true}
                  spaceBetween={70}
                  pagination={{ clickable: true }}
                  className="mySwiper firstslider-technology"
                  breakpoints={ {
                    640: {
                      slidesPerView: 1, 
                      spaceBetween: 40, 
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
                        <Image alt="bg" src={ BImg } className="max-w-[80px] md:max-w-[100%] ml-[0px] md:ml-[-50px] " />
                        <div>
                          <h3 className="text-[16px] md:text-[30px] font-[400] mb-2">
                            Information Technology
                          </h3>
                          <p className="text-gray-600 text-[14px] md:text-[16px] font-[400]">
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
                        <Image alt="bg" src={ BImg } className="max-w-[80px] md:max-w-[100%] ml-[0px] md:ml-[-50px]" />
                        <div>
                          <h3 className="text-[16px] md:text-[30px]  font-[400] md:mb-2">
                            Information Technology
                          </h3>
                          <p className="text-gray-600 text-[14px] md:text-[16px] font-[400]">
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
                        <Image alt="bg" src={ BImg } className="max-w-[80px] md:max-w-[100%] ml-[0px] md:ml-[-50px]" />
                        <div>
                          <h3 className="text-[16px] md:text-[30px]  font-[400] md:mb-2">
                            Information Technology
                          </h3>
                          <p className="text-gray-600 text-[14px] md:text-[16px] font-[400]">
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
                        <Image alt="bg" src={ BImg } className="max-w-[80px] md:max-w-[100%] ml-[0px] md:ml-[-50px]" />
                        <div>
                          <h3 className="text-[16px] md:text-[30px]  font-[400] md:mb-2">
                            Information Technology
                          </h3>
                          <p className="text-gray-600 text-[14px] md:text-[16px] font-[400]">
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
                        <Image alt="bg" src={ BImg } className="max-w-[80px] md:max-w-[100%] ml-[0px] md:ml-[-50px]" />
                        <div>
                          <h3 className="text-[16px] md:text-[30px]  font-[400] md:mb-2">
                            Information Technology
                          </h3>
                          <p className="text-gray-600 text-[14px] md:text-[16px] font-[400]">
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
                        <Image alt="bg" src={ BImg } className="max-w-[80px] md:max-w-[100%] ml-[0px] md:ml-[-50px]" />
                        <div>
                          <h3 className="text-[16px] md:text-[30px]  font-[400] md:mb-2">
                            Information Technology
                          </h3>
                          <p className="text-gray-600 text-[14px] md:text-[16px] font-[400]">
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
                    <Image alt="bg" src={BImg} className="max-w-[80px] md:max-w-[100%] ml-[0px] md:ml-[-50px]" />
                    <div>
                      <h3 className="text-[16px] md:text-[30px]  font-[400] md:mb-2">
                        Information Technology
                      </h3>
                      <p className="text-gray-600 text-[14px] md:text-[16px] font-[400]">
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
                    <Image alt="bg" src={BImg} className="max-w-[80px] md:max-w-[100%] ml-[0px] md:ml-[-50px]" />
                    <div>
                      <h3 className="text-[16px] md:text-[30px]  font-[400] md:mb-2">
                        Information Technology
                      </h3>
                      <p className="text-gray-600 text-[14px] md:text-[16px] font-[400]">
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
                    <Image alt="bg" src={BImg} className="max-w-[80px] md:max-w-[100%] ml-[0px] md:ml-[-50px]" />
                    <div>
                      <h3 className="text-[16px] md:text-[30px]  font-[400] md:mb-2">
                        Information Technology
                      </h3>
                      <p className="text-gray-600 text-[14px] md:text-[16px] font-[400]">
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
          <div className=" ourtechnoloysection bg-cover bg-center w-full h-full relative overflow-hidden mt-8">
            <div className="bg-[#E9E9E9B2] py-16 ">
              <div className="max-w-[1600px] mx-auto">
                <div className="w-[95%] mx-auto p-2 md:px-4 lg:px-8">
                  <div className="grid grid-cols-1 gap-12 md:grid-cols-2 align-items-center ">
                    <div data-aos="fade-right" className="text-left">
                      <h2 className="text-[16px] md:text-[24px]  text-[#000]">
                        Technology Stack
                      </h2>
                      <h2 className="text-[24px] md:text-[36px] lg:text-[44px]  font-bold text-left md:mb-6">
                        Empower Your Business with Cutting-Edge Technologies
                      </h2>
                      <p className="text-left text-gray-600 sm:mb-8">
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
                              fill="#1E96D3"
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
                              fill="#1E96D3"
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
                              fill="#1E96D3"
                            />
                          </svg>
                          Cross-Platform Mobile Apps
                        </li>
                      </ul>
                    </div>

                    <div data-aos="fade-left" className="flex gap-[20px] md:gap-[41px] flex-wrap justify-center">
                      {techStacksData.map((tech, index) => (
                      <div className="flex flex-col justify-between py-4 items-center w-[150px] md:w-[170px] h-40 bg-[#F4F2ED] hover:bg-[#1E96D3] hover:text-[#fff]  rounded-[10px] text-center ">
                        <Image alt={tech.name} src={tech.icon} className="mx-auto"/>
                        {tech.name}
                      </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="services-page px-2">
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
              <div className="relative sm:py-20 w-full overflow-hidden">
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
                  <div className="md:flex justify-between w-full items-center md:px-4">
                    <div data-aos="fade-right" className="md:w-[45%] text-left">
                      <h4 className="text-[44px] lg:text-[75px] pb-[50px] lg:leading-[112px] leading-[62px]">
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
                              <p className="text-[16px] md:text-[18px] font-normal md:leading-7 text-left">
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
                              <p className="text-[16px] md:text-[18px] font-normal md:leading-7 text-left">
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
                              <p className="text-[16px] md:text-[18px] font-normal md:leading-7 text-left">
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
                              <p className="text-[16px] md:text-[18px] font-normal md:leading-7 text-left">
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
                              <p className="text-[16px] md:text-[18px] font-normal md:leading-7 text-left">
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
                              <p className="text-[16px] md:text-[18px] font-normal md:leading-7 text-left">
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
                              <p className="text-[16px] md:text-[18px] font-normal md:leading-7 text-left">
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
                              <p className="text-[16px] md:text-[18px] font-normal md:leading-7 text-left">
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
                <h2 className="text-[30px] lg:text-[44px]  font-bold mb-4 pb-0">
                  We prioritize our clients’ satisfaction above all else.
                </h2>
                <p className="text-gray-600 sm:mb-6 text-[16px] lg:text-[24px] ">
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
