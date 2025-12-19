import AdUnit from "../components/AdUnit";
import BlogCard from "../components/BlogCard";
import AppPagination from "../components/AppPagination";
import { getStrapiData } from "../data-access/getStrapiData";
import { BlogData } from "../types/blogTypes";

type PageProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

// Force dynamic rendering
export const dynamic = "force-dynamic";

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const pageParam = params.page;

  const currentPage = Array.isArray(pageParam)
    ? Number(pageParam[0])
    : Number(pageParam) || 1;

  const pageSize = 5;

  const data = await getStrapiData(
    `/api/blogs?populate=*&pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}`
  );

  const blogs: BlogData[] = data.data;
  const { pageCount } = data.meta.pagination;

  return (
    <div className="md:grid grid-cols-12 md:max-w-6xl py-8 px-4 mx-auto">
      <section className="col-span-7">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}

        {/* Pagination */}
        <div className="mt-10 flex flex-col gap-6 items-center">
          <AppPagination currentPage={currentPage} pageCount={pageCount} />
        </div>
      </section>
      <aside className="col-span-4">
        <div className="hidden md:block mb-6 mt-8">
          <AdUnit />
        </div>
      </aside>
    </div>
  );
}
