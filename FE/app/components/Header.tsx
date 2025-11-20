import Image from "next/image";
import Navigation from "./Navigation/Navigation";
export default function Header() {
  return (
    <header className="flex relative items-center w-full justify-between border-b border-gray-300 border-opacity-20">
      <div className="w-5xl  bg-white flex items-center justify-between px-4 mx-auto ">
        <Image src="/Logo.png" alt="Logo" width={150} height={150} />
        <Navigation />
      </div>
    </header>
  );
}
