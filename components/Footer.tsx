import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Your Name. Built with Next.js.
        </p>
        <div className="flex gap-4 text-sm text-slate-600 dark:text-slate-300">
          <a href="https://github.com/yourname" target="_blank" rel="noreferrer" className="transition hover:text-blue-600 dark:hover:text-blue-400">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourname" target="_blank" rel="noreferrer" className="transition hover:text-blue-600 dark:hover:text-blue-400">
            LinkedIn
          </a>
          <a href="/privacy" className="transition hover:text-blue-600 dark:hover:text-blue-400">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
