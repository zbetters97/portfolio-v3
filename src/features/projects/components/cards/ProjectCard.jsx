import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./project-card.scss";

export default function ProjectCard({ image, title, description, link }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-card__image" />

      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
        <Link to={link} target="_blank" className="project-card__link">
          <p>Go to project</p>
          <FontAwesomeIcon icon={faArrowRight} className="project-card__icon" />
        </Link>
      </div>
    </div>
  );
}
