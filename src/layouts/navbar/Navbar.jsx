import { useEffect, useRef, useState } from "react";
import "./navbar.scss";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState(null);
  const sections = useRef([]);

  const handleScroll = () => {
    let newActiveSection = null;

    // Iterate through each section
    sections.current.forEach((section) => {
      // Get top of section
      const sectionTop = section.offsetTop;

      // Not exact section height
      const sectionBottom = sectionTop + section.offsetHeight * 0.8;

      // Get top and bottom of browser viewport
      const viewportTop = window.scrollY;
      const viewportBottom = viewportTop + window.innerHeight;

      // Check if section is within frame
      const isOnScreen =
        sectionBottom > viewportTop && sectionTop < viewportBottom;

      // Set new active section if viewable section not already found
      if (isOnScreen && newActiveSection === null) {
        newActiveSection = section.id;
      }
    });

    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    // Check active section on load and scroll
    sections.current = document.querySelectorAll("[data-section]");
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    // Cleanup
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
  // Check if section is active
  const isActive = activeSection === to;

  // Scroll to section
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
