import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Rectanglecurve1 from '../../components/assets/img/curvecard.png';


export default function TechnologySlider() {
  const technologies = [
    { title: 'Front-End Frameworks', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor Velit officia est do amet sint Velit officia consequat duis enim.' },
    { title: 'Back-End Technologies', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor Velit officia est do amet sint Velit officia consequat duis enim.' },
    { title: 'UI/UX Design', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor Velit officia est do amet sint Velit officia consequat duis enim.' },
    { title: 'UI/UX Design', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor Velit officia est do amet sint Velit officia consequat duis enim.' },
  ];

  return (
    <div className="max-w-[1400px] mx-auto pt-10 servicedeatils-slider">
      <Swiper
        navigation={false}
        modules={[Navigation]}
        spaceBetween={0}
        loop={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
        slidesPerView={'auto'}
        slidesOffsetBefore={0}
        slidesOffsetAfter={0}
        
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
        }}
      >
        {technologies.map((tech, index) => (
          <SwiperSlide key={index}>
            <div data-aos="zoom-in" className="our-technology max-w-[540px] mx-auto lg:mx-0 px-0  card-box relative text-center py-4">
                <Image src={Rectanglecurve1} alt="" className="max-h-[340px] absolute text-transparent scale-[110%]   rectanglecurve1" />
                <div className="relative z-[99]   md:px-8 px-4">
                  <div className="bg-[#0ECFDB] rounded-[23px] inline-block px-4 py-3">
                    <svg width="39" height="65" viewBox="0 0 39 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5102 0.97998H31.977C33.8333 0.97998 35.5359 1.72107 36.7505 2.89447C37.981 4.08846 38.7235 5.71989 38.7235 7.52631V57.6685C38.7235 59.4698 37.9598 61.1218 36.7505 62.3003C35.52 63.4943 33.8386 64.2148 31.977 64.2148H7.5102C5.65385 64.2148 3.9513 63.4737 2.73671 62.3003C1.50621 61.1064 0.763672 59.4749 0.763672 57.6685V7.52631C0.763672 5.72504 1.52743 4.07302 2.73671 2.89447C3.97252 1.70049 5.65385 0.97998 7.5102 0.97998ZM6.42821 15.0299H33.0643V27.6388H6.42821V15.0299ZM20.9184 47.7101H33.0696V50.1649H20.9184V47.7101ZM6.42821 30.9685H17.6936V35.9864H6.42821V30.9685ZM20.9184 30.9583H33.0696V35.9915H20.9184V30.9583ZM20.7381 39.3367H32.8892V44.37H20.7381V39.3367ZM6.60324 39.3419H17.8687V44.3597H6.60324V39.3419ZM6.42821 47.7152H17.6936V50.1649H6.42821V47.7152ZM14.2037 23.6297H12.0397L11.7268 24.7567H9.78026L12.1087 17.9068H14.1984L16.5162 24.7567H14.5166L14.2037 23.6297ZM13.8006 22.1475L13.127 19.6875L12.4481 22.1475H13.8006ZM17.4444 17.9119H20.2819C20.8388 17.9119 21.295 17.9943 21.6397 18.1641C21.9845 18.3339 22.2709 18.5758 22.4937 18.8897C22.7164 19.2037 22.8808 19.5691 22.9816 19.9859C23.0824 20.4028 23.1354 20.8454 23.1354 21.3137C23.1354 22.0445 23.0612 22.6107 22.9074 23.0172C22.7588 23.4187 22.5467 23.7583 22.2815 24.0311C22.0163 24.3038 21.7299 24.484 21.4223 24.5766C21.0033 24.7001 20.6214 24.7619 20.2819 24.7619H17.4444V17.9119ZM19.3538 19.461V23.2025H19.8205C20.2183 23.2025 20.5047 23.151 20.6744 23.0533C20.8441 22.9555 20.9767 22.7856 21.0722 22.5386C21.1677 22.2916 21.2154 21.8953 21.2154 21.3498C21.2154 20.6241 21.1093 20.13 20.8919 19.8624C20.6797 19.5948 20.3244 19.461 19.8258 19.461H19.3538ZM24.1113 22.4974L25.9253 22.3739C25.9624 22.6981 26.0472 22.9503 26.1639 23.115C26.3602 23.3929 26.6413 23.5319 27.0072 23.5319C27.2777 23.5319 27.4899 23.4598 27.6384 23.3209C27.7869 23.1768 27.8612 23.0172 27.8612 22.8268C27.8612 22.6518 27.7922 22.4923 27.6543 22.3482C27.5164 22.2092 27.1876 22.0754 26.6784 21.9519C25.8404 21.746 25.2464 21.4681 24.8857 21.1233C24.525 20.7785 24.3447 20.3411 24.3447 19.8058C24.3447 19.4559 24.4349 19.1213 24.6205 18.8125C24.8061 18.4986 25.0819 18.2516 25.4532 18.0766C25.8245 17.8965 26.3284 17.809 26.9754 17.809C27.7657 17.809 28.365 17.9737 28.7787 18.2979C29.1924 18.6221 29.4417 19.1419 29.516 19.8521L27.718 19.9705C27.6702 19.6617 27.5695 19.4353 27.4156 19.2912C27.2618 19.1471 27.0497 19.0802 26.7792 19.0802C26.5564 19.0802 26.3867 19.1316 26.2753 19.2346C26.1639 19.3375 26.1056 19.4662 26.1056 19.6154C26.1056 19.7235 26.1533 19.8213 26.2435 19.9087C26.3337 20.0014 26.5458 20.0837 26.88 20.1609C27.7127 20.3616 28.312 20.5624 28.6727 20.7682C29.0333 20.9741 29.2985 21.2262 29.4629 21.5247C29.6274 21.8284 29.7069 22.1629 29.7069 22.5386C29.7069 22.9761 29.5955 23.3826 29.3781 23.7532C29.1553 24.1237 28.853 24.4068 28.4605 24.5972C28.068 24.7876 27.5748 24.8854 26.9754 24.8854C25.9253 24.8854 25.1986 24.659 24.7902 24.2112C24.3924 23.7532 24.1644 23.1871 24.1113 22.4974ZM19.7356 56.1709C21.2632 56.1709 22.5149 57.3649 22.5149 58.8676C22.5149 60.3498 21.2844 61.5644 19.7356 61.5644C18.2081 61.5644 16.9564 60.3704 16.9564 58.8676C16.9617 57.3855 18.1922 56.1709 19.7356 56.1709ZM2.67837 54.1226H36.7929V11.134H2.67837V54.1226Z" fill="white" />
                    </svg>
                  </div>
                 <div className='w-[90%] mx-auto'>
                    <h4 className="text-[16px] sm:text-[20px] lg:text-[26px]">{tech.title}</h4>
                    <p className="text-center text-[12px] md:text-[14px]">{tech.description}</p>
                 </div>
                </div>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
