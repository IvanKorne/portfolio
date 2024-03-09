"use client";
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
const Sidebar = () => {
  return (
    <motion.div
      className="fixed left-0 bottom-0 bg-[#0A192F] max-md:hidden"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <div className="flex flex-col gap-8 items-center justify-center ml-10 ">
        <a
          href="https://github.com/IvanKorne"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="opacity-70 hover:text-teal-300 transition ease-in-out cursor-pointer duration-200" />
        </a>
        <a href="mailto:ikorney@uwaterloo.ca">
          <Mail className="opacity-70 hover:text-teal-300 transition ease-in-out cursor-pointer duration-200" />
        </a>
        <a
          href="https://linkedin.com/in/ivan-korneychuk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="opacity-70 hover:text-teal-300 transition ease-in-out cursor-pointer duration-200" />
        </a>

        <div className="h-[7rem] bg-white w-[0.1rem] opacity-70"></div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
