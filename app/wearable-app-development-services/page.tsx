"use client";

import React, { useState } from "react";
import Head from "next/head";
import "../../css/android-app-development-services/android-app-development-services.css";
import "../../css/android-app-development-services/animation.css";
import Image from "next/image";

import Wearable1 from "../../components/assets/svg/wp1.svg";
import Wearable2 from "../../components/assets/svg/wp2.svg";
import Wearable3 from "../../components/assets/svg/wp3.svg";
import Realtime from "../../components/assets/svg/Realtime.svg";
import enhance from "../../components/assets/svg/enhance.svg";
import productivity from "../../components/assets/svg/productivity.svg";
import experience from "../../components/assets/svg/experience.svg";
import Bettercustomer from "../../components/assets/svg/Bettercustomer.svg";
import lineshape from "../../components/assets/images/line-shape.png";
import WearableDevelopments from "../../components/assets/images/WearableDevelopment.jpg";
import warableimage from "../../components/assets/images/wearableservice.jpg";
import Development from "../../components/assets/images/WearableDevelopmentservices.png";
import wearabletechnology from "../../components/assets/images/wearabletechnology.jpg";
import { AiOutlineDown } from "react-icons/ai";
// import ServicesAccordions from "./servicesAccordion";

const WearableAppDevelopment = () => {
  const [isOpen, setIsOpen] = useState<string | null>(null);

  const handleTerms = (section: string): void => {
    setIsOpen(isOpen === section ? null : section);
  };

  return (
    <>
      <Head>
        <title>Wearable App Development Services | Hire App Developers</title>
        <meta
          name="title"
          content="Wearable App Development Services | Hire App Developers"
        />
        <meta
          name="keywords"
          content="Wearable App Development Services, Hire App Developers, wearable app development company"
        />
        <meta
          name="description"
          content="We are a leading wearable app development company that provides wearable app development services at an affordable rate. To know more visit Elicit Digital today!"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="Geography" content="India" />
        <meta name="author" content="Elicit Digital" />
        <meta name="copyright" content="Elicit Digital" />
        <meta name="distribution" content="Global" />
        <meta name="publisher" content="www.elicit.digital" />
        <meta name="Search Engine" content="https://www.google.com/" />
        <meta
          property="og:title"
          content="Wearable App Development Services | Hire App Developers"
        />
        <meta
          property="og:site_name"
          content=" Elicit Digital-Web Development Company"
        />
        <meta property="og:url" content="www.elicit.digital" />
        <meta
          property="og:description"
          content="We are a leading wearable app development company that provides wearable app development services at an affordable rate. To know more visit Elicit Digital today!"
        />
        <meta
          property="og:image"
          itemProp="image"
          content="%PUBLIC_URL%/elicitlogo.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Elicit_Digital" />
        <meta
          name="twitter:title"
          content="Wearable App Development Services | Hire App Developers"
        />
        <meta
          name="twitter:description"
          content="We are a leading wearable app development company that provides wearable app development services at an affordable rate. To know more visit Elicit Digital today!"
        />
      </Head>
      <section className="bg_img"></section>

      <section className="service-banner montserrat">
        <div className="container">
          <div className="col-lg-12 offset-lg-12 col-md-12">
            <div className="section-title-area text-center">
              <h1 className="section-title-main poppins">
                Wearable App{" "}
                <span className="technolgy_focus">Development</span>
              </h1>
              <p className="services-text">
                Design and customize your custom-made wearable app and
                efficiently distribute them worldwide with Elicit.
              </p>
              <div className="service-contact text-center">
                <a className="cont-btn" href="/get-in-touch">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-success-area section montserrat">
        <div className="">
          <div className="brand-success-wrap">
            <div className="brand-success-top container">
              <div className="row">
                <div className="col-lg-6 order-0 order-lg-0">
                  <div
                    className="success-top-right wow "
                    style={{ visibility: "visible" }}
                  >
                    <Image
                      src={WearableDevelopments}
                      alt="Wearable App Development Company"
                    />
                  </div>
                </div>

                <div className="col-lg-6 align-self-center order-1 order-lg-1">
                  <div className="success-top-left">
                    <h2 className="poppins">
                      Wearable App Development Company
                    </h2>
                    <p>
                      At Elicit, we understand the importance of capturing your
                      audience's attention in today's highly competitive digital
                      landscape. That is why we have dedicated ourselves to
                      developing world-standard wearable apps that empower users
                      with cutting-edge features. Our skilled developers
                      specialize in creating apps for branded smartwatches,
                      AndroidWeraOS, and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="work-wearable montserrat ">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="warable-img">
                <Image
                  src={Development}
                  alt="Wearable App Development Company"
                />
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <h3 className="section-title-hybrid-text poppins">
                We build apps for wearable devices that are both powerful and
                pleasing to use.{" "}
              </h3>
              <p className="gathering-text-prag-text">
                Wearable App Development is currently one of the most
                revolutionary technological advancements that have been taking
                place in every industry, leading to a significant digital
                transformation. As a{" "}
                <a href="/wearable-app-development-services">
                  leading Wearable App Development Company
                </a>
                , our team of experts is well-equipped with the knowledge and
                expertise required to develop robust and scalable wearable apps
                for businesses. Our developers create top-notch apps for
                wearable technology that provide immersive experiences across
                all platforms and devices such as Android WearOS, Fitbits,
                Google Glass, AppleWatch OS, and smartwatches, amongst other
                wearable devices. At our company, we help your business grow
                exponentially by developing customized wearable apps equipped
                with the latest features for all business purposes. We pride
                ourselves on being one of the best wearable app development
                companies globally with pro-found experience helping our clients
                implement popular wearable tech stacks like Android SDKs, Google
                Glass SDKs, and iOS SDKs. Trust us to turn your ideas into
                reality while providing an unmatched customer experience!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="warable-services montserrat">
        <div className="container">
          <h3 className="m-w-64 pb-5 poppins">
            Get wearable app development services with the best resources
          </h3>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="warable-img-one">
                <Image
                  src={warableimage}
                  alt="Wearable App Development Company"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="wearable_accordians_container p-[32px]">
                <div>
                  <div
                    className={`cursor-pointer p-[15px] flex items-center justify-between border border-solid border-[#00000017] ${
                      isOpen === "wsd"
                        ? "rounded-tl-[25px] rounded-tr-[25px]"
                        : "rounded-[25px]"
                    }   `}
                    onClick={() => handleTerms("wsd")}
                  >
                    <span className=" font-bold text-[14px] text-[#535b7c] montserrat">
                      WEARABLE SOLUTION DESIGN
                    </span>
                    <span
                      className={`inline-block transition-transform duration-[2s] ${
                        isOpen === "wsd" ? "rotate-180" : ""
                      }`}
                    >
                      <AiOutlineDown className="text-[22px] font-bold text-[#535b7c]" />
                    </span>
                  </div>
                  <div
                    className={`p-[15px] flex items-center border border-solid border-[#00000017] overflow-hidden transition-all duration-3000 ease-in-out ${
                      isOpen === "wsd"
                        ? "opacity-100 pb-[10px] rounded-bl-[25px] rounded-br-[25px] mb-[30px]"
                        : "max-h-0 opacity-0 "
                    }`}
                  >
                    <p className="text-[16px] text-[#8b8b8b] font-normal">
                      Our team of designers is committed to crafting immersive
                      experiences that transcend all platform sizes through
                      comprehensive alignment with glanceability, context
                      awareness, and simplistic interface designs. We comprehend
                      the individual aspect ratios involved in designing
                      wearables with small screens or irregular shapes versus
                      larger devices such as headphones that allow for more
                      expansive media display options. With our extensive
                      knowledge of this subject matter, we ensure a seamless
                      transition for users adhering to analytical insights that
                      prioritize functionality while minimizing unnecessary
                      touches & swipes across various wearable platforms.
                    </p>
                  </div>
                </div>

                <div
                  className={`${
                    isOpen === "wdad" ? "mt-[-20px]" : "mt-[-20px] mb-[-20px]"
                  }`}
                >
                  <div
                    className={`cursor-pointer p-[15px] flex items-center justify-between border border-solid border-[#00000017] ${
                      isOpen === "wdad"
                        ? "rounded-tl-[25px] rounded-tr-[25px]"
                        : "rounded-[25px]"
                    }   `}
                    onClick={() => handleTerms("wdad")}
                  >
                    <span className=" font-bold text-[14px] text-[#535b7c] montserrat">
                      WEARABLE DEVICE APP DEVELOPMENT
                    </span>
                    <span
                      className={`inline-block transition-transform duration-[2s] ${
                        isOpen === "wdad" ? "rotate-180" : ""
                      }`}
                    >
                      <AiOutlineDown className="text-[22px] font-bold text-[#535b7c]" />
                    </span>
                  </div>
                  <div
                    className={`p-[15px] flex items-center border border-solid border-[#00000017] overflow-hidden transition-all duration-3000 ease-in-out ${
                      isOpen === "wdad"
                        ? "opacity-100 pb-[10px] rounded-bl-[25px] rounded-br-[25px]  mb-[30px]"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-[16px] text-[#8b8b8b] font-normal">
                      As leaders in the field of Wearable Device App
                      Development, we take end-to-end app development for
                      wearable devices to a whole new level. Our expert team
                      works tirelessly to create a robust backend infrastructure
                      that can effortlessly integrate APIs and bring numerous
                      applications and features onto one single platform.
                      Whether it’s smartwatches or fitness trackers, our skilled
                      professionals specialize in designing apps that don't let
                      device limitations get in the way of delivering an
                      exceptional user experience.
                    </p>
                  </div>
                </div>

                <div
                  className={`${
                    isOpen === "wdad" ? "mt-[-20px]" : "mt-[-20px] mb-[-20px]"
                  }`}
                >
                  <div
                    className={`cursor-pointer p-[15px] flex items-center justify-between border border-solid border-[#00000017] ${
                      isOpen === "mpi"
                        ? "rounded-tl-[25px] rounded-tr-[25px]"
                        : "rounded-[25px]"
                    }   `}
                    onClick={() => handleTerms("mpi")}
                  >
                    <span className=" font-bold text-[14px] text-[#535b7c] montserrat">
                      MULTI-PLATFORM INTEGRATION
                    </span>
                    <span
                      className={`inline-block transition-transform duration-[2s] ${
                        isOpen === "mpi" ? "rotate-180" : ""
                      }`}
                    >
                      <AiOutlineDown className="text-[22px] font-bold text-[#535b7c]" />
                    </span>
                  </div>
                  <div
                    className={`p-[15px] flex items-center border border-solid border-[#00000017] overflow-hidden transition-all duration-3000 ease-in-out ${
                      isOpen === "mpi"
                        ? "opacity-100 pb-[10px] rounded-bl-[25px] rounded-br-[25px]  mb-[30px]"
                        : "max-h-0 opacity-0 "
                    }`}
                  >
                    <p className="text-[16px] text-[#8b8b8b] font-normal">
                      We understand the importance of Multi-Platform Integration
                      when it comes to wearable application development. Our
                      team specializes in creating APIs and integrations that
                      allow for seamless data transmission between wearables and
                      mobile applications. This means that our clients can rest
                      assured that their users' data is always up-to-date and
                      accurate, without any lag or delays.
                    </p>
                  </div>
                </div>

                <div>
                  <div
                    className={`cursor-pointer p-[15px] flex items-center justify-between border border-solid border-[#00000017] ${
                      isOpen === "sd"
                        ? "rounded-tl-[25px] rounded-tr-[25px]"
                        : "rounded-[25px]"
                    }   `}
                    onClick={() => handleTerms("sd")}
                  >
                    <span className=" font-bold text-[14px] text-[#535b7c] montserrat">
                      SEAMLESS DEPLOYMENT
                    </span>
                    <span
                      className={`inline-block transition-transform duration-[2s] ${
                        isOpen === "sd" ? "rotate-180" : ""
                      }`}
                    >
                      <AiOutlineDown className="text-[22px] font-bold text-[#535b7c]" />
                    </span>
                  </div>
                  <div
                    className={`p-[15px] flex items-center border border-solid border-[#00000017] overflow-hidden transition-all duration-3000 ease-in-out ${
                      isOpen === "sd"
                        ? "opacity-100 pb-[10px] rounded-bl-[25px] rounded-br-[25px]"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-[16px] text-[#8b8b8b] font-normal">
                      Seamless deployment is at the heart of everything our
                      system architects do. Our team specializes in making sure
                      your wearable application runs like a dream on all devices
                      and versions, from the latest models to those that have
                      long been superseded by more cutting-edge technology. We
                      understand that you need your app to work smoothly no
                      matter what, without any hiccups or glitches along the
                      way. To achieve this, we carefully test every element of
                      your app against multiple platforms until we're confident
                      it can stand up to anything and everything that's thrown
                      it’s way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose montserrat">
        <div className="why-choose_bx-box">
          <div className="choose-img"></div>
        </div>

        <div className="why-choose_bg-box-two">
          <div className="choose-two-img"></div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12  main-content">
              <div className="why-choose-four__left">
                <div className="section-title-three text-left">
                  <div className="section-title-three__sub-title-box">
                    <p className="section-title-three__sub-title">
                      Wearable Technology
                    </p>
                    <div className="section-title-three__shape"></div>
                  </div>
                  <h2 className="section-title-three poppins">
                    Wearable Technology Plays a Multiple Role for the Industries
                  </h2>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-xl-6 col-sm-12">
              <div className="why-choose-four__right">
                <ul className="list-unstyled why-choose-four__points ml-0">
                  <li>
                    <div className="why-choose-icon">
                      <div className="first-icon-img">
                        <Image
                          src={Realtime}
                          alt="Wearable App Development Company"
                        />
                      </div>
                    </div>
                    <div className="why-choose-four__points-text">
                      <p>Real-time tracking of health</p>
                    </div>
                  </li>

                  <li>
                    <div className="why-choose-icon">
                      <div className="first-icon-img">
                        <Image
                          src={enhance}
                          alt="Wearable App Development Company"
                        />
                      </div>
                    </div>
                    <div className="why-choose-four__points-text">
                      <p>Enhance efficiency at work</p>
                    </div>
                  </li>

                  <li>
                    <div className="why-choose-icon">
                      <div className="first-icon-img">
                        <Image
                          src={productivity}
                          alt="Wearable App Development Company"
                        />
                      </div>
                    </div>
                    <div className="why-choose-four__points-text">
                      <p>Increase productivity</p>
                    </div>
                  </li>

                  <li>
                    <div className="why-choose-icon">
                      <div className="first-icon-img">
                        <Image
                          src={experience}
                          alt="Wearable App Development Company"
                        />
                      </div>
                    </div>
                    <div className="why-choose-four__points-text">
                      <p>Improved Customer Service</p>
                    </div>
                  </li>

                  <li>
                    <div className="why-choose-icon">
                      <div className="first-icon-img">
                        <Image
                          src={Bettercustomer}
                          alt="Wearable App Development Company"
                        />
                      </div>
                    </div>
                    <div className="why-choose-four__points-text">
                      <p>Better customer experience</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="warabletechnology montserrat">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 ">
              <div className="warable-img">
                <Image
                  src={wearabletechnology}
                  alt="Wearable App Development Company"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 pd-5">
              <div className="section-title-techology">
                <h4 className="section-title-hybrid poppins">
                  The industry leader in wearable technology solutions for SMEs
                  & Enterprises
                </h4>
                <p className="gathering-text-prag">
                  As technology continues to advance, the popularity of wearable
                  devices grows at an exceptional rate. From tracking daily
                  activity levels to receiving notifications from work, both
                  individuals and businesses find that adopting wearable
                  technology can help them meet their goals with ease. Wearable
                  app development solutions are becoming increasingly vital in
                  today's digital age. Ours specializing in Android and iOS
                  wearable development, it has become more accessible than ever
                  for organizations to create personalized experiences that
                  cater to the needs of their users. Our team of developers
                  understands how important it is for brands to stay ahead in
                  this fast-moving industry by creating functional apps that fit
                  into every niche from gaming and medical to lifestyle
                  applications. We work closely with our clients throughout each
                  step of the process - developing UX/UI designs that are
                  innovative yet intuitive while integrating unique
                  functionalities, making your vision come alive through
                  unbeatable wearable experiences for your app users – no matter
                  what field they hail from!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="work-progres-two pd-bottom-70 montserrat">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area text-center">
                <span className="section-sub-title">
                  Android App Development
                </span>
                <h2 className="section-title poppins">
                  At our company a team of devoted
                </h2>
                <p className="section-text">
                  skilled developers blends their skills with the cutting-edge
                  mobile technology almost at all platforms. We can provide our
                  clients a perfect solution to accomplish all demands of
                  android development services. Android is the first choice of
                  the start-ups and enterprises. We provide a robust internal
                  defence system enhancing the security to or client’s data from
                  prying eyes by wrapping it in encryption. The company offers a
                  few reasons to build an android app:
                </p>
              </div>
            </div>
          </div>
          <div className="work-list  devlopment-list">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-work text-center wow zoomIn"
                  style={{ visibility: "visible", animationName: "zoomIn" }}
                >
                  <div className="icon d-flex justify-content-center align-items-center">
                    <Image
                      src={Wearable1}
                      alt="Wearable App Development Company"
                      className="m-0"
                    />
                  </div>
                  <h3 className="poppins">Cost- effective Platform</h3>
                  <p>
                    Android developers have easy access to tools and systems,
                    and end devices and hardware are considerably less
                    expensive.{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-work text-center wow zoomIn"
                  data-wow-delay="0.2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "zoomIn",
                  }}
                >
                  <div className="icon d-flex justify-content-center align-items-center">
                    <Image
                      src={Wearable2}
                      alt="Wearable App Development Company"
                      className="m-0"
                    />
                  </div>
                  <h3 className="poppins">Quick and Easy to Develop</h3>
                  <p>
                    The availability of the simple functioning model speeds up
                    the development of apps.{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-work text-center wow zoomIn"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "zoomIn",
                  }}
                >
                  <div className="icon d-flex justify-content-center align-items-center">
                    <Image
                      src={Wearable3}
                      alt="Wearable App Development Company"
                      className="m-0"
                    />
                  </div>
                  <h3 className="poppins"> Wearable App Development</h3>
                  <p>
                    Higher ROI with Lower Costs ,Faster Deployment ,Target
                    Multiple Platforms ,Versatility and Scalability ,Enhanced
                    Security ,Customization{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="line-shape">
              <Image src={lineshape} alt="Wearable App Development Company" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WearableAppDevelopment;
