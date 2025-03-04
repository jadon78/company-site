"use client";
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation';
import Image from "next/image";
import Mobileapp from '../../../components/assets/image/mobile-app.webp'
import WaveCanvas from '@/app/waveflow/page';
import '../../../css/home.css';
import Rectanglecurve1 from '../../../components/assets/img/curvecard.png';
import Thumb from '../../../components/assets/img/thumb.png';
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";
import TechnologySlider from '../swiper';
const ServiceInformation = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,   
      easing: "ease-in-out",
    });
  }, []);
  const { slug } = useParams();
  const steps = [
    {
      id: "01",
      title: "Discovery and Planning",
      description: "We understand your goals and outline the project scope and features.",
    },
    {
      id: "02",
      title: "Design and Prototyping",
      description: "We create wireframes and prototypes to visualize the user experience.",
    },
    {
      id: "03",
      title: "Development and Testing",
      description: "We develop the solution and perform rigorous testing for quality assurance.",
    },
    {
      id: "04",
      title: "Development and Testing",
      description: "We develop the solution and perform rigorous testing for quality assurance.",
    },
    {
      id: "05",
      title: "Development and Testing",
      description: "We develop the solution and perform rigorous testing for quality assurance.",
    },
    {
      id: "06",
      title: "Development and Testing",
      description: "We develop the solution and perform rigorous testing for quality assurance.",
    },
  ];
  return (
    <div className="mt-[90px]"> 
      <section className="relative h-[300px] sm:h-[500px] md:h-[700px] flex items-center justify-center text-center text-white p-0 overflow-hidden">
        <svg className="absolute bottom-[0] md:bottom-[-100px] w-full left-0 "
          version="1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <linearGradient id="bg">
              <stop offset="50%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
            <path
              id="wave"
              fill="url(#bg)"
              d="M-363.852,502.589c0,0,236.988-41.997,505.475,0s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
            />
          </defs>
          <g>
            <use xlinkHref="#wave" opacity="1">
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

          </g>
        </svg>
        <WaveCanvas />
        <div className="bg-about-background bg-cover bg-center w-full h-full flex ">
          <div className="absolute inset-0 bg-cover bg-center">
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="relative z-10 max-w-[860px] mx-auto px-4 m-auto">
            <h1 className="mb-[80px] text-[30px] font-[700] leading-[50px] md:leading-[80px] md:text-[72px] font-bold  text-white capitalize">
              {slug}
            </h1>
          </div>

        </div>
      </section>
      <section className="py-20 px-4 relative bg-[#fff] overflow-hidden">
        <div className="max-w-[1400px] md:px-[16px] mx-auto grid md:grid-cols-2 gap-12 items-center sm:pt-10">
          <div data-aos="fade-right" className="">
            <h3 className="text-[16px] md:text-[24px] gradient-text mb-2 capitalize">
              {slug}
            </h3>
            <h2 className="text-[22px] sm:text-[24px] md:text-[44px] font-bold mb-4 pb-0">
              Our Process & Approch
            </h2>
            <p className="text-gray-600 md:mb-6 text-[16px] md:text-[24px]">
              Upon conducting a detailed analysis on the target audience and the brand values, targeted users based on specific keywords and interests of users on google. Upon analysis, implemented intent based marketing through google ads so as to increase visibility and generate quality leads, that would eventually yield a high conversion rate.
            </p>
            <ul className="about-us-point flex  lg:flex-col flex-col md:gap-8 gap-4">
              <li className="relative flex items-center text-[16px] md:text-[24px] gap-2 text-[#000]">Marketing Strategy</li>
              <li className="relative flex items-center text-[16px] md:text-[24px] gap-2 text-[#000]">Technology Process</li>
            </ul>
            <button className="mt-[30px] text-[16px] lg:text-[34px] overflow-hidden leading-[25px] text-left bg-[#96DCFF] w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] transition-all hover:w-[230px] lg:hover:w-[340px] duration-1000 flex items-center gap-5 justify-end p-4 rounded-[100px] group">
                <div className="flex items-center gap-[50px]">
                  <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[#fff]">
                    Get in touch
                  </span>
                  <div>
                    <svg
                      width="41"
                      height="14"
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
            {/* <button className=" mt-4 text-[16px] md:text-[34px] overflow-hidden leading-[25px] text-left bg-[#1e96d3] w-[60px] h-[60px] md:w-[85px] md:h-[85px] transition-all hover:w-[180px] md:hover:w-[310px] duration-1000 flex items-center gap-5 justify-end p-4 rounded-[100px] group">
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
            </button> */}

          </div>
          <div data-aos="fade-left" className="aboutimg-box relative text-center h-[100%] flex items-center justify-center overflow-hidden">
            <div className="relative z-[99]">
              <Image
                src={Mobileapp}
                alt="Team meeting"
                className="w-[70%] lg:w-[100%] max-w-[450px] h-auto mx-auto scale-150"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#A6D1E7] relative">
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
        <div className="mx-auto px- relative z-[99] py-4">
          <div>
            <h4 className="text-center mb-4 p-0 gradient-text text:[16px] md:text-[24px]">Work Process</h4>
            <h4 className="text-center pb-4 p-0 text-[24px] md:text-[44px] leading-[60px]">Our Mobile App Development Process</h4>
          </div>
          <div className=" mt-[40px] lg:mt-[80px]">
            {/* <div className="bg-[#fff] rounded-[16px] p-4">
                <div className="flex gap-4 items-center">
                  <span className="text-[50px] font-medium text-transparent text-border-bg">01</span>
                  <h5 className="text-[20px] font-medium">Discovery and
                  Planning</h5>
                  </div>
                  <p className="text-[14px]">We understand your goals and outline the project scope and features.</p>
              </div> */}
            <div className="workprocess px-4 ">
              <div className=" max-w-[1400px] mx-auto grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[100px_50px]">
                {steps.map((step, index) => (
                  <div data-aos="zoom-in" key={index} className="relative bg-[#fff] rounded-[16px] p-4 bisiness-domainsname">

                    <div className="scrolldown-btn">
                      <svg width="50px" height="80px" viewBox="0 0 50 80" xmlns="http://www.w3.org/2000/svg">
                        <path className="first-path" d="M24.752,79.182c-0.397,0-0.752-0.154-1.06-0.463L2.207,57.234c-0.306-0.305-0.458-0.656-0.458-1.057s0.152-0.752,0.458-1.059l2.305-2.305c0.309-0.309,0.663-0.461,1.06-0.461c0.398,0,0.752,0.152,1.061,0.461l18.119,18.119l18.122-18.119c0.306-0.309,0.657-0.461,1.057-0.461c0.402,0,0.753,0.152,1.059,0.461l2.306,2.305c0.308,0.307,0.461,0.658,0.461,1.059s-0.153,0.752-0.461,1.057L25.813,78.719C25.504,79.027,25.15,79.182,24.752,79.182z" />
                        <path className="second-path" d="M24.752,58.25c-0.397,0-0.752-0.154-1.06-0.463L2.207,36.303c-0.306-0.304-0.458-0.655-0.458-1.057c0-0.4,0.152-0.752,0.458-1.058l2.305-2.305c0.309-0.308,0.663-0.461,1.06-0.461c0.398,0,0.752,0.153,1.061,0.461l18.119,18.12l18.122-18.12c0.306-0.308,0.657-0.461,1.057-0.461c0.402,0,0.753,0.153,1.059,0.461l2.306,2.305c0.308,0.306,0.461,0.657,0.461,1.058c0,0.401-0.153,0.753-0.461,1.057L25.813,57.787C25.504,58.096,25.15,58.25,24.752,58.25z" />
                      </svg>
                    </div>

                    <div className="z-[99] relative ">
                      <div className=" flex gap-4 items-center pb-[20px]">
                        <span className="text-[50px] font-medium text-transparent text-border-bg">
                          {step.id}
                        </span>
                        <h5 className="text-[20px] font-medium pb-0">{step.title}</h5>
                      </div>
                      <p className="text-[14px]">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#fff] relative p-0 technology-use overflow-hidden">
        <video className="z-[1] absolute w-full object-cover z-[-1] h-full top-0 md:rotate-[40deg]  opacity-[8%] grayscale-[1] right-0 md:right-[-40%] bottom-4"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="/videos/dotswave.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className='relative z-[99] py-4'>
          <div className="text-center max-w-[580px] mx-auto  lg:mt-[80px]">
            <h5 className="text-[24px] md:text-[44px] ">Technologies We Use</h5>
            <p className="text-[14px] text-center">Amet minim mollit non deserunt ullamco est sit aliqua dolor Velit officia est
              do amet sint Velit officia consequat duis enim.</p>
          </div>
          <div className='lg:hidden'><TechnologySlider/></div>
          <div className='hidden lg:block'>
          <div className="max-w-[1400px] mx-auto py-10 boxshadowdesign">
            <div className="grid gap-16 sm:gap-28 px-4 lg:gap-0 grid-cols-1 lg:grid-cols-3  mx-auto w-full  overflow-hidden mb-[-40px] justify-center pt-[80px] relative shadowbottom">
              <div data-aos="zoom-in" className="our-technology max-w-[540px] mx-auto lg:mx-0  px-0  card-box relative text-center py-4">
                <Image src={Rectanglecurve1} alt="" className="max-h-[340px] absolute text-transparent scale-[110%]  " />
                <div className="relative z-[99]  px-4 md:px-8">
                  <div className="bg-[#0ECFDB] rounded-[23px] mt-[-10] inline-block px-4 py-3">
                    <svg width="39" height="65" viewBox="0 0 39 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5102 0.97998H31.977C33.8333 0.97998 35.5359 1.72107 36.7505 2.89447C37.981 4.08846 38.7235 5.71989 38.7235 7.52631V57.6685C38.7235 59.4698 37.9598 61.1218 36.7505 62.3003C35.52 63.4943 33.8386 64.2148 31.977 64.2148H7.5102C5.65385 64.2148 3.9513 63.4737 2.73671 62.3003C1.50621 61.1064 0.763672 59.4749 0.763672 57.6685V7.52631C0.763672 5.72504 1.52743 4.07302 2.73671 2.89447C3.97252 1.70049 5.65385 0.97998 7.5102 0.97998ZM6.42821 15.0299H33.0643V27.6388H6.42821V15.0299ZM20.9184 47.7101H33.0696V50.1649H20.9184V47.7101ZM6.42821 30.9685H17.6936V35.9864H6.42821V30.9685ZM20.9184 30.9583H33.0696V35.9915H20.9184V30.9583ZM20.7381 39.3367H32.8892V44.37H20.7381V39.3367ZM6.60324 39.3419H17.8687V44.3597H6.60324V39.3419ZM6.42821 47.7152H17.6936V50.1649H6.42821V47.7152ZM14.2037 23.6297H12.0397L11.7268 24.7567H9.78026L12.1087 17.9068H14.1984L16.5162 24.7567H14.5166L14.2037 23.6297ZM13.8006 22.1475L13.127 19.6875L12.4481 22.1475H13.8006ZM17.4444 17.9119H20.2819C20.8388 17.9119 21.295 17.9943 21.6397 18.1641C21.9845 18.3339 22.2709 18.5758 22.4937 18.8897C22.7164 19.2037 22.8808 19.5691 22.9816 19.9859C23.0824 20.4028 23.1354 20.8454 23.1354 21.3137C23.1354 22.0445 23.0612 22.6107 22.9074 23.0172C22.7588 23.4187 22.5467 23.7583 22.2815 24.0311C22.0163 24.3038 21.7299 24.484 21.4223 24.5766C21.0033 24.7001 20.6214 24.7619 20.2819 24.7619H17.4444V17.9119ZM19.3538 19.461V23.2025H19.8205C20.2183 23.2025 20.5047 23.151 20.6744 23.0533C20.8441 22.9555 20.9767 22.7856 21.0722 22.5386C21.1677 22.2916 21.2154 21.8953 21.2154 21.3498C21.2154 20.6241 21.1093 20.13 20.8919 19.8624C20.6797 19.5948 20.3244 19.461 19.8258 19.461H19.3538ZM24.1113 22.4974L25.9253 22.3739C25.9624 22.6981 26.0472 22.9503 26.1639 23.115C26.3602 23.3929 26.6413 23.5319 27.0072 23.5319C27.2777 23.5319 27.4899 23.4598 27.6384 23.3209C27.7869 23.1768 27.8612 23.0172 27.8612 22.8268C27.8612 22.6518 27.7922 22.4923 27.6543 22.3482C27.5164 22.2092 27.1876 22.0754 26.6784 21.9519C25.8404 21.746 25.2464 21.4681 24.8857 21.1233C24.525 20.7785 24.3447 20.3411 24.3447 19.8058C24.3447 19.4559 24.4349 19.1213 24.6205 18.8125C24.8061 18.4986 25.0819 18.2516 25.4532 18.0766C25.8245 17.8965 26.3284 17.809 26.9754 17.809C27.7657 17.809 28.365 17.9737 28.7787 18.2979C29.1924 18.6221 29.4417 19.1419 29.516 19.8521L27.718 19.9705C27.6702 19.6617 27.5695 19.4353 27.4156 19.2912C27.2618 19.1471 27.0497 19.0802 26.7792 19.0802C26.5564 19.0802 26.3867 19.1316 26.2753 19.2346C26.1639 19.3375 26.1056 19.4662 26.1056 19.6154C26.1056 19.7235 26.1533 19.8213 26.2435 19.9087C26.3337 20.0014 26.5458 20.0837 26.88 20.1609C27.7127 20.3616 28.312 20.5624 28.6727 20.7682C29.0333 20.9741 29.2985 21.2262 29.4629 21.5247C29.6274 21.8284 29.7069 22.1629 29.7069 22.5386C29.7069 22.9761 29.5955 23.3826 29.3781 23.7532C29.1553 24.1237 28.853 24.4068 28.4605 24.5972C28.068 24.7876 27.5748 24.8854 26.9754 24.8854C25.9253 24.8854 25.1986 24.659 24.7902 24.2112C24.3924 23.7532 24.1644 23.1871 24.1113 22.4974ZM19.7356 56.1709C21.2632 56.1709 22.5149 57.3649 22.5149 58.8676C22.5149 60.3498 21.2844 61.5644 19.7356 61.5644C18.2081 61.5644 16.9564 60.3704 16.9564 58.8676C16.9617 57.3855 18.1922 56.1709 19.7356 56.1709ZM2.67837 54.1226H36.7929V11.134H2.67837V54.1226Z" fill="white" />
                    </svg>
                  </div>
                <div className='w-[90%] mx-auto mt-4'>
                <h4 className="text-[16px] sm:text-[20px] lg:text-[26px] mb-4">Front-End Frameworks</h4>
                  <p className="text-center text-[12px] md:text-[14px]">Amet minim mollit non deserunt ullamco est sit aliqua dolor Velit officia est do amet sint
                    Velit officia consequat duis enim.</p>
                </div>
                </div>
              </div>
              <div data-aos="zoom-in" className="our-technology max-w-[540px] mx-auto lg:mx-0 px-0  card-box relative text-center py-4 z-[999] sm:top-[10px] ">
                <Image src={Rectanglecurve1} alt="" className="max-h-[340px] absolute text-transparent scale-[110%] lg:scale-[134%] mt-[-40px] rectanglecurve1  " />
                <div className="relative z-[99]  px-4 md:px-8 mt-[-60px] lg:scale-[115%]">
                  <div className="bg-[#1E96D3] rounded-[23px] mt-[-10] inline-block px-8 py-4">
                  <svg width="41" height="68" viewBox="0 0 41 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <g clip-path="url(#clip0_1191_3584)">
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.86736 0.299805H32.8162C34.8971 0.299805 36.7957 1.1161 38.164 2.42547C39.5323 3.74031 40.3818 5.56466 40.3818 7.56432V60.3498C40.3818 62.3495 39.5323 64.1738 38.164 65.4887C36.8014 66.798 34.8971 67.6143 32.8162 67.6143H7.86736C5.78639 67.6143 3.88787 66.798 2.51956 65.4887C1.15125 64.1738 0.301758 62.3495 0.301758 60.3498V7.56432C0.301758 5.56466 1.15125 3.74031 2.51956 2.42547C3.88787 1.1161 5.78639 0.299805 7.86736 0.299805ZM38.5574 7.79989V57.638C25.8834 57.638 14.7887 57.6325 2.12047 57.6325V7.79989H38.5574ZM15.3874 61.8838H26.0887C26.4193 61.8838 26.693 62.1468 26.693 62.4645V62.7604C26.693 63.0781 26.4193 63.3411 26.0887 63.3411H15.3874C15.0567 63.3411 14.783 63.0781 14.783 62.7604V62.4645C14.783 62.1468 15.0567 61.8838 15.3874 61.8838Z" fill="white"/>
                                          <path d="M8.77984 42.2051C9.54952 42.2051 9.95431 42.857 9.95431 43.4158C9.95431 44.0349 9.4754 44.6211 8.77984 44.6211C8.19831 44.6211 7.61678 44.1719 7.61678 43.4049C7.62248 42.7146 8.11849 42.2051 8.77984 42.2051ZM8.62021 41.4326C7.6852 41.4326 6.72168 42.1558 6.72168 43.4158C6.72168 44.5718 7.57117 45.3881 8.62021 45.3881C9.4868 45.3881 9.87449 44.8238 9.87449 44.8238V45.0704C9.87449 45.1854 9.98851 45.3169 10.131 45.3169H10.7582V41.5203H9.87449V42.0024C9.88019 41.9969 9.4868 41.4326 8.62021 41.4326Z" fill="white"/>
                                          <path d="M11.989 45.3113C11.8521 45.3113 11.7324 45.2181 11.7324 45.0647V41.5147H12.6161V41.9858C12.8157 41.6954 13.2091 41.427 13.8077 41.427C14.7883 41.427 15.3128 42.1776 15.3128 42.8788V45.3058H14.6971C14.5375 45.3058 14.4291 45.1743 14.4291 45.0483V43.0651C14.4291 42.6761 14.1783 42.205 13.6081 42.205C12.9867 42.205 12.6218 42.7692 12.6218 43.2952V45.3058H11.989V45.3113Z" fill="white"/>
                                          <path d="M18.0388 42.205C18.8085 42.205 19.2133 42.8569 19.2133 43.4158C19.2133 44.0348 18.7343 44.621 18.0388 44.621C17.4573 44.621 16.8757 44.1718 16.8757 43.4048C16.8814 42.7145 17.3831 42.205 18.0388 42.205ZM17.8849 41.4325C16.9498 41.4325 15.9863 42.1557 15.9863 43.4158C15.9863 44.5717 16.8358 45.388 17.8849 45.388C18.7515 45.388 19.1391 44.8237 19.1391 44.8237V45.0703C19.1391 45.1853 19.2532 45.3168 19.3957 45.3168H20.0228V39.6191H19.1391V41.9968C19.1391 41.9968 18.7515 41.4325 17.8849 41.4325Z" fill="white"/>
                                          <path d="M21.2487 45.3113C21.1119 45.3113 20.9922 45.2181 20.9922 45.0647V41.5147H21.8759V42.1502C22.0298 41.7941 22.3548 41.4763 22.9363 41.4763C23.096 41.4763 23.2499 41.5037 23.2499 41.5037V42.3803C23.2499 42.3803 23.0618 42.3091 22.8337 42.3091C22.2123 42.3091 21.8759 42.8733 21.8759 43.3993V45.3113H21.2487Z" fill="white"/>
                                          <path d="M28.6089 45.3113C28.4722 45.3113 28.3525 45.2181 28.3525 45.0647V41.5146H29.2357V45.3113H28.6089Z" fill="white"/>
                                          <path d="M31.9839 42.205C32.7536 42.205 33.1584 42.8569 33.1584 43.4158C33.1584 44.0348 32.6795 44.621 31.9839 44.621C31.4024 44.621 30.8209 44.1718 30.8209 43.4048C30.8266 42.7145 31.3226 42.205 31.9839 42.205ZM31.8243 41.4325C30.8893 41.4325 29.9258 42.1557 29.9258 43.4158C29.9258 44.5717 30.7753 45.388 31.8243 45.388C32.6966 45.388 33.0843 44.8237 33.0843 44.8237V45.0703C33.0843 45.1853 33.1983 45.3168 33.3408 45.3168H33.968V39.6191H33.0843V41.9968C33.0843 41.9968 32.6909 41.4325 31.8243 41.4325Z" fill="white"/>
                                          <path d="M28.7903 39.5752C29.1151 39.5752 29.3715 39.8272 29.3715 40.134C29.3715 40.4463 29.1094 40.6928 28.7903 40.6928C28.4712 40.6928 28.2091 40.4408 28.2091 40.134C28.2034 39.8272 28.4655 39.5752 28.7903 39.5752Z" fill="white"/>
                                          <path d="M25.5873 42.2215C26.2658 42.2215 26.7732 42.7475 26.7732 43.4104C26.7732 44.0842 26.2372 44.6047 25.593 44.6047C24.9944 44.6047 24.4128 44.1335 24.4128 43.4213C24.4071 42.6927 24.9602 42.2215 25.5873 42.2215ZM25.5816 41.4326C24.601 41.4326 23.5234 42.1339 23.5234 43.4104C23.5234 44.5718 24.4413 45.3881 25.5816 45.3881C26.9841 45.3881 27.6683 44.3034 27.6683 43.4158C27.6683 42.3311 26.7846 41.4326 25.5816 41.4326Z" fill="white"/>
                                          <path d="M26.5962 33.5324C25.9633 33.5324 25.4559 33.0394 25.4559 32.4367C25.4559 31.8286 25.969 31.341 26.5962 31.341C27.229 31.341 27.7364 31.8341 27.7364 32.4367C27.7421 33.0394 27.229 33.5324 26.5962 33.5324ZM14.099 33.5324C13.4661 33.5324 12.9587 33.0394 12.9587 32.4367C12.9587 31.8286 13.4718 31.341 14.099 31.341C14.7318 31.341 15.2392 31.8341 15.2392 32.4367C15.2449 33.0394 14.7318 33.5324 14.099 33.5324ZM26.9953 26.9527L29.253 23.1945C29.3784 22.9863 29.3043 22.7178 29.0876 22.5918C28.871 22.4713 28.5916 22.5425 28.4662 22.7507L26.18 26.5583C24.4354 25.7913 22.4684 25.364 20.359 25.364C18.2438 25.364 16.2825 25.7913 14.538 26.5583L12.2517 22.7507C12.1263 22.5425 11.8469 22.4658 11.6246 22.5918C11.4079 22.7124 11.3281 22.9808 11.4593 23.1945L13.717 26.9527C9.82299 28.9798 7.1833 32.7654 6.75 37.203H33.9736C33.5289 32.7709 30.8892 28.9798 26.9953 26.9527Z" fill="#32DE84"/>
                                          </g>
                                          <defs>
                                          <clipPath id="clip0_1191_3584">
                                          <rect width="40.0743" height="67.32" fill="white" transform="translate(0.307617 0.299805)"/>
                                          </clipPath>
                                          </defs>
                                          </svg>

                  </div>
                <div className='w-[90%] mx-auto mt-4 '>
                <h4 className="text-[16px] sm:text-[20px] lg:text-[30px] mb-4">Front-End Frameworks</h4>
                  <p className="text-center text-[12px] md:text-[14px]">Amet minim mollit non deserunt ullamco est sit aliqua dolor Velit officia est do amet sint
                    Velit officia consequat duis enim.</p>
                </div>
                </div>
              </div>
              <div data-aos="zoom-in" className="our-technology max-w-[540px] mx-auto lg:mx-0 px-0  card-box relative text-center py-4">
                <Image src={Rectanglecurve1} alt="" className="max-h-[340px] absolute text-transparent scale-[110%]   " />
                <div className="relative z-[99]   md:px-8 px-4">
                  <div className="bg-[#0EDB91] rounded-[23px] mt-[-10] inline-block px-4 py-3">
                  <svg width="55" height="64" viewBox="0 0 55 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.995 19.615C16.4086 19.6352 15.9688 19.7517 15.6652 19.9492C15.4924 20.0605 15.3668 20.2023 15.283 20.3745C15.194 20.5618 15.1521 20.7948 15.1573 21.0581C15.1783 21.8328 15.6024 22.8455 16.4138 24.0101L16.4243 24.0252L19.0578 28.076C20.1153 29.7014 21.22 31.3572 22.5969 32.5724C23.9215 33.7421 25.5236 34.532 27.6492 34.537C29.9475 34.5421 31.6281 33.7218 32.9946 32.4863C34.4134 31.2002 35.5338 29.4381 36.6385 27.6811L39.607 22.9569C40.1619 21.7366 40.3609 20.9213 40.2352 20.4403C40.1619 20.1568 39.8373 20.015 39.2824 19.9897C39.1672 19.9846 39.0415 19.9846 38.9211 19.9846C38.7902 19.9897 38.6489 19.9947 38.5075 20.0099C38.429 20.015 38.3505 20.0099 38.2772 19.9947C38.0154 20.0099 37.7431 19.9897 37.4657 19.9542L38.4813 15.6047C30.9423 16.7541 25.3037 11.3412 17.3405 14.5211L17.9112 19.6453C17.5761 19.6656 17.2725 19.6555 16.995 19.615ZM19.1939 50.5477H20.8745C21.9582 50.5477 22.6912 50.5984 23.0734 50.6946C23.4556 50.7908 23.7487 50.9478 23.9477 51.1705C24.1466 51.3883 24.2723 51.6364 24.3194 51.9047C24.3718 52.1782 24.3927 52.7048 24.3927 53.4997V56.4264C24.3927 57.1758 24.3561 57.6771 24.2828 57.9303C24.2095 58.1835 24.0838 58.3809 23.9006 58.5227C23.7173 58.6645 23.4974 58.7658 23.2252 58.8215C22.9582 58.8772 22.555 58.9075 22.021 58.9075H19.1886V50.5477H19.1939ZM21.4451 51.9756V57.4796C21.7645 57.4796 21.9582 57.4138 22.0315 57.2923C22.1048 57.1657 22.1415 56.8264 22.1415 56.2644V53.0136C22.1415 52.6339 22.1257 52.3908 22.1048 52.2845C22.0786 52.1782 22.0263 52.0972 21.9373 52.0516C21.8483 52.001 21.686 51.9756 21.4451 51.9756ZM25.6126 50.5477H29.3559V52.2187H27.8586V53.8137H29.2564V55.3985H27.8586V57.2366H29.5078V58.9075H25.6073V50.5477H25.6126ZM35.8584 50.5477L34.7223 58.9025H31.3192L30.0156 50.5477H32.3873C32.6543 52.8516 32.848 54.8011 32.9736 56.391C33.094 54.7808 33.2249 53.3529 33.3453 52.1022L33.4919 50.5427H35.8584V50.5477ZM17.2096 50.1021V51.6769H16.9845C16.7803 51.6769 16.6233 51.7174 16.5186 51.8035C16.4138 51.8896 16.3406 52.0161 16.2987 52.1984C16.2725 52.2946 16.262 52.5579 16.2568 52.9883C16.2515 53.4187 16.2044 53.763 16.1154 54.0112C16.0474 54.2036 15.9531 54.3555 15.8327 54.4719C15.7385 54.558 15.5866 54.6441 15.372 54.7352C15.5919 54.8365 15.7594 54.9378 15.8641 55.0492C15.9741 55.1555 16.0631 55.3226 16.1416 55.5403C16.2201 55.7581 16.2568 56.1125 16.2568 56.5935C16.2568 57.029 16.283 57.3075 16.3248 57.4391C16.372 57.5708 16.4453 57.667 16.5552 57.7176C16.6651 57.7733 16.8798 57.7986 17.2044 57.7986V59.3531H16.5814C15.9374 59.3531 15.4767 59.2822 15.2045 59.1455C14.9322 59.0088 14.7385 58.8113 14.6233 58.548C14.5081 58.2847 14.4505 57.8948 14.4505 57.3682C14.4505 57.2518 14.4558 57.1353 14.461 57.0239C14.4663 56.953 14.4663 56.8821 14.4663 56.8062C14.4663 56.4315 14.4296 56.1682 14.3615 56.0112C14.2935 55.8543 14.194 55.7378 14.0579 55.6669C13.927 55.596 13.7385 55.5606 13.4872 55.5505V53.9048C13.7438 53.9048 13.9375 53.8643 14.0631 53.7884C14.1888 53.7124 14.2882 53.5909 14.3563 53.4339C14.4244 53.277 14.4558 53.0035 14.4558 52.6288V52.4668C14.4505 52.3908 14.4505 52.32 14.4505 52.244C14.4505 51.6769 14.4977 51.2617 14.5971 51.0136C14.6966 50.7604 14.8275 50.5629 15.0003 50.4313C15.1312 50.3249 15.3039 50.249 15.5291 50.1984C15.8222 50.1325 16.1573 50.0971 16.5343 50.0971H17.2096V50.1021ZM37.8426 50.1021V51.6769H38.0625C38.2667 51.6769 38.4237 51.7174 38.5285 51.8035C38.6332 51.8896 38.7065 52.0161 38.7484 52.1984C38.7745 52.2946 38.785 52.5579 38.7902 52.9883C38.7955 53.4187 38.8426 53.763 38.9316 54.0112C38.9997 54.2036 39.0939 54.3555 39.2143 54.4719C39.3085 54.558 39.4604 54.6441 39.675 54.7352C39.4551 54.8365 39.2876 54.9378 39.1829 55.0492C39.0729 55.1555 38.9839 55.3226 38.9054 55.5403C38.8269 55.7581 38.7902 56.1125 38.7902 56.5935C38.7902 57.029 38.7693 57.3075 38.7222 57.4391C38.6751 57.5708 38.6018 57.667 38.4918 57.7176C38.3819 57.7733 38.1672 57.7986 37.8426 57.7986V59.3531H38.4656C39.1148 59.3531 39.5703 59.2822 39.8426 59.1455C40.1148 59.0088 40.3085 58.8113 40.4237 58.548C40.5389 58.2847 40.5965 57.8948 40.5965 57.3682C40.5965 57.2518 40.5912 57.1353 40.586 57.0239C40.5808 56.953 40.5808 56.8821 40.5808 56.8062C40.5808 56.4315 40.6174 56.1682 40.6855 56.0112C40.7535 55.8543 40.853 55.7378 40.9891 55.6669C41.12 55.596 41.3085 55.5606 41.5598 55.5505V53.9048C41.3033 53.9048 41.1095 53.8643 40.9839 53.7884C40.853 53.7124 40.7588 53.5909 40.6907 53.4339C40.6227 53.277 40.5912 53.0035 40.5912 52.6288V52.4668C40.5965 52.3908 40.5965 52.32 40.5965 52.244C40.5965 51.6769 40.5494 51.2617 40.4499 51.0136C40.3504 50.7604 40.2143 50.5629 40.0467 50.4313C39.9159 50.3249 39.7431 50.249 39.518 50.1984C39.2248 50.1325 38.8897 50.0971 38.5128 50.0971H37.8426V50.1021ZM40.2771 18.6985C40.3871 14.2578 41.23 9.77156 37.963 6.13092C35.6385 3.53842 29.5758 1.09276 25.644 0.88516C23.9843 0.799081 24.6178 2.10546 22.9791 2.65231C19.597 3.78147 16.639 6.18156 15.6704 9.51332C15.5133 10.0602 15.4034 10.6121 15.3458 11.164C15.2359 13.4831 15.2987 16.2477 15.4715 18.4453C15.2359 18.5314 15.0212 18.6377 14.8327 18.7592C14.4244 19.0225 14.1259 19.3668 13.927 19.777C13.7385 20.1669 13.6548 20.6125 13.6705 21.1036C13.7019 22.1467 14.1992 23.4126 15.1626 24.805L17.796 28.8558C18.7175 30.2736 19.6808 31.7167 20.8535 32.937C20.7959 33.099 20.8588 32.9218 20.8221 33.0281C20.4975 33.98 19.953 35.57 19.4661 36.4611C16.2673 38.4865 8.94284 39.0081 6.09998 40.5423C-1.65898 44.7247 1.14199 53.3478 1.04775 60.4671C1.19958 62.057 2.13149 62.9684 3.96391 63.1052H5.94815L3.77543 47.1552C3.6079 45.9147 4.51887 44.8969 5.63926 44.8969H15.8327H27.8638C27.4502 42.3145 20.5446 39.8233 20.2986 37.8789C20.3666 37.8333 20.4295 37.7726 20.4818 37.7017C21.0682 36.9118 21.6755 35.2662 22.0943 34.0661C23.576 35.2257 25.356 35.9852 27.6439 35.9902C29.6962 35.9953 31.3349 35.4434 32.7119 34.5471C32.848 34.7345 32.9841 34.932 33.1307 35.1396C33.7851 36.0713 34.5495 37.1498 35.2615 37.9194C35.1097 40.1322 29.1203 40.1575 28.4397 44.8969H49.7638C50.8842 44.8969 51.8004 45.9147 51.6276 47.1552L49.4549 63.1052H51.4391C53.2715 62.9684 54.2034 62.057 54.3605 60.4671C53.8422 53.7377 56.4495 44.3905 49.3083 40.5423C46.5021 39.0283 39.3295 38.5017 36.0678 36.5422C35.5181 35.8839 34.9265 35.0434 34.4029 34.3041C34.2354 34.0611 34.0731 33.8332 33.9212 33.6256L33.9998 33.5598C35.5652 32.142 36.7432 30.2938 37.9002 28.4507L40.9054 23.6657C40.9211 23.6404 40.9368 23.61 40.9525 23.5847C41.654 22.0404 41.8844 20.9061 41.675 20.1061C41.476 19.3618 41.0153 18.9162 40.2771 18.6985Z" fill="white"/>
                      </svg>

                  </div>
                 <div className='w-[90%] mx-auto mt-4'>
                 <h4 className="text-[16px] sm:text-[20px] lg:text-[26px] mb-4">Front-End Frameworks</h4>
                  <p className="text-center text-[12px] md:text-[14px]">Amet minim mollit non deserunt ullamco est sit aliqua dolor Velit officia est do amet sint
                    Velit officia consequat duis enim.</p>
                 </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          
          
        </div>
      </section>
      <section>
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="max-w-[900px]">
            <h4 className="text-[24px] md:text-[44px] leading:[40px] md:leading-[60px]">Our Project</h4>
            <p className='text-[14px] md:text-[16px] mt-4 md:mt-0'>I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projectsI have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projects</p>
          </div>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div data-aos="zoom-in" className="max-w-[300px] mx-auto rounded-[8px] border border-solid border-[#1E96D3] p-2">
              <Image src={Thumb} alt="" className="mb-4" />
              <h4 className="text-[#1E96D3] text-[16px] sm:text-[24px]">TWINDER</h4>
              <p className="text-[16px]">A live Geolocation app for finding tweets and twitter users around you.</p>
              <div className="flex gap-4">
                <button className="bg-[#1E96D3] rounded-[8px] border border-solid border-[#1E96D3] text-[#fff] p-2 m-0">View Live</button>
                <button className="border rounded-[8px] border-solid border-[#1E96D3] text-[#1E96D3] p-2 m-0">Github Repo</button>
              </div>
            </div>
            <div data-aos="zoom-in" className="max-w-[300px] mx-auto rounded-[8px] border border-solid border-[#1E96D3] p-2">
              <Image data-aos="zoom-in" src={Thumb} alt="" className="mb-4" />
              <h4 className="text-[#1E96D3] text-[16px] sm:text-[24px]">TWINDER</h4>
              <p className="text-[16px]">A live Geolocation app for finding tweets and twitter users around you.</p>
              <div className="flex gap-4">
                <button className="bg-[#1E96D3] rounded-[8px] border border-solid border-[#1E96D3] text-[#fff] p-2 m-0">View Live</button>
                <button className="border rounded-[8px] border-solid border-[#1E96D3] text-[#1E96D3] p-2 m-0">Github Repo</button>
              </div>
            </div>
            <div data-aos="zoom-in" className="max-w-[300px] mx-auto rounded-[8px] border border-solid border-[#1E96D3] p-2">
              <Image src={Thumb} alt="" className="mb-4" />
              <h4 className="text-[#1E96D3] text-[16px] sm:text-[24px]">TWINDER</h4>
              <p className="text-[16px]">A live Geolocation app for finding tweets and twitter users around you.</p>
              <div className="flex gap-4">
                <button className="bg-[#1E96D3] rounded-[8px] border border-solid border-[#1E96D3] text-[#fff] p-2 m-0">View Live</button>
                <button className="border rounded-[8px] border-solid border-[#1E96D3] text-[#1E96D3] p-2 m-0">Github Repo</button>
              </div>
            </div>
            <div data-aos="zoom-in" className="max-w-[300px] mx-auto rounded-[8px] border border-solid border-[#1E96D3] p-2">
              <Image src={Thumb} alt="" className="mb-4" />
              <h4 className="text-[#1E96D3] text-[16px] sm:text-[24px]">TWINDER</h4>
              <p className="text-[16px]">A live Geolocation app for finding tweets and twitter users around you.</p>
              <div className="flex gap-4">
                <button className="bg-[#1E96D3] rounded-[8px] border border-solid border-[#1E96D3] text-[#fff] p-2 m-0">View Live</button>
                <button className="border rounded-[8px] border-solid border-[#1E96D3] text-[#1E96D3] p-2 m-0">Github Repo</button>
              </div>
            </div>
          </div> */}
            <Swiper
      slidesPerView={1}
      spaceBetween={20}
      breakpoints={{
        640: { slidesPerView: 1 },
        991: { slidesPerView: 2 },
        1024: { slidesPerView: 4 }
      }}
      pagination={{ clickable: true }}
      className="mySwiper myprojects-slider   m-0"
    >
      {[...Array(4)].map((_, index) => (
        <SwiperSlide key={index}>
          <div data-aos="zoom-in" className=" mx-auto rounded-[8px] border border-solid border-[#1E96D3] p-2">
            <Image src={Thumb} alt="" className="mb-4" />
            <h4 className="text-[#1E96D3] text-[16px] sm:text-[24px]">TWINDER</h4>
            <p className="text-[16px] font-normal text-[#000]">A live Geolocation app for finding tweets and twitter users around you.</p>
            <div className="flex gap-4">
              <button className="text-[16px] font-normal bg-[#1E96D3] rounded-[8px] border border-solid border-[#1E96D3] text-[#fff] p-2 m-0">View Live</button>
              <button className="text-[16px] font-normal border rounded-[8px] border-solid border-[#1E96D3] text-[#1E96D3] p-2 m-0">Github Repo</button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
        </div>
      </section>
      <section className="bg-[#1E96D3] connect-section overflow-hidden px-2">
        <div className="max-w-[1400px] mx-auto lg:flex items-center py-[40px] px-[16px] relative z-[99]">
          <div className="w-full lg:w-[60%]">
            <h4 className="text-[24px] md:text-[44px] font-semibold leading-[40px] md:leading-[50px] lg:leading-[68px] text-[#fff] mb-4 md:mb-2">Are you looking for seamless data flows and better visibility for your business?</h4>
            <p className="text-[#fff] text-[16px] lg:text-[22px]">We have the technical and functional expertise you need.</p>
          </div>
          <div className="w-full lg:w-[40%]">
           
                <button className="mt-[30px] text-[16px] lg:text-[34px] overflow-hidden leading-[25px] text-left bg-[#96DCFF] w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] transition-all hover:w-[230px] lg:hover:w-[340px] duration-1000 flex items-center gap-5 justify-end p-4 rounded-[100px] group">
                <div className="flex items-center gap-[50px]">
                  <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[#fff]">
                    Get in touch
                  </span>
                  <div>
                    <svg
                      width="41"
                      height="14"
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
  )
}
export default ServiceInformation