import { useEffect, useRef, useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navbar.scss";

const NAV_ITEMS = [
  { to: "about", label: "About" },
  { to: "experience", label: "Experience" },
  { to: "skills", label: "Skills" },
  { to: "projects", label: "Projects" },
  { to: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState(null);
  const sections = useRef([]);

  useEffect(() => {
    // Get all Home page sections
    sections.current = Array.from(document.querySelectorAll("[data-section]"));

    const handleScroll = () => {
      let newActiveSection = null;

      // Get top and bottom of viewport
      const viewportTop = window.scrollY;
      const viewportBottom = viewportTop + window.innerHeight;

      // For each section
      for (const section of sections.current) {
        // Get top and bottom of section
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight * 0.8;

        // Check if section is within viewport
        const isOnScreen =
          sectionBottom > viewportTop && sectionTop < viewportBottom;

        // If section is on screen, set active section and break
        if (isOnScreen) {
          newActiveSection = section.id;
          break;
        }
      }

      // Set active section if it has changed
      setActiveSection((prev) =>
        prev !== newActiveSection ? newActiveSection : prev
      );
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="nav">
      <nav className="nav__bar">
        {NAV_ITEMS.map((item) => (
          <NavItem
            key={item.to}
            to={item.to}
            label={item.label}
            activeSection={activeSection}
          />
        ))}
      </nav>
      <NavDropdown activeSection={activeSection} />
    </header>
  );
}

function NavDropdown({ activeSection }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="nav__dropdown">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="nav__dropdown__button"
        aria-label="Open navigation menu"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <div className="nav__dropdown__menu" aria-expanded={showDropdown}>
        {NAV_ITEMS.map((item) => (
          <NavItem
            key={item.to}
            to={item.to}
            label={item.label}
            activeSection={activeSection}
            setShowDropdown={setShowDropdown}
          />
        ))}
      </div>
    </div>
  );
}

function NavItem({ to, label, activeSection, setShowDropdown }) {
  const isActive = activeSection === to;

  // Scroll to section
  const handleClick = () => {
    if (setShowDropdown) {
      // Scroll to top of section, offset by 50px
      window.scrollTo({
        top: document.getElementById(to).offsetTop - 50,
        behavior: "smooth",
      });
      setShowDropdown(false);

      return;
    }

    document.getElementById(to)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className="nav__link"
      aria-selected={isActive}
    >
      {label}
    </button>
  );
}
