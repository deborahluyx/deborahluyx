import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-navy dark:text-cream transition-colors duration-200 dark:bg-black dark:text-cream">
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
}