import { getStrapiData } from "../data-access/getStrapiData";
import { StrapiImage } from "../lib/strapi-image";

async function Page() {
  const data = await getStrapiData(`/api/blog-review?populate=*`);
  const { title, description, image } = data.data;

  return (
    <section className="relative overflow-hidden">
      {/* Background Accent */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-indigo-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-1 text-sm backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-fuchsia-500" />
          Blog Review
        </div>

        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-gray-900 lg:text-6xl">
              {title}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
              {description}
            </p>
          </div>
          {image && (
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl border border-black/10 bg-white/40 backdrop-blur" />

              <StrapiImage
                src={image.url}
                alt={image.alternativeText || "Blog cover"}
                height={image.height}
                width={image.width}
                className="relative z-10 w-full rounded-2xl object-cover shadow-2xl"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Page;
