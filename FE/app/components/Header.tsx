"use client";
import Hamburger from "hamburger-react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "../lib/utils";

const HeaderData = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Recipes", link: "/recipes" },
  { name: "Start Here", link: "/start-here" },
];

export default function Header() {
  const [isOpen, setIsopen] = useState(false);

  const changeMenu = () => {
    setIsopen(!isOpen);
  };

  return (
    <div className="flex items-center w-full justify-between px-4 border-b border-gray-300 border-opacity-20">
      <div className=" w-5xl flex items-center justify-between px-4 mx-auto ">
        <Image src="/Logo.png" alt="Logo" width={150} height={150} />
        {/* mobile navigation */}
        {isOpen && (
          <div className="absolute mt-[-60px] top-0 bg-transparent lg:hidden left-0 pointer-events-none w-full h-[110vh] overflow-hidden">
            <div
              className={cn(
                "fixed top-0 left-0 h-full w-1/2 bg-black/20 backdrop-blur-0 transition-transform duration-500 lg:hidden z-50",
                isOpen ? "translate-x-0" : "translate-x-full"
              )}
            />
            <div className="w-full h-full absolute planes"></div>
          </div>
        )}

        <nav className="hidden lg:flex ">
          <ul className="flex space-x-8 w-full font-bold uppercase font-roboto text-xl">
            {HeaderData.map((item) => (
              <li key={item.name}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="lg:hidden">
          <Hamburger
            size={28}
            rounded
            color="#000"
            toggled={isOpen}
            toggle={changeMenu}
          />
        </div>
      </div>
    </div>
  );
}
