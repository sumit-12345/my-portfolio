import SEO from "@/components/SEO";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl space-y-8 pt-24 pb-12 md:pt-28">
      <SEO title="Projects | Your Name" />
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="text-slate-600 dark:text-slate-300">
        A curated list of production projects. Add new projects in `data/projects.ts`.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
