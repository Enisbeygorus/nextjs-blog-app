import { IBlogPostMetadata } from "@/components/BlogPostMetadata";
import fs from "fs";
import matter from "gray-matter";

const getBlogPostMetadata = (): IBlogPostMetadata[] => {
  const folder = "src/content/blogs/";
  const files = fs.readdirSync(folder);

  // TODO: remove this second filter;

  const markdownBlogs = files
    .filter((file) => file.endsWith(".md"))
    .filter((file) => {
      if (
        file.includes("aws-quickstart.md") ||
        file.includes("example-template.md")
      ) {
        return false;
      }
      return true;
    });

  const blogs = markdownBlogs.map((fileName) => {
    const fileContents = fs.readFileSync(`${folder}${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      description: matterResult.data.description,
      date: matterResult.data.date,
      slug: fileName.replace(".md", ""),
    };
  });

  return blogs;
};

export default getBlogPostMetadata;
