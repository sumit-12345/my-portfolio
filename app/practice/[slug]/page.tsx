import { PRACTICE_TOPICS } from "../../../data/practice";
import { ARRAY_CATEGORIES } from "../../../data/arrayProblems";
import Link from "next/link";
import ArrayProblems from "../../../components/ArrayProblems";

type Params = Promise<{ slug: string }>;

type Props = {
  params: Params;
};

export async function generateStaticParams() {
  return PRACTICE_TOPICS.map((topic) => ({
    slug: topic.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const topic = PRACTICE_TOPICS.find((t) => t.slug === slug);
  
  if (!topic) {
    return { title: "Topic Not Found" };
  }

  return {
    title: `${topic.title} — Practice`,
    description: topic.description,
  };
}

export default async function TopicPage({ params }: Props) {
  const { slug } = await params;
  const topic = PRACTICE_TOPICS.find((t) => t.slug === slug);

  if (!topic) {
    return (
      <main className="min-h-screen pt-28 pb-12 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Topic not found
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            The requested practice topic does not exist.
          </p>
          <Link
            href="/practice"
            className="mt-4 inline-block text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
          >
            Back to practice topics
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-28 pb-12 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-5xl px-4">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">
            {topic.title}
          </h1>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
            {topic.description}
          </p>
        </div>

        {/* Array Problems Section */}
        {slug === "arrays" ? (
          <ArrayProblems />
        ) : (
          <section className="rounded-lg bg-slate-50 dark:bg-slate-900/50 p-8 border border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Exercises & Resources
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              A comprehensive set of practice problems for <strong>{topic.title}</strong> is coming soon!
              Check back regularly for:
            </p>
            <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">•</span>
                <span>Curated practice problems with detailed explanations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">•</span>
                <span>Sample solutions and code implementations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">•</span>
                <span>Learning resources and tutorials</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">•</span>
                <span>Time and space complexity analysis</span>
              </li>
            </ul>
          </section>
        )}

        {/* Back Link */}
        <div className="mt-12">
          <Link
            href="/practice"
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
          >
            ← Back to practice topics
          </Link>
        </div>
      </div>
    </main>
  );
}

