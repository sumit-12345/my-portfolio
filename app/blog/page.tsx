import SEO from "@/components/SEO";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-6xl space-y-8 pt-24 pb-12 md:pt-28">
      <SEO title="Blog | Your Name" />
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="text-slate-600 dark:text-slate-300">
        Latest posts about architecture, Kubernetes deployment, and containerized Java in production.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} slug={post.slug} title={post.title} date={post.date} summary={post.summary} />
        ))}
      </div>
    </section>
  );
}
