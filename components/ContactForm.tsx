"use client";
import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);

    try {
      await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: { "Content-Type": "application/json" },
      });
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <input
        type="text"
        name="name"
        required
        placeholder="Your name"
        className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-blue-400 dark:focus:ring-blue-900"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Your email"
        className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-blue-400 dark:focus:ring-blue-900"
      />
      <textarea
        name="message"
        required
        placeholder="Message"
        rows={5}
        className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-blue-400 dark:focus:ring-blue-900"
      />
      <button
        type="submit"
        className="rounded-xl bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
      {status === "sent" && <p className="text-green-600">Message sent! I’ll reach out soon.</p>}
      {status === "error" && <p className="text-red-600">Something went wrong. Try again later.</p>}
    </form>
  );
}
