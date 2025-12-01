import Collection from "./components/Collection";
import FavDishes from "./components/FavDishes";
import LatestSection from "./components/LatestSection";
import MainDishes from "./components/MainDishes";
import { SearchDrawer } from "./components/Search";
import { getStrapiData } from "./data-access/getStrapiData";

export default async function Home() {
  const [FavDishesData, CategoriesData] = await Promise.all([
    getStrapiData(`/api/fav-recepie?populate=*`),
    getStrapiData(`/api/categories?populate=*`),
  ]);

  return (
    <main className="flex items-center gap-10 text-center flex-col  md:max-w-6xl mx-auto">
      <MainDishes data={CategoriesData} />
      <FavDishes data={FavDishesData} />
      <Collection data={CategoriesData} />
      <SearchDrawer data={CategoriesData} />
      <LatestSection />
    </main>
  );
}
