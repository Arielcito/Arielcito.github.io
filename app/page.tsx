import About from "@/components/about";
import BlogPage from "@/components/blog";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <BlogPage />
      <Projects />
      <Skills />
      <Experience />
      <SectionDivider />
      <Contact />
      <Link href="/terms-and-condition">Términos y Condiciones</Link>
    </main>
  );
}
