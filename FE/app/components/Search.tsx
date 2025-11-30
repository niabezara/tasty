"use client";

import { Input } from "@/app/components/ui/input";
import { useState } from "react";
import { Drawer, DrawerContent, DrawerTitle } from "./ui/drawer";
import Categories from "./Categories";
import { CategoriesResponse } from "../types/CategoryTypes";

interface SearchDrawerProps {
  data: CategoriesResponse;
}

export function SearchDrawer({ data }: SearchDrawerProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full mb-4 items-center justify-center mx-auto max-w-3xl">
      {/* Search bar trigger */}
      <Input
        className="flex-1 border h-full px-4 py-3 border-solid border-[#e6e6e6]"
        placeholder="Search for a recipe"
        onFocus={() => setOpen(true)}
        readOnly
      />
      <span className="hidden md:block mx-4 text-gray-600 -mt-2 font-drama text-7xl leading-none lowercase tracking-normal">
        or
      </span>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent className="h-[90vh]">
          <DrawerTitle></DrawerTitle>
          <div className="px-4 pb-[200px] w-full mx-auto max-w-[1200px]">
            <Input
              placeholder="Search for a recipe"
              autoFocus
              className="rounded-xl"
            />
            <Categories Categorydata={data.data} />
          </div>
        </DrawerContent>
      </Drawer>
      <button className=" bg-[#734060] text-nowrap uppercase font-roboto  text-white px-4  py-3  hidden md:flex text-center items-center leading-none">
        + View All Recipes
      </button>
    </div>
  );
}
