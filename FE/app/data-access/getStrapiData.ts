// data-access/getStrapiData.ts
interface StrapiPaginationParams {
  page?: number;
  pageSize?: number;
}

interface StrapiResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export async function getStrapiData<T = unknown>(
  path: string,
  pagination?: StrapiPaginationParams
): Promise<StrapiResponse<T>> {
  const baseUrl =
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://127.0.0.1:1337";

  const url = new URL(path, baseUrl);

  if (pagination) {
    url.searchParams.set("pagination[page]", String(pagination.page ?? 1));
    url.searchParams.set(
      "pagination[pageSize]",
      String(pagination.pageSize ?? 25)
    );
  }

  try {
    const response = await fetch(url.href, {
      cache: "no-store",
      next: { tags: [path] },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Strapi fetch error:", error);
    throw error;
  }
}
