import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 pb-24">
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <div className="mb-5 flex items-center gap-4 text-sm font-bold tracking-[0.14em] text-muted">
            <span className="h-px w-9 shrink-0 bg-navy/70 dark:bg-white/80" />
            selected work
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-navy dark:text-cream">
            things i&apos;ve built
          </h2>
        </div>

        <p className="hidden text-muted md:block">{projects.length} projects</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.number} {...project} />
        ))}
      </div>
    </section>
  );
}