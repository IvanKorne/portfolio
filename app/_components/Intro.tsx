import React from "react";
import Image from "next/image";
import photo from "../assets/Photo.jpeg";

const Intro = () => {
  return (
    <section className="bg-[#0A192F] text-gray-300 max-lg:mt-[8rem] mt-[3rem] ">
      <div className="ml-[15rem] mr-[10rem] flex h-[90vh] items-center max-md:ml-[8rem] max-sm:ml-[rem] gap-[8rem] max-lg:flex-col max-lg:gap-[3rem]">
        <div className="flex flex-col gap-5 ">
          <p className="text-sm text-teal-300">Hi, my name is...</p>
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-6xl max-md:text-4xl max-sm:text-3xl font-extrabold text-transparent ">
            Ivan Korneychuk.
            <span className="block mt-1">Turning Ideas into Code.</span>
          </h1>

          <p className="mt-4 w-[500px] text-gray-300 max-md:w-[400px] max-sm:base sm:text-lg/relaxed font-semibold">
            Aspiring front-end/full-stack developer for the web, specializing in
            <b className="text-teal-400"> React</b> and{" "}
            <b className="text-teal-400">Nextjs</b>, who's always looking for
            opportunities to grow!
          </p>
        </div>
        <Image
          src={photo}
          alt="portrait"
          width={340}
          height={340}
          className="rounded-tl-[10rem] rounded-tr-[1rem] rounded-bl-[3rem] rounded-br-[5rem]  "
        />
      </div>
    </section>
  );
};

export default Intro;
