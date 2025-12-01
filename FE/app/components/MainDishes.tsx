import { CategoryResponse } from "../types";
import Card from "./Card";

function MainDishes({ data }: { data: CategoryResponse }) {
  return (
    <div className="pt-8">
      <div className="flex justify-center text-center mb-2 md:mb-3">
        <h1 className="md:flex md:flex-wrap items-center text-center md:justify-center leading-6 text-black uppercase">
          <span className="block md:inline md:mr-2 font-bold text-3xl">
            Simple recipes made for
          </span>{" "}
          <span className="block md:inline font-drama text-[#734060] text-3xl font-semibold">
            real, actual, everyday life.
          </span>
        </h1>
      </div>
      <div className=" md:pt-6 md:pb-8 lg:pt-8 lg:pb-10">
        <Card data={data.data} type="Main" />
      </div>
    </div>
  );
}

export default MainDishes;
