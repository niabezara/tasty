import { getStrapiData } from "@/app/data-access/getStrapiData";
import CategoryCarousel from "@/app/components/CategoryCarousel";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { id } = await params;
  const category = await getStrapiData(
    `/api/categories/${id}?populate[sub_collections][populate]=thumbnail`
  );
  console.log("Category Data:", category);

  return (
    <div className="py-8">
      <div className="md:max-w-6xl mx-auto px-4 lg:px-0">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">
          {category?.data?.attributes?.title || "Category"}
        </h1>

        <CategoryCarousel data={category.data.sub_collections} />
      </div>
    </div>
  );
}
