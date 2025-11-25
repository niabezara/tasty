import Card from "./Card";

function Collection({ data }: { data: unknown }) {
  console.log("Collection Data:", data);
  return <div>{/* <Card data={data} type="Collection" /> */}</div>;
}

export default Collection;
