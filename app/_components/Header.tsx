"use client";
import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="fixed z-10 top-0 left-0 right-0 mt-2">
      <div className="bg-[#0A192F] opacity-60 ">
        <div className="mx-20 max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
          <div className="flex h-16 items-center ">
            <div
              className="flex-1 md:flex md:items-center md:gap-20 justify-betweeen max-sm:pointer-events-none
            "
            >
              <a className="block" href="#">
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  whileHover={{ scale: 1.1 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Image src={logo} alt="logo" width={40} height={40}></Image>
                </motion.div>
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-8 text-sm">
                  <motion.li
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <a
                      className="text-gray-100 transition hover:text-teal-300 ease-in-out duration-200"
                      href="#about"
                    >
                      <span className="text-teal-300">1.</span> About
                    </a>
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <a
                      className="text-gray-100 transition hover:text-teal-300 ease-in-out duration-200"
                      href="#skills"
                    >
                      <span className="text-teal-300">2.</span> Experience
                    </a>
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <a
                      className="text-gray-100 transition hover:text-teal-300 ease-in-out duration-200"
                      href="#projects"
                    >
                      <span className="text-teal-300">3.</span> Projects
                    </a>
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <a
                      className="text-gray-100 transition hover:text-teal-300 ease-in-out duration-200"
                      href="#contact"
                    >
                      <span className="text-teal-300">4.</span> Contact
                    </a>
                  </motion.li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <motion.div
                  className="sm:flex sm:gap-4"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: -100 }} // Initial animation properties
                  animate={{ opacity: 1, y: 0 }}
                >
                  <a
                    className="rounded-md border-2 text-teal-300  border-teal-600 px-5 py-2.5 text-sm font-semibold shadow-md "
                    href="https://github.com/IvanKorne/Resume/blob/main/Ivan_s_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Résumé
                  </a>
                </motion.div>

                <div className="block md:hidden">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-[#0A192F] border-teal-300 text-gray-50 flex flex-col justify-center items-center w-auto mt-4">
                      <DropdownMenuItem className="">
                        <a href="#about">About</a>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <a href="#experience">Experience</a>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <a href="#projects">Projects</a>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <a href="#contact">Contact</a>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
