import styles from './ProjectsStyles.module.css'
import ProjectCard from '../../common/ProjectCard'
import black from '../../assets/black.png'
function Projects() {
  return (
    <section className={styles.container}>
        <h1 className={styles.header}>Projects</h1>
        <h2>Console Apps</h2>
        <div className={styles.projects}>
            <ProjectCard src={black} link='' h3='Project' p='Description'/>
            <ProjectCard src={black} link='' h3='Project' p='Description'/>
            <ProjectCard src={black} link='' h3='Project' p='Description'/>
            <ProjectCard src={black} link='' h3='Project' p='Description'/>
        </div>
        <br/><br/>
        <h2>Fullstack Apps</h2>
        <div className={styles.projects}>
            <ProjectCard src={black} link='' h3='Project' p='Description'/>
            <ProjectCard src={black} link='' h3='Project' p='Description'/>
            <ProjectCard src={black} link='' h3='Project' p='Description'/>
            <ProjectCard src={black} link='' h3='Project' p='Description'/>
        </div>
        <br/><br/>
        <h2>Frontend Apps</h2>
        <div className={styles.projects}>
            <ProjectCard src={black} link='' h3='Project' p='Description'/>
            <ProjectCard src={black} link='' h3='Project' p='Description'/>
            <ProjectCard src={black} link='' h3='Project' p='Description'/>
            <ProjectCard src={black} link='' h3='Project' p='Description'/>
        </div>
    </section>
  )
}

export default Projects
