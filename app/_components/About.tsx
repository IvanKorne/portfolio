"use client";
import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "../data/data";
import design from "../assets/design.png";
import Image from "next/image";

const About = () => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  return (
    <section
      className="bg-[#0A192F] text-gray-300 max-lg:mt-[450px] z-2  max-md:mt-[25rem] max-sm:mt-[20rem] xl:mt-[2rem] mt-[8rem] "
      id="about"
    >
      <div className="ml-[15rem] mr-[10rem] flex h-[90vh] items-center max-md:ml-[8rem] max-sm:ml-[1rem]">
        <div className="flex flex-col gap-[5rem]">
          <div className="flex gap-5 items-center justify-start ml-[2rem]">
            <p className="text-teal-300 font-semibold text-xl">01.</p>
            <div className="flex gap-3 items-center">
              <p className="text-3xl font-bold ">About Me</p>
              <span className="h-[0.5px] bg-gray-500 w-[10rem] "></span>
            </div>
          </div>
          <div className="flex gap-[7rem] max-lg:gap-20 max-lg:flex-col items-start">
            <div className="flex w-[500px] flex-col gap-10">
              <p className="text-base font-semibold text-wrap">
                Hi! My name is Ivan. I am a 19 year old aspiring web developer
                who&apos;s currently studying
                <span className="text-teal-300"> Electrical Engineering </span>
                at the University of Waterloo.
                <br />
                <br />
                I try to challenge myself every single day, pushing myself to
                learn the newest of software and technologies. I thrive in
                environments that test my ability to learn and adapt. My
                interests include but are not limited to AI, web development,
                front-end and full-stack engineering.
                <br />
                <br />I am currently
                <span className="text-teal-300"> open </span> to test and
                challenge my abilities in the workplace. If you&apos;re
                interested, check out my skills, experience and projects below!
              </p>
              <div className="text-center flex flex-col gap-4">
                <span className="font-bold text-2xl">Skills</span>
                <ul className="flex flex-wrap lg:max-xl:w-[400px] justify-center gap-2 text-base text-gray-800 ">
                  {skillsData.map((skill, index) => (
                    <motion.li
                      className="bg-white border-black rounded-xl px-4 py-2"
                      key={index}
                      variants={fadeInAnimationVariants}
                      initial="initial"
                      whileInView="animate"
                      viewport={{
                        once: true,
                      }}
                      custom={index}
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="ml-[1rem]"
            >
              <Image src={design} alt="design" width={400} height={400} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
