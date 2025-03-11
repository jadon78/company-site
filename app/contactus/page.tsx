"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Square from "../../components/assets/img/bg-square.png";
import Contact from "../../components/assets/img/contactus.png";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
const ContactUs = () => {
    return (<>
        <div className="mt-[90px]">
            <section className="relative h-[300px] sm:h-[500px] md:h-[700px] flex items-center justify-center text-center text-white p-0 overflow-hidden ">
                <svg className="absolute bottom-[0] md:bottom-[-100px] w-full left-0 z-[1] "
                    version="1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 1600 900"
                    preserveAspectRatio="xMidYMax slice"
                // className="w-full h-full"
                >
                    <defs>
                        <linearGradient id="bg">
                            <stop offset="0%" stopColor="rgba(226, 226, 226, 0.8)" />
                            <stop offset="50%" stopColor="rgba(255, 255, 255, 1)" />
                            <stop offset="100%" stopColor="rgba(206, 206, 206, 0.6)" />
                        </linearGradient>
                        <path
                            id="wave"
                            fill="url(#bg)"
                            d="M-363.852,502.589c0,0,236.988-41.997,505.475,0s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
                        />
                    </defs>
                    <g>
                        <use xlinkHref="#wave" opacity="0.3">
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                dur="4s"
                                calcMode="spline"
                                values="270 230; -334 180; 270 230"
                                keyTimes="0; .5; 1"
                                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                repeatCount="indefinite"
                            />
                        </use>
                        <use xlinkHref="#wave" opacity="0.6">
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                dur="8s"
                                calcMode="spline"
                                values="-270 230;243 220;-270 230"
                                keyTimes="0; .6; 1"
                                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                repeatCount="indefinite"
                            />
                        </use>
                        <use xlinkHref="#wave" opacity="0.9">
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                dur="6s"
                                calcMode="spline"
                                values="0 230;-140 200;0 230"
                                keyTimes="0; .4; 1"
                                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                repeatCount="indefinite"
                            />
                        </use>
                    </g>
                </svg>
                <div className="contact-us-bg bg-cover bg-center w-full h-full flex ">
                    <div className="absolute inset-0 bg-cover bg-center">
                        <div className="absolute inset-0 bg-black/60" />
                    </div>
                    <div className="relative z-10 max-w-[860px] mx-auto px-4 m-auto">
                        <h1 className="text-4xl mb-[80px]  font-[700] leading-[95px] md:text-[72px] font-bold text-white">
                            Contact Us
                        </h1>
                    </div>
                </div>
            </section>
            <div>
                <div className="mx-auto max-w-[1200px] p-2 md:p-6 lg:p-8 my-6">
                    <div className="rounded-xl overflow-hidden shadow-[1px_4px_17px_2px_#00000038] flex flex-col md:flex-row p-2">
                        <div className="bg-[#1E96D3] text-white md:w-[45%] overflow-hidden relative p-[16px] md:p-[40px] rounded-[16px] flex flex-col justify-between md:min-h-[600px] ">
                            <Image src={Square} alt="" className="absolute top-[-130px] left-[-50px] w-[280px]" />
                            <Image src={Contact} alt="" className="z-[0] absolute right-[-0px] bottom-[-0px] w-[280px] opacity-[35%] w-[40%]" />
                            <div className="space-y-0">
                                <h2 className="text-[24px] font-bold p-0 my-[0] text-white">Contact Information</h2>
                                <p className="text-white/80 text-[18px]  p-0 mt-[0]">Say something to start a live chat!</p>
                            </div>
                            <div className="md:space-y-[50px] space-y-[20px] mt-[10px] z-[1]">
                                <div className="flex items-center space-x-4">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.0002 10.999H22.0002C22.0002 5.869 18.1272 2 12.9902 2V4C17.0522 4 20.0002 6.943 20.0002 10.999Z" fill="white" />
                                        <path d="M12.9998 7.99999C15.1028 7.99999 15.9998 8.89699 15.9998 11H17.9998C17.9998 7.77499 16.2248 5.99999 12.9998 5.99999V7.99999ZM16.4218 13.443C16.2296 13.2683 15.9771 13.1752 15.7176 13.1832C15.4581 13.1912 15.2118 13.2998 15.0308 13.486L12.6378 15.947C12.0618 15.837 10.9038 15.476 9.71179 14.287C8.51979 13.094 8.15879 11.933 8.05179 11.361L10.5108 8.96699C10.6972 8.78612 10.8059 8.53982 10.814 8.2802C10.822 8.02059 10.7287 7.76804 10.5538 7.57599L6.85879 3.51299C6.68384 3.32035 6.44067 3.2035 6.18095 3.18725C5.92122 3.17101 5.66539 3.25665 5.46779 3.42599L3.29779 5.28699C3.1249 5.46051 3.02171 5.69145 3.00779 5.93599C2.99279 6.18599 2.70679 12.108 7.29879 16.702C11.3048 20.707 16.3228 21 17.7048 21C17.9068 21 18.0308 20.994 18.0638 20.992C18.3083 20.9783 18.5391 20.8747 18.7118 20.701L20.5718 18.53C20.7413 18.3325 20.8271 18.0768 20.811 17.817C20.795 17.5573 20.6783 17.3141 20.4858 17.139L16.4218 13.443Z" fill="white" />
                                    </svg>

                                    <span className="text-[16px]">+1012 3456 789</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 4H2V20H22V4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="white" />
                                    </svg>

                                    <span className="text-[16px]">demo@gmail.com</span>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 1.5C9.81276 1.50258 7.71584 2.3726 6.16923 3.91922C4.62261 5.46584 3.75259 7.56276 3.75001 9.75C3.74739 11.5374 4.33124 13.2763 5.41201 14.7C5.41201 14.7 5.63701 14.9963 5.67376 15.039L12 22.5L18.3293 15.0353C18.3623 14.9955 18.588 14.7 18.588 14.7L18.5888 14.6978C19.669 13.2747 20.2526 11.5366 20.25 9.75C20.2474 7.56276 19.3774 5.46584 17.8308 3.91922C16.2842 2.3726 14.1873 1.50258 12 1.5ZM12 12.75C11.4067 12.75 10.8266 12.5741 10.3333 12.2444C9.83995 11.9148 9.45543 11.4462 9.22837 10.8981C9.00131 10.3499 8.9419 9.74667 9.05765 9.16473C9.17341 8.58279 9.45913 8.04824 9.87869 7.62868C10.2982 7.20912 10.8328 6.9234 11.4147 6.80764C11.9967 6.69189 12.5999 6.7513 13.1481 6.97836C13.6962 7.20542 14.1648 7.58994 14.4944 8.08329C14.8241 8.57664 15 9.15666 15 9.75C14.999 10.5453 14.6826 11.3078 14.1202 11.8702C13.5578 12.4326 12.7954 12.749 12 12.75Z" fill="white" />
                                    </svg>

                                    <span className="text-[15px] sm:text-[16px]">
                                        132 Dartmouth Street Boston,
                                        <br />
                                        Massachusetts 02156 United States
                                    </span>
                                </div>
                            </div>
                            <div className="flex space-x-[10px] pt-12 z-[1]">
                                <a href="#" className="p-2 w-[30px] h-[30px] bg-white flex items-center justify-center rounded-full hover:bg-white/20 transition-colors">
                                    <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.6985 0.829529C11.7258 0.439129 10.6995 0.160494 9.64506 0.000569545C9.63551 -0.000837589 9.62569 0.000377705 9.61696 0.00404837C9.60823 0.00771903 9.60102 0.0136648 9.59631 0.021068C9.46412 0.226053 9.31787 0.494173 9.21569 0.704078C8.07908 0.553216 6.92295 0.553216 5.78635 0.704078C5.67236 0.470248 5.54341 0.242217 5.4001 0.021068C5.39529 0.0137459 5.38806 0.00786861 5.37936 0.00420974C5.37066 0.000550877 5.36089 -0.000718153 5.35135 0.000569545C4.29668 0.159638 3.27012 0.438418 2.29795 0.829529C2.28963 0.832306 2.28267 0.837522 2.27826 0.844288C0.333905 3.38528 -0.199527 5.86396 0.0620327 8.31148C0.0629702 8.32296 0.0714076 8.33444 0.08172 8.34182C1.21395 9.07535 2.48037 9.63541 3.82699 9.9981C3.8365 10.0007 3.84672 10.0006 3.85616 9.99783C3.8656 9.99502 3.87377 9.98966 3.87949 9.98252C4.16824 9.63815 4.42511 9.27491 4.64636 8.89282C4.65097 8.88495 4.65255 8.87599 4.65086 8.86727C4.64917 8.85855 4.6443 8.85054 4.63698 8.84444C4.63214 8.84044 4.62639 8.83737 4.62011 8.83542C4.2162 8.69966 3.82502 8.53654 3.45012 8.34756C3.43965 8.34237 3.43186 8.33386 3.42837 8.32378C3.42488 8.31371 3.42596 8.30285 3.43137 8.29344C3.43456 8.28734 3.43939 8.282 3.44543 8.27787C3.52418 8.22621 3.60293 8.17209 3.67793 8.11798C3.68456 8.11332 3.69251 8.11032 3.70093 8.10931C3.70935 8.1083 3.71793 8.10931 3.72574 8.11224C6.18103 9.09289 8.83882 9.09289 11.2641 8.11224C11.2722 8.10917 11.2811 8.10808 11.2899 8.1091C11.2986 8.11011 11.3069 8.11318 11.3138 8.11798C11.3888 8.17209 11.4675 8.22621 11.5463 8.27787C11.5527 8.28194 11.5578 8.28734 11.5612 8.29358C11.5646 8.29981 11.5662 8.30669 11.5658 8.31359C11.5655 8.3205 11.5631 8.32722 11.5591 8.33314C11.555 8.33907 11.5493 8.34402 11.5425 8.34756C11.1685 8.53827 10.7768 8.70119 10.3716 8.83461C10.3651 8.83665 10.3593 8.83992 10.3544 8.84417C10.3496 8.84842 10.3458 8.85355 10.3435 8.8592C10.3413 8.86468 10.3405 8.87049 10.3409 8.87627C10.3414 8.88205 10.3432 8.88768 10.3463 8.89282C10.5713 9.27409 10.8291 9.63815 11.1122 9.98252C11.1179 9.98966 11.1261 9.99502 11.1356 9.99783C11.145 10.0006 11.1552 10.0007 11.1647 9.9981C12.5136 9.63653 13.7821 9.07641 14.9156 8.34182C14.9213 8.33838 14.926 8.33387 14.9294 8.32862C14.9328 8.32337 14.9349 8.31751 14.9353 8.31148C15.2484 5.48187 14.4113 3.02369 12.7172 0.845108C12.7155 0.84151 12.713 0.838264 12.7097 0.835581C12.7065 0.832897 12.7027 0.830836 12.6985 0.829529ZM5.01292 6.82083C4.27324 6.82083 3.66481 6.2272 3.66481 5.49909C3.66481 4.77016 4.26199 4.17652 5.01292 4.17652C5.76947 4.17652 6.37228 4.77508 6.36103 5.49909C6.36103 6.2272 5.76385 6.82083 5.01292 6.82083ZM9.99662 6.82083C9.25787 6.82083 8.64851 6.2272 8.64851 5.49909C8.64851 4.77016 9.24569 4.17652 9.99662 4.17652C10.7532 4.17652 11.3569 4.77508 11.3447 5.49909C11.3447 6.2272 10.7532 6.82083 9.99662 6.82083Z" fill="#1E96D3" />
                                    </svg>

                                </a>
                                <a href="#" className="p-2 w-[30px] h-[30px] bg-white flex items-center justify-center rounded-full hover:bg-white/20 transition-colors">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.40795 0.045C5.20773 0.00818181 5.46273 0 7.5 0C9.53727 0 9.79227 0.00886363 10.5914 0.045C11.3905 0.0811364 11.9359 0.208636 12.4132 0.393409C12.913 0.582273 13.3664 0.8775 13.7414 1.25932C14.1232 1.63364 14.4177 2.08636 14.6059 2.58682C14.7914 3.06409 14.9182 3.60955 14.955 4.40727C14.9918 5.20841 15 5.46341 15 7.5C15 9.53727 14.9911 9.79227 14.955 10.592C14.9189 11.3898 14.7914 11.9352 14.6059 12.4125C14.4177 12.913 14.1227 13.3665 13.7414 13.7414C13.3664 14.1232 12.913 14.4177 12.4132 14.6059C11.9359 14.7914 11.3905 14.9182 10.5927 14.955C9.79227 14.9918 9.53727 15 7.5 15C5.46273 15 5.20773 14.9911 4.40795 14.955C3.61023 14.9189 3.06477 14.7914 2.5875 14.6059C2.08699 14.4177 1.63351 14.1227 1.25864 13.7414C0.877077 13.3668 0.581805 12.9136 0.393409 12.4132C0.208636 11.9359 0.0818182 11.3905 0.045 10.5927C0.00818181 9.79159 0 9.53659 0 7.5C0 5.46273 0.00886363 5.20773 0.045 4.40864C0.0811364 3.60955 0.208636 3.06409 0.393409 2.58682C0.582084 2.08642 0.877581 1.63317 1.25932 1.25864C1.63366 0.87716 2.08669 0.581893 2.58682 0.393409C3.06409 0.208636 3.61023 0.0818182 4.40795 0.045ZM10.5307 1.395C9.73977 1.35886 9.5025 1.35136 7.5 1.35136C5.4975 1.35136 5.26023 1.35886 4.46932 1.395C3.73773 1.42841 3.34091 1.55045 3.07636 1.65341C2.72659 1.78977 2.47636 1.95136 2.21386 2.21386C1.96503 2.45594 1.77353 2.75065 1.65341 3.07636C1.55045 3.34091 1.42841 3.73773 1.395 4.46932C1.35886 5.26023 1.35136 5.4975 1.35136 7.5C1.35136 9.5025 1.35886 9.73977 1.395 10.5307C1.42841 11.2623 1.55045 11.6591 1.65341 11.9236C1.77341 12.2489 1.965 12.5441 2.21386 12.7861C2.45591 13.035 2.75114 13.2266 3.07636 13.3466C3.34091 13.4495 3.73773 13.5716 4.46932 13.605C5.26023 13.6411 5.49682 13.6486 7.5 13.6486C9.50318 13.6486 9.73977 13.6411 10.5307 13.605C11.2623 13.5716 11.6591 13.4495 11.9236 13.3466C12.2734 13.2102 12.5236 13.0486 12.7861 12.7861C13.035 12.5441 13.2266 12.2489 13.3466 11.9236C13.4495 11.6591 13.5716 11.2623 13.605 10.5307C13.6411 9.73977 13.6486 9.5025 13.6486 7.5C13.6486 5.4975 13.6411 5.26023 13.605 4.46932C13.5716 3.73773 13.4495 3.34091 13.3466 3.07636C13.2102 2.72659 13.0486 2.47636 12.7861 2.21386C12.544 1.96505 12.2493 1.77355 11.9236 1.65341C11.6591 1.55045 11.2623 1.42841 10.5307 1.395ZM6.54205 9.81205C7.07704 10.0347 7.67276 10.0648 8.22745 9.89708C8.78214 9.72936 9.2614 9.37426 9.58337 8.89244C9.90534 8.41062 10.05 7.83196 9.99276 7.2553C9.93548 6.67864 9.67978 6.13975 9.26932 5.73068C9.00766 5.46919 8.69128 5.26896 8.34295 5.14442C7.99463 5.01987 7.62302 4.97411 7.25488 5.01042C6.88675 5.04673 6.53124 5.16421 6.21396 5.35441C5.89667 5.5446 5.62551 5.80278 5.41998 6.11035C5.21445 6.41793 5.07967 6.76724 5.02535 7.13316C4.97103 7.49907 4.99851 7.87247 5.10582 8.22649C5.21313 8.5805 5.3976 8.90633 5.64595 9.18049C5.89429 9.45466 6.20034 9.67035 6.54205 9.81205ZM4.77409 4.77409C5.13206 4.41612 5.55704 4.13216 6.02475 3.93843C6.49246 3.7447 6.99375 3.64498 7.5 3.64498C8.00625 3.64498 8.50754 3.7447 8.97525 3.93843C9.44296 4.13216 9.86794 4.41612 10.2259 4.77409C10.5839 5.13206 10.8678 5.55704 11.0616 6.02475C11.2553 6.49246 11.355 6.99375 11.355 7.5C11.355 8.00625 11.2553 8.50754 11.0616 8.97525C10.8678 9.44296 10.5839 9.86794 10.2259 10.2259C9.50295 10.9489 8.52241 11.355 7.5 11.355C6.47759 11.355 5.49705 10.9489 4.77409 10.2259C4.05113 9.50295 3.64498 8.52241 3.64498 7.5C3.64498 6.47759 4.05113 5.49705 4.77409 4.77409ZM12.21 4.21909C12.2987 4.13541 12.3697 4.03478 12.4188 3.92316C12.468 3.81155 12.4942 3.69121 12.496 3.56927C12.4977 3.44734 12.475 3.32628 12.4292 3.21328C12.3833 3.10028 12.3153 2.99762 12.2291 2.91139C12.1428 2.82516 12.0402 2.75711 11.9272 2.71126C11.8142 2.66542 11.6931 2.64271 11.5712 2.64449C11.4492 2.64627 11.3289 2.67249 11.2173 2.72161C11.1057 2.77073 11.005 2.84175 10.9214 2.93045C10.7586 3.10297 10.6695 3.33213 10.673 3.56927C10.6764 3.80641 10.7722 4.03287 10.9399 4.20057C11.1076 4.36828 11.334 4.46402 11.5712 4.46748C11.8083 4.47093 12.0375 4.38183 12.21 4.21909Z" fill="#1E96D3" />
                                    </svg>

                                </a>
                                <a href="#" className="p-2 w-[30px] h-[30px] bg-white flex items-center justify-center rounded-full hover:bg-white/20 transition-colors">
                                    <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.396 19H6.396V10.99H10L10.396 7.01H6.396V5C6.396 4.73478 6.50136 4.48043 6.68889 4.29289C6.87643 4.10536 7.13078 4 7.396 4H10.396V0H7.396C6.06992 0 4.79815 0.526784 3.86047 1.46447C2.92278 2.40215 2.396 3.67392 2.396 5V7.01H0.396L0 10.99H2.396V19Z" fill="#1E96D3" />
                                    </svg>

                                </a>
                                <a href="#" className="p-2 w-[30px] h-[30px] bg-white flex items-center justify-center rounded-full hover:bg-white/20 transition-colors">
                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.20508 1.75002C3.20488 2.14784 3.04665 2.52929 2.76521 2.81046C2.48376 3.09162 2.10215 3.24947 1.70433 3.24927C1.3065 3.24907 0.925052 3.09084 0.643888 2.8094C0.362724 2.52795 0.204879 2.14634 0.205078 1.74852C0.205277 1.35069 0.363503 0.969241 0.644948 0.688077C0.926394 0.406913 1.308 0.249069 1.70583 0.249268C2.10365 0.249467 2.48511 0.407693 2.76627 0.689138C3.04743 0.970583 3.20528 1.35219 3.20508 1.75002ZM3.25008 4.36002H0.250078V13.75H3.25008V4.36002ZM7.99008 4.36002H5.00508V13.75H7.96008V8.82252C7.96008 6.07752 11.5376 5.82252 11.5376 8.82252V13.75H14.5001V7.80252C14.5001 3.17502 9.20508 3.34752 7.96008 5.62002L7.99008 4.36002Z" fill="#1E96D3" />
                                    </svg>

                                </a>
                                <a href="#" className="p-2 w-[30px] h-[30px] bg-white flex items-center justify-center rounded-full hover:bg-white/20 transition-colors">
                                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.82327 9.68328C3.85931 9.69437 3.89606 9.703 3.93327 9.70911C4.16904 10.2647 4.40348 10.8208 4.6366 11.3774C5.05577 12.3791 5.47827 13.4108 5.57077 13.7074C5.6866 14.0724 5.80827 14.3208 5.9416 14.4908C6.01077 14.5774 6.08994 14.6541 6.18327 14.7124C6.23228 14.7422 6.28422 14.7667 6.33827 14.7858C6.60494 14.8858 6.84827 14.8441 7.00077 14.7933C7.09031 14.7629 7.17548 14.7208 7.2541 14.6683L7.25827 14.6666L9.61327 13.1983L12.3341 15.2833C12.3741 15.3138 12.4174 15.3397 12.4641 15.3608C12.7908 15.5024 13.1074 15.5524 13.4058 15.5124C13.7024 15.4708 13.9383 15.3466 14.1141 15.2058C14.3158 15.0429 14.4768 14.8351 14.5841 14.5991L14.5916 14.5808L14.5941 14.5741L14.5958 14.5708V14.5691L14.5966 14.5683C14.6103 14.5322 14.6214 14.4951 14.6299 14.4574L17.1133 1.93661C17.1201 1.8964 17.124 1.85573 17.1249 1.81495C17.1249 1.44828 16.9866 1.09911 16.6624 0.888281C16.3841 0.707448 16.0749 0.699114 15.8791 0.714114C15.6691 0.730781 15.4741 0.782448 15.3433 0.824114C15.2702 0.847721 15.1979 0.873848 15.1266 0.902448L15.1174 0.906614L1.1891 6.36995L1.18744 6.37078C1.14021 6.38784 1.09377 6.40703 1.04827 6.42828C0.93778 6.47785 0.831823 6.53697 0.731603 6.60495C0.542437 6.73411 0.106603 7.08911 0.18077 7.67578C0.239103 8.14245 0.559103 8.42995 0.754936 8.56828C0.861603 8.64411 0.96327 8.69828 1.03827 8.73411C1.0716 8.75078 1.14327 8.77911 1.1741 8.79245L1.18244 8.79495L3.82327 9.68328ZM15.6049 2.05661H15.6033L15.5816 2.06578L1.6366 7.53661L1.61494 7.54495L1.6066 7.54745C1.58107 7.55732 1.55604 7.56844 1.5316 7.58078C1.5549 7.59387 1.57882 7.60583 1.60327 7.61661L4.2216 8.49828C4.26783 8.51541 4.31245 8.5366 4.35494 8.56161L13.0024 3.49911L13.0108 3.49495C13.0445 3.47485 13.079 3.45595 13.1141 3.43828C13.1741 3.40745 13.2699 3.36245 13.3783 3.32911C13.4533 3.30578 13.6758 3.23995 13.9158 3.31745C14.0433 3.35722 14.1569 3.43223 14.2436 3.53382C14.3303 3.63542 14.3865 3.75945 14.4058 3.89161C14.4368 4.00724 14.4377 4.12889 14.4083 4.24495C14.3499 4.47411 14.1899 4.65245 14.0441 4.78911C13.9191 4.90578 12.2974 6.46911 10.6983 8.01245L8.52077 10.1124L8.13327 10.4874L13.0266 14.2391C13.0927 14.2667 13.1644 14.2781 13.2358 14.2724C13.2717 14.2675 13.3055 14.2525 13.3333 14.2291C13.367 14.2005 13.396 14.1668 13.4191 14.1291L13.4208 14.1283L15.8291 1.98411C15.7534 2.00277 15.679 2.02671 15.6066 2.05578L15.6049 2.05661ZM8.5541 12.3849L7.57744 11.6366L7.34077 13.1408L8.5541 12.3849ZM6.6816 10.1516L7.65244 9.21411L9.82994 7.11245L10.6408 6.33078L5.20744 9.51161L5.2366 9.57995C5.57928 10.3895 5.91817 11.2006 6.25327 12.0133L6.4891 10.5133C6.51063 10.3742 6.57846 10.2473 6.6816 10.1516Z" fill="#1E96D3" />
                                    </svg>

                                </a>
                                <a href="#" className="p-2 w-[30px] h-[30px] bg-white flex items-center justify-center rounded-full hover:bg-white/20 transition-colors">
                                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99984 0.333374C9.71234 0.333374 10.4432 0.351707 11.1515 0.381707L11.9882 0.421707L12.789 0.469207L13.539 0.520041L14.224 0.573374C14.9675 0.62995 15.6672 0.947069 16.1998 1.46888C16.7324 1.99068 17.0638 2.6837 17.1357 3.42587L17.169 3.78004L17.2315 4.53837C17.2898 5.32421 17.3332 6.18087 17.3332 7.00004C17.3332 7.81921 17.2898 8.67587 17.2315 9.46171L17.169 10.22L17.1357 10.5742C17.0638 11.3165 16.7323 12.0096 16.1995 12.5315C15.6667 13.0533 14.9668 13.3703 14.2232 13.4267L13.5398 13.4792L12.7898 13.5309L11.9882 13.5784L11.1515 13.6184C10.4347 13.6494 9.71732 13.6655 8.99984 13.6667C8.28236 13.6655 7.56498 13.6494 6.84817 13.6184L6.0115 13.5784L5.21067 13.5309L4.46067 13.4792L3.77567 13.4267C3.03218 13.3701 2.3325 13.053 1.79987 12.5312C1.26724 12.0094 0.93583 11.3164 0.864004 10.5742L0.830671 10.22L0.768171 9.46171C0.704698 8.64264 0.670787 7.82155 0.666504 7.00004C0.666504 6.18087 0.709837 5.32421 0.768171 4.53837L0.830671 3.78004L0.864004 3.42587C0.935802 2.68383 1.2671 1.99092 1.79956 1.46913C2.33202 0.94734 3.0315 0.630138 3.77484 0.573374L4.459 0.520041L5.209 0.469207L6.01067 0.421707L6.84734 0.381707C7.56442 0.350647 8.28208 0.334532 8.99984 0.333374ZM7.33317 4.97921V9.02087C7.33317 9.40587 7.74984 9.64587 8.08317 9.45421L11.5832 7.43337C11.6593 7.38953 11.7226 7.32639 11.7666 7.25032C11.8106 7.17424 11.8337 7.08792 11.8337 7.00004C11.8337 6.91216 11.8106 6.82584 11.7666 6.74976C11.7226 6.67369 11.6593 6.61055 11.5832 6.56671L8.08317 4.54671C8.00714 4.50281 7.92089 4.47971 7.83309 4.47972C7.7453 4.47973 7.65905 4.50287 7.58303 4.54679C7.50701 4.59071 7.4439 4.65387 7.40004 4.72993C7.35618 4.80598 7.33311 4.89225 7.33317 4.98004V4.97921Z" fill="#1E96D3" />
                                    </svg>

                                </a>
                                <a href="#" className="p-2 w-[30px] h-[30px] bg-white flex items-center justify-center rounded-full hover:bg-white/20 transition-colors">
                                    <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.6985 0.829529C11.7258 0.439129 10.6995 0.160494 9.64506 0.000569545C9.63551 -0.000837589 9.62569 0.000377705 9.61696 0.00404837C9.60823 0.00771903 9.60102 0.0136648 9.59631 0.021068C9.46412 0.226053 9.31787 0.494173 9.21569 0.704078C8.07908 0.553216 6.92295 0.553216 5.78635 0.704078C5.67236 0.470248 5.54341 0.242217 5.4001 0.021068C5.39529 0.0137459 5.38806 0.00786861 5.37936 0.00420974C5.37066 0.000550877 5.36089 -0.000718153 5.35135 0.000569545C4.29668 0.159638 3.27012 0.438418 2.29795 0.829529C2.28963 0.832306 2.28267 0.837522 2.27826 0.844288C0.333905 3.38528 -0.199527 5.86396 0.0620327 8.31148C0.0629702 8.32296 0.0714076 8.33444 0.08172 8.34182C1.21395 9.07535 2.48037 9.63541 3.82699 9.9981C3.8365 10.0007 3.84672 10.0006 3.85616 9.99783C3.8656 9.99502 3.87377 9.98966 3.87949 9.98252C4.16824 9.63815 4.42511 9.27491 4.64636 8.89282C4.65097 8.88495 4.65255 8.87599 4.65086 8.86727C4.64917 8.85855 4.6443 8.85054 4.63698 8.84444C4.63214 8.84044 4.62639 8.83737 4.62011 8.83542C4.2162 8.69966 3.82502 8.53654 3.45012 8.34756C3.43965 8.34237 3.43186 8.33386 3.42837 8.32378C3.42488 8.31371 3.42596 8.30285 3.43137 8.29344C3.43456 8.28734 3.43939 8.282 3.44543 8.27787C3.52418 8.22621 3.60293 8.17209 3.67793 8.11798C3.68456 8.11332 3.69251 8.11032 3.70093 8.10931C3.70935 8.1083 3.71793 8.10931 3.72574 8.11224C6.18103 9.09289 8.83882 9.09289 11.2641 8.11224C11.2722 8.10917 11.2811 8.10808 11.2899 8.1091C11.2986 8.11011 11.3069 8.11318 11.3138 8.11798C11.3888 8.17209 11.4675 8.22621 11.5463 8.27787C11.5527 8.28194 11.5578 8.28734 11.5612 8.29358C11.5646 8.29981 11.5662 8.30669 11.5658 8.31359C11.5655 8.3205 11.5631 8.32722 11.5591 8.33314C11.555 8.33907 11.5493 8.34402 11.5425 8.34756C11.1685 8.53827 10.7768 8.70119 10.3716 8.83461C10.3651 8.83665 10.3593 8.83992 10.3544 8.84417C10.3496 8.84842 10.3458 8.85355 10.3435 8.8592C10.3413 8.86468 10.3405 8.87049 10.3409 8.87627C10.3414 8.88205 10.3432 8.88768 10.3463 8.89282C10.5713 9.27409 10.8291 9.63815 11.1122 9.98252C11.1179 9.98966 11.1261 9.99502 11.1356 9.99783C11.145 10.0006 11.1552 10.0007 11.1647 9.9981C12.5136 9.63653 13.7821 9.07641 14.9156 8.34182C14.9213 8.33838 14.926 8.33387 14.9294 8.32862C14.9328 8.32337 14.9349 8.31751 14.9353 8.31148C15.2484 5.48187 14.4113 3.02369 12.7172 0.845108C12.7155 0.84151 12.713 0.838264 12.7097 0.835581C12.7065 0.832897 12.7027 0.830836 12.6985 0.829529ZM5.01292 6.82083C4.27324 6.82083 3.66481 6.2272 3.66481 5.49909C3.66481 4.77016 4.26199 4.17652 5.01292 4.17652C5.76947 4.17652 6.37228 4.77508 6.36103 5.49909C6.36103 6.2272 5.76385 6.82083 5.01292 6.82083ZM9.99662 6.82083C9.25787 6.82083 8.64851 6.2272 8.64851 5.49909C8.64851 4.77016 9.24569 4.17652 9.99662 4.17652C10.7532 4.17652 11.3569 4.77508 11.3447 5.49909C11.3447 6.2272 10.7532 6.82083 9.99662 6.82083Z" fill="#1E96D3" />
                                    </svg>


                                </a>
                            </div>
                        </div>

                        <div className="bg-white p-[16px] sm:p-8 md:w-[55%] contactus-form">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label className="text-[12px] text-[#000]" htmlFor="firstName">First Name</Label>
                                        <Input id="firstName" placeholder="First Name" className="shadow-none  border-0 border-b  border-solid border-color-[#8D8D8D]" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-[12px] text-[#000]" htmlFor="lastName">Last Name</Label>
                                        <Input id="lastName" placeholder="Last Name"  className="shadow-none border-0 border-b   border-solid border-color-[#8D8D8D]" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label className="text-[12px] text-[#000]" htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="Email" className="shadow-none border-0   border-b border-solid border-color-[#8D8D8D]" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-[12px] text-[#000]" htmlFor="phone">Phone Number</Label>
                                        <Input id="phone" type="tel" placeholder="Phone" className="shadow-none border-0    border-b border-solid border-color-[#8D8D8D]" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-[#000]">Select Subject?</Label>
                                    <div className="flex flex-col sm:flex-row gap-8"><div className="flex items-center space-x-2">
                                        <input name="Subject" type="radio" value="general1" id="general1" />
                                        <Label htmlFor="general1">General Inquiry</Label>
                                    </div>
                                        <div className="flex items-center space-x-2">
                                            <input name="Subject" type="radio" value="general2" id="general2" />
                                            <Label htmlFor="general2">General Inquiry</Label>
                                        </div></div>
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-[12px] text-[#000]" htmlFor="message">Message</Label>
                                    <br />
                                    <textarea id="message" placeholder="Write your message.." className="h-auto border-0 border-solid border-b rounded-[0px] w-full max-w-full border-color-[#8D8D8D]" />
                                </div>
                                <div className="text-right">
                                    <Button type="submit" className="ml-auto bg-[#1E96D3] hover:bg-[#1E96D3] text-white px-8 py-4 ">
                                        Send Message
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.579514230357!2d73.07288797570007!3d33.66805557330407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfa4ac664969%3A0x5ef152a32e553ce!2sDPL!5e0!3m2!1sen!2sin!4v1741088430596!5m2!1sen!2sin" width="100%" height="450" style={{border:"0"}} loading="lazy" />
        </div>
    </>)
}
export default ContactUs