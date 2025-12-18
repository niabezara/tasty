export async function getStrapiData(path: string) {
  const baseUrl =
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://127.0.0.1:1337";

  const res = await fetch(`${baseUrl}${path}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Strapi data");
  }

  return res.json();
}
