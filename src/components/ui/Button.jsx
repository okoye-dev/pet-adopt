import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ children, className, variant, key, onClick }) => {
  return (
    <button
      key={key}
      onClick={onClick}
      className={twMerge(
        `flex items-center justify-center rounded-lg border-[2px] border-white px-6 py-2 hover:opacity-90 ${
          variant === "transparent"
            ? "border-slate-200 text-black"
            : "bg-gradient-to-tr from-pink-400 via-pink-400 via-40% to-indigo-500 text-white shadow-sm"
        }`,
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
