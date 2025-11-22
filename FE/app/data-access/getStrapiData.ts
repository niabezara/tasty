export async function getStrapiData(path: string) {
  const baseUrl =
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://127.0.0.1:1337";

  const url = new URL(path, baseUrl);

  try {
    const response = await fetch(url.href, {
      cache: "no-store",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
