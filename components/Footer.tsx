export default function Footer() {
  return (
    <footer id="contact" className="border-t border-navy/15">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-3xl font-bold text-navy dark:text-cream">
            say hello sometime ⊹ ࣪ ˖
          </h2>
        </div>

        <div className="text-left md:text-right">
          <div className="mb-4 flex gap-5 md:justify-end">
            <a href="mailto:hello@deborahlu.com" className="text-navy dark:text-cream/80 underline hover:text-navy dark:text-cream">
              email
            </a>
            <a href="https://github.com/deborahluyx" className="text-navy dark:text-cream/80 underline hover:text-navy dark:text-cream">
              github
            </a>
            <a href="https://www.linkedin.com/in/deborahluyx/" className="text-navy dark:text-cream/80 underline hover:text-navy dark:text-cream">
              linkedin
            </a>
          </div>
          <p className="text-sm text-navy dark:text-cream/70">
            © 2026 deborah lu. all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}