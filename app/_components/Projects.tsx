"use client";
import React from "react";
import { projectsData } from "../data/data";
import Image from "next/image";
import { motion } from "framer-motion";
type projectProps = (typeof projectsData)[1];
const Projects = () => {
  return (
    <section
      className=" text-gray-300 max-lg:mt-[25rem] mt-[20rem] max-sm:mt-[17rem] "
      id="projects"
    >
      <div className="ml-[15rem] mr-[10rem] flex flex-col h-[90vh] gap-5 items-center max-md:ml-[8rem] max-sm:ml-[14rem] max-lg:flex-col max-lg:gap-[3rem]">
        <div className="flex gap-5 items-center justify-start ">
          <p className="text-teal-300 font-semibold text-xl">03.</p>
          <div className="flex gap-3 items-center">
            <p className="text-3xl font-bold ">Projects</p>
            <div className="flex flex-col items-start justify-center mt-5 gap-1">
              <span className="h-[0.5px] bg-gray-500 w-[12.3rem] "></span>
              <p className="text-xs text-gray-400">
                (find more projects on my github!)
              </p>
            </div>
          </div>
        </div>
        {projectsData.map((project: projectProps, index) => (
          <React.Fragment key={index}>
            <motion.a
              href={project.href}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{
                once: true,
              }}
            >
              <section className="bg-[#07101e] rounded-xl group mb-3 sm:mb-8 pb-2 max-lg:w-[35rem] max-md:w-[30rem] max-sm:w-[29rem] w-[42rem] relative border overflow-hidden border-black/5 sm:pr-8 sm:h-[20rem] h-[30rem] max-sm:ml-[2.5rem]">
                <div className="py-4 px-5 pb-7 group-even:ml-[18rem] sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex gap-2 flex-col">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="mt-2  text-[15px] max-lg:text-[13px] max-md:text[12px] text-gray-300">
                    {project.description}
                  </p>
                  <ul
                    className={`flex  sm:mt-auto gap-2 ${
                      index == 0 ? "mt-10" : "mt-4"
                    }`}
                  >
                    {project.tags.map((tag, index) => (
                      <li
                        className="bg-gray-900 px-3 py-1 text-sm tracking-wider rounded-full text-teal-300"
                        key={index}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <Image
                    className="absolute top-8 -right-40 max-sm:top-60 max-sm:right-0 max-md:-right-[15rem] w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40"
                    src={project.imageUrl}
                    alt={project.description}
                    quality={95}
                    width={400}
                    height={300}
                  />
                </div>
              </section>
            </motion.a>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
