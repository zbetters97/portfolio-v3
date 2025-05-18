import {
  faCss3,
  faJava,
  faMicrosoft,
  faNode,
  faPhp,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import SkillCard from "../cards/SkillCard";
import "./skills-list.scss";

export default function SkillsList() {
  return (
    <div className="skills-list">
      <SkillCard label="React" icon={faReact} link="https://react.dev/" />
      <SkillCard label="Node.js" icon={faNode} link="https://nodejs.org/en/" />
      <SkillCard label="Java" icon={faJava} link="https://www.java.com/" />
      <SkillCard
        label="Tailwind"
        icon={faCss3}
        link="https://tailwindcss.com/"
      />
      <SkillCard label="SCSS" icon={faCss3} link="https://sass-lang.com/" />
      <SkillCard label="PHP" icon={faPhp} link="https://www.php.net/" />
      <SkillCard
        label="Excel"
        icon={faMicrosoft}
        link="https://www.office.com/"
      />
    </div>
  );
}
