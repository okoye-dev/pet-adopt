import React from "react";
import close from "../../assets/cancel.svg";
import Button from "../ui/Button";

const MobileNav = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`fixed right-0 top-0 z-[100] flex h-screen w-screen duration-300 sm:hidden ${isOpen ? "translate-x-0" : "-translate-x-[-100%]"}`}
    >
      <div
        className="h-screen w-[30%]"
        onClick={() => setIsOpen(false)}
      />
      <nav className="h-screen w-[70%] bg-pink-50">
        <img
          src={close}
          alt="close"
          className="absolute right-4 top-[4px] h-12 rounded-full bg-pink-400 bg-opacity-0 p-3 duration-300 hover:bg-opacity-10"
          onClick={() => setIsOpen(false)}
        />

        <ul className="flex h-full w-full flex-col items-center justify-center gap-10">
          <li className="cursor-pointer duration-300 hover:text-pink-700 hover:opacity-80 text-xl font-bold">
            Adoption
          </li>
          <li className="cursor-pointer duration-300 hover:text-pink-700 hover:opacity-80 text-xl font-bold">
            Pets
          </li>
          <li>
            <Button className={"text-nowrap text-lg"}>
              Add Pet
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
