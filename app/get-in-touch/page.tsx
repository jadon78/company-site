"use client";

import React, { useState } from "react";
import Head from "next/head";
import { IoMdCall } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import { FiMail } from "react-icons/fi";
import Image from "next/image";
import fileIcon from "../../components/assets/svg/file-icon.svg";
import skype from "../../components/assets/svg/skype.svg";
import messanger from "../../components/assets/svg/messanger.svg";
import instagram from "../../components/assets/svg/instagram-blue.svg";
import CareerPage from "../../components/assets/images/career-page.jpg";
import { Textarea } from "@nextui-org/react";
import { GetInTouchCredentials } from "@/lib/actions/auth/getInTouch";

interface FormDataType {
  fullName: string;
  company: string;
  email: string;
  mobile: number;
  projectDescription?: string;
  file?: string;
}

type ErrorType = {
  name?: string;
  email?: string;
  company?: string;
  mobileNumber?: string;
};

const GetInTouch = () => {
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [mobile, setMobile] = useState<number | "">("");

  const [email, setEmail] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    console.log("1222222222")
    event.preventDefault();

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("company", company);
    formData.append("mobile", mobile !== "" ? mobile.toString() : "");
    formData.append("email", email);
    formData.append("projectDescription", projectDescription);
    if (file) {
      formData.append("file", file.name);
    }

    let payload: FormDataType = {
      fullName: formData.get("fullName") as string,
      company: formData.get("company") as string,
      mobile: parseInt(formData.get("mobile") as string, 10) || 0,
      email: formData.get("email") as string,
      projectDescription:
        (formData.get("projectDescription") as string) || undefined,
      file: (formData.get("file") as string) || undefined,
    };
console.log(payload,"assss");
    try {
      const result = await GetInTouchCredentials(payload);

      if (result.success) {
        console.log("Form submitted successfully!");
      } else {
        console.error("Failed to submit form:");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Head>
        <title>Get in touch with Elicit Digital | Contact us now </title>
        <meta
          name="title"
          content="Get in touch with Elicit Digital | Contact us now "
        />
        <meta name="keywords" content=" Contact us now" />
        <meta
          name="description"
          content="Reach out to us at Elicit Digital through our Contact Us page. Whether you have questions, feedback, or collaboration inquiries, we're here to help. Let's connect!"
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
          content="Get in touch with Elicit Digital | Contact us now "
        />
        <meta
          property="og:site_name"
          content=" Elicit Digital-Web Development Company"
        />
        <meta property="og:url" content="www.elicit.digital" />
        <meta
          property="og:description"
          content="Reach out to us at Elicit Digital through our Contact Us page. Whether you have questions, feedback, or collaboration inquiries, we're here to help. Let's connect!"
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
          content="Get in touch with Elicit Digital | Contact us now "
        />
        <meta
          name="twitter:description"
          content="Reach out to us at Elicit Digital through our Contact Us page. Whether you have questions, feedback, or collaboration inquiries, we're here to help. Let's connect!"
        />
      </Head>

      <div className="contact">
        <div className="u_page_container-lines"></div>
        <section className="u_page_container getintouchpadding">
          <div className="row u_container u_container--main first-section">
            <div className="container  top-section ">
              <div className="row">
                {" "}
                <div className="col-lg-6 col-sm-12 col-md-12 centered-section">
                  <h1 className="montserrat">
                    Let's Create You a Great Product!
                  </h1>
                  <div className="description-get montserrat">
                    Fill out the form below and tell us what you need.
                  </div>

                  <div className="contact-form">
                    <p className="description-get montserrat">
                      Send us a message with a brief description of your
                      project. Our expert team will review it and get back to
                      you within one business day with free consultation and to
                      discuss the next steps.
                    </p>
                    <form
                      onSubmit={handleSubmit}
                      className="contact-form container poppins"
                      id="request-form"
                    >
                      <div className="contact-form-row">
                        <div className=" col-lg-6 col-sm-6 col-md-6 contact-input-container padded">
                          <input
                            type="text"
                            className="contact_input"
                            placeholder="Full Name"
                            aria-label="mobile"
                            name="name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                          />
                          {/* {errors.name && (
                            <span className="required-get">{errors.name}</span>
                          )} */}
                        </div>
                        <div className=" col-lg-6 col-md-6 col-sm-6 contact-input-container">
                          <input
                            type="text"
                            className="contact_input"
                            placeholder="Company"
                            aria-label="email"
                            name="company"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                          />
                          {/* {errors.company && (
                            <span className="required-get">
                              {errors.company}
                            </span>
                          )} */}
                        </div>
                        <div className=" inputHelper"></div>
                      </div>

                      <div className="contact-form-row">
                        <div className=" col-lg-6 col-md-6 col-sm-6 contact-input-container padded">
                          <input
                            type="number"
                            className="contact_input"
                            placeholder="Mobile"
                            aria-label="mobile"
                            name="mobileNumber"
                            value={mobile}
                            // onChange={(e) => setMobile(e.target.value)}
                            onChange={(e) =>
                              setMobile(
                                e.target.value ? parseInt(e.target.value) : ""
                              )
                            }
                          />
                          {/* {errors.mobileNumber && (
                            <span className="required-get">
                              {errors.mobileNumber}
                            </span>
                          )} */}
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 contact-input-container">
                          <input
                            type="email"
                            className="contact_input"
                            placeholder="Email"
                            aria-label="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          {/* {errors.email && (
                            <span className="required-get">{errors.email}</span>
                          )} */}
                        </div>
                        <div className="inputHelper"></div>
                      </div>

                      <div className="contact-form-row ">
                        <div className="contact-input-container">
                          <textarea
                            className="contact-input contact-textarea"
                            placeholder="Project Description"
                            rows={6}
                            name="projectDescription"
                            value={projectDescription}
                            onChange={(e) =>
                              setProjectDescription(e.target.value)
                            }
                          />
                        </div>
                        <div className="inputHelper"></div>
                      </div>

                      <div className="contact-form-row montserrat">
                        <div className="contact-input-container padded">
                          <button className="primary-button" type="submit">
                            Submit
                          </button>
                        </div>
                        <div className="contact-input-container">
                          <label className="primary-button transparent">
                            <Image
                              className="button-icon"
                              alt="file_icon"
                              src={fileIcon}
                            />
                            <input
                              className="file-input"
                              type="file"
                              name="file"
                              onChange={(e) => {
                                setFile(
                                  e.target.files ? e.target.files[0] : null
                                );
                              }}
                            />
                            <span>Attach file</span>
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 carrier-page-img ">
                  <Image src={CareerPage} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container pt-4 montserrat getintouchpadding">
          <h2 className="our_location poppins">Our Location</h2>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="contact_second_section">
                <div className="description-get">
                  Just tell us what communication channel you prefer, and we'll
                  contact you back using it. We strive to make our clients
                  comfortable from the first moments of our communication.
                </div>
                <div className="description_social">
                  Choose a chat or a messenger:
                </div>
                <div className="social-links-container-get">
                  <a
                    href="https://web.skype.com/"
                    target="/_blank"
                    className="social-link"
                  >
                    <Image src={skype} alt="skype" />
                  </a>
                  <a
                    href="https://www.facebook.com/ElicitInfotech"
                    target="/_blank"
                    className="social-link"
                  >
                    <Image src={messanger} alt="messanger" />
                  </a>
                  <a
                    href="https://www.instagram.com/elicit.digital/"
                    target="/_blank"
                    className="social-link"
                  >
                    <Image src={instagram} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="locations-section2">
                <div className="location_side">
                  <div className="contact_list_side">
                    <div className="item_side">
                      {" "}
                      <a
                        href="mailto:sales@elicit.digital"
                        title="sales@elicit.digital"
                      >
                        <div className="d-flex">
                          <div className="footer-location text-2xl text-[#f48303] mr-3 mt-[2px]">
                            <FiMail />
                          </div>
                          <div>
                            <p>sales@elicit.digital</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="item_side">
                      <div className="d-flex">
                        <div className="footer-location text-2xl text-[#f48303] mr-3 mt-[3px]">
                          <ImLocation />
                        </div>
                        <p>
                          Office Plot No. 345, 346, 3rd Floor Scheme 54 PU4,
                          Indore, Madhya Pradesh 452010
                        </p>
                      </div>
                    </div>
                    <div className="item_side">
                      {" "}
                      <a href="tel:+91 9111555876" title="+91 9111555876">
                        <div className="d-flex">
                          <div className="footer-location text-2xl text-[#f48303] mr-3 mt-[2px]">
                            <IoMdCall />
                          </div>
                          <div>
                            <p>+91 9111555876</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GetInTouch;
