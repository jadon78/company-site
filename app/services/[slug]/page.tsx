"use client";

import React from 'react'
import { useParams } from 'next/navigation';
import Image from "next/image";
import Mobileapp from '../../../components/assets/img/mobile-app.png'

const ServiceInformation = () => {
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
    <div>
        <section className="py-20 px-4 relative bg-[#fff] overflow-hidden">
          <div className="max-w-[1400px] px-[16px] mx-auto grid md:grid-cols-2 gap-12 items-center pt-10">
            <div data-aos="fade-right" className="">
              <h3 className="text-[16px] md:text-[24px] gradient-text mb-2">
                {slug}
              </h3>
              <h2 className="text-[30px] md:text-[44px] font-bold mb-4 pb-0">
                Our Process & Approch
              </h2>
              <p className="text-gray-600 mb-6 text-[16px] md:text-[24px]">
                Upon conducting a detailed analysis on the target audience and the brand values, targeted users based on specific keywords and interests of users on google. Upon analysis, implemented intent based marketing through google ads so as to increase visibility and generate quality leads, that would eventually yield a high conversion rate.
              </p>
              <ul className="about-us-point flex  lg:flex-col flex-col md:gap-8 gap-4">
                <li className="relative flex items-center text-[16px] md:text-[24px] gap-2">Marketing Strategy</li>
                <li className="relative flex items-center text-[16px] md:text-[24px] gap-2">Technology Process</li>
              </ul>
              <button className=" mt-4 text-[16px] md:text-[34px] overflow-hidden leading-[25px] text-left bg-[#8285EE] w-[60px] h-[60px] md:w-[85px] md:h-[85px] transition-all hover:w-[180px] md:hover:w-[310px] duration-1000 flex items-center gap-5 justify-end p-4 rounded-[100px] group">
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
            <div data-aos="fade-left" className="aboutimg-box relative text-center h-[100%] flex items-center justify-center overflow-hidden">
              <div className="relative z-[99]">
                <Image
                  src={Mobileapp}
                  alt="Team meeting"
                  className="max-w-[450px] h-auto mx-auto scale-150"
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
          <div className="mx-auto px-2 relative z-[99] py-4">
            <div>
              <h4 className="text-center mb-4 p-0 gradient-text text:[16px] md:text-[24px]">Work Process</h4>
              <h4 className="text-center pb-4 p-0 text-[24px] md:text-[44px]">Our Mobile App Development Process</h4>
            </div>
            <div className="mt-[80px]">
              {/* <div className="bg-[#fff] rounded-[16px] p-4">
                <div className="flex gap-4 items-center">
                  <span className="text-[50px] font-medium text-transparent text-border-bg">01</span>
                  <h5 className="text-[20px] font-medium">Discovery and
                  Planning</h5>
                  </div>
                  <p className="text-[14px]">We understand your goals and outline the project scope and features.</p>
              </div> */}
              <div className="workprocess ">
                <div className=" max-w-[1400px] mx-auto grid grid-cols-3 gap-[100px_50px]">
                  {steps.map((step, index) => (
                    <div key={index} className="relative bg-[#fff] rounded-[16px] p-4 bisiness-domainsname">
                      <div className="z-[99] relative ">
                        <div className=" flex gap-4 items-center">
                          <span className="text-[50px] font-medium text-transparent text-border-bg">
                            {step.id}
                          </span>
                          <h5 className="text-[20px] font-medium">{step.title}</h5>
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
        <section className="bg-[#F6FBFD]">
          <div>
            <div className="text-center max-w-[580px] mx-auto">
              <h5 className="text-[44px] ">Technologies We Use</h5>
              <p className="text-[14px] text-center">Amet minim mollit non deserunt ullamco est sit aliqua dolor Velit officia est
                do amet sint Velit officia consequat duis enim.</p>
            </div>
            <div className="max-w-[1400px] max-auto py-10">
              <div className="grid">
                <div className="card-box relative max-w-[400px] text-center px-8 py-4">
                  {/* <svg className="absolute w-full left-0 top-0 "  viewBox="0 0 520 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_1512_2771)">
                      <path d="M44 70.4322C44 44.9818 67.4541 26.003 92.3446 31.3123L240.798 62.9786C253.149 65.6132 265.917 65.6189 278.271 62.9951L427.69 31.2604C452.571 25.976 476 44.9516 476 70.3877V282H44V70.4322Z" fill="white" />
                    </g>
                    <defs>
                      <filter id="filter0_d_1512_2771" x="0" y="0.372559" width="520" height="339.627" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="14" />
                        <feGaussianBlur stdDeviation="22" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1512_2771" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1512_2771" result="shape" />
                      </filter>
                    </defs>
                  </svg> */}


                  <div className="relative z-[99]">
                    <div className="bg-[#0ECFDB] rounded-[23px] inline-block px-4 py-3">
                      <svg width="39" height="65" viewBox="0 0 39 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5102 0.97998H31.977C33.8333 0.97998 35.5359 1.72107 36.7505 2.89447C37.981 4.08846 38.7235 5.71989 38.7235 7.52631V57.6685C38.7235 59.4698 37.9598 61.1218 36.7505 62.3003C35.52 63.4943 33.8386 64.2148 31.977 64.2148H7.5102C5.65385 64.2148 3.9513 63.4737 2.73671 62.3003C1.50621 61.1064 0.763672 59.4749 0.763672 57.6685V7.52631C0.763672 5.72504 1.52743 4.07302 2.73671 2.89447C3.97252 1.70049 5.65385 0.97998 7.5102 0.97998ZM6.42821 15.0299H33.0643V27.6388H6.42821V15.0299ZM20.9184 47.7101H33.0696V50.1649H20.9184V47.7101ZM6.42821 30.9685H17.6936V35.9864H6.42821V30.9685ZM20.9184 30.9583H33.0696V35.9915H20.9184V30.9583ZM20.7381 39.3367H32.8892V44.37H20.7381V39.3367ZM6.60324 39.3419H17.8687V44.3597H6.60324V39.3419ZM6.42821 47.7152H17.6936V50.1649H6.42821V47.7152ZM14.2037 23.6297H12.0397L11.7268 24.7567H9.78026L12.1087 17.9068H14.1984L16.5162 24.7567H14.5166L14.2037 23.6297ZM13.8006 22.1475L13.127 19.6875L12.4481 22.1475H13.8006ZM17.4444 17.9119H20.2819C20.8388 17.9119 21.295 17.9943 21.6397 18.1641C21.9845 18.3339 22.2709 18.5758 22.4937 18.8897C22.7164 19.2037 22.8808 19.5691 22.9816 19.9859C23.0824 20.4028 23.1354 20.8454 23.1354 21.3137C23.1354 22.0445 23.0612 22.6107 22.9074 23.0172C22.7588 23.4187 22.5467 23.7583 22.2815 24.0311C22.0163 24.3038 21.7299 24.484 21.4223 24.5766C21.0033 24.7001 20.6214 24.7619 20.2819 24.7619H17.4444V17.9119ZM19.3538 19.461V23.2025H19.8205C20.2183 23.2025 20.5047 23.151 20.6744 23.0533C20.8441 22.9555 20.9767 22.7856 21.0722 22.5386C21.1677 22.2916 21.2154 21.8953 21.2154 21.3498C21.2154 20.6241 21.1093 20.13 20.8919 19.8624C20.6797 19.5948 20.3244 19.461 19.8258 19.461H19.3538ZM24.1113 22.4974L25.9253 22.3739C25.9624 22.6981 26.0472 22.9503 26.1639 23.115C26.3602 23.3929 26.6413 23.5319 27.0072 23.5319C27.2777 23.5319 27.4899 23.4598 27.6384 23.3209C27.7869 23.1768 27.8612 23.0172 27.8612 22.8268C27.8612 22.6518 27.7922 22.4923 27.6543 22.3482C27.5164 22.2092 27.1876 22.0754 26.6784 21.9519C25.8404 21.746 25.2464 21.4681 24.8857 21.1233C24.525 20.7785 24.3447 20.3411 24.3447 19.8058C24.3447 19.4559 24.4349 19.1213 24.6205 18.8125C24.8061 18.4986 25.0819 18.2516 25.4532 18.0766C25.8245 17.8965 26.3284 17.809 26.9754 17.809C27.7657 17.809 28.365 17.9737 28.7787 18.2979C29.1924 18.6221 29.4417 19.1419 29.516 19.8521L27.718 19.9705C27.6702 19.6617 27.5695 19.4353 27.4156 19.2912C27.2618 19.1471 27.0497 19.0802 26.7792 19.0802C26.5564 19.0802 26.3867 19.1316 26.2753 19.2346C26.1639 19.3375 26.1056 19.4662 26.1056 19.6154C26.1056 19.7235 26.1533 19.8213 26.2435 19.9087C26.3337 20.0014 26.5458 20.0837 26.88 20.1609C27.7127 20.3616 28.312 20.5624 28.6727 20.7682C29.0333 20.9741 29.2985 21.2262 29.4629 21.5247C29.6274 21.8284 29.7069 22.1629 29.7069 22.5386C29.7069 22.9761 29.5955 23.3826 29.3781 23.7532C29.1553 24.1237 28.853 24.4068 28.4605 24.5972C28.068 24.7876 27.5748 24.8854 26.9754 24.8854C25.9253 24.8854 25.1986 24.659 24.7902 24.2112C24.3924 23.7532 24.1644 23.1871 24.1113 22.4974ZM19.7356 56.1709C21.2632 56.1709 22.5149 57.3649 22.5149 58.8676C22.5149 60.3498 21.2844 61.5644 19.7356 61.5644C18.2081 61.5644 16.9564 60.3704 16.9564 58.8676C16.9617 57.3855 18.1922 56.1709 19.7356 56.1709ZM2.67837 54.1226H36.7929V11.134H2.67837V54.1226Z" fill="white" />
                      </svg>
                    </div>
                    <h4 className="text-[34px]">Front-End Frameworks</h4>
                    <p className="text-center">Amet minim mollit non deserunt ullamco est sit aliqua dolor Velit officia est do amet sint
                      Velit officia consequat duis enim.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default ServiceInformation