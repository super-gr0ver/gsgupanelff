import React from 'react';
// import Swiper core and required modules
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import docs1 from '../img/docs/1.jpg';

export function Docs() {
  return (
    <div className='main-page'>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay, A11y]}
        // loop={true}
        slidesPerView={1}
        // speed={1000}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        // spaceBetween={30}
        // navigation={true}
        // pagination={{
        //   type: 'fraction',
        // }}
      >
        <SwiperSlide>
          <img src={docs1} alt='docs1' className='slide' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
