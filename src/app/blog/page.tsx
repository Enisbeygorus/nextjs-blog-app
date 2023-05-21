// import Image from "next/image";
// import { compareDesc } from "date-fns";
// import { formatDate } from "@/lib/utils";
import Link from "next/link";
import getBlogPostMetadata from "@/utils/getBlogPostMetadata";
import BlogPostPreview from "@/components/BlogPostPreview";

export const metadata = {
  title: "Blog",
};

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

// {
//   posts?.length ? (
//     <div className="grid gap-10 sm:grid-cols-2">
//       {posts.map((post, index) => (
//         <article
//           key={post._id}
//           className="group relative flex flex-col space-y-2"
//         >
//           {post.image && (
//             <Image
//               src={post.image}
//               alt={post.title}
//               width={804}
//               height={452}
//               className="rounded-md border bg-muted transition-colors"
//               priority={index <= 1}
//             />
//           )}
//           <h2 className="text-2xl font-extrabold">{post.title}</h2>
//           {post.description && (
//             <p className="text-muted-foreground">{post.description}</p>
//           )}
//           {post.date && (
//             <p className="text-sm text-muted-foreground">
//               {/* {formatDate(post.date)} */}
//             </p>
//           )}
//           <Link href={post.slug} className="absolute inset-0">
//             <span className="sr-only">View Article</span>
//           </Link>
//         </article>
//       ))}
//     </div>
//   ) : (
//     <p>No posts published.</p>
//   );
// }
