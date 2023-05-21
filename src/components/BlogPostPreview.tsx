import Link from "next/link";
import { IBlogPostMetadata } from "@/components/BlogPostMetadata";

const BlogPostPreview = (props: IBlogPostMetadata) => {
  return (
    <article
      key={props.slug}
      className="relative my-4 border border-gray-200 shadow-md rounded-md"
    >
      <Link href={`/blog/${props.slug}`}>
        <div className="p-4">
          <h1 className="text-2xl font-bold text-primary2">{props.title}</h1>
          <div className="">{props.description}</div>
          <div className="">{props.date}</div>
        </div>
      </Link>
    </article>
  );
};

export default BlogPostPreview;
