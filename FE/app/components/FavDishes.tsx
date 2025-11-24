import { getStrapiData } from "../data-access/getStrapiData";
import FavRecepiesVideoComponent from "./FavRecepiesVideoComponent";

async function FavDishes() {
  const FavData = await getStrapiData(`/api/fav-recepie?populate=*`);

  return (
    <div className=" px-4 pt-4 pb-4 mt-6 md:mt-0 md:pb-0 lg:px-0">
      <div>
        <h2>
          <span className="font-drama text-purple-500">Watch</span>{" "}
          <span className="font-sans">My Favorite Recipes</span>
        </h2>
      </div>
      <FavRecepiesVideoComponent data={FavData.data} />
    </div>
  );
}

export default FavDishes;
