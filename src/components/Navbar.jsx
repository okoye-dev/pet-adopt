import React, { useEffect, useState } from "react";
import Logo from "./navbar/Logo";
import Button from "./ui/Button";
import { IoIosMenu } from "react-icons/io";
import MobileNav from "./navbar/MobileNav";

const Navbar = () => {
  useEffect(() => {
    let scrollY = window.scrollY;

    const handleScroll = () => {
      const newScroll = window.scrollY;

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
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="nav sticky top-0 z-[100] flex w-full items-center justify-between bg-white px-6 py-3 transition-all duration-300 md:px-16 lg:px-20">
        <Logo />

        <nav>
          <ul className="flex items-center gap-4">
            <li className="hidden cursor-pointer duration-300 hover:text-pink-700 hover:opacity-80 sm:flex">
              Adoption
            </li>
            <li className="hidden cursor-pointer duration-300 hover:text-pink-700 hover:opacity-80 sm:flex">
              Pets
            </li>
            <li>
              <Button className={"hidden text-nowrap text-xs sm:flex"}>
                Add Pet
              </Button>
            </li>
            <li
              onClick={toggleMenu}
              className="flex cursor-pointer p-1 sm:hidden"
            >
              <IoIosMenu width={20} height={20} className="text-2xl" />
            </li>
          </ul>
        </nav>
      </div>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
