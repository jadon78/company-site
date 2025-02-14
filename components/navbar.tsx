"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../components/assets/img/logo.png";
import { mainNavLinks } from "@/constants";
import "../css/navbar.css";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
   
  };
  useEffect(()=>{
    if (isOpen) {
      document.body.classList.add("no-scroll-body");
    } else {
      document.body.classList.remove("no-scroll-body");
    }
  },[isOpen])
  return (
    <>
      <header>
        <nav className="elicit-container border-gray-200  ">
          <div className="max-w-screen-xl flex items-center justify-between mx-auto  p-[0px_0px]">
            <div className="mt-[15px]">
              <Link
                className="inline-block text-xl leading-[inherit] whitespace-nowrap py-[0.3125rem]"
                href="/"
              >
                <Image src={logo} alt="logo" className="w-[100px]" />
              </Link>
            </div>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="mobile-header-icon inline-flex items-center p-2 bg-[#fff] w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-white focus:outline-none focus:ring-2 focus:bg-white dark:text-gray-400 dark:hover:bg-white dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded={isOpen}
              onClick={handleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5 mx-auto"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className={` mobile-header mt-[1%] ${
                isOpen === true ? " header-open" : "hidden"
              } w-full md:block md:w-auto`}
              id="navbar-default"
            >
              <button className="  closeicon">
                <span className="closeicon" onClick={() => setIsOpen(!isOpen)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 1024 1024"><path fill="#fff" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/></svg>
                </span>
              </button>
              <ul className="flex mx-auto items-center text-[white] mymenu-items">
                {mainNavLinks.map((item: any, index: number) => (
                  <li
                    key={index}
                    className={`ml-[16px] leading-[42px]  ${item.submenu ? " " : ""}`}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <Link
                      className="web-menu p-[10px_4px] xl:p-[10px_8px] text-[15px] xl:text-[18px] montserrat text-[#000] hover:text-[#1E96D3]"
                      href={item.path}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <ul className=" submenu-items">
                        {item.submenu.map((subItem: any, subIndex: number) => (
                          <li key={subIndex} className="leading-[32px]">
                            <Link
                              className="nav-link  text-[#fff]"
                              href={subItem.path}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
                <li className="ml-[16px]" onClick={() => setIsOpen(!isOpen)}>
                  {/* <div className="p-[10px_8px] pr-[0px]">
                    <Link
                      href=""
                      className=" flex gap-2 items-center bg-[#1E96D3] hover:bg-[#1E96D3] text-[18px] text-[white] hover:text-[white] rounded-[50px] p-[8px_12px] text-[18px] font-[600] "
                    >
                      Contact us
                      <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.9 23.8446L12.2531 19.4989L7.47879 23.7378C7.37258 23.8515 7.22154 23.9211 7.05398 23.9211C6.73538 23.9211 6.47813 23.6682 6.47813 23.355V14.0998L0.67955 8.67984C0.448267 8.46406 0.441187 8.10675 0.65831 7.87938C0.731471 7.80281 0.823512 7.75177 0.920273 7.72392L28.7686 0.0209084C29.0754 -0.0626182 29.3916 0.111396 29.479 0.41302C29.5238 0.566152 29.4978 0.723925 29.4223 0.851535L17.811 23.6868C17.6694 23.9652 17.3248 24.0789 17.0416 23.9397C16.9873 23.9142 16.9401 23.8817 16.9 23.8446ZM11.4177 18.7193L7.62983 15.1787V22.0836L11.4177 18.7193ZM7.14366 13.1624L25.1554 2.19724L2.20413 8.54527L7.14366 13.1624ZM27.506 2.09515L8.00271 13.9652L17.1289 22.4989L27.506 2.09515Z" fill="white" />
                      </svg>

                    </Link>
                  </div> */}
                  <div className="p-[10px_8px] pr-[0px]">
                    <Link
                      href="/contactus"
                      className=" contactus-btn relative flex gap-2 items-center bg-[#1E96D3] hover:bg-[#1E96D3] text-[18px] text-white hover:text-white rounded-[50px] p-[8px_12px] font-[600] overflow-hidden"
                    >
                      <span className="relative z-10">Contact us</span>
                      <svg
                        className="absolute left-2 top-1/2 -translate-y-1/2 transform transition-transform duration-300 ease-in-out hover:translate-x-[120%]"
                        width="30"
                        height="24"
                        viewBox="0 0 30 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.9 23.8446L12.2531 19.4989L7.47879 23.7378C7.37258 23.8515 7.22154 23.9211 7.05398 23.9211C6.73538 23.9211 6.47813 23.6682 6.47813 23.355V14.0998L0.67955 8.67984C0.448267 8.46406 0.441187 8.10675 0.65831 7.87938C0.731471 7.80281 0.823512 7.75177 0.920273 7.72392L28.7686 0.0209084C29.0754 -0.0626182 29.3916 0.111396 29.479 0.41302C29.5238 0.566152 29.4978 0.723925 29.4223 0.851535L17.811 23.6868C17.6694 23.9652 17.3248 24.0789 17.0416 23.9397C16.9873 23.9142 16.9401 23.8817 16.9 23.8446ZM11.4177 18.7193L7.62983 15.1787V22.0836L11.4177 18.7193ZM7.14366 13.1624L25.1554 2.19724L2.20413 8.54527L7.14366 13.1624ZM27.506 2.09515L8.00271 13.9652L17.1289 22.4989L27.506 2.09515Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  </div>

                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};