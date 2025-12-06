import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "./ui/breadcrumb";

export function BreadcrumbWithCustomSeparator({ title }: { title: string }) {
  return (
    <Breadcrumb>
      <BreadcrumbList className="flex gap-1 text-sm font-bold uppercase">
        {/* HOME */}
        <BreadcrumbItem>
          <Link
            href="/"
            className="relative inline-flex items-center bg-yellow-500 text-white px-4 py-2 skew-x-[-16deg]"
          >
            <span className="skew-x-16">Tasty</span>
          </Link>
        </BreadcrumbItem>

        {/* RECIPES */}
        <BreadcrumbItem>
          <Link
            href="/recipes"
            className="relative inline-flex items-center bg-yellow-500 text-white px-4 py-2 skew-x-[-16deg]"
          >
            <span className="skew-x-16">Recipes</span>
          </Link>
        </BreadcrumbItem>

        {/* CURRENT PAGE */}
        <BreadcrumbItem>
          <BreadcrumbPage className="relative inline-flex items-center bg-yellow-500 text-white px-4 py-2 skew-x-[-16deg]">
            <span className="skew-x-16">{title}</span>
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
