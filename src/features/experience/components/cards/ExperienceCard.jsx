import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./experience-card.scss";

export default function ExperienceCard(props) {
  const { tenure, url, title, company, actions, tags } = props;

  return (
    <div className="experience-card">
      <p className="experience-card__tenure">{tenure}</p>
      <div className="experience-card__content">
        <Link to={url} target="_blank" className="experience-card__link">
          <h3 className="experience-card__title">
            {title} · {company}
            <FontAwesomeIcon icon={faArrowRight} />
          </h3>
        </Link>
        <Actions actions={actions} />
        <Tags tags={tags} />
      </div>
    </div>
  );
}

export function Actions({ actions }) {
  return (
    <ul className="actions">
      {actions?.map((action, index) => {
        return (
          <li key={index} className="actions__item">
            <p className="actions__text">{action}</p>
          </li>
        );
      })}
    </ul>
  );
}

export function Tags({ tags }) {
  return (
    <div className="tags">
      {tags?.map((tag, index) => {
        return (
          <div key={index} className="tags__item">
            <p className="tags__text">{tag}</p>
          </div>
        );
      })}
    </div>
  );
}
