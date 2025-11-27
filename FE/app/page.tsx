import Collection from "./components/Collection";
import FavDishes from "./components/FavDishes";
import MainDishes from "./components/MainDishes";
import { getStrapiData } from "./data-access/getStrapiData";

export default async function Home() {
  const [FavData, MainData, CollectionData] = await Promise.all([
    getStrapiData(`/api/fav-recepie?populate=*`),
    getStrapiData(`/api/main-category?populate=*`),
    getStrapiData(`/api/collection?populate=*`),
  ]);

  return (
    <main className="flex items-center gap-10 text-center flex-col  md:max-w-6xl mx-auto">
      <MainDishes data={MainData} />
      <FavDishes data={FavData} />
      <Collection data={CollectionData} />
    </main>
  );
}
