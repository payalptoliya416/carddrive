'use client'

import Image from "next/image";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa"
import { Swiper, SwiperSlide } from 'swiper/react';
import {motion} from 'framer-motion'
import 'swiper/css';
import { Pagination } from "swiper/modules";
import { fadeIn } from "../../../variants";
export default function TestimonialSlider({testimonialData}) {
  return (
    <>
      <motion.div
      variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
        className="container mx-auto"
        id="testimonial"
      >
      <Swiper pagination={{
        clickable:true,
        dynamixBullets:true
      }}
      modules={[Pagination]}
      className="h-[450px] xl:h-[400px]"
      >
        {testimonialData.map((person, index) => {
          const { message, avatar, name, job } = person;
          return (
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center text-center">
                <FaQuoteLeft className="text-7xl text-accent mb-6" />
                <div className="text-2xl xl:text-4xl max-w-[874px] mb-12">{message}</div>
                <Image src={avatar} width={64} height={64} alt="" className="mb-4" />
                <div className="text-lg font-medium">{name}</div>
                <div className="text-secondary">{job}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      </motion.div>
    </>
  );
}
