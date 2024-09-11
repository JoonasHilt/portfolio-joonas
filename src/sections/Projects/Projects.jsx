import Styles from "./ProjectStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={Styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={Styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://joonashilt.github.io/currency_converter/ "
          h3="Viberr"
          p="Streaming App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://joonashilt.github.io/currency_converter/ "
          h3="Fresh Burger"
          p="Hamburger Restaurant"
        />
        <ProjectCard
          src={hipsster}
          link="https://joonashilt.github.io/currency_converter/ "
          h3="Hipsster"
          p="Sunglass shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://joonashilt.github.io/currency_converter/ "
          h3="Fitlift"
          p="Fitness App "
        />
      </div>
    </section>
  );
}

export default Projects;
