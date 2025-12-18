import BlogCard from "../components/BlogCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";
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
          <Pagination>
            <PaginationContent>
              {/* Previous */}
              <PaginationItem>
                <PaginationPrevious
                  href={`?page=${Math.max(1, currentPage - 1)}`}
                  aria-disabled={currentPage === 1}
                  className={
                    currentPage === 1 ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>

              {/* Pages */}
              {Array.from({ length: pageCount }).map((_, i) => {
                const page = i + 1;
                return (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href={`?page=${page}`}
                      isActive={page === currentPage}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

              {/* Next */}
              <PaginationItem>
                <PaginationNext
                  href={`?page=${Math.min(pageCount, currentPage + 1)}`}
                  aria-disabled={currentPage === pageCount}
                  className={
                    currentPage === pageCount
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>
    </div>
  );
}
