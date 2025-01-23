"use client";

import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import carrier_img from "../../components/assets/images/carrier-img.png";
import party1 from "../../components/assets/images/party1.jpg";
import party2 from "../../components/assets/images/party2.jpg";
import party3 from "../../components/assets/images/party3.jpg";
import party4 from "../../components/assets/images/party4.jpg";
import party5 from "../../components/assets/images/party5.jpg";
import hello from "../../components/assets/images/hello.png";
import training from "../../components/assets/images/training.png";
import team from "../../components/assets/images/team.png";
import reward from "../../components/assets/images/reward.png";
import culture from "../../components/assets/images/culture.png";
import activity from "../../components/assets/images/activity.png";
import Man2 from "../../components/assets/images/man-2.png";
import Man1 from "../../components/assets/images/man-1.png";
import "../../css/careers.css";
import { AiOutlineDown } from "react-icons/ai";

const Careers = () => {
  const [isOpen, setIsOpen] = useState<string | null>(null);

  const handleTerms = (section: string): void => {
    setIsOpen(isOpen === section ? null : section);
  };

  return (
    <div>
      <Head>
        <title>Build Your Career Elicit Digital | Join Our Team now </title>
        <meta
          name="title"
          content="Build Your Career Elicit Digital | Join Our Team now "
        />
        <meta
          name="keywords"
          content="Build Your Career Elicit Digital, Join Our Team now"
        />
        <meta
          name="description"
          content="Explore exciting career opportunities at Elicit Digital! Join our team and get rewarding roles that match your skills. Start your journey with us today!"
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
          content="Build Your Career Elicit Digital | Join Our Team now "
        />
        <meta
          property="og:site_name"
          content=" Elicit Digital-Web Development Company"
        />
        <meta property="og:url" content="www.elicit.digital" />
        <meta
          property="og:description"
          content="Explore exciting career opportunities at Elicit Digital! Join our team and get rewarding roles that match your skills. Start your journey with us today!"
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
          content="Build Your Career Elicit Digital | Join Our Team now "
        />
        <meta
          name="twitter:description"
          content="Explore exciting career opportunities at Elicit Digital! Join our team and get rewarding roles that match your skills. Start your journey with us today!"
        />
      </Head>

      <section className="service-header-carrier montserrat">
        <div>
          <div className="carrier_section"></div>
          <div className="company_container">
            <div className=" img_container d-flex justify-content-center ">
              <div className=" text_image ">
                <h5 className="card-title">
                  "If Opportunity doesn't Knock, Build a Door."
                </h5>
                <p className="card-text-para">-Milton Berle</p>
                <p className="card-text">
                  Join Elicit to be part of the change. Join us at our home away
                  from home where we are committed to working along with each
                  other for a common goal that is evolving constantly with the
                  latest technologies while taking utmost care of our most
                  valuable assets, our team members. Work with us and experience
                  the ‘Work-life balance’ and a happy workplace.
                </p>
              </div>
              <div className="img-fluid">
                <Image
                  src={carrier_img}
                  className=" "
                  alt="web development company"
                />
              </div>
            </div>
          </div>

          <div className="container mt-[40px]">
            <h2 className="text-3xl text-center pt-[70px] pb-10 px-0">
              Terms & Open Roles
            </h2>
            <div className="bg-[#eeeeee] px-[20px] py-[40px] my-[30px]">
              <div className="bg-[#f3f5fa] flex gap-[20px] px-[8px] py-[16px] term_and_role">
                <div className="w-[50%] flex flex-col gap-[20px]">
                  <div
                    className="bg-[white] w-[100%]"
                    onClick={() => handleTerms("php")}
                  >
                    <div className="flex align-center justify-between px-6 py-3  cursor-pointer">
                      <span className="text-[#535b7c] font-semibold text-[16px]">
                        PHP DEVELOPER
                      </span>
                      <span className="flex items-center">
                        <AiOutlineDown className="text-[22px]" />
                      </span>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-2000 ease-in-out ${
                        isOpen === "php"
                          ? "opacity-100 pb-[10px]"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul
                        className="pl-[revert]"
                        style={{ listStyle: "revert" }}
                      >
                        <li>
                          Proven experience as a PHP developer in a competitive
                          environment
                        </li>
                        <li>
                          Strong knowledge of PHP coding and web-based
                          applications
                        </li>
                        <li>
                          Good understanding of website integration and software
                          creation
                        </li>
                        <li>
                          Excellent verbal and written communication skills
                        </li>
                        <li>
                          Able to follow clear instructions according to client
                          demands
                        </li>
                        <li>Strong analytical and problem-solving skills</li>
                        <li>
                          Creative ability to produce effective solutions to
                          client problems.
                        </li>
                        <li>
                          Good team player that is enthusiastic about delivering
                          results
                        </li>
                        <li>
                          Able to work seated in front of a computer screen for
                          long hours at a time
                        </li>

                        <ul>
                          <li>
                            <a
                              href="mailto:hr@elicit.digital"
                              title="sales@elicit.digital"
                            >
                              <div>
                                <b>Email id : hr@elicit.digital</b>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </ul>
                    </div>
                  </div>

                  <div
                    className="bg-[white] w-[100%]"
                    onClick={() => handleTerms("native")}
                  >
                    <div className="flex align-center justify-between px-6 py-3  cursor-pointer">
                      <span className="text-[#535b7c] font-semibold text-[16px]">
                        REACT NATIVE
                      </span>
                      <span className="flex items-center">
                        <AiOutlineDown className="text-[24px]" />
                      </span>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-2000 ease-in-out ${
                        isOpen === "native"
                          ? "opacity-100 pb-[10px]"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul
                        className="pl-[revert]"
                        style={{ listStyle: "revert" }}
                      >
                        <li>
                          Ability to build apps and websites that are extremely
                          sensitive.
                        </li>
                        <li>Bug-finding and bug-fixing abilities.</li>
                        <li>
                          By eliminating the restriction, you can increase the
                          efficiency of a close-to-native program.
                        </li>
                        <li>Ability to retain easily understandable code.</li>
                        <li>
                          Create automation checks to make it easier to test the
                          software.
                        </li>
                        <li>
                          The opportunity to use native APIs for tight
                          integration through all frameworks.
                        </li>
                        <li>
                          The opportunity to turn a React Web App into a React
                          Native App entirely.
                        </li>
                        <li>
                          React native is being used to create new user-facing
                          functionality.
                        </li>
                        <li>
                          Creating interchangeable front-end modules and
                          repositories for potential use
                        </li>
                        <li>
                          Creating high-quality programming from prototypes and
                          wireframes
                        </li>
                        <li>
                          Elements are optimized for optimal efficiency on a
                          wide range of web-capable platforms and browsers.
                        </li>
                        <ul className="emailhr">
                          <li>
                            <a
                              href="mailto:hr@elicit.digital"
                              title="sales@elicit.digital"
                            >
                              <div>
                                <b>Email id : hr@elicit.digital</b>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </ul>
                    </div>
                  </div>

                  <div
                    className="bg-[white] w-[100%]"
                    onClick={() => handleTerms("wordpress")}
                  >
                    <div className="flex align-center justify-between px-6 py-3  cursor-pointer">
                      <span className="text-[#535b7c] font-semibold text-[16px]">
                        WORDPRESS DEVELOPER
                      </span>
                      <span className="flex items-center">
                        <AiOutlineDown className="text-[24px]" />
                      </span>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-2000 ease-in-out ${
                        isOpen === "wordpress"
                          ? "opacity-100 pb-[10PX]"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul
                        className="pl-[revert]"
                        style={{ listStyle: "revert" }}
                      >
                        <li>4 to 9 years overall work experience</li>
                        <li>
                          3+ or more years experience in WordPress development
                        </li>
                        <li>Strong in PHP development</li>
                        <li>Experience in popular WordPress plugins</li>
                        <li>Good communication skills</li>
                        <li>
                          Nice to have: Worked with JS frameworks (React.js,
                          etc.)
                        </li>
                        <ul className="emailhr">
                          <li>
                            <a
                              href="mailto:hr@elicit.digital"
                              title="sales@elicit.digital"
                            >
                              <div>
                                <b>Email id : hr@elicit.digital</b>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="  flex flex-col w-[50%] gap-[20px]">
                  <div
                    className="bg-[white] w-[100%]"
                    onClick={() => handleTerms("mean")}
                  >
                    <div className="flex align-center justify-between px-6 py-3  cursor-pointer">
                      <span className="text-[#535b7c] font-semibold text-[16px]">
                        {"MEAN ( FULL STACK )"}
                      </span>
                      <span className="flex items-center">
                        <AiOutlineDown className="text-[24px]" />
                      </span>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-2000 ease-in-out ${
                        isOpen === "mean"
                          ? "  opacity-100 pb-[10px]"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul
                        className="pl-[revert]"
                        style={{ listStyle: "revert" }}
                      >
                        <li>
                          Advanced conceptual understanding of at least one
                          Programming Language
                        </li>
                        <li>
                          Advanced conceptual understanding of one database and
                          one Operating System
                        </li>
                        <li>
                          Understanding of Software Engineering with practice in
                          at least one project
                        </li>
                        <li>
                          Ability to contribute in medium to complex tasks
                          independently
                        </li>
                        <li>
                          Exposure to Design Principles and ability to
                          understand Design Specifications independently
                        </li>
                        <li>
                          Ability to run Test Cases and scenarios as per the
                          plan
                        </li>
                        <li>
                          Ability to accept and respond to production issues and
                          coordinate with stake holders
                        </li>
                        <li>Good understanding of SDLC</li>
                        <li>Analytical abilities </li>
                        <li>Logical thinking</li>
                        <li>Awareness of latest technologies and trends</li>
                        Technical and Professional Requirements:
                        <ul>
                          <li>
                            • Primary skills:UI & Markup Languages MEAN Stack
                          </li>
                        </ul>
                        <ul className="emailhr">
                          <li>
                            <a
                              href="mailto:hr@elicit.digital"
                              title="sales@elicit.digital"
                            >
                              <div>
                                <b>Email id : hr@elicit.digital</b>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </ul>
                    </div>
                  </div>

                  <div
                    className="bg-[white] w-[100%]"
                    onClick={() => handleTerms("bde")}
                  >
                    <div className="flex align-center justify-between px-6 py-3  cursor-pointer">
                      <span className="text-[#535b7c] font-semibold text-[16px]">
                        {"BUSINESS BEVELOPMENT EXECUTIVE ( BDE )"}
                      </span>
                      <span className="flex items-center">
                        <AiOutlineDown className="text-[24px]" />
                      </span>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-2000 ease-in-out ${
                        isOpen === "bde"
                          ? "pb-[10px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul
                        className="pl-[revert]"
                        style={{ listStyle: "revert" }}
                      >
                        <li>Actively seek out new Sales Opportunities.</li>
                        <li>
                          Experience generating leads through Linkedin, Linkedin
                          Sales Navigator and similar portals.
                        </li>
                        <li>
                          Building out and maintaining a strong pipeline of
                          leads and potential new business.
                        </li>
                        <li>
                          Conduct market research to identify selling
                          possibilities.
                        </li>
                        <li>
                          Develop and manage efficient networks for Business
                          Development.
                        </li>
                        <li>
                          Maintain knowledge of all product and service
                          offerings of the company.
                        </li>
                        <li>Write new business proposals.</li>
                        <li>Keep prospective client database/CRM updated.</li>
                        <ul className="emailhr">
                          <li>
                            <a
                              href="mailto:hr@elicit.digital"
                              title="sales@elicit.digital"
                            >
                              <div>
                                <b>Email id : hr@elicit.digital</b>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </ul>
                    </div>
                  </div>

                  <div
                    className="bg-[white] w-[100%]"
                    onClick={() => handleTerms("mern")}
                  >
                    <div className="flex align-center justify-between px-6 py-3  cursor-pointer">
                      <span className="text-[#535b7c] font-semibold text-[16px]">
                        {"MERN ( FULL STACK )"}
                      </span>
                      <span className="flex items-center">
                        <AiOutlineDown className="text-[24px]" />
                      </span>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-2000 ease-in-out ${
                        isOpen === "mern"
                          ? "pb-[10px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul
                        className="pl-[revert]"
                        style={{ listStyle: "revert" }}
                      >
                        <li>
                          Design and implementation of low-latency,
                          high-availability, and performant applications
                        </li>
                        <li>Implementation of security and data protection</li>
                        <li>
                          Understanding of performance testing and optimization
                          techniques
                        </li>
                        <li>
                          Create Unit and Integration tests to ensure the
                          quality of code
                        </li>
                        <li>
                          Be responsive to change requests and feature requests
                        </li>
                        <li>
                          Write code that is cross-platform and cross-device
                          compatible
                        </li>
                        <ul className="emailhr">
                          <li>
                            <a
                              href="mailto:hr@elicit.digital"
                              title="sales@elicit.digital"
                            >
                              <div>
                                <b>Email id : hr@elicit.digital</b>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" container office_block">
            <h1 className="block-head">Life Inside Our Office</h1>
            <p className="block-para">
              We have achived success because of the skills, energy, and mindset
              of our people. And this is why we put so much emphasis on
              combining them to create the best Professionals. We attract
              creative, skilled professionals who think out-of-the-box and will
              help you grow.
            </p>

            <div className="container party_img_colarge">
              <div className="row">
                <div className=" col-lg-6 col-sm-12 col-md-12">
                  <Image
                    className="party_img5"
                    src={party5}
                    alt="ios development"
                  />
                </div>

                <div className=" col-lg-3 col-md-6 col-sm-6">
                  <div className="">
                    <Image
                      className="party_img"
                      src={party4}
                      alt="office party"
                    />
                  </div>

                  <div className="">
                    <Image
                      className="party_img"
                      src={party3}
                      alt="weekend party"
                    />
                  </div>
                </div>
                <div className=" col-lg-3 col-md-6 col-sm-6">
                  <div className="">
                    <Image
                      className="party_img"
                      src={party2}
                      alt="office weekend party"
                    />
                  </div>

                  <div className="">
                    <Image
                      className="party_img"
                      src={party1}
                      alt="weekend party"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="background_color_career montserrat">
        <div className="container">
          <div className="carrier-bottom">
            <div className=" text_colarge">
              <div className="row text_colarge_one">
                <div className="col-sm-12 col-md-12 col-lg-4 text_colarge_two">
                  <h1 className="perk_head">Perks & Benefits </h1>
                  <p className="perk_text_para">
                    At Elicit, we foster and help our team member to grow and
                    achive their goals. We Believe this approach helps us
                    succeed as a Community.
                  </p>
                  <p className="perk_text_para">
                    In addition to the work-life balance and flexible schedules,
                    we offer a variety of Perks and benefits that keep our Team
                    on the cutting edge of their field. this is for all the
                    innovators and storytellers out there.
                  </p>
                </div>

                <div className="col-sm-6 col-md-6 col-lg-4 text_colarge_two ">
                  <div className="row text_row">
                    <div className="text_column1">
                      <div className="our_benefits">
                        <Image
                          className="perk_img"
                          src={hello}
                          alt="ios development company"
                        />
                      </div>
                      <div>
                        <h3 className="perk_smallhead">5 Days a Week</h3>
                        <p className="perk_para">
                          To promote work-life balance and mental place, all
                          weekends are off.
                        </p>
                      </div>
                    </div>

                    <div className=" text_column1">
                      <div className="our_benefits">
                        <Image
                          className="perk_img"
                          src={training}
                          alt="web development company in indore"
                        />
                      </div>
                      <div>
                        <h3 className="perk_smallhead">Trainings</h3>
                        <p className="perk_para">
                          Inhence our Knowledge and skills with the help of our
                          experience team members.
                        </p>
                      </div>
                    </div>

                    <div className="text_column1">
                      <div className="our_benefits">
                        <Image
                          className="perk_img"
                          src={team}
                          alt="digital marketing company in indore"
                        />
                      </div>
                      <div>
                        <h3 className="perk_smallhead">Team Building</h3>
                        <p className="perk_para">
                          Indoor & Outdoor team Building workshop and
                          Activities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-6 col-lg-4 text_colarge_two ">
                  <div className="row text_row">
                    <div className=" text_column1">
                      <div className="our_benefits">
                        <Image
                          className="perk_img"
                          src={reward}
                          alt="ux design"
                        />
                      </div>
                      <div>
                        <h3 className="perk_smallhead">Rewards</h3>
                        <p className="perk_para">
                          get Rewarded for your hard Work, dedicated and
                          Commitment.
                        </p>
                      </div>
                    </div>

                    <div className=" text_column1">
                      <div className="our_benefits">
                        <Image
                          className="perk_img"
                          src={culture}
                          alt="ui/ux design"
                        />
                      </div>
                      <div>
                        <h3 className="perk_smallhead">
                          Flexible Work Culture
                        </h3>
                        <p className="perk_para">
                          To empower our Team Menbers will the skill to be
                          effecient in a fast-paced life.
                        </p>
                      </div>
                    </div>

                    <div className=" text_column1">
                      <div className="our_benefits">
                        <Image
                          className="perk_img"
                          src={activity}
                          alt="web developer"
                        />
                      </div>
                      <div>
                        <h3 className="perk_smallhead">
                          Recreational Activities
                        </h3>
                        <p className="perk_para">
                          Come play pool, table Tenni, cricket or anything else
                          to refresh your mind.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="background_color_career form-bg-gray pt-0 montserrat">
        <div className="container">
          <div className="career_form_container ">
            <p className="career-page-paragraph">
              Search open places that match your abilities and interest. We
              search for energetic, inquisitive, inventive and arrangement
              driven cooperative people.
            </p>

            <div className="row">
              <ul>
                <li className="circle"></li>
                <li className="circle"></li>
                <li className="circle"></li>
                <li className="circle"></li>
              </ul>
              <div className="col-sm-3 col-md-3 col-lg-3 form_bg_img text-center">
                <Image src={Man1} alt="website development company" />
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 form_bg_clr">
                <form>
                  <h1 className="side_head_work">Let's Work Together</h1>
                  <div className="form-row_carrier">
                    <div className="form-group col-sm-6">
                      <label htmlFor="inputname "></label>
                      <input
                        type="text"
                        className="form-control_carrier"
                        id="inputname"
                        placeholder="Name"
                        name="name"
                        // value={formData.name}
                        // onChange={handleChange}
                      />
                      {/* {errors.name && (
                        <span className="required_carrier">{errors.name}</span>
                      )} */}
                    </div>

                    <div className="form-group col-sm-6">
                      <label htmlFor="inputEmail"></label>
                      <input
                        type="email"
                        name="email"
                        // value={formData.email}
                        // onChange={handleChange}
                        placeholder="email"
                      />
                      {/* {errors.email && (
                        <span className="required_carrier">{errors.email}</span>
                      )} */}
                    </div>

                    <div className="form-group col-sm-6">
                      <label htmlFor="inputNumber"></label>
                      <input
                        type="text"
                        className="contact_input"
                        placeholder="Mobile"
                        aria-label="mobile"
                        name="mobileNumber"
                        // value={formData.mobileNumber}
                        // onChange={handleChanges}
                      />
                      {/* 
                      {errors.mobileNumber && (
                        <span className="required_carrier">
                          {errors.mobileNumber}
                        </span>
                      )} */}
                    </div>

                    <div className="form-group col-sm-6">
                      <label htmlFor="linkedin_profile"></label>
                      <input
                        type="text"
                        className="form-control_carrier"
                        id="linkedin_profile"
                        placeholder="Linkedin Profile"
                        // value={formData.linkdinProfile}
                        name="linkdinProfile"
                        // onChange={handleChange}
                      />
                      {/* {errors.linkdinProfile && (
                        <span className="required_carrier">
                          {errors.linkdinProfile}
                        </span>
                      )} */}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="inputAddress"></label>
                    <input
                      type="text"
                      className="form-control_subject"
                      id="inputAddress"
                      placeholder="Subject*"
                      //   value={formData.subject}
                      name="subject"
                      //   onChange={handleChange}
                    />
                    {/* {errors.subject && (
                      <span className="required_carrier">{errors.subject}</span>
                    )} */}
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control_subject"
                      type="file"
                      name="file"
                      //   onChange={(e) => handleFileChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control_text"
                      placeholder="Message*"
                      id="message"
                      //   value={formData.message}
                      name="message"
                      //   onChange={handleChange}
                      autoComplete="off"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn">
                    Apply
                  </button>
                </form>
              </div>
              <div className="col-sm-3 col-md-3 col-lg-3 form_bg_img text-center">
                <Image src={Man2} alt="android app developers" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="background_color_career pt-0 montserrat">
        <div className="container">
          <div className="thought container">
            {" "}
            <div className="carrier_slogan">
              <h2 className="carrier_slogan_head1">
                “The only way to achieve the impossible is to believe it is
                possible”
              </h2>
              <h4 className="carrier_slogan_head2">
                <span>-Charles Kingsleigh</span>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
