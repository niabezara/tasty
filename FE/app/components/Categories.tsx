import { StrapiImage } from "../lib/strapi-image";
import { Category } from "../types/CategoryTypes";
import { Icons } from "./Icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface CategoriesProps {
  Categorydata: Category[];
}

function Categories({ Categorydata }: CategoriesProps) {
  console.log("Categories response:", Categorydata);
  return (
    <div className="flex flex-col  gap-6">
      {Categorydata.map((category) => (
        <div key={category.id} className="">
          <h2 className="flex py-3 font-medium leading-8 text-[16px] uppercase">
            {category.name}
          </h2>
          <Carousel className="flex w-full gap-5">
            <CarouselContent className="w-full">
              {category.recipes.map((recipe) => (
                <CarouselItem
                  key={recipe.id}
                  className="relative basis-auto flex gap-2 flex-col-reverse"
                >
                  <h3 className="text-[14px]">{recipe.title}</h3>
                  <StrapiImage
                    className="w-[150px] h-[150px] relative object-cover rounded-md "
                    src={recipe?.thumbnail?.url || ""}
                    alt={
                      recipe?.thumbnail?.alternativeText ||
                      "Main Component Image"
                    }
                    height={recipe.thumbnail.height}
                    width={recipe.thumbnail.width}
                  />
                  <div className="absolute bg-white flex items-center w-[65px] rounded-tl-[20px] h-[33px] right-0 bottom-7 p-2.5">
                    <Icons.Heart width={24} height={24} color="#734060" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex md:absolute md:-left-4 bg-[#734060] text-white hover:bg-[#734060] hover:text-white border-none" />
            <CarouselNext className="hidden md:flex md:absolute md:-right-4 bg-[#734060] text-white hover:bg-[#734060] hover:text-white border-none" />
          </Carousel>
        </div>
      ))}
    </div>
  );
}

export default Categories;
