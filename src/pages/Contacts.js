import React from 'react';
// import Swiper core and required modules
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import contact1 from '../img/contacts/1.jpg';

const images = [contact1];

export function Contacts() {
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
        //   disableOnInteraction: true,
        // }}
        spaceBetween={30}
        // navigation={true}
        // pagination={{
        //   type: 'fraction',
        // }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt={`contact${i + 1}`} className='slide' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
