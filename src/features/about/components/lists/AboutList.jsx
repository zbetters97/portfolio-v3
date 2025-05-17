import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./about-list.scss";
import { Link } from "react-router-dom";

export default function AboutList() {
  return (
    <div className="about-list">
      <AboutIcon to="https://github.com/zbetters97" icon={faGithub} />
      <AboutIcon
        to="https://www.linkedin.com/in/zachary-betters-916a74116/"
        icon={faLinkedin}
      />
      <AboutIcon to="https://x.com/every1_betters" icon={faTwitter} />
      <AboutIcon
        to="https://www.instagram.com/zachcheddars/"
        icon={faInstagram}
      />
    </div>
  );
}

function AboutIcon({ to, icon }) {
  return (
    <Link to={to} target="_blank" className="about-list__link">
      <FontAwesomeIcon icon={icon} className="about-list__icon" />
    </Link>
  );
}
