import { MainCategoryResponse } from "../types";
import Card from "./Card";
import { ScrollArea, ScrollBar } from "@/app/components/ui/scroll-area";

function Collection({ data }: { data: MainCategoryResponse }) {
  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex gap-6 py-4 w-max">
        <Card data={data.data} type="Collection" />
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

export default Collection;
