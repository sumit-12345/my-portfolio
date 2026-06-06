# Practice Topics Structure Reference Guide

This document explains the structure and patterns used for creating practice problem sets in the application. Use this as a template to add similar topic pages for other practice areas.

## File Structure

```
project/
├── data/
│   ├── practice.ts              # Main practice topics list
│   └── arrayProblems.ts         # Topic-specific problems (EXAMPLE)
│
├── components/
│   ├── PracticeTile.tsx         # Reusable tile for practice index
│   └── ArrayProblems.tsx        # Topic-specific client component (EXAMPLE)
│
└── app/
    └── practice/
        ├── page.tsx             # Practice index page (shows all topics)
        └── [slug]/
            └── page.tsx         # Dynamic topic page
```

---

## Step-by-Step Guide to Add a New Topic

### Step 1: Add Topic to Main Practice Data

**File: `data/practice.ts`**

```typescript
export const PRACTICE_TOPICS: PracticeTopic[] = [
  // ... existing topics ...
  {
    slug: "your-topic-slug",      // URL path: /practice/your-topic-slug
    title: "Your Topic Title",    // Display name
    description: "Brief description of what this topic covers.",
  },
];
```

**Example:** Arrays has slug `"arrays"`, so URL is `/practice/arrays`

---

### Step 2: Create Topic Problems Data File

**File: `data/{topicName}Problems.ts`**

**Naming convention:** `{topicName}Problems.ts` (e.g., `arrayProblems.ts`, `recursionProblems.ts`)

```typescript
export type ProblemCategory = {
  name: string;
  description: string;
  problems: Problem[];
};

export type Problem = {
  id: number;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
};

export const {TOPIC_NAME}_CATEGORIES: ProblemCategory[] = [
  {
    name: "Category 1",
    description: "Description of this category",
    problems: [
      {
        id: 1,
        title: "Problem Title",
        description: "What the problem asks for",
        difficulty: "Beginner",
      },
      // ... more problems ...
    ],
  },
  {
    name: "Category 2",
    description: "Description of this category",
    problems: [
      // ... problems ...
    ],
  },
];
```

**Guidelines:**
- Use 3-4 categories per topic
- ID numbers should be sequential (1, 2, 3, ...)
- Difficulty: "Beginner", "Intermediate", or "Advanced"
- Aim for a mix of difficulty levels:
  - **Beginner:** 25-30% of problems
  - **Intermediate:** 30-40% of problems
  - **Advanced:** 30-40% of problems

---

### Step 3: Create Topic Component

**File: `components/{TopicName}Problems.tsx`**

**Naming convention:** `{TopicName}Problems.tsx` (e.g., `ArrayProblems.tsx`, `RecursionProblems.tsx`)

```typescript
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { {TOPIC_NAME}_CATEGORIES } from "../data/{topicName}Problems";

// DifficultyBadge component - REUSABLE
function DifficultyBadge({
  difficulty,
}: {
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}) {
  const colors = {
    Beginner: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    Intermediate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
    Advanced: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  };

  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${colors[difficulty]}`}
    >
      {difficulty}
    </span>
  );
}

// CategorySection component - REUSABLE
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
                className="flex items-start justify-between p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition hover:shadow-md"
              >
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

