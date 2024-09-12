import Styles from "./ProjectStyles.module.css";
import exchange from "../../assets/exchangelogo.png";
import comingSoon from "../../assets/ComingSoon.png";
import comingSoon2 from "../../assets/ComingSoon.png";
import comingSoon3 from "../../assets/ComingSoon.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={Styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={Styles.projectsContainer}>
        <ProjectCard
          src={exchange}
          link="https://joonashilt.github.io/currency_converter/ "
          h3="Currency"
          p="Currency exchange app"
        />
        <ProjectCard
          src={comingSoon}
          link="https://github.com/JoonasHilt"
          h3="Coming Soon!"
          p="Working on new projects!"
        />
        <ProjectCard
          src={comingSoon2}
          link="https://github.com/JoonasHilt"
          h3="Coming Soon!"
          p="Working on new projects!"
        />
        <ProjectCard
          src={comingSoon3}
          link="https://github.com/JoonasHilt"
          h3="Coming Soon!"
          p="Working on new projects!"
        />
      </div>
    </section>
  );
}

export default Projects;
