import { blogPosts } from "../data";

export function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — FyPlus Dental Blog`,
    description: post.desc,
    openGraph: {
      title: post.title,
      description: post.desc,
      type: "article",
      images: [{ url: post.image, width: 1200, height: 630 }],
    },
  };
}

export default function BlogDetailLayout({ children }) {
  return children;
}
