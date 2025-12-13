import { CategoryResponse } from "../types";
import Card from "./Card";
import { ScrollArea, ScrollBar } from "@/app/components/ui/scroll-area";

function Collection({ data }: { data: CategoryResponse }) {
  return (
    <section className="md:bg-gray-100 py-9 w-full">
      <ScrollArea className="overflow-x-auto max-w-6xl mx-auto whitespace-nowrap">
        <div className="flex gap-6 w-max">
          <Card data={data.data} type="Collection" />
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}

export default Collection;
