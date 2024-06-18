import React from "react";
import dog from "../assets/pet-adoption-dog.png";
import syringe from "../assets/syringe.png";
import zoology from "../assets/zoology.png";
import heart from "../assets/heart.png";

const AdoptionJourney = () => {
  return (
    <div className="px-6">
      <h1 className="text-center text-2xl font-bold">
        Your Pet Adoption Journey With Us
      </h1>
      <section className="relative flex flex-col gap-8 py-4">
        <section className="flex h-full flex-col justify-between gap-8 px-5 pt-[18rem]">
          <div className="flex gap-2 text-xs">
            <img src={zoology} alt="heart" className="h-10 w-10" />
            <div className="flex flex-col gap-1">
              <h2 className="text-sm font-bold">Search Pet</h2>
              <p className="w-2/3-">
                Adopt a dog or cat who's right for you. Simply enter your city
                above to start ypur search.
              </p>
            </div>
          </div>

          <div className="flex gap-2 text-xs">
            <img src={syringe} alt="heart" className="h-10 w-10" />
            <div className="flex flex-col gap-1">
              <h2 className="text-sm font-bold">Free Vet Consultation</h2>
              <p className="w-2/3---">
                We will help your pet to settle down in it's new home, once you
                complete the adoption journey.
              </p>
            </div>
          </div>
        </section>

        <div class="absolute flex w-full items-center justify-center py-3">
          <div className="overflow-hidden rounded-full">
            <img src={dog} alt="dog" className="w-60 object-cover" />
          </div>
        </div>

        <div className="flex gap-2 px-5 text-xs">
          <img src={heart} alt="heart" className="h-10 w-10" />
          <div className="flex flex-col gap-1">
            <h2 className="text-sm font-bold">Adopt Love</h2>
            <p className="w-2/3--">
              The rescure of pet parents will walk you through their adoption
              process. Once you complete the Adoption journey
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdoptionJourney;
