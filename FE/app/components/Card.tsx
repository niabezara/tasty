import Link from "next/link";
import { StrapiImage } from "../lib/strapi-image";
import { MainCategoryData } from "../types";
import { cn } from "../lib/utils";

function Card({ data, type }: { data: MainCategoryData; type: string }) {
  return (
    <div
      className={cn(
        type === "Main"
          ? "md:max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-4 lg:px-0"
          : ""
      )}
    >
      {data?.MainComponents?.map((component) => (
        <article key={component.id} className="text-center">
          <Link
            href=""
            className="relative md:hover:opacity-60 flex items-center flex-col h-full"
          >
            <p className="absolute -bottom-4 bg-yellow-500/90 px-2 sm:px-6 py-2 mx-auto text-white text-xxs sm:text-xs font-bold uppercase">
              {component.title}
            </p>
            <StrapiImage
              src={component.Image.url}
              alt={component?.Image?.alternativeText || "Main Component Image"}
              height={component.Image.height}
              width={component.Image.width}
            />
          </Link>
        </article>
      ))}
    </div>
  );
}

export default Card;
