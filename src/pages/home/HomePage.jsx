import { useEffect } from "react";
import About from "src/features/about/components/section/About";
import Skills from "src/features/skills/components/section/Skills";
import Contact from "src/features/contact/components/section/Contact";
import Projects from "src/features/projects/components/section/Projects";
import Experience from "src/features/experience/components/section/Experience";
import "./home-page.scss";

export default function HomePage() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section--visible");
          } else {
            entry.target.classList.remove("section--visible");
          }
        });
      },
      {
        threshold: 0,
        // trigger when the target element is 200px from the top of the viewport
        rootMargin: "-200px 0px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="home">
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
