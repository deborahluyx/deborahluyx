"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    const shouldUseDark = savedTheme === "dark";

    setIsDark(shouldUseDark);

    document.documentElement.classList.toggle(
      "dark",
      shouldUseDark
    );
  }, []);

  function toggleTheme() {
    const nextTheme = !isDark;

    setIsDark(nextTheme);

    document.documentElement.classList.toggle(
      "dark",
      nextTheme
    );

    localStorage.setItem(
      "theme",
      nextTheme ? "dark" : "light"
    );
  }

  return (
    <header className="border-b border-navy/15 bg-cream transition-colors dark:border-white/10 dark:bg-black">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-navy dark:text-cream transition-colors dark:text-cream"
        >
          deborah lu
        </a>

        <div className="flex items-center gap-7 text-sm text-navy dark:text-cream/80 dark:text-cream/80">
          <a
            href="#work"
            className="hover:text-navy dark:text-cream dark:hover:text-cream"
          >
            work
          </a>

          <a
            href="#about"
            className="hover:text-navy dark:text-cream dark:hover:text-cream"
          >
            about
          </a>

          <a
            href="/resume.pdf"
            className="hover:text-navy dark:text-cream dark:hover:text-cream"
          >
            resume
          </a>

          <a
            href="#contact"
            className="hover:text-navy dark:text-cream dark:hover:text-cream"
          >
            contact
          </a>

          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/20 text-navy dark:text-cream transition-colors hover:bg-navy hover:text-cream dark:border-white/15 dark:text-cream dark:hover:bg-cream dark:hover:text-black"
          >
            {isDark ? (
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="M4.93 4.93l1.41 1.41" />
                <path d="M17.66 17.66l1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 3a6 6 0 0 0 9 7.5A9 9 0 1 1 12 3Z" />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}