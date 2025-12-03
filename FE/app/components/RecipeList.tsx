import Link from "next/link";
import { Category } from "../types";
import { Fragment } from "react/jsx-runtime";

function RecipeList({ data }: { data: Category[] }) {
  return (
    <section>
      <div className="py-8 px-4 mx-auto md:max-w-5xl recipe-lists">
        {data.map((category) => (
          <Fragment key={category.id}>
            <div className="border-b border-gray-400 pb-2 mb-3">
              <h2 className="text-lg text-black tracking-widest font-arvo uppercase">
                {category.title}
              </h2>
            </div>
            <ul className="grid grid-cols-2 md:grid-cols-3 ml-2">
              <li
                key={category.id}
                className="flex before:mt-2 before:h-2 before:w-2 before:bg-[#734060] before:rounded-full flex-row py-2"
              >
                <Link
                  className="block ml-2 hover:text-black hover:underline"
                  href={`https://pinchofyum.com/recipes/${category.slug}`}
                >
                  {category.title}
                </Link>
              </li>
            </ul>
          </Fragment>
        ))}
      </div>
    </section>
  );
}

export default RecipeList;
