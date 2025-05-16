import ExperienceList from "../lists/ExperienceList";
import "./experience.scss";

export default function Experience() {
  return (
    <section id="experience" className="section experience" data-section>
      <h1 className="section__header">Experience</h1>
      <ExperienceList />
    </section>
  );
}
