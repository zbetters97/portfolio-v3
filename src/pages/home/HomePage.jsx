import { useEffect, useState } from "react";
import About from "src/features/about/components/section/About";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Skills from "src/features/skills/components/section/Skills";
import Contact from "src/features/contact/components/section/Contact";
import SuccessAlert from "src/features/modal/components/SuccessAlert";
import Projects from "src/features/projects/components/section/Projects";
import Experience from "src/features/experience/components/section/Experience";
import Modal from "../../features/modal/components/Modal";
import "./home-page.scss";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Prevent scrolling when modal is open
    if (isModalOpen) {
      document.body.classList.add("lock-scroll");
    }
  }, [isModalOpen]);

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
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <SuccessAlert
          message="Message sent!"
          link="Go back"
          icon={faArrowRight}
          onClick={() => setIsModalOpen(false)}
        />
      </Modal>

      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact setIsModalOpen={setIsModalOpen} />
    </main>
  );
}
