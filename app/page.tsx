import Link from "next/link";
import Image from "next/image";
import SEO from "@/components/SEO";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog";

export default function Home() {
  const featured = projects.slice(0, 3);
  const featuredBlogs = blogPosts.slice(0, 3);

  return (
    <main className="mx-auto max-w-6xl space-y-20 pb-16 pt-24 md:pt-28">
      <SEO title="Home | Your Name" description="Spring Boot, Kubernetes, Docker, AI Developer" />

      <section
        id="hero"
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 via-white to-sky-100 p-8 shadow-xl ring-1 ring-slate-200 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:ring-slate-800 md:p-12"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.22),transparent_35%),radial-gradient(circle_at_90%_80%,rgba(236,72,153,0.18),transparent_35%)]" />
        <div className="relative z-10 grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-5 animate-fadeIn">
            <p className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700 dark:bg-blue-900 dark:text-blue-200">
              FULLSTACK ENGINEER • MICROSERVICES • KUBERNETES • AI-POWERED SYSTEMS
            </p>
            <h1 className="text-4xl font-black leading-tight text-slate-900 dark:text-white sm:text-5xl">
              Sumit Kumar Joshi
            </h1>
            <p className="max-w-xl text-lg text-slate-600 dark:text-slate-300">
              Building scalable microservices and system design solutions with Spring Boot, Angular, and Kubernetes, leveraging AI concepts like LLMs and intelligent automation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#projects"
                className="rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                View Projects
              </Link>

              <Link
                href="#system-design"
                className="rounded-lg border border-blue-200 px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50 dark:border-blue-800 dark:text-blue-300 dark:hover:bg-blue-950"
              >
                Explore System Design
              </Link>

              <Link
                href="#ai"
                className="rounded-lg border border-purple-200 px-6 py-3 text-sm font-semibold text-purple-700 transition hover:bg-purple-50 dark:border-purple-800 dark:text-purple-300 dark:hover:bg-purple-950"
              >
                AI Experiments
              </Link>
            </div>
          </div>

          <div className="mx-auto max-w-xs overflow-hidden rounded-full border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900">
            <Image src="/images/profile.png" alt="Profile photo" width={320} height={320} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section id="skills" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900 md:p-8">
        <h2 className="text-3xl font-bold">Skills</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Core competencies and tools I use for modern cloud applications.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            { name: "Java", color: "bg-amber-100 text-amber-800" },
            { name: "Spring Boot", color: "bg-green-100 text-green-800" },
            { name: "Microservices", color: "bg-emerald-100 text-emerald-800" },
            { name: "System Design", color: "bg-purple-100 text-purple-800" },

            { name: "Kubernetes", color: "bg-blue-100 text-blue-800" },
            { name: "Docker", color: "bg-sky-100 text-sky-800" },
            { name: "AWS", color: "bg-orange-100 text-orange-900" },
            { name: "Terraform", color: "bg-cyan-100 text-cyan-800" },
            { name: "CI/CD", color: "bg-violet-100 text-violet-800" },

            { name: "Kafka", color: "bg-gray-200 text-gray-800" },
            { name: "WebFlux", color: "bg-lime-100 text-lime-800" },
            { name: "REST APIs", color: "bg-teal-100 text-teal-800" },

            { name: "Angular", color: "bg-red-100 text-red-800" },
            { name: "TypeScript", color: "bg-indigo-100 text-indigo-800" },

            { name: "AI/ML", color: "bg-pink-100 text-pink-800" },
            { name: "LLMs", color: "bg-fuchsia-100 text-fuchsia-800" },
            { name: "AI Integrations", color: "bg-rose-100 text-rose-800" },
            { name: "Data Structures", color: "bg-amber-100 text-amber-800" },
            { name: "Algorithms", color: "bg-green-100 text-green-800" },
          ].map((skill) => (
            <div
              key={skill.name}
              className={`rounded-xl border px-4 py-3 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${skill.color} border-transparent`}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900 md:p-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Projects</h2>
          <Link href="/projects" className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-400">
            View all projects →
          </Link>
        </div>
        <p className="text-slate-600 dark:text-slate-300">Featured implementations with technology stack and open-source links.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="blog" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900 md:p-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Blog</h2>
          <Link href="/blog" className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-400">
            Read all posts →
          </Link>
        </div>
        <p className="text-slate-600 dark:text-slate-300">Insights on Kubernetes, Docker, Spring Boot architecture, and cloud best practices.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {featuredBlogs.map((post) => (
            <BlogCard key={post.slug} slug={post.slug} title={post.title} date={post.date} summary={post.summary} />
          ))}
        </div>
      </section>

      <section id="about" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900 md:p-8">
        <h2 className="text-3xl font-bold">About Me</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3 md:items-center">
          <div className="mx-auto md:mx-0">
            <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-blue-300 shadow-lg dark:border-blue-500">
              <Image src="/images/profile.png" alt="Profile" fill className="object-cover" />
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="text-slate-600 dark:text-slate-300">
              I am a software engineer specializing in cloud-native Java systems, Kubernetes orchestration, and DevSecOps. I bridge the gap between architecture and execution in mission-critical products.
            </p>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              I’ve shipped microservices to production with automated CI/CD pipelines, integrated monitoring, and AI-enhanced observability, while keeping reliability, performance, and security at the forefront.
            </p>
            <Link
              href="/resume.docx"
              target="_blank"
              className="mt-4 inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Download Resume
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900 md:p-8">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Let’s discuss your next project and how we can improve your platform architecture.</p>
        <div className="mt-6 flex flex-col gap-5 lg:flex-row lg:items-start">
          <div className="rounded-xl border border-slate-200 p-5 dark:border-slate-700">
            <h3 className="text-lg font-semibold">Get in touch</h3>
            <ul className="mt-3 space-y-2 text-slate-600 dark:text-slate-300">
              <li>Email: <a href="mailto:sumitku.joshi@gmail.com" className="text-blue-600 hover:underline">sumitku.joshi@gmail.com</a></li>
              <li>Phone: <a href="tel:+91 9611277653" className="text-blue-600 hover:underline">+91 9611277653</a></li>
              <li>GitHub: <a href="https://github.com/sumit-12345" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Sumit Kumar Joshi</a></li>
              <li>LinkedIn: <a href="https://www.linkedin.com/in/sumitjoshi94/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Sumit Kumar Joshi</a></li>
            </ul>
          </div>
          <Link href="/contact" className="inline-flex h-fit items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
            Open contact form
          </Link>
        </div>
      </section>
    </main>
  );
}
