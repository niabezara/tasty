import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/app/components/ui/pagination";

type AppPaginationProps = {
  currentPage: number;
  pageCount: number;
  basePath?: string;
};

export default function AppPagination({
  currentPage,
  pageCount,
  basePath = "",
}: AppPaginationProps) {
  // if (pageCount <= 1) return null;

  return (
    <div className="mt-10 flex justify-center">
      <Pagination>
        <PaginationContent>
          {/* Previous */}
          <PaginationItem>
            <PaginationPrevious
              href={`${basePath}?page=${Math.max(1, currentPage - 1)}`}
              aria-disabled={currentPage === 1}
              className={
                currentPage === 1 ? "pointer-events-none opacity-50" : ""
              }
            />
          </PaginationItem>

          {/* Page numbers */}
          {Array.from({ length: pageCount }).map((_, i) => {
            const page = i + 1;
            return (
              <PaginationItem key={page}>
                <PaginationLink
                  href={`${basePath}?page=${page}`}
                  isActive={page === currentPage}
                  className="text-[#734060]"
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          {/* Next */}
          <PaginationItem>
            <PaginationNext
              href={`${basePath}?page=${Math.min(pageCount, currentPage + 1)}`}
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
  );
}
