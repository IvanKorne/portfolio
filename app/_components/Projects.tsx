import React from "react";
import { projectsData } from "../data/data";

const Projects = () => {
  return (
    <section
      className="bg-[#0A192F] text-gray-300 max-lg:mt-[10rem]"
      id="projects"
    >
      <div className="ml-[15rem] mr-[10rem] flex h-[90vh] items-center max-md:ml-[8rem] max-sm:ml-[5rem] gap-[8rem] max-lg:flex-col max-lg:gap-[3rem]">
        <div className="flex gap-5 items-center justify-start ml-[2rem]">
          <p className="text-teal-300 font-semibold text-xl">03.</p>
          <div className="flex gap-3 items-center">
            <p className="text-3xl font-bold ">Projects</p>
            <span className="h-[0.5px] bg-gray-500 w-[10rem] "></span>
          </div>
        </div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}></React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
