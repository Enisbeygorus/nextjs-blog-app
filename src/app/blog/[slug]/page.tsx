import LargeHeading from "@/components/ui/LargeHeading";
import getBlogPostMetadata from "@/utils/getBlogPostMetadata";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import "../../../styles/markdown.css";

interface IBlogPostPageProps {
  params: { slug: string };
}

const getPostContent = (slug: string) => {
  const folder = "src/content/blogs/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const blogPosts = getBlogPostMetadata();
  return blogPosts.map((blogPost) => ({ slug: blogPost.slug }));
};

const BlogPostPage = (props: IBlogPostPageProps) => {
  const slug = props.params.slug;
  const blog = getPostContent(slug);
  return (
    <div
      data-testid="blog-post-page"
      className="relative flex flex-col items-center justify-center "
    >
      <div className="max-w-2xl">
        <LargeHeading size="sm" className="text-gray-700 dark:text-white mb-2">
          {blog.data.title}
        </LargeHeading>
        <article className="blog-post prose dark:text-white">
          <Markdown>{blog.content}</Markdown>
        </article>
      </div>
    </div>
  );
};

export default BlogPostPage;
