"use client";

import Head from "next/head";
import React, { useState } from "react";
import service_banner_sub_image from "../../components/assets/images/WHAT-WE0-OFFER.png";
import Image from "next/image";
import icon from "../../components/assets/images/icon.png";
import phone from "../../components/assets/images/phone icon.png";
import rocket from "../../components/assets/images/rocket-launcher.jpg";
import Link from "next/link";
import { service } from "@/constants/data";
import { Carousel } from "react-responsive-carousel";
import bak from "../../components/assets/images/shape1-min.png";
import office1 from "../../components/assets/images/testimonial1.png";
import office2 from "../../components/assets/images/testimonial2.png";

const Services = () => {
  const [tabs, setTabs] = useState("OUR PROCESS");
  const handleTabChange = (tabname: string) => {
    setTabs(tabname);
  };
  return (
    <>
      <Head>
        <title>Web Design and Development Services | Try it Free </title>
        <meta
          name="title"
          content="Web Design and Development Services | Try it Free"
        />
        <meta
          name="keywords"
          content="Web Design and Development Services, web & mobile app design and development"
        />
        <meta
          name="description"
          content="Let's explore how our innovative digital solutions can grow your business. We provide a comprehensive range of services, including web & mobile app design and development."
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
          content="Web Design and Development Services | Try it Free"
        />
        <meta
          property="og:site_name"
          content=" Elicit Digital-Web Development Company"
        />
        <meta property="og:url" content="www.elicit.digital" />
        <meta
          property="og:description"
          content="Let's explore how our innovative digital solutions can grow your business. We provide a comprehensive range of services, including web & mobile app design and development."
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
          content="Web Design and Development Services | Try it Free"
        />
        <meta
          name="twitter:description"
          content="Let's explore how our innovative digital solutions can grow your business. We provide a comprehensive range of services, including web & mobile app design and development."
        />
      </Head>

      <div className="service_container p-[70px_0px]">
        <div className="px-[15px] py-0 max-w-[1140px] mx-auto">
          <div className="flex flex-wrap relative z-[9]">
            <div className="w-full md:w-[50%] p-0 mt-[7%]">
              <h3 className="text-white font-semibold text-[19px] font-bold montserrat">
                WHAT WE OFFER
              </h3>
              <h3 className="font-bold text-white text-[35px] md:text-[45px] pr-0 md:pr-[8%]">
                <span className="font-bold montserrat">
                  Proven Website Development Experience
                </span>
              </h3>
              <div>
                <p className="box-border text-[15px] md:text-[17px] leading-[1.875] text-white mt-5 montserrat">
                  <strong className="font-bold">Elicit</strong> is a leading
                  provider of web design, SEO, ecommerce, website conversion,
                  and Internet marketing services.
                </p>
              </div>
            </div>

            <div className="w-full md:w-[50%] px-[15px] flex justify-center md:justify-end">
              <Image
                className="h-[20rem] md:h-[25rem] mt-5 md:mt-[45px] mb-5 w-auto"
                src={service_banner_sub_image}
                alt="website designing company"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1140px] px-[15px] py-0 mx-auto my-5 montserrat">
        <div className="flex flex-wrap">
          <div className="lg:w-[50%] md:w-[100%] sm:w-[100%]">
            <div className="row service-icon-row   ">
              <div className="col align-self-start icon_first ">
                <div className="serviceFocus">
                  <Image
                    className="service-img"
                    src={icon}
                    alt="website designing company"
                  />
                </div>
                <span className="wgl-infobox_title "> Web Development</span>
                <p className="icon_text-para">
                  Consider. Shape. <strong>Influence</strong>. Shine.
                </p>
              </div>
              <div className="col align-self-center icon_second">
                <div className="serviceFocus">
                  <Image
                    className="service-img"
                    src={phone}
                    alt="website designing company"
                  />
                </div>
                <span className="wgl-infobox_title montserrat">
                  App Development
                </span>
                <p className="icon_text-para">
                  <strong>Applications</strong> for all your problems{" "}
                </p>
              </div>
              <div className="col align-self-end icon_third">
                <div className="serviceFocus">
                  <Image
                    className="service-img"
                    src={rocket}
                    alt="web development services"
                  />
                </div>
                <span className="wgl-infobox_title montserrat">
                  Digital Marketing
                </span>
                <p className="icon_text-para">
                  All you need is a <strong>Digital Push</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 subtitle-tab">
            <div className="alignfont">
              <div className="dbl_subtitle">Focus on Lead Generation</div>
              <h3 className="dbl__title-wrapper">
                <span className="dbl__title  ">
                  A Look at Our Web Development Services
                </span>
              </h3>
            </div>
            <div className="technology-services">
              <div className="service-slider-tab montserrat flex border-b-[#e0e0e0] border-b border-solid h-[40px] align-center justify-between p-[0px_40px_0px_40px]">
                {["OUR PROCESS", "EXPERIENCE", "BENEFITS"].map((tab) => (
                  <div
                    key={tab}
                    onClick={() => handleTabChange(tab)}
                    className={`p-[15px] flex items-center justify-center cursor-pointer border-solid font-semibold ${
                      tabs === tab
                        ? "text-[#f48303] border-b-[#f48303] border-b-2"
                        : "text-[#666666] border-b-[#fff] border-b-2"
                    }`}
                  >
                    {tab.toUpperCase().replace("_", " ")}
                  </div>
                ))}
              </div>

              {tabs === "OUR PROCESS" && (
                <div id="content-1" className="content-margin">
                  <div id="content-1" className="pl-[15px] pt-[30px]">
                    <p>
                      A dedicated, professional project manager is assigned to
                      your project, a person highly skilled in Web development,
                      management, communication and project management. Equally
                      important, your project manager will have adequate time to
                      manage your project carefully.
                    </p>
                    <p>
                      We won’t rest until we fully understand your business and
                      your users. We'll provide you with a winning website
                      strategy that is all about bringing the two sides
                      together. That's why we begin every project with an onsite
                      workshop to transfer knowledge and build a consensus.
                    </p>
                  </div>
                </div>
              )}
              {tabs === "EXPERIENCE" && (
                <div id="content-2" className="content-margin">
                  <div id="content-2" className="pl-[15px] pt-[30px]">
                    <p>
                      Equipped with extensive research and a strategic mindset,
                      our team dives into the captivating world of web
                      designing. With unrivaled expertise and a commitment to
                      excellence, we embark on crafting extraordinary
                      experiences that not only captivate but also engage and
                      delight customers. Our UX design approach is nothing short
                      of meticulous - each aspect carefully prototyped, refined
                      through multiple iterations, and thoughtfully tested with
                      real users. Through this rigorous process, we ensure every
                      detail remains user-centric, aligning perfectly with their
                      needs and desires. The project stays firmly on track as we
                      weave our way towards achieving objectives that go beyond
                      expectations time after time.
                    </p>
                  </div>
                </div>
              )}
              {tabs === "BENEFITS" && (
                <div id="content-3" className="content-margin">
                  <div id="content-3" className="pl-[15px] pt-[30px]">
                    <p>
                      When it comes to the success of your website, our goal is
                      do-or-die. It is imperative to craft a detailed,
                      research-based strategy to create a user-centric user
                      experience.
                    </p>
                    <p>
                      Our goal is to gain a complete understanding of both your
                      business and your users. In order to transfer knowledge
                      and build consensus, we start every project with an onsite
                      workshop. We provide you with a winning website strategy
                      that brings the two sides together.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="section-services1 services2 montserrat">
        <section className="section-services">
          <div className="container">
            <div className="row px-[15px]">
              <div className="col-lg-9">
                <h2>
                  <span>Package Of</span> Services
                </h2>
                <h3>With a blend of technology partner rather than a vendor</h3>
              </div>
              <div className="col-lg-3 col-connect">
                <h3>To Discuss a Project</h3>
                <Link
                  href="/get-in-touch"
                  title="Let's Connect"
                  className="btn"
                >
                  Let's Connect
                </Link>
              </div>
              <div className="bg-portfolio-con p-[63px_2px]">
                <div className="container">
                  <div className="row">
                    {service.map((item, index: number) => (
                      <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                        <Link href={item.url}>
                          <div className="portfolio-img">
                            <div className="portfolio-imgs">
                              <ul className="circle-portfolio">
                                <li></li>
                                <li></li>
                                <li></li>
                              </ul>
                              <div>
                                {" "}
                                <div className="img-icon-for-ser">
                                  <Image
                                    className="port-folio-img"
                                    src={item.image}
                                    alt="website designing company"
                                  />
                                </div>
                                <h3>{item.title}</h3>
                              </div>
                              <div className="port-folio-content">
                                <h4>{item.title}</h4>
                                <p>{item.content}</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p>
                We partnered with various Brands, SME’s & Startups with a
                flexible mobile app development service package that suits and
                fits their requirements. Our experts help you to choose the best
                combination of technology, team & approach basis on the
                requirements, time, size, and budget of your project.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="slider-lifeElicit elicit-container relative new-slide montserrat service-slider">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={2000}
          showStatus={false}
        >
          <div className="row">
            <div className="col-lg-6">
              <div className="backgornd-img-set">
                <div className="img-div frent-screen">
                  <Image className=" " src={office1} alt="img" />
                </div>
                <div className="img-div back-background">
                  <Image className=" " src={bak} alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 ">
              <h4 className="text-left text-3xl leading-normal">
                <strong>
                  <span style={{ color: "rgb(14 101 189)" }}>
                    The Bulletproof
                  </span>{" "}
                  Performance Philosophy
                </strong>
              </h4>
              <p className="text-left mt-[20px] text-[17px] leading-[30px]">
                Helping athletes improve their game is what makes us feel like
                champions. Bulletproof Performance is more than your average
                training program. We offer a world class, 360° approach to get
                you playing at your best.
              </p>
              <p className="title-name text-[14px] ">
                <span>
                  <strong>Bulletproof</strong>, Volleyball is Our Passion
                </span>
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="backgornd-img-set">
                <div className="img-div frent-screen">
                  <Image className=" " src={office2} alt="img" />
                </div>
                <div className="img-div back-background">
                  <Image className=" " src={bak} alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h4 className="text-left text-3xl leading-normal">
                <strong>
                  <span style={{ color: "rgb(14 101 189)" }}>Bob Green</span> My
                  primary focus over
                </strong>
              </h4>
              <p className="text-left mt-[20px] text-[17px] leading-[30px]">
                the last 20 years has been enabling people to lead themselves
                and others. I started to learn about self-leadership and the
                leadership of others early in life. I had a single mother which
                meant I had to take care of myself while she was working two
                jobs to make ends meet. From a leadership of others perspective,
                I had my first leadership role before graduating high-school
              </p>
              <p className="title-name text-[14px]">
                <span>
                  <strong>Bob Green</strong>, What I Learned
                </span>
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Services;
