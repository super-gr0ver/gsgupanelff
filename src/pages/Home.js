import React from 'react';
// import Swiper core and required modules
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import main1 from '../img/home/1.jpg';
import main2 from '../img/home/2.jpg';
import main3 from '../img/home/3.jpg';
import main4 from '../img/home/4.jpg';
import main5 from '../img/home/5.jpg';
import main6 from '../img/home/6.jpg';
import main7 from '../img/home/7.jpg';
import main8 from '../img/home/8.jpg';
import main9 from '../img/home/9.jpg';
import main10 from '../img/home/10.jpg';
import main11 from '../img/home/11.jpg';
import main12 from '../img/home/12.jpg';
import main13 from '../img/home/13.jpg'; 
import main14 from '../img/home/14.jpg';
import main15 from '../img/home/15.jpg';
import main16 from '../img/home/16.jpg';
import main17 from '../img/home/17.jpg';
import main18 from '../img/home/18.jpg';
import main19 from '../img/home/19.jpg';
import main20 from '../img/home/20.jpg';
import main21 from '../img/home/21.jpg';
import main22 from '../img/home/22.jpg';
import main23 from '../img/home/23.jpg';

import main24 from '../img/home/main_1.jpg';
import main25 from '../img/home/main_2.jpg';
import main26 from '../img/home/main_3.jpg';
import main27 from '../img/home/main_4.jpg';
import main28 from '../img/home/main_5.jpg';
import main29 from '../img/home/main_6.jpg';
import main30 from '../img/home/main_7.jpg';
import main31 from '../img/home/main_8.jpg';
import main32 from '../img/home/main_9.jpg';
import main33 from '../img/home/main_10.jpg';
import main34 from '../img/home/main_11.jpg';
import main35 from '../img/home/main_12.jpg';
import main36 from '../img/home/main_13.jpg';
import main37 from '../img/home/main_14.jpg';
import main38 from '../img/home/main_15.jpg';
import main39 from '../img/home/main_16.jpg';
import main40 from '../img/home/main_17.jpg';
import main41 from '../img/home/main_18.jpg';
import main42 from '../img/home/main_19.jpg';
import main43 from '../img/home/main_20.jpg';
import main44 from '../img/home/main_21.jpg';

const images = [
  main1,
  main2,
  main3,
  main4,
  main5,
  main6,
  main7,
  main8,
  main9,
  main10,
  main11,
  main12,
  main13,
  main14,
  main15,
  main16,
  main17,
  main18,
  main19,
  main20,
  main21,
  main22,
  main23,
  main24,
  main25,
  main26,
  main25,
  main26,
  main27,
  main28,
  main29,
  main30,
  main31,
  main32,
  main33,
  main34,
  main35,
  main36,
  main37,
  main38,
  main39,
  main40,
  main41,
  main42,
  main43,
  main44,
];

export function Home() {
  return (
    <div className='main-page'>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay, A11y]}
        loop={true}
        slidesPerView={1}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        navigation={true}
        pagination={{
          type: 'fraction',
        }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt={`main${i + 1}`} className='slide' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
