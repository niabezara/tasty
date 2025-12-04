import { getStrapiData } from "@/app/data-access/getStrapiData";
import CategoryCarousel from "@/app/components/CategoryCarousel";
import Link from "next/link";
import { StrapiImage } from "@/app/lib/strapi-image";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { id } = await params;
  const category = await getStrapiData(
    `/api/categories/${id}?populate=thumbnail`
  );

  console.log("Category Data:", category);

  return (
    <section className="bg-gray-200">
      <div className="md:max-w-6xl mx-auto md:grid grid-cols-12 pt-6 md:pt-12 pb-6">
        <div className="col-span-7 col-start-5 lg:col-start-4 px-8">
          <div className="flex justify-center md:justify-start">
            {/* <nav className="poy-breadcrumb yellow-breadcrumb"><span><span><a href="">Pinch of Yum</a></span>  <span><a href="">Recipes</a></span>  <span className="breadcrumb_last" aria-current="page">Most Popular</span></span></nav>					</div> */}
          </div>
        </div>
        <div
          className="
			sm:block md:max-w-6xl mx-auto md:grid grid-cols-12 gap-x-4"
        >
          <div className="col-span-3 col-start-2 lg:col-start-1 flex flex-col items-center md:-mt-12">
            <Link href="">
              <StrapiImage
                src={category?.thumbnail[0]?.url}
                alt={category?.thumbnail[0]?.alternativeText || " Image"}
                height={category?.thumbnail[0]?.height}
                width={category?.thumbnail[0]?.width}
              />
            </Link>
          </div>
        </div>
        <div className="cat-desc col-span-8 px-8 pt-4 md:pt-0 pb-12">
          <h1 className="font-domaine mb-4 text-center md:text-left text-5xl md:text-6xl text-purple-500">
            {category?.title}
          </h1>
          <p className="text-center md:text-left leading-relaxed mb-6">
            {category?.categoryDescription}
          </p>
        </div>
      </div>
    </section>
  );
}
