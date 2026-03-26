import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";
import SEO from "@/components/SEO";
import { blogPosts } from "@/data/blog";

type Params = { params: { slug: string } };

const BLOG_PATH = path.join(process.cwd(), "content/blog");

async function getPost(slug: string) {
  const fullPath = path.join(BLOG_PATH, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  return { meta: data as any, contentHtml: processedContent.toString() };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: Params) {
  const post = await getPost(params.slug);
  if (!post) return notFound();

  return (
    <article className="mx-auto max-w-4xl space-y-6 pt-24 pb-12 md:pt-28">
      <SEO title={`${post.meta.title} | Blog`} description={post.meta.summary} url={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${params.slug}`} />
      <h1 className="text-3xl font-bold">{post.meta.title}</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400">{new Date(post.meta.date).toLocaleDateString()}</p>
      <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}
