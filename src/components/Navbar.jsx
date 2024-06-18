import React, { useEffect } from "react";
import Logo from "./navbar/Logo";
import Button from "./ui/Button";

const Navbar = () => {
  useEffect(() => {
    var scrollY = window.scrollY;
    var newScroll;

    window.addEventListener("scroll", function () {
      newScroll = window.scrollY;

      if (newScroll < 40) {
        document.querySelector(".nav")?.classList.remove("shadow-lg");
        document.querySelector(".nav")?.classList.remove("shadow-black/5");
      } else {
        if (scrollY > newScroll) {
          document
            .querySelector(".nav")
            ?.classList.remove("-translate-y-[100px]");
          document.querySelector(".nav")?.classList.add("shadow-lg");
          document.querySelector(".nav")?.classList.add("shadow-black/5");
        } else {
          document.querySelector(".nav")?.classList.add("-translate-y-[100px]");
          document.querySelector(".nav")?.classList.remove("shadow-lg");
          document.querySelector(".nav")?.classList.remove("shadow-black/5");
        }
      }

      scrollY = newScroll;
    });

    return () => {
      window.removeEventListener("scroll", newScroll);
    };
  }, []);

  return (
    <div className="nav sticky top-0 flex w-full items-center justify-between bg-white px-10 py-3 transition-all duration-300 md:px-16 lg:px-20">
      <Logo />

      <nav>
        <ul className="flex items-center gap-4">
          <li className="cursor-pointer duration-300 hover:text-pink-700 hover:opacity-80">
            Adoption
          </li>
          <li className="cursor-pointer duration-300 hover:text-pink-700 hover:opacity-80">
            Pets
          </li>
          <li>
            <Button>Add Pet</Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
