import Link from "next/link";

type BlogCardProps = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

const BlogCard = ({ slug, title, date, summary }: BlogCardProps) => (
  <article className="group overflow-hidden rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">
    <div className="h-32 w-full rounded-lg bg-gradient-to-r from-blue-100 via-sky-100 to-cyan-100 text-xs text-slate-500 dark:from-blue-900 dark:via-slate-800 dark:to-slate-900">
      <p className="m-4 text-sm font-medium text-slate-700 dark:text-slate-200">{date}</p>
    </div>
    <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
      <Link href={`/blog/${slug}`} className="hover:text-blue-600 dark:hover:text-blue-300">
        {title}
      </Link>
    </h3>
    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{summary}</p>
    <Link
      href={`/blog/${slug}`}
      className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 transition hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-200"
    >
      Read more →
    </Link>
  </article>
);

export default BlogCard;
