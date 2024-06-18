import React from "react";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <div className="flex items-center justify-between px-10 md:px-16 lg:px-20 py-10">
      <section className="flex flex-col items-start justify-center gap-4">
        <h1 className="text-5xl font-bold leading-[1.2]">
          EVERY PET DESERVES A HOME
        </h1>
        <p className="w-3/4">
          Thousands of rescued pets need a proper home and a second chance.
        </p>
        <Button>ADOPT NOW</Button>
      </section>
      <section></section>
    </div>
  );
};

export default Hero;
