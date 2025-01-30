"use client";

import Head from "next/head";
import Image from "next/image";
import React from "react";
import iconpdf from "../../components/assets/images/icon-pdf.png";
import { Carousel } from "react-responsive-carousel";
import bak from "../../components/assets/images/shape1-min.png";
import office1 from "../../components/assets/images/testimonial1.png";
import office2 from "../../components/assets/images/testimonial2.png";

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Elicit Digital Portfolio | Successful Client Projects </title>
        <meta
          name="title"
          content="Elicit Digital Portfolio | Successful Client Projects   "
        />
        <meta name="keywords" content="Elicit Digital Portfolio" />
        <meta
          name="description"
          content="Elicit Digital's portfolio showcases our diverse range of creative solutions and client testimonials. Explore our project portfolio and see how we transform ideas into apps."
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
          content="Elicit Digital Portfolio | Successful Client Projects   "
        />
        <meta
          property="og:site_name"
          content=" Elicit Digital-Web Development Company"
        />
        <meta property="og:url" content="www.elicit.digital" />
        <meta
          property="og:description"
          content="Elicit Digital's portfolio showcases our diverse range of creative solutions and client testimonials. Explore our project portfolio and see how we transform ideas into apps."
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
          content="Elicit Digital Portfolio | Successful Client Projects   "
        />
        <meta
          name="twitter:description"
          content="Elicit Digital's portfolio showcases our diverse range of creative solutions and client testimonials. Explore our project portfolio and see how we transform ideas into apps."
        />
      </Head>
      <div className="back-img-port"></div>
      <section className="slideshow" id="js-header">
        <div
          className="slideshow__slide js-slider-home-slide is-current slide1"
          data-slide={1}
        >
          <div
            className="slideshow__slide-background-parallax background-absolute js-parallax"
            data-speed={-1}
            data-position="top"
            data-target="#js-header"
          >
            <div className="slideshow__slide-background-load-wrap background-absolute">
              <div className="slideshow__slide-background-load background-absolute">
                <div className="slideshow__slide-background-wrap background-absolute">
                  <div className="slideshow__slide-background background-absolute">
                    <div className="slideshow__slide-image-wrap background-absolute">
                      <div className="slideshow__slide-image background-absolute" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="side-nav vh-for-mobile" data-view="cover">
            <ul>
              <li className="label" data-view="cover">
                <span style={{ textDecoration: "none" }}>Read More</span>
              </li>
            </ul>
          </div>
          <div className="slideshow__slide-caption">
            <div className="slideshow__slide-caption-text">
              <div
                className="container js-parallax"
                data-speed={2}
                data-position="top"
                data-target="#js-header"
              >
                <h1 className="slideshow__slide-caption-title">BULLETPROOF</h1>
                <p className="slideshow__slide-caption-content">
                  Helping athletes improve their game is what makes us feel like
                  champions. Bulletproof Performance is more than your average
                  training program. We offer a world class, 360° approach to get
                  you playing at your best. From programming tailored to your
                  season, to career advice,
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slideshow__slide js-slider-home-slide is-next slide2"
          data-slide={2}
        >
          <div
            className="slideshow__slide-background-parallax background-absolute js-parallax"
            data-speed={-1}
            data-position="top"
            data-target="#js-header"
          >
            <div className="slideshow__slide-background-load-wrap background-absolute">
              <div className="slideshow__slide-background-load background-absolute">
                <div className="slideshow__slide-background-wrap background-absolute">
                  <div className="slideshow__slide-background background-absolute">
                    <div className="slideshow__slide-image-wrap background-absolute">
                      <div className="slideshow__slide-image background-absolute" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="side-nav vh-for-mobile" data-view="cover">
            <ul>
              <li className="label" data-view="cover">
                <span style={{ textDecoration: "none" }}>Read More</span>
              </li>
            </ul>
          </div>
          <div className="slideshow__slide-caption">
            <div className="slideshow__slide-caption-text">
              <div
                className="container js-parallax"
                data-speed={2}
                data-position="top"
                data-target="#js-header"
              >
                <h1 className="slideshow__slide-caption-title">Bob Green</h1>
                <p className="slideshow__slide-caption-content">
                  My primary focus over the last 20 years has been enabling
                  people to lead themselves and others. I started to learn about
                  self-leadership and the leadership of others early in life. I
                  had a single mother which meant I had to take care of myself
                  while she was working two jobs to make ends meet. From a
                  leadership of others perspective, I had my first leadership
                  role before graduating high-school.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="c-header-home_footer">
          <div className="o-container">
            <div className="c-header-home_controls -nomobile o-button-group">
              <div
                className="js-parallax is-inview"
                data-speed={1}
                data-position="top"
                data-target="#js-header"
              >
                <button
                  className="js-slider-home-next floating-btn ripple"
                  type="button"
                >
                  <svg className="o-button_icon" role="img">
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="#arrow-next"
                    />
                  </svg>
                </button>
                <button
                  className="js-slider-home-prev floating-btn ripple"
                  type="button"
                >
                  <svg className="o-button_icon" role="img">
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="#arrow-prev"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="pagination">
          <div className="container">
            <span
              className="pagination__item js-pagination-item is-current"
              data-slide={1}
            >
              1
            </span>
            <span
              className="pagination__item js-pagination-item"
              data-slide={2}
            >
              2
            </span>
          </div>
        </div>
      </section>
      <div style={{ height: "0" }}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol
            id="arrow-prev"
            viewBox="0 0 492 492"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M198.608 246.104L382.664 62.04c5.068-5.056 7.856-11.816 7.856-19.024 0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12C361.476 2.792 354.712 0 347.504 0s-13.964 2.792-19.028 7.864L109.328 227.008c-5.084 5.08-7.868 11.868-7.848 19.084-.02 7.248 2.76 14.028 7.848 19.112l218.944 218.932c5.064 5.072 11.82 7.864 19.032 7.864 7.208 0 13.964-2.792 19.032-7.864l16.124-16.12c10.492-10.492 10.492-27.572 0-38.06L198.608 246.104z" />
          </symbol>
          <symbol
            id="arrow-next"
            viewBox="0 0 492.004 492.004"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M382.678 226.804L163.73 7.86C158.666 2.792 151.906 0 144.698 0s-13.968 2.792-19.032 7.86l-16.124 16.12c-10.492 10.504-10.492 27.576 0 38.064L293.398 245.9l-184.06 184.06c-5.064 5.068-7.86 11.824-7.86 19.028 0 7.212 2.796 13.968 7.86 19.04l16.124 16.116c5.068 5.068 11.824 7.86 19.032 7.86s13.968-2.792 19.032-7.86L382.678 265c5.076-5.084 7.864-11.872 7.848-19.088.016-7.244-2.772-14.028-7.848-19.108z" />
          </symbol>
        </svg>
      </div>
      <div className="open-pdf-btn">
        <a
          href="https://pub-8a80089ac20b462ea2e93adeeb939f18.r2.dev/company-Profile-Elicit.pdf"
          target="blank"
        >
          <button>
            <div className="iconpdf">
              {" "}
              <Image className=" " src={iconpdf} alt="img" />
            </div>
            <div className="downbox">download</div>
          </button>
        </a>
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
            <div className="col-lg-6">
              <h4 className="text-left text-3xl leading-normal">
                <strong>
                  <span style={{ color: "rgb(14 101 189)" }}>
                    The Bulletproof
                  </span>{" "}
                  Performance Philosophy
                </strong>
              </h4>
              <p className="text-left text-[17px] leading-[30px]">
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
              <p className="text-left text-[17px] leading-[30px]">
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

export default Portfolio;
