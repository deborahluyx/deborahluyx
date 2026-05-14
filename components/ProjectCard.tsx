type ProjectCardProps = {
  number: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  links: {
    github?: string;
    demo?: string;
    caseStudy?: string;
  };
};

export default function ProjectCard({
  number,
  title,
  category,
  description,
  stack,
  links,
}: ProjectCardProps) {
  return (
    <article className="rounded-3xl border border-navy/15 bg-cream p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5 dark:hover:shadow-none">
      <div className="mb-6 flex items-start justify-between gap-4">
        <span className="text-sm text-navy dark:text-cream/70 dark:text-cream/60">{number}</span>
        <span className="rounded-full bg-navy/10 px-3 py-1 text-sm font-bold text-navy dark:text-cream/80 dark:bg-white/10 dark:text-cream/80">
          {category}
        </span>
      </div>

      <h3 className="text-xl font-bold text-navy dark:text-cream dark:text-cream">{title}</h3>

      <div className="my-6 h-px w-full bg-navy/15 dark:bg-white/15" />

      <p className="min-h-20 leading-7 text-navy dark:text-cream/80 dark:text-cream/75">{description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {stack.map((item) => (
          <span
            key={item}
            className="rounded-lg bg-navy/5 px-3 py-1 text-sm text-navy dark:text-cream/80 dark:bg-white/10 dark:text-cream/75"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-5 text-sm text-navy dark:text-cream/80 dark:text-cream/80">
        {links.github && (
          <a href={links.github} className="underline hover:text-navy dark:text-cream dark:hover:text-cream">
            github
          </a>
        )}
        {links.demo && (
          <a href={links.demo} className="underline hover:text-navy dark:text-cream dark:hover:text-cream">
            live demo
          </a>
        )}
        {links.caseStudy && (
          <a href={links.caseStudy} className="underline hover:text-navy dark:text-cream dark:hover:text-cream">
            case study
          </a>
        )}
      </div>
    </article>
  );
}