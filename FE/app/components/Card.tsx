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
          : "flex gap-6 py-4 "
      )}
    >
      {data?.MainComponents?.map((component) => (
        <article key={component.id} className={cn(type === "Main" ? "" : "")}>
          <Link
            href=""
            className={cn(
              type === "Main"
                ? "relative md:hover:opacity-60 flex items-center flex-col h-full"
                : "flex flex-col-reverse gap-2 w-20 md:w-24 shrink-0 text-center"
            )}
          >
            <p
              className={cn(
                type === "Main"
                  ? "absolute -bottom-4 bg-yellow-500/90 px-2 sm:px-6 py-2 mx-auto text-white text-xxs sm:text-xs font-bold uppercase"
                  : "font-sans text-sm font-bold text-black leading-tight"
              )}
            >
              {component.title}
            </p>
            <StrapiImage
              className={cn(
                type === "Main"
                  ? ""
                  : "rounded-full w-20 md:w-24 h-20 md:h-24 object-cover"
              )}
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
