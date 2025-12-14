import TopRated from "../components/TopRated";

function page() {
  return (
    <div>
      <div className="bg-[#734060] ">
        <div className="flex items-center gap-10 text-center flex-col  md:max-w-6xl mx-auto">
          <div className="pt-3 pb-12 px-4 md:pt-5 md:pb-28 md:px-2 md:max-w-4xl mx-auto text-center">
            <h1 className="text-center font-domaine font-semibold text-white text-5xl md:text-7xl mb-4 md:mb-8">
              Recipes
            </h1>
            <p className="my-0 text-[#d3b9cc] md:text-xl font-domaine ">
              We’ve organized these recipes every way we could think of so you
              don&apos;t have to! Dietary restrictions, weeknight dinners, meal
              prep recipes, some of our most tried-and-true… no matter how you
              browse, we’re sure you’ll find just what you were looking for.
            </p>
          </div>
        </div>
      </div>
      <TopRated />
    </div>
  );
}

export default page;
