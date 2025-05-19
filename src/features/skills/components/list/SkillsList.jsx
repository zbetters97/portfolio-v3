import {
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
      <SkillCard label="React" link="https://react.dev/" icon={faReact} />
      <SkillCard label="Node.js" link="https://nodejs.org/en/" icon={faNode} />
      <SkillCard label="Java" link="https://www.java.com/" icon={faJava} />
      <SkillCard
        label="Tailwind"
        link="https://tailwindcss.com/"
        image="/icons/skills/tailwind.png"
      />
      <SkillCard
        label="SCSS"
        link="https://sass-lang.com/"
        image="/icons/skills/sass.png"
      />
      <SkillCard label="PHP" link="https://www.php.net/" icon={faPhp} />
      <SkillCard
        label="Excel"
        link="https://www.office.com/"
        icon={faMicrosoft}
      />
    </div>
  );
}
