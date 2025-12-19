import Link from "next/link";
import { Icons } from "../components/Icons";
import { getStrapiData } from "../data-access/getStrapiData";
import { StrapiImage } from "../lib/strapi-image";
import { Recipe } from "../types";
import AppPagination from "../components/AppPagination";

type PageProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};
async function page({ searchParams }: PageProps) {
  const params = await searchParams;
  const pageParam = params.page;

  const currentPage = Array.isArray(pageParam)
    ? Number(pageParam[0])
    : Number(pageParam) || 1;

  const pageSize = 5;
  const recipeData = await getStrapiData(
    `/api/recipes?populate=*&pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}`
  );

  const { pageCount } = recipeData.meta.pagination;

  return (
    <section className="md:max-w-6xl px-4 mx-auto bg-white py-8">
      <div className="flex flex-wrap md:flex-nowrap justify-center items-center md:space-x-4 pb-8">
        <Icons.recipe className="w-10 h-10 mb-4 md:mb-0 text-yellow-500" />
        <h2 className="font-roboto font-bold uppercase text-[#734060] tracking-widest text-center md:text-left text-3xl">
          All Recipes
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-4">
        {recipeData?.data.map((recipe: Recipe) => (
          <article
            key={recipe.id}
            className="col-span-6 md:col-span-3 text-center pb-6"
          >
            <Link href="" className="block md:hover:opacity-60 space-y-2">
              <StrapiImage
                src={recipe?.image[0].url}
                alt={recipe?.image[0].name}
                height={recipe?.image[0].height}
                width={recipe?.image[0].width}
                className="object-cover h-auto"
              />

              <h3 className="font-domaine text-2xl normal-case tracking-normal leading-tighter text-black">
                {recipe.name}
              </h3>
            </Link>
          </article>
        ))}
      </div>
      <div className="md:max-w-6xl p-4 mx-auto text-center">
        <AppPagination currentPage={currentPage} pageCount={pageCount} />
      </div>
    </section>
  );
}

export default page;
