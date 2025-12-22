import { getStrapiData } from "@/app/data-access/getStrapiData";

type Props = {
  params: Promise<{ documentId: string }>;
};
async function page({ params }: Props) {
  const { documentId } = await params;
  const recipeData = await getStrapiData(
    `/api/recipes?filters[name][$eq]=${documentId}&populate=*`
  );

  console.log(recipeData);
  return <div>page</div>;
}

export default page;
