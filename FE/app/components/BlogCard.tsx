import { StrapiImage } from "../lib/strapi-image";
import { BlogData } from "../types/blogTypes";
import Link from "next/link";

interface BlogCardProps {
  blog: BlogData;
}
function BlogCard({ blog }: BlogCardProps) {
  return (
    <article
      key={blog.id}
      className="md:grid grid-cols-3 gap-4 pb-6 pt-4 my-4 md:border-b "
    >
      <div className="col-span-1">
        <StrapiImage
          className="  object-cover"
          src={blog.image[0]?.url}
          alt={blog.image[0]?.alternativeText || " Image"}
          height={blog.image[0]?.height}
          width={blog.image[0]?.width}
        />
      </div>
      <span className="col-start-2 col-span-2 flex flex-col text-start justify-between px-4 md:px-0">
        <div>
          <span className="my-4 md:my-2 text-gray-600 font-arvo text-[11px] font-bold leading-[2.75px] uppercase">
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <h2 className="mb-4 text-4xl hover:underline cursor-pointer font-domaine normal-case leading-[1.125] font-bold">
            {blog.title}
          </h2>
        </div>
        <p>{blog.descriptionTest}</p>
        <Link href={`/blog/${blog.documentId}`}>
          <p className="text-yellow-500 hover:text-black mt-4 uppercase font-bold tracking-widest text-base">
            Continue Reading
          </p>
        </Link>
      </span>
    </article>
  );
}

export default BlogCard;
