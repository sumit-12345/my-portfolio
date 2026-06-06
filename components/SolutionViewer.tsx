"use client";

import { useState } from "react";
import { ChevronDown, Code2 } from "lucide-react";
import type { Solution } from "../data/arrayProblems";

function CodeBlock({ language, code }: Solution) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const languageColors = {
    C: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-900/50",
    Java: "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-900/50",
  };

  const languageTitleColors = {
    C: "text-blue-700 dark:text-blue-300",
    Java: "text-orange-700 dark:text-orange-300",
  };

  return (
    <div
      className={`rounded-lg border p-4 mb-3 ${languageColors[language]}`}
    >
      <div className="flex items-center justify-between mb-3">
        <h4 className={`font-semibold text-sm ${languageTitleColors[language]}`}>
          {language}
        </h4>
        <button
          onClick={handleCopy}
          className="text-xs px-2 py-1 rounded bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition text-slate-700 dark:text-slate-300"
        >
          {copied ? "✓ Copied!" : "Copy"}
        </button>
      </div>
      <pre className="text-xs overflow-x-auto bg-white dark:bg-slate-950/50 p-3 rounded border border-slate-200 dark:border-slate-800">
        <code className="text-slate-800 dark:text-slate-200 font-mono">
          {code}
        </code>
      </pre>
    </div>
  );
}

export default function SolutionViewer({
  solutions,
}: {
  solutions?: Solution[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (!solutions || solutions.length === 0) {
    return null;
  }

  return (
    <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition"
      >
        <Code2 className="h-4 w-4" />
        {isOpen ? "Hide Solutions" : "Show Solutions"}
        <ChevronDown
          className={`h-4 w-4 transition ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="mt-4 ml-6">
          {solutions.map((solution, idx) => (
            <CodeBlock
              key={idx}
              language={solution.language}
              code={solution.code}
            />
          ))}
        </div>
      )}
    </div>
  );
}

