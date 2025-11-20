"use client";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

import Link from "next/link";
import { cn } from "@/app/lib/utils";

type NavigationLinkProps = ComponentProps<typeof Link> & {
  type?: "mobile" | "desktop";
};

export default function NavigationLink({
  href,
  onClick,
  type,
  ...rest
}: NavigationLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  const linkClasses = cn(
    "w-full ",
    type === "mobile" &&
      "text-[24px] font-regular text-black xl:font-bold leading-[100%] capitalize relative max-w-fit transition-all duration-300 ease-in-out",
    type === "desktop" &&
      "font-regular text-[20px] xl:text-[20px] text-black capitalize duration-300 ease-in-out"
    // type === "desktop" &&
    //   isActive &&
    //   "bg-[#282828] border py-[14px] rounded-full text-white"
  );

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={linkClasses}
      href={href}
      onClick={onClick}
      {...rest}
    />
  );
}