// Main component - CUSTOMIZE PER TOPIC
export default function {TopicName}Problems() {
  // Calculate stats
  const totalProblems = {TOPIC_NAME}_CATEGORIES.reduce(
    (sum, cat) => sum + cat.problems.length,
    0
  );
  const beginnerCount = {TOPIC_NAME}_CATEGORIES.reduce(
    (sum, cat) =>
      sum + cat.problems.filter((p) => p.difficulty === "Beginner").length,
    0
  );
  const intermediateCount = {TOPIC_NAME}_CATEGORIES.reduce(
    (sum, cat) =>
      sum + cat.problems.filter((p) => p.difficulty === "Intermediate").length,
    0
  );
  const advancedCount = {TOPIC_NAME}_CATEGORIES.reduce(
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
        {TOPIC_NAME_CATEGORIES.map((category, idx) => (
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
          Master all <strong>{totalProblems} {topic} problems</strong> to build a strong foundation in data structures and algorithms!
        </p>
      </div>
    </section>
  );
}
```

---

### Step 4: Update Dynamic Topic Page

**File: `app/practice/[slug]/page.tsx`**

Update the page to conditionally import and render your component:

```typescript
// Add to imports
import {TopicName}Problems from "../../../components/{TopicName}Problems";

// Inside the TopicPage component, update the slug check:
{slug === "{your-slug}" ? (
  <{TopicName}Problems />
) : slug === "arrays" ? (
  <ArrayProblems />
) : (
  // ... generic fallback ...
)}
```

---

## Complete Checklist for Adding a New Topic

- [ ] Add topic to `data/practice.ts`
- [ ] Create `data/{topicName}Problems.ts` with categories and problems
- [ ] Create `components/{TopicName}Problems.tsx` client component
- [ ] Update imports in `app/practice/[slug]/page.tsx`
- [ ] Add conditional rendering for your topic in the dynamic page
- [ ] Test at `/practice/{your-slug}`

---

## Key Patterns & Best Practices

### 1. **Naming Conventions**
- Data file: `{topicNameInLowerCase}Problems.ts`
- Component: `{TopicNameInPascalCase}Problems.tsx`
- Constant: `{TOPIC_NAME_IN_UPPERCASE}_CATEGORIES`

### 2. **Reusable Components**
The `DifficultyBadge` and `CategorySection` components are reusable across all topics. You only need to customize the main component that imports your data.

### 3. **Color Scheme by Difficulty**
- **Beginner:** Green (`bg-green-100`, `text-green-800`, etc.)
- **Intermediate:** Yellow (`bg-yellow-100`, `text-yellow-800`, etc.)
- **Advanced:** Red (`bg-red-100`, `text-red-800`, etc.)

### 4. **Dark Mode Support**
All components include dark mode classes (e.g., `dark:bg-slate-900`). Maintain this pattern for consistency.

### 5. **Stats Display**
The component automatically calculates and displays:
- Total problem count
- Count by difficulty level
- Percentage breakdown

---

## Example: Adding "Recursion" Topic

### Step 1: Update `data/practice.ts`
```typescript
{
  slug: "recursion",
  title: "Recursion",
  description: "Recursive problem solving, backtracking and recursion limits.",
}
```

### Step 2: Create `data/recursionProblems.ts`
```typescript
export const RECURSION_CATEGORIES: ProblemCategory[] = [
  {
    name: "Basic Recursion",
    description: "Understanding function calls and base cases",
    problems: [
      {
        id: 1,
        title: "Factorial Calculation",
        description: "Calculate factorial using recursion.",
        difficulty: "Beginner",
      },
      // ...
    ],
  },
  // ...
];
```

### Step 3: Create `components/RecursionProblems.tsx`
Just copy `ArrayProblems.tsx` and update:
- Import path: `import { RECURSION_CATEGORIES } from "../data/recursionProblems";`
- Component name: `export default function RecursionProblems()`
- Loop: Use `RECURSION_CATEGORIES` instead of `ARRAY_CATEGORIES`

### Step 4: Update `app/practice/[slug]/page.tsx`
```typescript
import RecursionProblems from "../../../components/RecursionProblems";

// In the conditional:
{slug === "arrays" ? (
  <ArrayProblems />
) : slug === "recursion" ? (
  <RecursionProblems />
) : (
  // generic fallback
)}
```

---

## System Imports & Dependencies

All necessary imports are already installed:
- `lucide-react` - for icons
- `next` - Next.js framework
- `react` - React for client components

No additional packages needed!

---

## Tips for Adding More Topics Later

1. **Copy-Paste Pattern:** The structure is highly repetitive. You can copy the Arrays files as a template and modify them.
2. **Consistent Data Format:** Always follow the `ProblemCategory` and `Problem` TypeScript types.
3. **Scalable:** Can easily add 10+ more topics without major refactoring.
4. **SEO Ready:** Each topic page has proper metadata from `generateMetadata()`.
5. **Dark Mode:** Everything works seamlessly in both light and dark modes.

---

## File Reference

### Currently Implemented Files
1. ✅ `data/practice.ts` - Main topics list
2. ✅ `data/arrayProblems.ts` - Array problems (107 problems)
3. ✅ `components/PracticeTile.tsx` - Index tile component
4. ✅ `components/ArrayProblems.tsx` - Array problems view
5. ✅ `app/practice/page.tsx` - Practice index
6. ✅ `app/practice/[slug]/page.tsx` - Dynamic topic page

### Next Steps
- Add `data/recursionProblems.ts` for Recursion topic
- Add `data/sortingProblems.ts` for Sorting Algorithms topic
- Add `data/dpProblems.ts` for Dynamic Programming topic
- And so on for other topics...

---

## Quick Reference Snippets

### Add New Topic to practice.ts
```typescript
{
  slug: "your-slug",
  title: "Your Title",
  description: "Your description.",
}
```

### Create Category Structure
```typescript
{
  name: "Category Name",
  description: "What this category covers",
  problems: [
    {
      id: 1,
      title: "Problem Title",
      description: "Problem description",
      difficulty: "Beginner" | "Intermediate" | "Advanced",
    },
  ]
}
```

### Update Dynamic Page Conditional
```typescript
} else if (slug === "new-topic") {
  <YourTopicProblems />
} else {
  <GenericFallback />
}
```

---

**Last Updated:** June 6, 2026
**Version:** 1.0

