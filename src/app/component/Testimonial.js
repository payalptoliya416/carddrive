'use client'
import TestimonialSlider from "./TestimonialSlider";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const testimonialData = [
  {
    message:"They truly exceeded my ecpectatiions a delight",
    avatar:'/images/testimonial/avatar.png',
    name:'Jane Doe',
    job:'Photographer & Videofrapher',
  },
  {
    message:'They truly exceeded my expectation and made my car rental experience a deligth',
    avatar:'/images/testimonial/avatar.png',
    name:"Jane Doe",
    job:'Photographer & Videofrapher',
  }
]

export default function Testimonial() {
  return (
    <>
      <section className="section flex items-center " id="testimonial">
        <div className="container mx-auto">
          <TestimonialSlider testimonialData={testimonialData}/>
        </div>
      </section>
    </>
  )
}
