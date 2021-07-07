import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation]);
const SecondPageRC = () => {
  const swiperNamesImgs = [];
  for (let i = 1; i < 7; i++)
    swiperNamesImgs.push(
      <SwiperSlide>
        <img src={`./imgs/swiper_${i}.jpg`} alt="swiper_img"/>
      </SwiperSlide>
    );
  return (
    <>
      <Swiper navigation={true} className="mySwiper" loop={true}>
        {swiperNamesImgs}
      </Swiper>
    </>
  );
};

export default SecondPageRC;
