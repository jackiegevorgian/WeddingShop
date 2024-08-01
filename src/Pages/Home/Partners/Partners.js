import './Partners.css'
import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Partners = ()=> {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}

        modules={[Autoplay]}
        
        className="mySwiper2"
      >
        <SwiperSlide className='partner'><a href='#'><img src='https://qi3.qodeinteractive.com/wp-content/uploads/2021/04/client-hover-1.png'/></a></SwiperSlide>
        <SwiperSlide className='partner'><a href='#'><img src='https://qi3.qodeinteractive.com/wp-content/uploads/2021/04/client-hover-2.png'/></a></SwiperSlide>
        <SwiperSlide className='partner'><a href='#'><img src='https://qi3.qodeinteractive.com/wp-content/uploads/2021/04/client-hover-3.png'/></a></SwiperSlide>
        <SwiperSlide className='partner'><a href='#'><img src='https://qi3.qodeinteractive.com/wp-content/uploads/2021/04/client-hover-4.png'/></a></SwiperSlide>
        <SwiperSlide className='partner'><a href='#'><img src='https://qi3.qodeinteractive.com/wp-content/uploads/2021/04/client-hover-1.png'/></a></SwiperSlide>
        <SwiperSlide className='partner'><a href='#'><img src='https://qi3.qodeinteractive.com/wp-content/uploads/2021/04/client-hover-6.png'/></a></SwiperSlide>
        <SwiperSlide className='partner'><a href='#'><img src='https://qi3.qodeinteractive.com/wp-content/uploads/2021/04/client-hover-7.png'/></a></SwiperSlide>
        <SwiperSlide className='partner'><a href='#'><img src='https://qi3.qodeinteractive.com/wp-content/uploads/2021/04/client-hover-8.png'/></a></SwiperSlide>
        <SwiperSlide className='partner'><a href='#'><img src='https://qi3.qodeinteractive.com/wp-content/uploads/2021/04/client-hover-9.png'/></a></SwiperSlide>
      </Swiper>
    </>
  );
}

export default Partners