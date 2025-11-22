import { getStrapiData } from "../data-access/getStrapiData";

import Card from "./Card";

async function MainDishes() {
  const MainData = await getStrapiData(`api/main-category?populate=*`);

  return (
    <div className="md:bg-gray-100 md:pt-6 md:pb-8 lg:pt-8 lg:pb-10">
      <Card data={MainData.data} />
    </div>
  );
}

export default MainDishes;
