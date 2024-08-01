// import 'swiper/css';
import './HomeTestimon.css'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const HomeTestSl = () => {

  const HomeTestData = [
    {
      img: 'https://qi3.qodeinteractive.com/wp-content/uploads/2020/09/h1-img-5.png',
      inner: '“Nulla vitae massa blandit, interdum sapien eget, feugiat nibh. Integer sagittis lacinia nisi, nec sagittis nisi imperdiet a. Duis est urna, pharetra at felis et, porttitor consequat turpis. Aenean eros felis, vehicula metus dolor non, faucibus aliquet arcu ornare lacus.”',
      name: 'Linda Gran, Caterer'
    },
    {
      img: 'https://qi3.qodeinteractive.com/wp-content/uploads/2021/03/testimonial.png',
      inner: '“Nulla vitae massa blandit, interdum sapien eget, feugiat nibh. Integer sagittis lacinia nisi, nec sagittis nisi imperdiet a. Duis est urna, pharetra at felis et, porttitor consequat turpis. Aenean eros felis, vehicula metus dolor non, faucibus aliquet arcu ornare lacus.”',
      name: 'Jenny Olsen, Florist'
    }
  ]

  return (
    <div className='swiper_container'>
      <div className='TestTheme_Box'>
        <div>
          <h4>TESTIMONIALS</h4>
          <h1>What Our Clients Say</h1>
        </div>
      </div>
      <section className='Swiper_Box2'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >

          {HomeTestData.map((t) => {
            return (
              <SwiperSlide className='human'>

                <div>
                  <img src={t.img} />
                </div>
                <div>
                  <p>{t.inner}</p>
                  <span>{t.name}</span>
                </div>

              </SwiperSlide>
            )
          })}
        </Swiper>
      </section>
    </div>

  )
}

export default HomeTestSl
