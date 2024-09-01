"use client";
import React from "react";
import SubmitButton from "./SubmitButton";
import { motion } from "framer-motion";
import { sendEmail } from "../actions/SendEmail";
import { toast } from "sonner";

const Contact = () => {
  return (
    <section
      className=" text-gray-300 max-lg:mt-[43rem] mt-[40rem] max-sm:mt-[70rem]"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="ml-[15rem] mr-[10rem] w-[min(100%,40rem)] flex flex-col h-[90vh] items-start max-md:ml-[4rem] max-sm:ml-[5rem] gap-[3rem] max-lg:flex-col max-lg:gap-[3rem]"
      >
        <div className="flex gap-5 items-center justify-center">
          <p className="text-teal-300 font-semibold text-xl">04.</p>
          <div className="flex gap-3 items-center">
            <p className="text-3xl font-bold ">Contact Me</p>
            <span className="h-[0.5px] bg-gray-500 w-[10rem] "></span>
          </div>
        </div>
        <div className="font-lg">
          To get in touch with me, please contact me at{" "}
          <a
            href="mailto:ikorney@uwaterloo.ca"
            className="hover:underline text-teal-300"
          >
            ikorneyc@uwaterloo.ca
          </a>{" "}
          or through this form!
        </div>
        <form
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);
            if (error) {
              toast(error);
              return;
            }
            toast("Successfully sent Email");
          }}
          className="mt-3 flex flex-col ml-[10rem] max-xl:ml-[6rem] max-md:ml-[3rem] max-sm:ml-[0rem] text-gray-900"
        >
          <input
            type="email"
            name="senderEmail"
            className="h-10 w-[40rem] max-lg:w-[30rem] max-sm:w-[22rem] border rounded-lg border-black/10 px-2"
            placeholder="Your Email"
            required
            maxLength={500}
          />
          <textarea
            placeholder="Your Message"
            name="message"
            className="h-[15rem] my-3 rounded-lg border-black/10 px-2"
            required
            maxLength={5000}
          ></textarea>
          <SubmitButton />
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
