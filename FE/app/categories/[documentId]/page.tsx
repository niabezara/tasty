import { getStrapiData } from "@/app/data-access/getStrapiData";
import CategoryCarousel from "@/app/components/CategoryCarousel";
import Link from "next/link";
import { StrapiImage } from "@/app/lib/strapi-image";
import { BreadcrumbWithCustomSeparator } from "@/app/components/Breadcrumbs";

interface PageProps {
  params: Promise<{
    documentId: string;
  }>;
}
export default async function CategoryPage({ params }: PageProps) {
  const { documentId } = await params;

  const response = await getStrapiData(
    `/api/categories/${documentId}?populate=thumbnail`
  );

  const category = response?.data || response;
  console.log("Category Data:", category);

  return (
    <section>
      <section
        className="
					bg-gray-200"
      >
        <div className="md:max-w-6xl mx-auto md:grid grid-cols-12 pt-6 md:pt-12 pb-6">
          <div className="col-span-7 col-start-5 lg:col-start-4 px-8">
            <div className="flex justify-center md:justify-start">
              <BreadcrumbWithCustomSeparator title={category.title} />
            </div>
          </div>
        </div>
        <div
          className="
			sm:block md:max-w-6xl mx-auto md:grid grid-cols-12 gap-x-4"
        >
          <div className="col-span-3 col-start-2 lg:col-start-1 flex flex-col items-center md:-mt-12">
            <a href="">
              <StrapiImage
                src={category.thumbnail[0].url}
                alt={category?.title || "Category Thumbnail"}
                width={category.thumbnail[0].width}
                height={category.thumbnail[0].height}
                className="rounded-full object-contain w-[183px] h-[183px]"
              />
            </a>
            <div className="poy-category-featured-post text-center font-sans font-semibold tracking-wider text-gray-500 mx-12 mt-4 md:mx-0 md:pb-8 text-xxs md:text-sm">
              Featured Recipe:{" "}
              <a className="block" href="">
                Chicken Wontons in Spicy Chili Sauce
              </a>
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
      </section>
    </section>
  );
}
