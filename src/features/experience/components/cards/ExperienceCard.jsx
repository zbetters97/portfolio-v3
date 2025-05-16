import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function ExperienceCard(props) {
  const { tenure, url, title, company, actions, tags } = props;

  return (
    <div>
      <p>{tenure}</p>
      <div>
        <Link to={url} target="_blank">
          <h3>
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
    <ul>
      {actions?.map((action, index) => {
        return (
          <li key={index}>
            <p>{action}</p>
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
