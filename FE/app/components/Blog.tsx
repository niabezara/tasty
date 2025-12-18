import Link from "next/link";
import Image from "next/image";
import { BlogData } from "../types/blogTypes";
import { CategoryResponse } from "../types";
import BlogCard from "./BlogCard";
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
            <BlogCard key={blog.id} blog={blog} />
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
