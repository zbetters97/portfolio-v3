import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./totop-button.scss";

export default function ToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // If user scrolls more than 200px from top, show button
    function handleScroll() {
      window.scrollY > 200 ? setIsVisible(true) : setIsVisible(false);
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top
  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="to-top-button"
      aria-selected={isVisible}
      aria-label="scroll to top"
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
}
