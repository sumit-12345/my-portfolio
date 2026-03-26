"use client";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved ?? (prefersDark ? "dark" : "light");
    setMode(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggle = () => {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <button onClick={toggle} aria-label="Toggle dark mode" className="rounded px-2 py-1 border hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800">
      {mode === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
