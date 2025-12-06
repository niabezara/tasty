import { getStrapiData } from "@/app/data-access/getStrapiData";
import FeaturedHeader from "@/app/components/FeaturedHeader";

interface PageProps {
  params: Promise<{
    documentId: string;
  }>;
}
export default async function CategoryPage({ params }: PageProps) {
  const { documentId } = await params;
  const response = await getStrapiData(`/api/categories/${documentId}`);
  const category = response?.data || response;

  return (
    <section>
      <FeaturedHeader category={category} />
    </section>
  );
}
