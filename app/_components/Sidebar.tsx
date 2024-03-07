"use client";
import React from "react";
import { Github } from "lucide-react";
import { Mail } from "lucide-react";
import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";
const Sidebar = () => {
  return (
    <motion.div
      className="fixed left-0 bottom-0 bg-[#0A192F] max-md:hidden"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <div className="flex flex-col gap-8 items-center justify-center ml-10 ">
        <Github className="opacity-70 hover:text-teal-300 transition ease-in-out cursor-pointer duration-200" />
        <Mail className="opacity-70 hover:text-teal-300 transition ease-in-out cursor-pointer duration-200" />
        <Linkedin className="opacity-70 hover:text-teal-300 transition ease-in-out cursor-pointer duration-200" />
        <div className="h-[7rem] bg-white w-[0.1rem] opacity-70"></div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
