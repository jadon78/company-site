"use client";
import React, { useState, useRef } from "react";
import CountUp from "react-countup";
import Image from "next/image";
import "../../css/home.css";
import { EnquiryCredentials } from "@/lib/actions/auth/enquiry";
import BImg from "../../components/assets/img/b-img.png";
import { CardContent } from "@/components/ui/card";
import Image1 from "../../components/assets/img/img-1.png";
import Gloab1 from "../../components/assets/img/gloab.png";
import Painting from "../../components/assets/img/painting-icon.png";
import WaveImg from "../../components/assets/img/waveShape's.png";
import { Footer } from "@/components/shared/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";

const AboutPage = () => {
  const [tabs, setTabs] = useState("frontend");
    const swiperRef: any = useRef(null);
    const handleTabChange = (tabname: string) => {
      setTabs(tabname);
    };
  
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      mobile_number: "",
      message: "",
    });
  
    const [formStatus, setFormStatus] = useState({ success: "", error: "" });
  
    const handleNextSlide = () => {
      if (swiperRef.current) {
        swiperRef.current.slideNext();
      }
    };

    const cards = [
      {
        title: "Card 1",
        content: "This is the content of Card 1."
      },
      {
        title: "Card 2",
        content: "This is the content of Card 2."
      },
      {
        title: "Card 3",
        content: "This is the content of Card 3."
      },
      {
        title: "Card 4",
        content: "This is the content of Card 4."
      }
    ];

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
                <h1 className="text-4xl  font-[700] leading-[95px] md:text-[72px] font-bold mb-0 text-white">
                  About Us
                </h1>
              </div>
              <Image
                alt=""
                src={WaveImg}
                className="absolute bottom-[-55px] w-full left-0"
              />
            </div>
          </section>
          
          <section className="py-20 px-4 relative bg-dots-img">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center pt-10">
              <div className="">
                <h3 className="text-[24px] gradient-text mb-2">
                  About Us
                </h3>
                <h2 className="text-[44px] font-bold mb-4 pb-0">
                  Empowering Businesses with Advanced IT Solutions
                </h2>
                <p className="text-gray-600 mb-6 text-[24px]">
                  In the digital era, we help businesses thrive by delivering tailored IT services and solutions. 
                  From seamless software development to robust IT infrastructure, our expertise ensures innovative, 
                  scalable, and reliable outcomes for your business. Let’s transform challenges into opportunities with technology
                </p>
                <div className="space-y-3">
                  
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={Image1}
                  alt="Team meeting"
                  className="max-w-[450px] h-auto"
                />
              </div>
            </div>
          </section>
          <div className="max-w-[1100px] mx-auto text-center mt-[-130px] p-0">
            <div className="relative  z-[99] grid grid-cols-2 md:grid-cols-4 bg-[#fff] text-[#000] rounded-[16px] p-8 shadow-[0px_4px_17px_0px_#00000040]">
              <div className="border-r-[1px] border-r-[#ddd] border-solid">
                <div className="text-[44px] font-[500] leading-[70px]">
                  <CountUp end={500} duration={2} />+
                </div>
                <div className="text-[24px] font-[500]">Projects</div>
              </div>
              <div className="border-r-[1px] border-r-[#ddd] border-solid">
                <div className="text-[44px] font-[500] leading-[70px]">
                  <CountUp end={40} duration={2} />+
                </div>
                <div className="text-[24px] font-[500]">Our Client</div>
              </div>
              <div className="border-r-[1px] border-r-[#ddd] border-solid">
                <div className="text-[44px] font-[500] leading-[70px]">
                  <CountUp end={40} duration={2} />+
                </div>
                <div className="text-[24px] font-[500]">Happy Customers</div>
              </div>
              <div>
                <div className="text-[44px] font-[500] leading-[70px]">
                  <CountUp end={5} duration={2} />
                  yr+
                </div>
                <div className="text-[24px] font-[500]">Years Experience</div>
              </div>
            </div>
          </div>
          <section className="services-page">
            <h2 className="text-[24px] text-center gradient-text">Our Standards</h2>
            <h3 className="text-[44px] text-center">
              Additional Services that will <br />Grow Your Business
            </h3>
            <div className="flex flex-row gap-4 p-6">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-2xl p-6 w-64 hover:scale-105 transform transition duration-300"
                >
                  <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                  <p className="text-gray-600">{card.content}</p>
                </div>
              ))}
            </div>
          </section>
          <div className="bg-gif-background2 bg-cover bg-center w-full h-full  ">
            <div className="bg-[#E9E9E9B2] py-16">
              <div className="max-w-[1600px] mx-auto">
                <div className="w-[95%] mx-auto px-8">
                  <div className="grid grid-cols-1 gap-12 md:grid-cols-2 align-items-center ">
                    <div className="text-left">
                      <h2 className="text-[44px] font-bold text-left mb-6">
                        Important Features for <br /> Digital Marketing
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="services-page">
            <h2 className="text-[24px] text-center gradient-text">Services</h2>
            <h3 className="text-[44px] text-center">
              Additional Services that will <br />
              Grow Your Business
            </h3>
            <div className="bg-circle-img mt-5 overflow-hidden py-5">
              <div className="serviceimg">
                <div className="flex flex-col w-full gap-[58px]">
                  <div className="flex     justify-between w-full max-w-[900px] mx-auto">
                    <div
                      className="service-card shadow-[0px_4px_4px_0px_#00000040]  max-w-[300px] p-0  rounded-[24px] text-center text-white"
                      style={{
                        background:
                          "linear-gradient(270deg, #083ca7 0%, #862ff1 100%)",
                      }}
                    >
                      <div className="square p-4">
                        <div>
                          <Image
                            alt=""
                            src={Painting}
                            className="mx-auto mb-4"
                          />
                        </div>
                        <h5 className="text-white">Web design</h5>
                        <p className="text-center text-white pt-0">
                          Lorem ipsum dolor sit amet, contop ctetur adipisic.
                          Google first page marketing.
                        </p>
                      </div>
                    </div>
                    <div
                      className="service-card shadow-[0px_4px_4px_0px_#00000040]  max-w-[300px] p-0  rounded-[24px] text-center text-white"
                      style={{
                        background:
                          " linear-gradient(90deg, #297679 0%, #3FA6C1 100%)",
                      }}
                    >
                      <div className="square p-4">
                        <div>
                          <Image
                            alt=""
                            src={Painting}
                            className="mx-auto mb-4"
                          />
                        </div>
                        <h5 className="text-white">Web design</h5>
                        <p className="text-center text-white pt-0">
                          Lorem ipsum dolor sit amet, contop ctetur adipisic.
                          Google first page marketing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex     justify-between w-full max-w-[1000px] mx-auto">
                    <div
                      className="service-card shadow-[0px_4px_4px_0px_#00000040]  max-w-[300px] p-0  rounded-[24px] text-center text-white"
                      style={{
                        background:
                          "linear-gradient(90deg, #FCB731 0%, #F67526 100%)",
                      }}
                    >
                      <div className="square p-4">
                        <div>
                          <Image
                            alt=""
                            src={Painting}
                            className="mx-auto mb-4"
                          />
                        </div>
                        <h5 className="text-white">Web design</h5>
                        <p className="text-center text-white pt-0">
                          Lorem ipsum dolor sit amet, contop ctetur adipisic.
                          Google first page marketing.
                        </p>
                      </div>
                    </div>
                    <div
                      className="service-card shadow-[0px_4px_4px_0px_#00000040]  max-w-[300px] p-0  rounded-[24px] text-center text-white"
                      style={{
                        background:
                          "linear-gradient(90deg, #FE6F7B 0%, #FA5B9D 100%)",
                      }}
                    >
                      <div className="square p-4">
                        <div>
                          <Image
                            alt=""
                            src={Painting}
                            className="mx-auto mb-4"
                          />
                        </div>
                        <h5 className="text-white">Web design</h5>
                        <p className="text-center text-white pt-0">
                          Lorem ipsum dolor sit amet, contop ctetur adipisic.
                          Google first page marketing.
                        </p>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div>
              <div className="relative h-screen w-full overflow-hidden">
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

                <div className="max-w-7xl mx-auto relative z-10 flex h-full flex-col items-center justify-center text-white text-center px-4">
                  <div className="flex justify-between">
                    <div className="w-[45%] text-left">
                      <h4 className="text-[75px] pb-[50px] leading-[112px]">
                        Technologies{" "}
                      </h4>
                      <p className="text-[#000] text-[18px]">
                        As a versatile service provider, we cater to diverse
                        industries, offering tailored solutions to meet specific
                        needs. We ensure success across varied business
                        landscapes with comprehensive and adaptable services.
                      </p>
                    </div>
                    <div className="w-[50%]">
                      <div className="ani-slider-container">
                        <span className="slide-box-1"></span>
                        <span className="slide-box-2"></span>
                        <span className="slide-box-3"></span>
                        <span className="slide-box-4"></span>
                        <span className="slide-box-5"></span>
                        <div className="bg-[#fff] border-r p-4 text-left shadow-[0px_4px_7.5px_0px_#945DFF40] rounded-[26px] z-[99] relative">
                          <h4 className="text-[50px] leading-[100px]">
                            Technology
                          </h4>
                          <p className="text-lg font-normal leading-7 text-left">
                            we propel tech advancement through bespoke
                            solutions, ensuring seamless integration and
                            innovation for businesses. Our expertise drives
                            digital transformation, providing customized
                            strategies to navigate the evolving landscape of
                            technology. We are committed to delivering
                            excellence, empowering our clients to thrive in the
                            ever-changing world of technology.
                          </p>
                          <span>
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
                        {/* <Swiper
                          grabCursor={true}
                          effect={"creative"}
                          creativeEffect={{
                            prev: {
                              shadow: true,
                              translate: [0, 0, -400],
                            },
                            next: {
                              translate: ["-100%", 0, 0],
                            },
                          }}
                          loop={true} // Enable infinite loop
                          modules={[EffectCreative]}
                          className="mySwiper"
                          onSwiper={(swiper) => (swiperRef.current = swiper)} // Save Swiper instance
                        >
                          <SwiperSlide className="p-4 bg-gray-200 rounded-lg">
                            Slide 1
                          </SwiperSlide>
                          <SwiperSlide className="p-4 bg-gray-300 rounded-lg">
                            Slide 2
                          </SwiperSlide>
                          <SwiperSlide className="p-4 bg-gray-400 rounded-lg">
                            Slide 3
                          </SwiperSlide>
                          <SwiperSlide className="p-4 bg-gray-500 rounded-lg">
                            Slide 4
                          </SwiperSlide>
                          <SwiperSlide className="p-4 bg-gray-600 rounded-lg">
                            Slide 5
                          </SwiperSlide>
                          <SwiperSlide className="p-4 bg-gray-700 rounded-lg">
                            Slide 6
                          </SwiperSlide>
                          <SwiperSlide className="p-4 bg-gray-800 rounded-lg">
                            Slide 7
                          </SwiperSlide>
                          <SwiperSlide className="p-4 bg-gray-900 rounded-lg">
                            Slide 8
                          </SwiperSlide>
                          <SwiperSlide className="p-4 bg-gray-1000 rounded-lg">
                            Slide 9
                          </SwiperSlide>
                        </Swiper> */}
                        {/* <button
                          onClick={handleNextSlide}
                          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                          style={{background: "#000"}}
                        >
                          Next Slide
                        </button> */}
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
          <section className="px-4 relative why-choose-us">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center pt-10">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={Gloab1}
                  alt="gloab"
                  className="max-w-[450px] h-auto"
                />
              </div>
              <div className="">
                <h3 className="text-[24px] gradient-text mb-2">
                  Why Choose Us
                </h3>
                <h2 className="text-[44px] font-bold mb-4 pb-0">
                  We prioritize our clients’ satisfaction above all else.
                </h2>
                <p className="text-gray-600 mb-6 text-[24px]">
                  Engitech is the partner of choice for many of the world’s
                  leading enterprises, SMEs and technology challengers. We help
                  businesses custom software development.
                </p>
              </div>
            </div>
          </section>
          <section className="relative py-0 ">
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
            <div className="max-w-7xl mx-auto  flex gap-12 items-center  relative z-[9] h-[400px]">
              <div className="max-w-[700px]">
                <h4 className="text-[42.66px] font-normal leading-[62px] text-left text-[#fff]">
                  Secure the future of your company with company name{" "}
                </h4>
              </div>
              <div>
                <button className="text-[34px] overflow-hidden leading-[25px] text-left bg-[#D9E2FF40] w-[100px] h-[100px] transition-all hover:w-[310px] duration-1000 flex items-center gap-5 justify-end p-4 rounded-[100px] group">
                  <div className="flex items-center gap-4">
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
};

export default AboutPage;
