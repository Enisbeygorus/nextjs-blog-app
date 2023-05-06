import { IBlogPostMetadata } from "@/components/BlogPostMetadata";
import fs from "fs";
import matter from "gray-matter";

const getBlogPostMetadata = (): IBlogPostMetadata[] => {
  const folder = "src/content/blogs/";
  const files = fs.readdirSync(folder);
  const markdownBlogs = files.filter((file) => file.endsWith(".md"));

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
