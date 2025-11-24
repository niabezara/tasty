import { getStrapiData } from "../data-access/getStrapiData";

import Card from "./Card";

async function MainDishes() {
  const MainData = await getStrapiData(`api/main-category?populate=*`);

  return (
    <div className="pt-8">
      <div className="flex justify-center text-center mb-2 md:mb-3">
        <h1 className="md:flex md:flex-wrap md:justify-center leading-6 text-black uppercase">
          <span className="block md:inline md:mr-2">
            Simple recipes made for
          </span>{" "}
          <span className="block md:inline ">real, actual, everyday life.</span>
        </h1>
      </div>
      <div className=" md:pt-6 md:pb-8 lg:pt-8 lg:pb-10">
        <Card data={MainData.data} />
      </div>
    </div>
  );
}

export default MainDishes;
