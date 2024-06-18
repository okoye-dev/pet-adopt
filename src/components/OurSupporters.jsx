import React from "react";
import spotify from "../assets/spotify.svg";
import forbes from "../assets/forbes.svg";
import tinder from "../assets/tinder.svg";
import salesforce from "../assets/salesforce.svg";
import slack from "../assets/slack.svg";

const OurSupporters = () => {
  const supporters = [spotify, forbes, tinder, salesforce, slack];

  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 bg-slate-100 py-16 px-4">
      <h1 className="text-center text-2xl font-bold">Some Of Our Supporters</h1>
      <div className="flex flex-wrap items-center justify-center gap-6 px-6">
        {supporters.map((logo, id) => (
          <img
            key={id}
            src={logo}
            alt="logo"
            width={100}
            height={50}
            className="w-16"
          />
        ))}
      </div>
    </div>
  );
};

export default OurSupporters;
