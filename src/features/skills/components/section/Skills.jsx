import SkillsList from "../list/SkillsList";
import "./skills.scss";

export default function Skills() {
  return (
    <section id="skills" className="section skills" data-section>
      <h1 className="section__header">Skills</h1>
      <SkillsList />
    </section>
  );
}
