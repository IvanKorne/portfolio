"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../data/data";

const Experience = () => {
  const timelineVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: () => ({
      opacity: 1,
      y: 0,
      delay: 1,
    }),
  };
  return (
    <section
      className=" text-gray-300 max-lg:mt-[23rem] max-sm:ml-[10rem] mt-[7rem] "
      id="experience"
    >
      <div className="ml-[15rem] mr-[10rem] max-sm:[5rem] flex flex-col h-[90vh] items-center max-md:ml-[8rem] max-sm:ml-[5rem] gap-[6rem] max-lg:flex-col max-lg:gap-[3rem]">
        <div className="flex gap-5 items-center justify-start ml-[2rem]">
          <p className="text-teal-300 font-semibold text-xl">02.</p>
          <div className="flex gap-3 items-center">
            <p className="text-3xl font-bold ">Experience</p>
            <span className="h-[0.5px] bg-gray-500 w-[10rem] "></span>
          </div>
        </div>
        <motion.div
          viewport={{
            once: true,
          }}
          variants={timelineVariants}
          initial="initial"
          whileInView="animate"
        >
          <VerticalTimeline lineColor="">
            {experiencesData.map((item, index) => (
              <React.Fragment key={index}>
                <VerticalTimelineElement
                  visible={true}
                  contentStyle={{
                    background: "#0A192F",
                    boxShadow: "none",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    textAlign: "left",
                    padding: "1.3rem 2rem",
                  }}
                  contentArrowStyle={{
                    borderRight: "0.4rem solid #9ca3af",
                  }}
                  date={item.date}
                  icon={item.icon}
                  iconStyle={{
                    fontSize: "3rem",
                  }}
                >
                  <h3 className="font-bold capitalize text-teal-300 text-nowrap">
                    {item.title}
                  </h3>
                  <p className="font-semibold !mt-0">{item.location}</p>
                  <p className="!mt-1 !font-normal text-gray-300">
                    {item.description}
                  </p>
                </VerticalTimelineElement>
              </React.Fragment>
            ))}
          </VerticalTimeline>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
