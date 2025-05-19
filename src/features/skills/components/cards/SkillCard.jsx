import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./skill-card.scss";

export default function SkillCard({ label, link, icon, image }) {
  return (
    <Link to={link} target="_blank" className="skill-card">
      <h3 className="skill-card__label">{label}</h3>
      {icon ? (
        <FontAwesomeIcon icon={icon} className="skill-card__icon" />
      ) : (
        <img src={image} alt={label} className="skill-card__image" />
      )}
    </Link>
  );
}
