"use client";
import React from "react";
import Image from "next/image";
import photo from "../assets/Photo.jpeg";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section className="bg-[#0A192F] text-gray-300 max-lg:mt-[8rem] mt-[3rem] ">
      <div className="ml-[15rem] mr-[11rem] flex h-[90vh] max-sm:mb-[-5rem]  max-sm:ml-[16rem] items-center max-md:ml-[8rem]  gap-[8rem] max-lg:flex-col max-lg:gap-[3rem]">
        <div className="flex flex-col gap-5 max-sm:ml-[1rem]">
          <p className="text-md text-teal-300">Hi, my name is...</p>
          <h1 className="text-6xl max-md:text-4xl max-sm:text-3xl font-extrabold text-transparent animate-gradient ">
            Ivan Korneychuk.
            <span className="block mt-1">Turning Ideas into Code.</span>
          </h1>

          <p className="mt-4 w-[500px] text-gray-300 max-md:w-[400px] max-sm:base  sm:text-lg/relaxed font-semibold">
            Aspiring front-end/full-stack developer for the web, specializing in
            <b className="text-teal-400"> React</b> and{" "}
            <b className="text-teal-400">Nextjs</b>, who&apos;s always looking
            for opportunities to grow!
          </p>
        </div>
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className=""
        >
          <Image
            src={photo}
            alt="portrait"
            width={340}
            height={340}
            className="rounded-tl-[10rem] min-h-[300px] min-w-[300px] rounded-tr-[1rem] rounded-bl-[3rem] rounded-br-[5rem]  "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
