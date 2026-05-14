import Image from "next/image";

export default function Hero() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 md:grid-cols-[1.3fr_0.7fr] md:items-center">
        <div>
          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-navy dark:text-white md:text-6xl">
            hi, i&apos;m deborah ★ <br />
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-navy dark:text-white/80">
            a girl from singapore currently finishing up nus computer science before graduating soon.
          i love learning about all kinds of things and am always picking up new interests along the way.
          i also enjoy reading, trying new cafés, and travelling whenever i can.
          <br />
          <br />
          thanks for stopping by! keep scrolling if you'd like to learn a little more about me :)
          </p>

          <div className="mt-9 flex items-center gap-6">
            <a
              href="#work"
              className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              view my work →
            </a>
            <a
              href="mailto:hello@deborahlu.com"
              className="text-sm font-medium text-navy underline hover:text-navy dark:text-white/90 dark:hover:text-white"
            >
              say hello
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative h-[340px] w-[340px] overflow-hidden rounded-full border border-navy/15 bg-navy/5 shadow-sm dark:border-white/15 dark:bg-white/5">
            <Image
              src="/me.JPG"
              alt="Deborah"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-20 grid gap-10 border-y border-navy/15 py-10 md:grid-cols-2">
        <div>
          <div className="mb-4 flex items-center gap-3 text-sm font-bold lowercase tracking-[0.14em] text-navy dark:text-white/85">
            <span className="h-2 w-2 shrink-0 rounded-full bg-navy dark:bg-white" />
            <span>currently</span>
          </div>
          <h2 className="text-2xl font-bold leading-snug text-navy dark:text-white">
            software dev at pwc — <br />
            incoming swe at jp morgan
          </h2>
          <p className="mt-4 max-w-lg leading-7 text-navy dark:text-white/80">
            wrapping up nus computer science and preparing for full-time work 👩🏻‍💻
          </p>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-3 text-sm font-bold lowercase tracking-[0.14em] text-navy dark:text-white/85">
            <span className="h-2 w-2 shrink-0 rounded-full bg-navy/70 dark:bg-white/80" />
            <span>previously</span>
          </div>
          <h2 className="text-2xl font-bold leading-snug text-navy dark:text-white">
            internships, projects, <br />
            full-stack development
          </h2>
          <p className="mt-4 max-w-lg leading-7 text-navy dark:text-white/80">
            exploring different corners of tech through school, internships, and side projects.
          </p>
        </div>
      </div>
    </section>
  );
}