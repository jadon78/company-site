import Link from "next/link";
import Logo from "../assets/logo/logo.png";
import Image from "next/image";
import { AiFillAndroid } from "react-icons/ai";
import { FaApple } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { FiMail } from "react-icons/fi";
import { IoMdCall } from "react-icons/io";
import "../../css/Footer.css";

export const Footer = () => {
  return (
    <>
      <div>
        <section className="section-footer montserrat">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-12 ">
                <p>
                  {" "}
                  <Link className="logo" href="/">
                    <Image src={Logo} alt="elicit digital logo" />
                  </Link>{" "}
                </p>
                <p>
                  Elicit has much planned for the future, working with great
                  clients and continued software development. We always welcome
                  talent to our team.
                </p>
              </div>
              <div className=" col-lg-6  col-md-11 services-footer">
                <h3 className="poppins">Services</h3>
                <ul className="footer-services">
                  <Link href="/android-app-development-services">
                    <li>
                      <span className="icon">
                        <AiFillAndroid />
                      </span>{" "}
                      Android App Development
                    </li>
                  </Link>

                  <Link href="/ios-app-development-services">
                    <li>
                      <span className="icon">
                        {" "}
                        <FaApple />{" "}
                      </span>
                      iOS App Development
                    </li>
                  </Link>

                  <Link href="/web-development-services">
                    <li>
                      <span className="icon">
                        <AiFillAndroid />
                      </span>
                      Web Development
                    </li>
                  </Link>

                  <Link href="/ui-ux-design-services">
                    <li>
                      <span className="icon">
                        <AiFillAndroid />
                      </span>
                      UI/UX Designing Services
                    </li>
                  </Link>

                  <Link href="/iot-software-development-services">
                    <li>
                      <span className="icon">
                        <FaApple />
                      </span>
                      IOT Software Development
                    </li>
                  </Link>

                  <Link href="/hybrid-app-development-services">
                    <li>
                      <span className="icon">
                        <AiFillAndroid />
                      </span>
                      <div className="footer_service_Hybrid">
                        Hybrid App Development
                      </div>
                    </li>
                  </Link>
                </ul>
              </div>
              <div className=" col-lg-3 col-md-8">
                <h3 className="poppins">Contact Us</h3>
                <ul className="contact-list">
                  <li>
                    <div className="d-flex">
                      <div className="footer-location">
                        <ImLocation />
                      </div>
                      <p>
                        Office Plot No. 345, 346, <br />
                        Floor : 3 Scheme 54 PU4, Indore, Madhya Pradesh 452010
                      </p>
                    </div>
                  </li>
                  <li>
                    <a
                      href="mailto:sales@elicit.digital"
                      title="sales@elicit.digital"
                    >
                      <div className="d-flex">
                        <div className="footer-location">
                          <FiMail />
                        </div>
                        <div>
                          <p>sales@elicit.digital</p>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a href="tel:9111555876" title="+91 9111555876">
                      <div className="d-flex">
                        <div className="footer-location">
                          <IoMdCall />
                        </div>
                        <div>
                          <p>+919111555876</p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="socile-media-icons-custom social-medias">
              <a
                href="https://www.linkedin.com/company/elicit-digital/"
                target="/_blank"
                className="linked"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
                    fill="white"
                  />
                </svg>{" "}
              </a>
              <a
                href="https://www.instagram.com/elicit.digital/"
                target="/_blank"
                className="insta"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 11C3 7.229 3 5.343 4.172 4.172C5.344 3.001 7.229 3 11 3H13C16.771 3 18.657 3 19.828 4.172C20.999 5.344 21 7.229 21 11V13C21 16.771 21 18.657 19.828 19.828C18.656 20.999 16.771 21 13 21H11C7.229 21 5.343 21 4.172 19.828C3.001 18.656 3 16.771 3 13V11Z"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <path
                      d="M16.5 9C17.3284 9 18 8.32843 18 7.5C18 6.67157 17.3284 6 16.5 6C15.6716 6 15 6.67157 15 7.5C15 8.32843 15.6716 9 16.5 9Z"
                      fill="white"
                    />
                    <path
                      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@elicitdigital"
                target="/_blank"
                className="youtube"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z"
                    fill="white"
                  />
                </svg>
              </a>

              <a
                href="https://in.pinterest.com/elicitdigital/"
                target="/_blank"
                className="pinterest"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 16.006 4.356 19.462 7.758 21.058L10.048 10.292C10.1067 10.0362 10.2636 9.81367 10.4848 9.6725C10.7061 9.53132 10.974 9.4828 11.2307 9.5374C11.4874 9.592 11.7124 9.74535 11.8571 9.96435C12.0018 10.1833 12.0545 10.4504 12.004 10.708C11.73 12 11.49 12.5 11.501 13.1C11.518 14.04 11.774 14.542 12.022 14.802C12.275 15.067 12.64 15.21 13.117 15.202C13.604 15.192 14.155 15.021 14.643 14.713C15.592 14.117 16 13.095 16 12C15.9993 11.4058 15.8663 10.8191 15.6105 10.2828C15.3547 9.74639 14.9827 9.27374 14.5213 8.89917C14.06 8.5246 13.5211 8.25752 12.9436 8.11734C12.3661 7.97717 11.7647 7.96741 11.183 8.08879C10.6013 8.21017 10.0539 8.45963 9.58067 8.81905C9.10745 9.17846 8.72025 9.6388 8.44722 10.1666C8.17419 10.6944 8.02218 11.2764 8.00225 11.8703C7.98232 12.4642 8.09497 13.0551 8.332 13.6C8.42864 13.8413 8.42756 14.1107 8.32898 14.3511C8.2304 14.5916 8.04207 14.7843 7.80389 14.8883C7.56572 14.9923 7.2964 14.9995 7.05301 14.9083C6.80962 14.8172 6.61128 14.6349 6.5 14.4C6.10192 13.4869 5.93742 12.4891 6.02133 11.4966C6.10524 10.5041 6.43494 9.54806 6.98066 8.7148C7.52639 7.88153 8.27098 7.19724 9.14726 6.72365C10.0235 6.25006 11.0039 6.00208 12 6.00208C12.9961 6.00208 13.9765 6.25006 14.8527 6.72365C15.729 7.19724 16.4736 7.88153 17.0193 8.7148C17.5651 9.54806 17.8948 10.5041 17.9787 11.4966C18.0626 12.4891 17.8981 13.4869 17.5 14.4C17.132 15.248 16.46 15.934 15.708 16.407C14.953 16.882 14.051 17.186 13.153 17.202C12.334 17.217 11.481 16.99 10.794 16.394L9.66 21.726C10.41 21.906 11.194 22.001 11.999 22.001L12 22Z"
                    fill="white"
                  />
                </svg>
              </a>

              <a
                href="https://twitter.com/elicitdigital"
                target="/_blank"
                className="twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ fill: "#fff", width: "18px" }}
                  viewBox="0 0 512 512"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/ElicitInfotech"
                target="/_blank"
                className="facebook"
              >
                <svg
                  width="10"
                  height="18"
                  viewBox="0 0 11 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
            <div className="row copyright-card copyright-section">
              <div className="col-lg-6 copy-right2">
                Copyright © <span>{new Date().getFullYear()}</span>{" "}
                Elicitdigital | All Rights Reserved.
              </div>
              <div className="col-lg-6 copy-right2 text-right privacy-T-C">
                <span className="t-c-border">
                  <Link
                    href="/terms-and-conditions"
                    className="text-white mr-2"
                  >
                    Terms and Conditions
                  </Link>
                </span>

                <span>
                  <Link href="/privacy-policy" className="text-white mr-2">
                    Privacy Policy
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <div className="footer_container text-white relative bg-cover pt-[125px] pb-[15px] px-0">
        <div className="max-w-[1140px] mx-[auto] px-[15px]">
          <div className="flex flex-wrap lg:gap-0 gap-[10px] w-full">
            <div className="lg:w-[25%] w-full px-[15px] montserrat">
              <Link href="/">
                <Image
                  src={Logo}
                  className="w-[170px]"
                  alt="elicit digital logo"
                />
              </Link>

              <p className="pt-[15px] text-[14px] text-white m-0 text-left leading-normal ">
                Elicit has much planned for the future, working with great
                clients and continued software development. We always welcome
                talent to our team.
              </p>
            </div>

            <div className="lg:w-[50%] w-full px-[15px]">
              <h3 className="text-[26px] font-[600] text-[white] pb-[15px] poppins">
                Services
              </h3>
              <ul className="footer_service_list text-white montserrat">
                <Link href="/android-app-development-services">
                  <li>
                    <span>
                      <AiFillAndroid />
                    </span>
                    Android App Development
                  </li>
                </Link>

                <Link href="/ios-app-development-services">
                  <li>
                    <span>
                      {" "}
                      <FaApple />{" "}
                    </span>
                    iOS App Development
                  </li>
                </Link>

                <Link href="/web-development-services">
                  <li>
                    <span>
                      <AiFillAndroid />
                    </span>
                    Web Development
                  </li>
                </Link>

                <Link href="/ui-ux-design-services">
                  <li>
                    <span>
                      <AiFillAndroid />
                    </span>
                    UI/UX Designing Services
                  </li>
                </Link>

                <Link href="/iot-software-development-services">
                  <li>
                    <span>
                      <FaApple />
                    </span>
                    IOT Software Development
                  </li>
                </Link>

                <Link href="/hybrid-app-development-services">
                  <li>
                    <span>
                      <AiFillAndroid />
                    </span>
                    <div className="footer_service_Hybrid">
                      Hybrid App Development
                    </div>
                  </li>
                </Link>
              </ul>
            </div>

            <div className="lg:w-[25%] w-full px-[15px]">
              <div>
                <h3 className="text-[26px] font-semibold text-[white] pb-[15px] poppins">
                  Contact Us
                </h3>
                <ul className="montserrat">
                  <li>
                    <div className="d-flex">
                      <div className="text-2xl text-[#f48303] mr-4">
                        <ImLocation />
                      </div>
                      <p className="text-[white] text-[14px]">
                        Office Plot No. 345, 346, <br />
                        Floor : 3 Scheme 54 PU4, Indore, Madhya Pradesh 452010
                      </p>
                    </div>
                  </li>
                  <li>
                    <a
                      href="mailto:sales@elicit.digital"
                      title="sales@elicit.digital"
                    >
                      <div className="d-flex">
                        <div className="text-2xl text-[#f48303] mr-4">
                          <FiMail />
                        </div>
                        <div>
                          <p className="text-[white] text-[14px]">
                            sales@elicit.digital
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a href="tel:9111555876" title="+91 9111555876">
                      <div className="d-flex">
                        <div className="text-2xl text-[#f48303] mr-4">
                          <IoMdCall />
                        </div>
                        <div>
                          <p className="text-[white] text-[14px]">
                            +919111555876
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap  pl-[10px] pr-0 pt-[30px] pb-[12px] montserrat">
            <a
              href="https://www.linkedin.com/company/elicit-digital/"
              target="/_blank"
              className="social_icons linked_hover"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/elicit.digital/"
              target="/_blank"
              className="social_icons"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 11C3 7.229 3 5.343 4.172 4.172C5.344 3.001 7.229 3 11 3H13C16.771 3 18.657 3 19.828 4.172C20.999 5.344 21 7.229 21 11V13C21 16.771 21 18.657 19.828 19.828C18.656 20.999 16.771 21 13 21H11C7.229 21 5.343 21 4.172 19.828C3.001 18.656 3 16.771 3 13V11Z"
                    stroke="white"
                    stroke-width="2"
                  />
                  <path
                    d="M16.5 9C17.3284 9 18 8.32843 18 7.5C18 6.67157 17.3284 6 16.5 6C15.6716 6 15 6.67157 15 7.5C15 8.32843 15.6716 9 16.5 9Z"
                    fill="white"
                  />
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="white"
                    stroke-width="2"
                  />
                </svg>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@elicitdigital"
              target="/_blank"
              className="social_icons"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="https://in.pinterest.com/elicitdigital/"
              target="/_blank"
              className="social_icons"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 16.006 4.356 19.462 7.758 21.058L10.048 10.292C10.1067 10.0362 10.2636 9.81367 10.4848 9.6725C10.7061 9.53132 10.974 9.4828 11.2307 9.5374C11.4874 9.592 11.7124 9.74535 11.8571 9.96435C12.0018 10.1833 12.0545 10.4504 12.004 10.708C11.73 12 11.49 12.5 11.501 13.1C11.518 14.04 11.774 14.542 12.022 14.802C12.275 15.067 12.64 15.21 13.117 15.202C13.604 15.192 14.155 15.021 14.643 14.713C15.592 14.117 16 13.095 16 12C15.9993 11.4058 15.8663 10.8191 15.6105 10.2828C15.3547 9.74639 14.9827 9.27374 14.5213 8.89917C14.06 8.5246 13.5211 8.25752 12.9436 8.11734C12.3661 7.97717 11.7647 7.96741 11.183 8.08879C10.6013 8.21017 10.0539 8.45963 9.58067 8.81905C9.10745 9.17846 8.72025 9.6388 8.44722 10.1666C8.17419 10.6944 8.02218 11.2764 8.00225 11.8703C7.98232 12.4642 8.09497 13.0551 8.332 13.6C8.42864 13.8413 8.42756 14.1107 8.32898 14.3511C8.2304 14.5916 8.04207 14.7843 7.80389 14.8883C7.56572 14.9923 7.2964 14.9995 7.05301 14.9083C6.80962 14.8172 6.61128 14.6349 6.5 14.4C6.10192 13.4869 5.93742 12.4891 6.02133 11.4966C6.10524 10.5041 6.43494 9.54806 6.98066 8.7148C7.52639 7.88153 8.27098 7.19724 9.14726 6.72365C10.0235 6.25006 11.0039 6.00208 12 6.00208C12.9961 6.00208 13.9765 6.25006 14.8527 6.72365C15.729 7.19724 16.4736 7.88153 17.0193 8.7148C17.5651 9.54806 17.8948 10.5041 17.9787 11.4966C18.0626 12.4891 17.8981 13.4869 17.5 14.4C17.132 15.248 16.46 15.934 15.708 16.407C14.953 16.882 14.051 17.186 13.153 17.202C12.334 17.217 11.481 16.99 10.794 16.394L9.66 21.726C10.41 21.906 11.194 22.001 11.999 22.001L12 22Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com/elicitdigital"
              target="/_blank"
              className="social_icons"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: "#fff", width: "18px" }}
                viewBox="0 0 512 512"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/ElicitInfotech"
              target="/_blank"
              className="social_icons"
            >
              <svg
                width="10"
                height="18"
                viewBox="0 0 11 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>

          <div className="flex montserrat flex-wrap text-white mt-2.5 p-[25px_23px_0px_0px] border-t-[rgb(119,119,119)] border-t border-solid">
            <div className="text-[grey]  pl-0">
              Copyright © <span>{new Date().getFullYear()}</span> Elicitdigital
              | All Rights Reserved.
            </div>
            <div className=" ml-auto">
              <span className=" mr-[10px] border-r-[#ddd] border-r border-solid pr-[10px] ">
                <Link
                  href="/terms-and-conditions"
                  className="text-[white] link_hover"
                >
                  Terms and Conditions
                </Link>
              </span>

              <span>
                <Link
                  href="/privacy-policy"
                  className="text-[white] link_hover"
                >
                  Privacy Policy
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
