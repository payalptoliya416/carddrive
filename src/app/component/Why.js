"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import { MdHandshake, MdKey, MdTrendingUp } from "react-icons/md";

export default function Why() {
  return (
    <>
      <section className="section flex items-center" id="why">
        <div className="container mx-auto">
          <motion.h2
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="h2 text-center"
          >
            Unmatched excellence and customer satisfaction
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="max-w-[680px] text-center mx-auto mb-2"
          >
            Our dedication to providing exceptional services sets us apart from
            the competition.Form the moment you engage with us, we strive to
            exceed your exceptions in every interaction.{" "}
          </motion.p>
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="hidden md:flex justify-center mb-6 xl:mb-2"
          >
            <Image
              src={"/images/why/car.svg"}
              width={1060}
              height={420}
              alt=""
            />
          </motion.div>

          <div className="flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-4 xl:gap-y-0">
            <div className="flex flex-col items-center text-center max-w-[160px]  xl:max-w-none xl:p-0">
              <MdKey className="text-[38px] text-accent mb-4"/>
              <h3 className="h3">Modern & well maintained vehivles</h3>
              <p className="hidden xl:flex">we prioritize youe need and we go above and  beyonf to ensure your experience with us is nothing short of outstanding</p>
            </div>
            <div className="flex flex-col items-center text-center max-w-[160px]  xl:max-w-none xl:p-0">
              <MdTrendingUp className="text-[38px] text-accent mb-4"/>
              <h3 className="h3">Modern & well maintained vehivles</h3>
              <p className="hidden xl:flex">we prioritize youe need and we go above and  beyonf to ensure your experience with us is nothing short of outstanding</p>
            </div>
            <div className="flex flex-col items-center text-center max-w-[160px]  xl:max-w-none xl:p-0">
              <MdHandshake className="text-[38px] text-accent mb-4"/>
              <h3 className="h3">Rent simply and quickly</h3>
              <p className="hidden xl:flex">we prioritize youe need and we go above and  beyonf to ensure your experience with us is nothing short of outstanding</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
