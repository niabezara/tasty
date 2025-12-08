import { StrapiImage } from "../lib/strapi-image";
import { SubCollection } from "../types";
import { Fragment } from "react/jsx-runtime";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

interface CategoryCarouselProps {
  data: SubCollection[];
}

function CategoryCarousel({ data }: CategoryCarouselProps) {
  return (
    <section className="py-8 md:max-w-6xl mx-auto px-4 md:px-0">
      {data?.map((subcategory) => (
        <Fragment key={subcategory?.id}>
          <h1 className="font-sans font-bold uppercase text-[#734060] tracking-widest text-2xl text-center md:text-left  max-w-4xl md:mx-auto flex flex-wrap md:flex-nowrap justify-center items-center md:space-x-4 pb-8">
            `{subcategory?.subTitle} Recipes`
          </h1>
          <Carousel>
            <CarouselContent className="">
              {subcategory?.recipes?.map((recipe) => (
                <CarouselItem key={recipe.id} className="h-[375px] ">
                  <StrapiImage
                    src={recipe.image[0].url}
                    alt={recipe?.name || "Recipe Image"}
                    height={recipe.image[0].height}
                    width={recipe.image[0].width}
                    className="w-full h-full object-cover"
                  />
                  <p>{recipe.name}</p>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </Fragment>
      ))}
    </section>
  );
}

export default CategoryCarousel;
