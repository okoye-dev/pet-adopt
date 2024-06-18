import React from "react";

const CarouselItem = ({ review, id, isVisible }) => {
  return (
    <section
      key={id}
      className={`relative w-screen transition-all duration-300 ease-in-out ${isVisible === 1 ? "-translate-x-[100%]" : isVisible === 2 ? "-translate-x-[200%]" : ""}`}
    >
      <div className="flex flex-col items-center rounded-lg sm:flex-row">
        <span className="h-80 w-4/5 overflow-hidden rounded-t-2xl">
          <img
            src={review.img}
            alt={"review"}
            className="h-full w-full object-cover"
          />
        </span>

        <section className="flex w-4/5 flex-col justify-end gap-2 rounded-b-2xl bg-white px-6 py-4 shadow-lg">
          <h1 className="text-2xl font-bold md:text-3xl">{review.title}</h1>
          <p className="w-full leading-5 md:w-1/2">{review.description}</p>
        </section>
      </div>
    </section>
  );
};

export default CarouselItem;
