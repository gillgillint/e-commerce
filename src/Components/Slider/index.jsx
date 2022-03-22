import React from 'react';
import styled from '@emotion/styled';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

import { sliderItems } from '../../Asset/data';

SwiperCore.use([Autoplay]);


const Slide = styled.div``

function Slider() {
  return (
    <div className='h-screen w-full flex bg-slate-600 '>
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        // autoplay={{ delay: 5000 }}
      >
        {sliderItems.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.img} alt='' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
