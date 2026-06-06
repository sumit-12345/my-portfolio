"use client";
import { PRACTICE_TOPICS } from "../../data/practice";
import { List, Database, Cpu, Zap, Shuffle, RefreshCw } from "lucide-react";
import PracticeTile from "../../components/PracticeTile";


export default function PracticePage() {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    arrays: List,
    "data-structures": Database,
    "dynamic-programming": Cpu,
    "java-streams": Zap,
    "sorting-algorithms": Shuffle,
    recursion: RefreshCw,
  };

  return (
    <main className="min-h-screen pt-28 pb-12 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">Practice Topics</h1>
          <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">Select a topic to practice problems and examples.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRACTICE_TOPICS.map((topic) => (
            <PracticeTile
              key={topic.slug}
              title={topic.title}
              description={topic.description}
              href={`/practice/${topic.slug}`}
              Icon={iconMap[topic.slug] ?? List}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

