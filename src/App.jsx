import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { register } from 'swiper/element/bundle'

register();

function App() {
  const data = [
  {id: '1', image: '/a1.jpg'},
  {id: '2', image: '/a2.jpg'},
  {id: '3', image: '/a3.jpg'},
  {id: '4', image: '/a4.jpg'}
  ]

  return (
    <>
    <h1>SIDNEY </h1>
    <h1>SIDNEY </h1>
    <div className="container">
      <Swiper
        loop={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false
        }}
        effect={'fade'}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img 
              src={item.image}
              alt="img" 
              className="slide-img"
            />

          </SwiperSlide>
          
        ))}
        

      </Swiper>

    </div>
    </>
  )
}

export default App
