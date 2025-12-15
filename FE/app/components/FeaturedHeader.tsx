import { BreadcrumbWithCustomSeparator } from "./Breadcrumbs";
import { StrapiImage } from "../lib/strapi-image";
import Link from "next/link";
import { Category } from "../types";

function FeaturedHeader({ category }: { category: Category }) {
  return (
    <div className="bg-gray-200">
      <div className="md:max-w-6xl mx-auto md:grid grid-cols-12 pt-6 md:pt-12 pb-6">
        <div className="col-span-7 col-start-5 lg:col-start-4 px-8">
          <div className="flex justify-center md:justify-start">
            <BreadcrumbWithCustomSeparator title={category.title} />
          </div>
        </div>
      </div>
      <div className="sm:block md:max-w-6xl mx-auto md:grid grid-cols-12 gap-x-4">
        <div className="col-span-3 col-start-2 lg:col-start-1 flex flex-col items-center md:-mt-12">
          <Link href="">
            <StrapiImage
              src={category.featuredRecipe?.image[0].url}
              alt={category?.title || "Category Thumbnail"}
              width={category.featuredRecipe?.image[0].width}
              height={category.featuredRecipe?.image[0].height}
              className="rounded-full object-contain w-[183px] h-[183px]"
            />
          </Link>
          <div className=" text-center font-mono font-bold tracking-wider text-gray-500 mx-12 mt-4 md:mx-0 md:pb-8 text-xxs md:text-sm">
            Featured Recipe:
            <Link
              className="block  transition-colors duration-200 ease-in-out underline text-[#734060] hover:text-white hover:bg-amber-500 hover:no-underline"
              href=""
            >
              {category.featuredRecipe?.name}
            </Link>
          </div>
        </div>
        <div className="cat-desc col-span-8 px-8 pt-4 md:pt-0 pb-12">
          <h1 className="font-domaine mb-4 text-center md:text-left text-5xl md:text-6xl text-[#734060]">
            {category.title} Recipes
          </h1>
          <p className="text-center md:text-left leading-relaxed mb-6">
            {category.categoryDescription}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeaturedHeader;
