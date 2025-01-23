"use client";

import Head from "next/head";
import Image from "next/image";
import React from "react";
import instagram from "../../components/assets/svg/instagram-blue.svg";
import facebook from "../../components/assets/svg/facebook-blue.svg";
import elicitLogoWithoutName from "../../components/assets/images/Elicit-Logo.png";
import projectDone from "../../components/assets/images/Project-done-icon.png";
import countries from "../../components/assets/images/countries.png";
import happyCustomer from "../../components/assets/images/Happy-Customers.png";
import fullTimeEmployee from "../../components/assets/images/Full-time-employe.png";
import yearsExperience from "../../components/assets/images/Years-exp.png";
import manHoursProject from "../../components/assets/images/man-hours-project.png";
// carosel images
import office1 from "../../components/assets/images/office1cc.png";
import office2 from "../../components/assets/images/office2aa.png";
import office3 from "../../components/assets/images/office3bb.png";
import office4 from "../../components/assets/images/office4dd.png";
const images = [office1, office2, office3, office4];
// carosel images

import "../../css/about.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const AboutPage = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Web Design and Development Company | Hire Our Developers</title>
        <meta
          name="title"
          content="Web Design and Development Company | Hire Our Developers"
        />
        <meta
          name="keywords"
          content="Web Design and Development Company , Hire Our Developers, web development"
        />
        <meta
          name="description"
          content="Learn about our mission, values, and commitment to delivering excellence in web development. Explore our story and meet the passionate minds with Elicit Digital."
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
          content="Web Design and Development Company | Hire Our Developers"
        />
        <meta
          property="og:site_name"
          content=" Elicit Digital-Web Development Company"
        />
        <meta property="og:url" content="www.elicit.digital" />
        <meta
          property="og:description"
          content="Learn about our mission, values, and commitment to delivering excellence in web development. Explore our story and meet the passionate minds with Elicit Digital."
        />
        <meta
          property="og:image"
          itemProp="image"
          content="%PUBLIC_URL%/elicitlogo.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Elicit_Digital" />
        <meta name="twitter:title" content="About Us | Elicit Digital " />
        <meta
          name="twitter:description"
          content="Learn about our mission, values, and commitment to delivering excellence in web development. Explore our story and meet the passionate minds with Elicit Digital."
        />
      </Head>
      <div className="service-Aboutheader montserrat">
        <div className=" u_container u_container--main first-section-about">
          <div className="about_bgpage">
            <div className="container">
              <div className="row top-section">
                <div className="about-heading">
                  <div className="col-lg-12 col-md-12 col-sm-12 centered-section montserrat">
                    <h1 className="centered-section-head">Who We Are</h1>
                    <h3 className="description-about-para">
                      Team that empower businesses by building them high-quality
                      custom software.
                    </h3>
                    <div className="centered-section">
                      <p className="p-text">
                        We build robust solutions for startups that helps their
                        business idea real and profitable. Every project is
                        unique, and we find it amazing because only a custom
                        product can become your complete solution to digital and
                        live business challenges. For us, being coding experts
                        is like working out a muscle. The more you work, the
                        more powerful you get.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="background-color">
            <div className="container">
              <div className="row">
                <div className=" col-lg-6 col-md-12 col-sm-12 people-info-section ">
                  <div className="about-logo">
                    <div className="boxLoadingblack"></div>
                    <div className="boxLoadingyellow"></div>
                    <div className="boxLoadingreen"></div>
                    <div className="boxLoadingblue"></div>
                    <div className="boxLoadingpink"></div>
                    <Image
                      src={elicitLogoWithoutName}
                      alt="Hybrid Mobile App Development Company"
                    />
                    <p className="description-text montserrat">
                      Every year we grow stronger and bigger, with all the
                      talented individuals who want to grow themselves and
                      change the world for the better. Talent, thirst for
                      knowledge, and practice – this combination is always
                      winning, no matter what.
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 people-info-sectionNumber">
                  <div className=" Elicit-in-Numbers">
                    <div className="section-dwon">
                      <div className="boxLoadingpink"></div>
                      <div className="boxLoadingblue"></div>
                      <div className="boxLoadingyellow"></div>
                      <div className="boxLoadingblack"></div>
                      <div className="span-number two-box">
                        <Image
                          src={countries}
                          alt="Hybrid Mobile App Development Company"
                        />
                        <br />
                        <span className="number counting" data-count="160">
                          160+
                        </span>{" "}
                        <br />
                        <span className="caption">successful projects</span>
                      </div>
                      <div className="span-number one-box">
                        <Image
                          src={projectDone}
                          alt="Hybrid Mobile App Development Company"
                        />
                        <br />
                        <span className="number counter" data-target="110">
                          110+
                        </span>{" "}
                        <br />
                        <span className="caption">Experts in the team</span>
                      </div>
                      <div className="span-number tree-box">
                        <div className="center-box">
                          <Image
                            src={happyCustomer}
                            alt="Hybrid Mobile App Development Company"
                          />
                          <br />
                          <span className="number">450+</span> <br />
                          <span className="caption">Happy Customers</span>
                        </div>
                      </div>
                      <div className="span-number for-box">
                        <Image
                          src={fullTimeEmployee}
                          alt="Hybrid Mobile App Development Company"
                        />
                        <br />
                        <span className="number">50+</span> <br />
                        <span className="caption">Full time Employees</span>
                      </div>{" "}
                      <div className="span-number five-box">
                        <Image
                          src={yearsExperience}
                          alt="Hybrid Mobile App Development Company"
                        />
                        <br />
                        <span className="number">10+</span> <br />
                        <span className="caption">years Experience</span>
                      </div>
                      <div className="span-number six-box">
                        <Image
                          src={manHoursProject}
                          alt="Hybrid Mobile App Development Company"
                        />
                        <br />
                        <span className="number">4.5M+</span> <br />
                        <span className="caption">
                          Man Hours project Work Done
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="t-views">
            <div className="container">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <h1 className="t-views-head">Сlients about our team</h1>
                <h3 className="t-view-datail">
                  The whole Elicit team was very well coordinated. They offered
                  and implemented highly innovative solutions I’d never even
                  thought about. The 24alife website, and first in Slovenia
                  mobile app for health and fitness tracking were completely
                  designed and developed by the Elicit team. If you need a
                  digital product that will become #1 worldwide – you’ve found
                  your partner in crime.
                </h3>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="flex-container row">
              <div className="col-lg-6 slider-info">
                <h1>Our Life & Work</h1>
                <p>
                  Advance your abilities through our cutting edge contributions
                  that tie virtual advancing straightforwardly back to your
                  genuine vocation. Key areas of learning include
                </p>
                <p> Check our Instagram for more.</p>
                <div className="social-links-container_about flex items-center gap-[30px]">
                  <a
                    href="https://www.instagram.com/elicit.digital/"
                    target="_blank"
                    className="social-link"
                  >
                    <Image
                      src={instagram}
                      alt="Hybrid Mobile App Development Company"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/ElicitInfotech/"
                    target="_blank"
                    className="social-link"
                  >
                    <Image
                      src={facebook}
                      alt="best digital marketing company"
                    />
                  </a>

                  <a
                    href="https://in.linkedin.com/company/elicit-digital"
                    target="_blank"
                    className="social-link"
                  >
                    <i
                      className="fa fa-linkedin linkdincolor"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 img_slider">
                <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
                  <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  >
                    {images.map((image, index) => (
                      <div key={index} className="min-w-full h-[320px]">
                        <Image
                          src={image}
                          alt={`Slide ${index + 1}`}
                          className="w-[70%]"
                          priority
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
