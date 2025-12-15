import { StrapiImage } from "../lib/strapi-image";
import { SubCollection } from "../types";
import { Fragment } from "react/jsx-runtime";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Icons } from "./Icons";

interface CategoryCarouselProps {
  data: SubCollection[];
}

function CategoryCarousel({ data }: CategoryCarouselProps) {
  return (
    <>
      {data?.map((subcategory) => (
        <section
          key={subcategory?.id}
          className="py-8 md:max-w-6xl mx-auto px-4 md:px-0"
        >
          <h1 className="font-sans font-bold uppercase text-[#734060] tracking-widest text-2xl text-center md:text-left  max-w-4xl md:mx-auto flex flex-wrap md:flex-nowrap justify-center items-center md:space-x-4 pb-8">
            {subcategory?.subTitle} Recipes
          </h1>
          <Carousel className="">
            <CarouselContent className="">
              {subcategory?.recipes?.map((recipe) => (
                <CarouselItem
                  key={recipe.id}
                  className="pl-4 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="space-y-3">
                    <div className="h-[295px] overflow-hidden rounded-lg">
                      <StrapiImage
                        src={recipe.image[0].url}
                        alt={recipe?.name || "Recipe Image"}
                        height={recipe.image[0].height}
                        width={recipe.image[0].width}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-center font-domaine font-bold text-gray-800">
                      {recipe.name}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex md:w-[34px] bg-white/50 cursor-pointer backdrop-blur-md md:h-[34px] md:absolute md:-left-4 bg-opacity-20 text-gray-900 border-none transition-all shadow-sm">
              <Icons.arrow />
            </CarouselPrevious>
            <CarouselNext className="hidden md:flex md:w-[34px] bg-white/50 backdrop-blur-md cursor-pointer md:h-[34px] md:absolute md:-right-4 bg-opacity-20 text-gray-900 border-none transition-all shadow-sm">
              <div className="rotate-180">
                <Icons.arrow />
              </div>
            </CarouselNext>
          </Carousel>
        </section>
      ))}
    </>
  );
}

export default CategoryCarousel;
