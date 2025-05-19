import AboutList from "../lists/AboutList";
import "./about.scss";

export default function About() {
  return (
    <section id="about" className="section about" data-section>
      <Header />
      <Subheader />
      <Description />
      <AboutList />
    </section>
  );
}

function Header() {
  return (
    <h1 className="about__title">
      Hello, I'm <span className="about__highlight">Zachary</span>.
    </h1>
  );
}

function Subheader() {
  return <h2 className="about__subtitle">I'm a full-stack web developer.</h2>;
}

function Description() {
  return (
    <div className="about__description__container">
      <p className="about__description">
        I’m a results-oriented IT professional with a solid foundation in IT
        management and support, backed by a portfolio of personal programming
        projects that demonstrate strong coding skills and a problem-solving
        mindset.
      </p>
      {/*
      <p className="about__description">
        Now, I’m looking to transition into a software development role where I
        can apply my technical expertise, practical development experience, and
        strategic understanding of IT systems to build innovative, high-impact
        software solutions.
      </p>
      */}
    </div>
  );
}
