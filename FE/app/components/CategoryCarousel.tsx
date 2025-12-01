import { h1 } from "framer-motion/client";
import { StrapiImage } from "../lib/strapi-image";
import { SubCollection } from "../types";
import { Fragment } from "react/jsx-runtime";

interface CategoryCarouselProps {
  data: SubCollection[];
}

function CategoryCarousel({ data }: CategoryCarouselProps) {
  return (
    <div>
      {data?.map((subcategory) => (
        <Fragment key={subcategory?.id}>
          <h1>`{subcategory?.subTitle} Recpies`</h1>
          <div>
            <StrapiImage
              src={subcategory?.thumbnail[0]?.url}
              alt={subcategory?.thumbnail[0]?.alternativeText || " Image"}
              height={subcategory?.thumbnail[0]?.height}
              width={subcategory?.thumbnail[0]?.width}
            />
            <h2>{subcategory?.subTitle}</h2>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

export default CategoryCarousel;
