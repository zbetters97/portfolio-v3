import ProjectCard from "../cards/ProjectCard";
import "./projects-list.scss";

export default function ProjectsList() {
  return (
    <div className="projects-list">
      <ProjectCard
        image="images/projects/tracklist.png"
        title="TrackList"
        description="A modern React.js app for music review and discussion with responsive SCSS styling, Spotify Web API integration, and Google Firebase-based authentication and data storage."
        link="https://tracklist-app.netlify.app/"
      />

      <ProjectCard
        image="images/projects/chatit.png"
        title="ChatIt"
        description="A responsive messaging platform built with React.js and SCSS, featuring real-time communication via Firebase and music sharing through Spotify Web API integration. It showcases secure authentication, cloud data handling, and dynamic UI design, highlighting strengths in frontend development and API integration."
        link="https://chatit-app.netlify.app/"
      />

      <ProjectCard
        image="images/projects/zelda.png"
        title="The Legend of Zelda Adventure Game"
        description="A 2D adventure game built in Java using a custom-built game engine, inspired by The Legend of Zelda series, featuring tile-based rendering, sprite animations, and an event-driven gameplay system."
        link="https://github.com/zbetters97/loz-links-reawakening"
      />

      <ProjectCard
        image="images/projects/pokemon.png"
        title="Pokémon Adventure Game"
        description="A 2D adventure game built in Java using a custom-built game engine, inspired by Pokémon Sapphire, featuring tile-based rendering, sprite animations, and an event-driven gameplay system."
        link="https://github.com/zbetters97/pokemon-lets-battle"
      />

      <ProjectCard
        image="images/projects/reach.png"
        title="Reach Worship"
        description="A custom-built website for Reach Worship, a Delaware-based band, showcasing key web development concepts such as responsive design using SCSS and jQuery, interactive navigation with the Google Maps API, and dynamic content handling via JavaScript and Firebase."
        link="https://reachworshipde.netlify.app/"
      />
    </div>
  );
}
