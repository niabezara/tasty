import { useMemo } from "react";
import { StrapiImage } from "../lib/strapi-image";

import { Icons } from "./Icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useSearchStore } from "../store/useSearchStore";
import { Category } from "../types";

interface CategoriesProps {
  Categorydata: Category[];
}

function Categories({ Categorydata }: CategoriesProps) {
  const query = useSearchStore((state) => state.query);

  // Filter categories and recipes based on search query
  const filteredCategories = useMemo(() => {
    if (!query.trim()) {
      return Categorydata;
    }

    const searchTerm = query.toLowerCase();

    return Categorydata.map((category) => ({
      ...category,
      recipes: category.sub_collections.filter((collection) =>
        collection.subTitle.toLowerCase().includes(searchTerm)
      ),
    })).filter((category) => category.recipes.length > 0);
  }, [Categorydata, query]);

  return (
    <div className="flex flex-col gap-6">
      {/* Categories and Recipes */}
      {filteredCategories?.length > 0 ? (
        filteredCategories.map((category) => {
          const showArrows = category.sub_collections.length > 4;
          return (
            <div key={category.id}>
              <h2 className="flex py-3 font-medium leading-8 text-[16px] uppercase">
                {category.title}
              </h2>
              <Carousel className="flex w-full gap-5">
                <CarouselContent className="w-full">
                  {category?.sub_collections.map((collection) => (
                    <CarouselItem
                      key={collection.id}
                      className="relative basis-auto flex gap-2 flex-col-reverse"
                    >
                      <h3 className="text-[14px]">{collection.subTitle}</h3>
                      <StrapiImage
                        className="w-[150px] h-[150px] relative object-cover rounded-md"
                        src={collection?.thumbnail?.[0]?.url || ""}
                        alt={
                          collection?.thumbnail?.[0]?.alternativeText ||
                          "Main Component Image"
                        }
                        height={collection.thumbnail?.[0]?.height}
                        width={collection.thumbnail?.[0]?.width}
                      />
                      <div className="absolute bg-white flex items-center w-[65px] rounded-tl-[20px] h-[33px] right-0 bottom-7 p-2.5">
                        <Icons.Heart width={24} height={24} color="#734060" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {showArrows && (
                  <>
                    <CarouselPrevious className="hidden md:flex md:absolute md:-left-4 bg-[#734060] text-white border-none" />
                    <CarouselNext className="hidden md:flex md:absolute md:-right-4 bg-[#734060] text-white border-none" />
                  </>
                )}
              </Carousel>
            </div>
          );
        })
      ) : (
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg">{`No recipes found matching "${query}"`}</p>
          <p className="text-sm mt-2">Try a different search term</p>
        </div>
      )}
    </div>
  );
}

export default Categories;
