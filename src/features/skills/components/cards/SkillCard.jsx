import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./skill-card.scss";

export default function SkillCard({ label, icon, link }) {
  return (
    <Link to={link} target="_blank" className="skill-card">
      <h3 className="skill-card__label">{label}</h3>
      <FontAwesomeIcon icon={icon} className="skill-card__icon" />
    </Link>
  );
}
