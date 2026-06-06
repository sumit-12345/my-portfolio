export type PracticeTopic = {
  slug: string;
  title: string;
  description: string;
};

export const PRACTICE_TOPICS: PracticeTopic[] = [
  {
    slug: "arrays",
    title: "Arrays",
    description: "Problems and patterns using arrays: two pointers, sliding window, prefix sums.",
  },
  {
    slug: "data-structures",
    title: "Data Structures",
    description: "Implementation and usage of trees, heaps, hash maps, linked lists and graphs.",
  },
  {
    slug: "dynamic-programming",
    title: "Dynamic Programming",
    description: "Top-down and bottom-up DP patterns, memoization, knapsack and sequence problems.",
  },
  {
    slug: "java-streams",
    title: "Java Streams",
    description: "Practical examples and challenges using Java Streams, collectors and pipelines.",
  },
  {
    slug: "sorting-algorithms",
    title: "Sorting Algorithms",
    description: "Classic sorting algorithms, complexity, and when to use each.",
  },
  {
    slug: "recursion",
    title: "Recursion",
    description: "Recursive problem solving, backtracking and recursion limits.",
  },
];

