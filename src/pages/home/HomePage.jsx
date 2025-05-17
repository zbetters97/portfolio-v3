import About from "src/features/about/components/section/About";
import Skills from "src/features/skills/components/section/Skills";
import Contact from "src/features/contact/components/section/Contact";
import Projects from "src/features/projects/components/section/Projects";
import Experience from "src/features/experience/components/section/Experience";
import "./home-page.scss";

export default function HomePage() {
  return (
    <main className="home">
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
