"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ARRAY_CATEGORIES } from "../data/arrayProblems";
import SolutionViewer from "./SolutionViewer";

function DifficultyBadge({
  difficulty,
}: {
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}) {
  const colors = {
    Beginner:
      "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    Intermediate:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
    Advanced:
      "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  };

  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${colors[difficulty]}`}
    >
      {difficulty}
    </span>
  );
}

function CategorySection({
  categoryName,
  categoryDescription,
  problems,
  categoryIndex,
}: {
  categoryName: string;
  categoryDescription: string;
  problems: any[];
  categoryIndex: number;
}) {
  const [isOpen, setIsOpen] = useState(categoryIndex === 0);

  return (
    <div className="mt-6 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition"
      >
        <div className="text-left flex-1">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {categoryName}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            {categoryDescription}
          </p>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-slate-600 dark:text-slate-400 flex-shrink-0 ml-2 transition ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="p-6 border-t border-slate-200 dark:border-slate-700">
          <div className="space-y-3">
            {problems.map((problem) => (
              <div
                key={problem.id}
                className="flex flex-col p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 w-8 flex-shrink-0">
                        {problem.id}.
                      </span>
                      <h4 className="text-base font-semibold text-slate-900 dark:text-white">
                        {problem.title}
                      </h4>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 ml-11">
                      {problem.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <DifficultyBadge difficulty={problem.difficulty} />
                  </div>
                </div>
                {problem.solutions && problem.solutions.length > 0 && (
                  <div className="ml-11">
                    <SolutionViewer solutions={problem.solutions} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-4">
            <strong>{problems.length}</strong> problems in this category
          </p>
        </div>
      )}
    </div>
  );
}

export default function ArrayProblems() {
  // Calculate stats
  const totalProblems = ARRAY_CATEGORIES.reduce(
    (sum, cat) => sum + cat.problems.length,
    0
  );
  const beginnerCount = ARRAY_CATEGORIES.reduce(
    (sum, cat) =>
      sum + cat.problems.filter((p) => p.difficulty === "Beginner").length,
    0
  );
  const intermediateCount = ARRAY_CATEGORIES.reduce(
    (sum, cat) =>
      sum + cat.problems.filter((p) => p.difficulty === "Intermediate").length,
    0
  );
  const advancedCount = ARRAY_CATEGORIES.reduce(
    (sum, cat) =>
      sum + cat.problems.filter((p) => p.difficulty === "Advanced").length,
    0
  );

  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Comprehensive Problem Set
        </h2>
        <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
          Total: <strong>{totalProblems}</strong> problems
        </div>
      </div>

      {/* Difficulty Stats */}
      <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-4 border border-green-200 dark:border-green-900/50">
          <div className="text-sm font-medium text-green-900 dark:text-green-300">
            Beginner
          </div>
          <div className="text-3xl font-bold text-green-700 dark:text-green-400 mt-2">
            {beginnerCount}
          </div>
          <p className="text-xs text-green-800 dark:text-green-300 mt-1 opacity-75">
            {((beginnerCount / totalProblems) * 100).toFixed(0)}% of total
          </p>
        </div>
        <div className="rounded-lg bg-yellow-50 dark:bg-yellow-900/20 p-4 border border-yellow-200 dark:border-yellow-900/50">
          <div className="text-sm font-medium text-yellow-900 dark:text-yellow-300">
            Intermediate
          </div>
          <div className="text-3xl font-bold text-yellow-700 dark:text-yellow-400 mt-2">
            {intermediateCount}
          </div>
          <p className="text-xs text-yellow-800 dark:text-yellow-300 mt-1 opacity-75">
            {((intermediateCount / totalProblems) * 100).toFixed(0)}% of total
          </p>
        </div>
        <div className="rounded-lg bg-red-50 dark:bg-red-900/20 p-4 border border-red-200 dark:border-red-900/50">
          <div className="text-sm font-medium text-red-900 dark:text-red-300">
            Advanced
          </div>
          <div className="text-3xl font-bold text-red-700 dark:text-red-400 mt-2">
            {advancedCount}
          </div>
          <p className="text-xs text-red-800 dark:text-red-300 mt-1 opacity-75">
            {((advancedCount / totalProblems) * 100).toFixed(0)}% of total
          </p>
        </div>
      </div>

      {/* Learning Path Info */}
      <div className="mb-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4 border border-blue-200 dark:border-blue-900/50">
        <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-300">
          📚 Recommended Learning Path
        </h3>
        <p className="text-sm text-blue-800 dark:text-blue-400 mt-2">
          Start with <strong>Beginner</strong> problems to master the basics, progress through
          <strong> Intermediate</strong> for real-world scenarios, and challenge yourself with
          <strong> Advanced</strong> problems to ace interview questions and competitive coding contests.
        </p>
      </div>

      {/* Categories */}
      <div>
        {ARRAY_CATEGORIES.map((category, idx) => (
          <CategorySection
            key={category.name}
            categoryName={category.name}
            categoryDescription={category.description}
            problems={category.problems}
            categoryIndex={idx}
          />
        ))}
      </div>

      {/* Footer Stats */}
      <div className="mt-8 p-4 rounded-lg bg-slate-100 dark:bg-slate-900 text-center">
        <p className="text-sm text-slate-700 dark:text-slate-300">
          Master all <strong>{totalProblems} array problems</strong> to build a strong foundation in data structures and algorithms!
        </p>
      </div>
    </section>
  );
}

