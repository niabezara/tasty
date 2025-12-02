import { VideoRecipeResponse } from "../types/FavVideoTypes";
import FavRecepiesVideoComponent from "./FavRecepiesVideoComponent";

function FavDishes({ data }: { data: VideoRecipeResponse }) {
  return (
    <section className="flex flex-col items-center md:px-4 pt-4 pb-4 w-full mt-6 md:mt-0 md:pb-0 lg:px-0">
      <h2 className="flex gap-5 text-center items-center">
        <span className="font-drama text-[#734060] text-6xl">Watch</span>{" "}
        <span className="font-sans font-semibold text-2xl">
          My Favorite Recipes
        </span>
      </h2>
      <FavRecepiesVideoComponent data={data.data.videoRecepie} />
    </section>
  );
}

export default FavDishes;
