import Link from "next/link";
import { StrapiImage } from "../lib/strapi-image";
import Image from "next/image";
import { BlogData } from "../types/BlogTypes";
import { CategoryResponse } from "../types";
function Blog({
  data,
  Category,
}: {
  data: BlogData[];
  Category: CategoryResponse;
}) {
  return (
    <section className="py-8 md:px-4 lg:px-0 md:max-w-6xl mx-auto">
      <div className="md:grid grid-cols-12 gap-x-16">
        <div className="col-span-8">
          <h2 className="flex font-arvo items-start mb-4 font-bold text-sm text-[#734060] tracking-widest uppercase text-center md:text-left">
            The Latest and Greatest
          </h2>
          {data?.slice(0, 3)?.map((blog) => (
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
                <Link href={`/blog/${blog.id}`}>
                  <p className="text-yellow-500 hover:text-black mt-4 uppercase font-bold tracking-widest text-base">
                    Continue Reading
                  </p>
                </Link>
              </span>
            </article>
          ))}
          <Link
            className="btn bg-[#734060] block text-center max-w-md mx-auto hover:bg-black transition-colors duration-300 cursor-pointer"
            href="/blog"
          >
            <button className="mx-4 md:mx-0 leading-4 uppercase font-roboto font-bold pb-4 md:pt-4 text-white ">
              View More Recent Posts
            </button>
          </Link>
        </div>
        <aside className="col-start-9 col-span-4">
          <section className="hidden md:block">
            <Link href="/blog">
              <Image src={"./sidebar.png"} alt="" width={500} height={600} />
            </Link>
          </section>
          <section className="my-6 bg-gray-200 sidebar-collections">
            <h3 className="px-7 py-4 text-[#734060] font-bold text-base font-arvo uppercase tracking-widest border-b-2 border-white">
              Recepie collections
            </h3>
            <ol className="counter-reset">
              {Category?.data?.map((category) => (
                <li
                  key={category.id}
                  className="block relative sidebar-collect py-4 pl-12 pr-8 border-b-2 border-white md:hover:opacity-60 "
                >
                  <Link
                    href={`/categories/${category.documentId}`}
                    className="flex justify-between items-baseline"
                  >
                    <span className="text-sm">{`${category.title} Recipes`}</span>
                    <span className="text-xs font-bold tracking-wide text-gray-500">
                      {` ${category.sub_collections.length}`}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        </aside>
      </div>
    </section>
  );
}

export default Blog;
