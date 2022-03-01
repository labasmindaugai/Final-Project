import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Gera from '../images/1.gif';
import Geral from '../images/2.gif';
import Gerall from '../images/3.gif';
import Geralll from '../images/4.gif';

SwiperCore.use([Navigation]);

const SwiperGood = () => (
  <Swiper
    modules={[Navigation]}
    className="mySwiper"
    slidesPerView={1}
    navigation
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      border: '4px solid #ff5edb',
      boxShadow: '0px 0px 20px #ff5edb',

    }}
  >
    <div className="swiper-wrapper">
      <SwiperSlide className="swiper-slide">
        <img
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          src={Gera}
          alt="g1"
        />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <img
          src={Geral}
          alt="g2"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <img
          src={Gerall}
          alt="g2"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <img
          src={Geralll}
          alt="g3"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </SwiperSlide>

    </div>
  </Swiper>
);

export default SwiperGood;
