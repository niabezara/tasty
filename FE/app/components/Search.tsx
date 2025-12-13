"use client";

import { Input } from "@/app/components/ui/input";
import { useState } from "react";
import { Drawer, DrawerContent, DrawerTitle } from "./ui/drawer";
import Categories from "./Categories";

import { useSearchStore } from "../store/useSearchStore";
import { CategoryResponse } from "../types";
import { Icons } from "./Icons";
import Link from "next/link";

interface SearchDrawerProps {
  data: CategoryResponse;
}

export function SearchDrawer({ data }: SearchDrawerProps) {
  const [open, setOpen] = useState(false);
  const { query, setQuery, clearQuery } = useSearchStore();

  const handleDrawerChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      clearQuery(); // Clear search when drawer closes
    }
  };

  return (
    <section className="md:bg-gray-100 w-full">
      <div className="flex relative  w-full mb-4 items-center justify-center mx-auto max-w-3xl">
        {/* Search bar trigger */}
        <Input
          className="flex-1  border h-full pl-10 bg-white py-3 border-solid border-[#e6e6e6]"
          placeholder="Search for a recipe"
          onFocus={() => setOpen(true)}
          readOnly
        />
        <div className="absolute left-0 ml-3.5">
          <Icons.search />
        </div>
        <span className="hidden md:block mx-4 text-gray-600 -mt-2 font-drama text-7xl leading-none lowercase tracking-normal">
          or
        </span>
        <Drawer open={open} onOpenChange={handleDrawerChange}>
          <DrawerContent className="h-[90vh] overflow-x-auto">
            <DrawerTitle></DrawerTitle>
            <div className="px-4 pb-[200px] w-full mx-auto max-w-[1200px]">
              <Input
                placeholder="Search for a recipe"
                autoFocus
                className="rounded-xl"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Categories Categorydata={data.data} />
            </div>
          </DrawerContent>
        </Drawer>
        <Link href="/allRecipe">
          <button className=" bg-[#734060] text-nowrap uppercase font-roboto  text-white px-4  py-3  hidden md:flex text-center items-center leading-none">
            + View All Recipes
          </button>
        </Link>
      </div>
    </section>
  );
}
