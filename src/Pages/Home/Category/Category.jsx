import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
// import required modules
import {Autoplay, Pagination,FreeMode } from "swiper";

import slider1 from "../../../assets/home/slide1.jpg"
import slider2 from "../../../assets/home/slide2.jpg"
import slider3 from "../../../assets/home/slide3.jpg"
import slider4 from "../../../assets/home/slide4.jpg"
import slider5 from "../../../assets/home/slide5.jpg"
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
const Category = () => {
  return (
    <section className="st container">
        <SectionTitle
        headingTitle="Order online"
        subTitle="From 11:00am to 10:00pm"
        ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={70}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Autoplay, Pagination]}
        className="mySwiper mb-12"
      >
        <SwiperSlide className="pb-20">
            <img  src={slider1} alt="" />
            <h2 className="text-white text-4xl uppercase -mt-16 text-center">Salad</h2>
        </SwiperSlide>
        <SwiperSlide className="pb-20">
            <img src={slider2} alt="" />
            <h2 className="text-white text-4xl uppercase -mt-16 text-center">Soups</h2>

        </SwiperSlide>
        <SwiperSlide className="pb-20">
            <img src={slider3} alt="" />
            <h2 className="text-white text-4xl uppercase -mt-16 text-center">PiZZAS</h2>

        </SwiperSlide>
        <SwiperSlide className="pb-20">
            <img src={slider4} alt="" />
            <h2 className="text-white text-4xl uppercase -mt-16 text-center">desserts</h2>

        </SwiperSlide>
        <SwiperSlide className="pb-20">
            <img src={slider2} alt="" />
            <h2 className="text-white text-4xl uppercase -mt-16 text-center">Soups</h2>

        </SwiperSlide>
        <SwiperSlide className="pb-20">
            <img src={slider1} alt="" />
            <h2 className="text-white text-4xl uppercase -mt-16 text-center">Soups</h2>

        </SwiperSlide>
        <SwiperSlide className="pb-20">
            <img src={slider3} alt="" />
            <h2 className="text-white text-4xl uppercase -mt-16 text-center">Soups</h2>

        </SwiperSlide>
        <SwiperSlide className="pb-20">
            <img src={slider4} alt="" />
            <h2 className="text-white text-4xl uppercase -mt-16 text-center">Soups</h2>

        </SwiperSlide>
      
       
      </Swiper>
    </section>
  );
};

export default Category;
