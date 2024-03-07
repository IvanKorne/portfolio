import React from "react";

const Intro = () => {
  return (
    <section className="bg-[#0A192F] text-white">
      <div className="ml-[15rem] mr-[15rem] flex h-[90vh] items-center">
        <div className="flex flex-col gap-5 ">
          <p>Hi, my name is...</p>
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl leading-[100px]">
            Ivan Korneychuk
            <span className="block">Aspiring Front-End Developer</span>
          </h1>

          <p className="mt-4 w-auto sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
            officia velit nobis, non saepe explicabo repellat. Dolores hic
            deserunt beatae voluptate illum. Fugit ipsam dolores omnis,
            repellendus facilis adipisci eos!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
