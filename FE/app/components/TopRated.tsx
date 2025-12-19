import Link from "next/link";
import { getStrapiData } from "../data-access/getStrapiData";
import { StrapiImage } from "../lib/strapi-image";
import { Category, Recipe, SubCollection } from "../types";
import RecipeList from "./RecipeList";
import { Icons } from "./Icons";

async function TopRated() {
  const recipesData = await getStrapiData(`/api/categories?populate=*`);

  const topRated = recipesData.data.find(
    (category: Category) => category.title === "top-rated"
  );

  if (!topRated) return null;

  return (
    <div>
      <div className="max-w-xl md:mx-auto text-center">
        <div className="flex mt-20 justify-center items-center space-x-2 mb-4">
          <Icons.trophy />
          <h2 className="font-sans font-bold tracking-widest text-2xl leading-[0.1em] uppercase text-[#734060] m-0">
            Top Rated Recipes
          </h2>
        </div>
        <p className="hidden md:block font-serif">
          Out of all the many recipes on Pinch of Yum, these are our shining
          stars - the recipes we come back to again and again (and again).
        </p>
      </div>

      <section className="pb-8 pt-4 px-4 mx-auto md:max-w-5xl">
        {topRated.sub_collections.map((collection: SubCollection) => (
          <div
            key={collection.id}
            className="hidden md:grid md:grid-cols-3 gap-8 mt-12"
          >
            {collection.recipes?.slice(0, 9).map((recipe: Recipe) => (
              <div key={recipe.id}>
                <div className="flex space-x-4 ">
                  <StrapiImage
                    className="h-24 w-24 object-cover"
                    src={recipe?.image[0]?.url}
                    alt={
                      recipe?.image?.[0]?.alternativeText ||
                      "Main Component Image"
                    }
                    height={recipe.image?.[0]?.height}
                    width={recipe.image?.[0]?.width}
                  />
                  <p className="block font-domaine text-lg normal-case tracking-normal font-bold leading-tight text-black">
                    {recipe.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
        <Link
          className="font-serif bg-[#734060] block text-center text-white px-1 py-3 uppercase font-bold mt-8 md:mt-12 max-w-md mx-auto"
          href="/allRecipe"
        >
          + View All Recipes
        </Link>
      </section>
      <RecipeList data={recipesData.data} />
    </div>
  );
}

export default TopRated;
