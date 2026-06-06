"use client";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  description: string;
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
};

export default function PracticeTile({ title, description, href, Icon }: Props) {
  return (
    <Link
      href={href}
      className="group block rounded-lg bg-white/70 dark:bg-slate-900/70 p-6 shadow-sm hover:shadow-lg transform transition-transform duration-200 hover:-translate-y-1 border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
    >
      <div className="flex items-start gap-4">
        <div className="rounded-md bg-blue-50 dark:bg-blue-900/30 p-2 text-blue-600 dark:text-blue-300 flex-shrink-0">
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">{title}</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{description}</p>
        </div>
      </div>
      <span className="sr-only">Open {title} practice</span>
    </Link>
  );
}

