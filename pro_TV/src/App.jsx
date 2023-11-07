import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Swiper, SwiperSlide } from 'swiper/react'

import { EffectFade, Navigation, Pagination } from 'swiper/modules';

function App() {
  const data = [
  {id: '1', image: '/src/assets/a1.jpg'},
  {id: '2', image: '/src/assets/a2.jpg'},
  {id: '3', image: '/src/assets/a3.jpg'},
  {id: '4', image: '/src/assets/a4.jpg'}
  ]

  return (
    <>
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
