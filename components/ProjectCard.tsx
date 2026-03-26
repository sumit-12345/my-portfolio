import Image from "next/image";

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  image?: string;
};

const ProjectCard = ({ project }: { project: Project }) => (
  <article className="group overflow-hidden rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">
    {project.image && (
      <div className="relative h-44 w-full overflow-hidden rounded-xl">
        <Image src={project.image} fill alt={project.title} className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
    )}
    <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {project.tech.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="mt-4 flex flex-wrap gap-3">
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="rounded-md border border-blue-200 px-3 py-1.5 text-sm font-medium text-blue-700 transition hover:bg-blue-50 dark:border-blue-900 dark:text-blue-300 dark:hover:bg-blue-950"
      >
        GitHub
      </a>
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          Live demo
        </a>
      )}
    </div>
  </article>
);

export default ProjectCard;
