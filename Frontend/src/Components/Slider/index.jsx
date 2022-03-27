import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

import { sliderItems } from '../../Asset/data';
import { Box, Button } from '@mui/material';

SwiperCore.use([Autoplay]);

function Slider() {
  return (
    <div className='h-screen w-full flex bg-slate-600 '>
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
      >
        {sliderItems.map((item) => (
          <SwiperSlide key={item.id}>
            <Box
              className='h-screen w-screen flex items-center '
              sx={{ bgcolor: `#${item.bg}` }}
            >
              <div className='h-full flex-1 hidden md:block '>
                <img src={item.img} className='h-4/5 w-full' />
              </div>

              <div className='flex-1 p-12 5'>
                <h1 className='text-7xl'>{item.title}</h1>
                <p className='py-12.5 font-xl font-medium tracking-widest'>
                  {item.desc}
                </p>
                <Button
                  sx={{ color: 'text.primary' }}
                  variant='outlined'
                  className='text-xl p-2.5 border-black rounded-none border-2 shadow-md'
                >
                  SHOW NOW
                </Button>
              </div>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
