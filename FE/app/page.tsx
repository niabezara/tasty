import FavDishes from "./components/FavDishes";
import MainDishes from "./components/MainDishes";

export default function Home() {
  return (
    <main className="flex items-center text-center flex-col  md:max-w-6xl mx-auto">
      <MainDishes />
      <FavDishes />
    </main>
  );
}
