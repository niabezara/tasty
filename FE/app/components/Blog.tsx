import { StrapiImage } from "../lib/strapi-image";
import { BlogData } from "../types/BlogTypes";
function Blog({ data }: { data: BlogData[] }) {
  console.log("Blog Data:", data);
  return (
    <div>
      <p>The Latest and Greatest</p>
      {data?.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.descriptionTest}</p>
          <StrapiImage
            src={blog.image[0]?.url}
            alt={blog.image[0]?.alternativeText || " Image"}
            height={blog.image[0]?.height}
            width={blog.image[0]?.width}
          />
        </div>
      ))}
    </div>
  );
}

export default Blog;
