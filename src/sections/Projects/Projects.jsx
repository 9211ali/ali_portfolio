import styles from './ProjectsStyles.module.css';
import freshBurger from '../../assets/fresh-burger.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';
import viewexchange from '../../assets/viewexchange_logo.png';
import itpilot from '../../assets/itpilot_logo.png';
import donorbox from '../../assets/donorbox-logo-w.svg'
import twitter from '../../assets/twitter-dark.svg';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viewexchange}
          link="https://github.com/9211ali/viewexchanges"
          h3="ViewExchange"
          p="Social Networking App"
        />
        <ProjectCard
          src={donorbox}
          link="https://github.com/9211ali/donorbox"
          h3="Donorbox"
          p="Online Fundraising App"
        />
        <ProjectCard
          src={itpilot}
          link="https://github.com/9211ali/itpilot_24"
          h3="itpilot"
          p="IT services App"
        />
        <ProjectCard
          src={twitter}
          link="https://github.com/9211ali/twitter_clone"
          h3="Twitter Clone"
          p="Social Networking App(inprogress)"
        />
      </div>
    </section>
  );
}

export default Projects;
