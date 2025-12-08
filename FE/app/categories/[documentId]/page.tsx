import { getStrapiData } from "@/app/data-access/getStrapiData";
import FeaturedHeader from "@/app/components/FeaturedHeader";
import CategoryCarousel from "@/app/components/CategoryCarousel";

interface PageProps {
  params: Promise<{
    documentId: string;
  }>;
}
export default async function CategoryPage({ params }: PageProps) {
  const { documentId } = await params;
  const response = await getStrapiData(`/api/categories/${documentId}`);
  const category = response?.data || response;
  console.log("Category Data:", category);
  return (
    <section>
      <FeaturedHeader category={category} />
      <CategoryCarousel data={category.sub_collections} />
    </section>
  );
}
