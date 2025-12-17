import BlogCard from "../components/BlogCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";
import { getStrapiData } from "../data-access/getStrapiData";

import { BlogData } from "../types/BlogTypes";

async function page() {
  const data = await getStrapiData(`/api/blogs?populate=*`);
  console.log(data);
  return (
    <div className="md:grid grid-cols-12 md:max-w-6xl py-8 px-4 mx-auto">
      <section className="col-span-7">
        {data.data?.map((blog: BlogData) => {
          return <BlogCard key={blog.id} blog={blog} />;
        })}
        <div className="mt-8 flex flex-col gap-8 items-center text-center">
          <p className="uppercase">more articles</p>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>
    </div>
  );
}

export default page;
