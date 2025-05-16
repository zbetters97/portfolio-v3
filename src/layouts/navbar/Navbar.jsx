import { useEffect, useRef, useState } from "react";
import "./navbar.scss";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState(null);
  const sections = useRef([]);

  const handleScroll = () => {
    let newActiveSection = null;

    sections.current.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      const viewportTop = window.scrollY;
      const viewportBottom = viewportTop + window.innerHeight;

      const isOnScreen =
        sectionBottom > viewportTop && sectionTop < viewportBottom;

      if (isOnScreen && newActiveSection === null) {
        newActiveSection = section.id;
      }
    });

    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    sections.current = document.querySelectorAll("[data-section]");
    window.addEventListener("scroll", handleScroll);
    
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="nav">
      <nav className="navbar">
        <NavItem to="about" label="About" activeSection={activeSection} />
        <NavItem
          to="experience"
          label="Experience"
          activeSection={activeSection}
        />
        <NavItem to="skills" label="Skills" activeSection={activeSection} />
        <NavItem to="projects" label="Projects" activeSection={activeSection} />
        <NavItem to="contact" label="Contact" activeSection={activeSection} />
      </nav>
    </header>
  );
}

function NavItem({ to, label, activeSection }) {
  const isActive = activeSection === to;

  const handleClick = () => {
    document.getElementById(to).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className="navbar__link"
      aria-selected={isActive}
    >
      {label}
    </button>
  );
}
