"use client";
import { cn } from "@/app/lib/utils";
import Hamburger from "hamburger-react";
import { useState } from "react";
import NavigationLink from "./NavigationLinks";

const HeaderData = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Recipes", link: "/recipes" },
  { name: "Start Here", link: "/start-here" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const changeMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      {/* mobile navigation background*/}
      {isOpen && (
        <div className="z-[-1] absolute top-0 left-0 bg-transparent lg:hidden w-full h-[110vh] pointer-events-none">
          <div
            className={cn(
              "h-full w-1/2 bg-white/40 backdrop-blur-md  transition-transform duration-500 lg:hidden pointer-events-none",
              isOpen ? "translate-x-0" : "translate-x-full"
            )}
          />
        </div>
      )}
      {isOpen && (
        <div className="absolute z-11 font-sfPro overflow-x-scroll top-0 bottom-0 h-screen pt-[22vh] flex flex-col justify-between left-0 right-0 p-4 md:px-5">
          <div className="flex flex-col lg:hidden gap-6 relative">
            {HeaderData?.map((navigationLink) => {
              return (
                <div key={navigationLink.name}>
                  <NavigationLink
                    href={navigationLink.link}
                    type="mobile"
                    onClick={() => isOpen && changeMenu()}
                  >
                    {navigationLink.name}
                  </NavigationLink>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* desktop navigation */}
      <nav className="hidden lg:flex ">
        <ul className="flex space-x-8 w-full font-bold uppercase font-roboto text-xl">
          {HeaderData.map((item) => (
            <li key={item.name}>
              <NavigationLink type="desktop" href={item.link}>
                {item.name}
              </NavigationLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="block top-[45px] right-4 z-50 lg:hidden">
        <Hamburger
          size={28}
          rounded
          color="#000"
          toggled={isOpen}
          toggle={changeMenu}
        />
      </div>
    </div>
  );
}
