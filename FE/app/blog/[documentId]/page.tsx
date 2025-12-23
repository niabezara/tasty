import { Icons } from "@/app/components/Icons";
import { getStrapiData } from "@/app/data-access/getStrapiData";
import { StrapiImage } from "@/app/lib/strapi-image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

type Props = {
  params: Promise<{ documentId: string }>;
};

async function Page({ params }: Props) {
  const { documentId } = await params;
  const blogData = await getStrapiData(`/api/blogs/${documentId}?populate=*`);
  const blog = blogData.data;

  const formattedDate = new Date(blog.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Calculate read time based on content length (assuming content field exists)
  const readTime = blog.content ? Math.ceil(blog.content.length / 1000) : 5;

  return (
    <article className="min-h-screen bg-linear-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <StrapiImage
          src={blog.image[0].url}
          alt={""}
          height={blog.image[0].height}
          width={blog.image[0].width}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

        {/* Title Overlay */}
        <div className="absolute bottom-25 left-0 right-0 p-8 md:p-16">
          <div className="max-w-5xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors text-sm font-medium"
            >
              <Icons.arrow className="w-4 h-4 fill-white" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {blog.title}
            </h1>
            <div className="flex items-center gap-4 text-white/90">
              <time className="text-sm md:text-base">{formattedDate}</time>
              {blog.author && (
                <>
                  <span className="text-sm md:text-base">•</span>
                  <span className="text-sm md:text-base">By {blog.author}</span>
                </>
              )}
              <span className="text-sm md:text-base">•</span>
              <span className="text-sm md:text-base">{readTime} min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 md:px-8 -mt-20 relative z-10">
        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-12">
          {/* Description */}
          {blog.descriptionTest && (
            <div className="flex items-start gap-4 mb-10 pb-10 border-b border-gray-200">
              <div className="w-1 h-20 bg-linear-to-b from-orange-500 to-orange-300 rounded-full shrink-0" />
              <div>
                <p className="text-xl text-gray-700 leading-relaxed m-0">
                  {blog.descriptionTest}
                </p>
              </div>
            </div>
          )}

          {/* Main Content - Rich Text or Markdown */}
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-orange-600 prose-a:no-underline hover:prose-a:text-orange-700 prose-strong:text-gray-900 prose-ul:space-y-2 prose-ol:space-y-2 prose-li:text-gray-700 prose-img:rounded-xl prose-img:shadow-lg">
            {blog.content ? (
              <ReactMarkdown>{blog.content}</ReactMarkdown>
            ) : (
              <div className="text-gray-500 italic text-center py-12">
                <p>Comming soon</p>
              </div>
            )}
          </div>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default Page;
