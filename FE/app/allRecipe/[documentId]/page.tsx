import { getStrapiData } from "@/app/data-access/getStrapiData";
import { StrapiImage as StrapiImageComponent } from "@/app/lib/strapi-image";
import { ArrowLeft, Clock, Users, ChefHat, Tag, Utensils } from "lucide-react";
import Link from "next/link";
import type { Recipe, RichTextBlock, SubCollection } from "@/app/types";

type Props = {
  params: Promise<{ documentId: string }>;
};

interface RecipeDetailResponse {
  data: Recipe & {
    sub_collections?: SubCollection[];
    serving?: string;
    featuredRecipe?: {
      id: number;
      documentId: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      title: string;
      slug: string | null;
      categoryDescription: string | null;
    };
  };
  meta: Record<string, unknown>;
}

// Helper function to parse ingredients from string
function parseIngredients(ingredientsString: string): string[] {
  return ingredientsString
    .split("\n")
    .filter((line) => line.trim())
    .map((line) => line.replace(/^-\s*/, "").trim());
}

// Helper function to extract text from Strapi's rich text format
function extractTextFromDescription(description: RichTextBlock[]): string[] {
  if (!description || !Array.isArray(description)) return [];

  const steps: string[] = [];
  description.forEach((block) => {
    if (block.type === "list" && block.children) {
      block.children.forEach((listItem) => {
        if (
          "type" in listItem &&
          listItem.type === "list-item" &&
          "children" in listItem
        ) {
          const children = listItem.children as Array<{
            text?: string;
            type: string;
          }>;
          const text = children
            .map((child) => child.text || "")
            .join("")
            .trim();
          if (text) steps.push(text);
        }
      });
    }
  });
  return steps;
}

async function Page({ params }: Props) {
  const { documentId } = await params;
  const recipeData = (await getStrapiData(
    `/api/recipes/${documentId}?populate=*`
  )) as RecipeDetailResponse;

  const recipe = recipeData.data;

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Recipe not found</p>
      </div>
    );
  }

  const ingredients = recipe.ingredients
    ? parseIngredients(recipe.ingredients)
    : [];
  const instructions = recipe.description
    ? extractTextFromDescription(recipe.description)
    : [];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link
            href="/allRecipe"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Recipes</span>
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              {recipe.image && recipe.image.length > 0 && (
                <StrapiImageComponent
                  src={recipe.image[0].url}
                  alt={recipe.image[0].name || recipe.name}
                  width={recipe.image[0].width}
                  height={recipe.image[0].height}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Tags */}
            {recipe.sub_collections && recipe.sub_collections.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {recipe.sub_collections.map((collection) => (
                  <span
                    key={collection.id}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-100 text-orange-700 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors"
                  >
                    <Tag className="w-4 h-4" />
                    {collection.subTitle}
                  </span>
                ))}
              </div>
            )}

            {/* Featured Recipe Card */}
            {recipe.featuredRecipe && (
              <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-xl p-5 shadow-md border border-purple-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center shrink-0">
                    <Utensils className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-purple-600 mb-1">
                      Featured Recipe
                    </p>
                    <h3 className="font-bold text-gray-900">
                      {recipe.featuredRecipe.title}
                    </h3>
                    {recipe.featuredRecipe.categoryDescription && (
                      <p className="text-sm text-gray-600 mt-1">
                        {recipe.featuredRecipe.categoryDescription}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            {/* Title */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                {recipe.name}
              </h1>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              {recipe.cookTime && (
                <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">
                        Cook Time
                      </p>
                      <p className="text-xl font-bold text-gray-900">
                        {recipe.cookTime} mins
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {recipe.serving && (
                <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">
                        Servings
                      </p>
                      <p className="text-xl font-bold text-gray-900">
                        {recipe.serving}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Ingredients Section */}
            {ingredients.length > 0 && (
              <div className="bg-linear-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  <ChefHat className="w-6 h-6 text-orange-600" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Ingredients
                  </h2>
                </div>
                <ul className="space-y-3">
                  {ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 shrink-0" />
                      <span className="text-gray-700">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Instructions Section */}
            {instructions.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Instructions
                </h2>
                <ol className="space-y-4">
                  {instructions.map((step, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </span>
                      <p className="text-gray-700 pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
