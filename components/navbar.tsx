"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../components/assets/logo/logo.png";
import { mainNavLinks } from "@/constants";
import "../css/navbar.css";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header>
        <nav className=" elicit-container border-gray-200  ">
          <div className="max-w-screen-xl flex items-center justify-between mx-auto  p-[0px_0px]">
            <div className="mt-[15px]">
              <Link
                className="inline-block text-xl leading-[inherit] whitespace-nowrap py-[0.3125rem]"
                href="/"
              >
                <Image src={logo} alt="logo" className="w-[170px]" />
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
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#fff"
                    width="24px"
                    height="24px"
                  >
                    <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
                  </svg> */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 1024 1024"><path fill="#fff" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/></svg>
                </span>
              </button>
              <ul className="flex mx-auto items-center text-[white] mymenu-items">
                {mainNavLinks.map((item: any, index: number) => (
                  <li
                    key={index}
                    className={`ml-[16px] leading-[42px]  ${item.submenu ? " " : ""}`}
                  >
                    <Link
                      className="web-menu p-[10px_4px] xl:p-[10px_8px] text-[15px] xl:text-[18px] montserrat text-[#000] hover:text-[#696DF3]"
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
                <li className="ml-[16px]">
                  <div className="p-[10px_8px] pr-[0px]">
                    <Link
                      href="/get-in-touch"
                      className="bg-[#696DF3] hover:bg-[#696DF3] text-[18px] text-[white] hover:text-[white] rounded-[50px] p-[8px_12px] text-[18px] font-[600] montserrat"
                    >
                     Contact us
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