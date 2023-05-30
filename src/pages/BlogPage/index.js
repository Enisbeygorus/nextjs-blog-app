import getBlogPostMetadata from "@/utils/getBlogPostMetadata";
import BlogPostPreview from "@/components/BlogPostPreview";

export default function BlogPage() {
  const postMetadata = getBlogPostMetadata();
  const postPreviews = postMetadata.map((blogPost) => {
    return <BlogPostPreview key={blogPost.slug} {...blogPost} />;
  });

  return (
    <div
      data-testid="blog-page"
      className="relative h-screen flex items-center justify-center overflow-x-hidden text-gray-700 dark:text-white"
    >
      <div className="container pt-10 max-w-7xl w-full mx-auto h-full">
        <div className="flex-1 space-y-4 p-4 text-center">
          <h1
            data-testid="blog-page-heading"
            className="inline-block font-heading font-bold text-4xl tracking-tight lg:text-5xl text-primary2  dark:text-primary-light"
          >
            Developer Blog
          </h1>
        </div>
        <div>{postPreviews}</div>
      </div>
      <hr className="my-8" />
    </div>
  );
}
