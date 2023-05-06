import Link from "next/link";
import { IBlogPostMetadata } from "@/components/BlogPostMetadata";

const BlogPostPreview = (props: IBlogPostMetadata) => {
  return (
    <article key={props.slug} className="relative my-4">
      <Link href={`/blog/${props.slug}`}>
        <h1 className="text-3xl font-bold">{props.title}</h1>
        <div className="">{props.description}</div>
        <div className="">{props.date}</div>
      </Link>
    </article>
  );
};

export default BlogPostPreview;
