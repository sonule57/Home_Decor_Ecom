import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Home = ({handleClick}) => {
  return (
    <>
    <div className='sliders'>
       <Swiper
     modules={[Navigation, Pagination, Scrollbar, A11y]}
     spaceBetween={20}
     slidesPerView={1}
     navigation
     pagination={{ clickable: true }}
     scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <img src='.\assets\Image\swiper1.jpg' className='swiper-img' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='.\assets\Image\swiper2.jpg' className='swiper-img'/>
      </SwiperSlide>
      <SwiperSlide>
        
        <img src='.\assets\Image\swiper4.jpg' className='swiper-img'/>
     
      </SwiperSlide>
      <SwiperSlide>
     
      <img src='.\assets\Image\swiper5.jpg'className='swiper-img' />
     
      </SwiperSlide>
      <SwiperSlide>
      
      <img src='.\assets\Image\swiper2.jpg' className='swiper-img'/>
    
      </SwiperSlide>
      <SwiperSlide>
      
      <img src='.\assets\Image\swiper1.jpg'className='swiper-img' />
   
      </SwiperSlide>
    </Swiper>
    </div>
       
       {/* <div className='</div> container'>
       <img src=".\assets\Image\swipe1.jpg"></img>
       </div> */}

       
            {/* -------------------------------------------------latest Product-------------------------------------- */}

            <div className='latest container'>
                <div className='row mt-3'>
                    <div className='col-md-4 latest-cols mt-5'>
                        <div class="card" style={{ 'width': '26rem' }} data-aos="zoom-in" >
                            <img src=".\assets\Image\swiper1.jpg" class="card-img-top" alt="latest image" />
                            <div className='overly'>
                                <p className=' para text-center'>Nail Polish Weekend<br />Special 25% OFF</p>
                            </div>
                        </div>

                    </div>

                    <div className='col-md-4 latest-cols mt-5'>
                        <div class="card" style={{ 'width': '26rem' }} data-aos="zoom-in">
                            <img src=".\assets\Image\swiper2.jpg" class="card-img-top" alt="latest1 image" />
                            <div className='overly'>
                                <p className=' para text-center'>Get Extra 50% OFF<br />New Arrivals</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 latest-cols mt-5'>
                        <div class="card" style={{ 'width': '26rem' }} data-aos="zoom-in">
                            <img src=".\assets\Image\swiper6.jpg" class="card-img-top" alt="latest2 image" />
                            <div className='overly'>
                                <p className='para text-center'>Hot This Week<br />$15.55 off Special makeup-kit </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
    
  )
}

export default Home;