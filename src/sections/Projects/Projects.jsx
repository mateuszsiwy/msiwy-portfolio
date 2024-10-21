import styles from './ProjectsStyles.module.css'
import ProjectCard from '../../common/ProjectCard'
import black from '../../assets/black.png'
function Projects() {
  return (
    <section className={styles.container}>
        <h1 className={styles.header}>Projects</h1>
        <h2>Console Apps</h2>
        <div className={styles.projects}>
            <ProjectCard src={black} link='https://github.com/mateuszsiwy/CodingTracker' h3='Coding Tracker' p='Console application that allows users to track their daily coding time'/>
            <ProjectCard src={black} link='https://github.com/mateuszsiwy/ShiftsLoggerApi/tree/master' h3='Shifts Logger' p='Shifts Logger is a console-based application for recording and managing worker shifts'/>
            <ProjectCard src={black} link='https://github.com/mateuszsiwy/Bench-Press-Tracker' h3='Bench Press Tracker' p='Bench Press Tracker is a simple console-based application for tracking bench press exercises.'/>
            <ProjectCard src={black} link='https://github.com/mateuszsiwy/Flashcards' h3='Flashcards' p='Flashcards application allows users to create and manage flashcards organized in stacks, study them, and track their progress through study sessions.'/>
        </div>
        <br/><br/>
        <h2>Fullstack Apps</h2>
        <div className={styles.projects}>
            <ProjectCard src={black} link='https://github.com/mateuszsiwy/ApartmentManagementSystem' h3='Apartment Management System' p='A web application that allows data management through an API interface.'/>

            <ProjectCard src={black} link='https://github.com/mateuszsiwy/Chat-Application' h3='Chat Application' p='Chat Application is a .NET desktop application built using Windows Forms that allows users to communicate in real time over a local server.'/>

        </div>
        <br/><br/>
        <h2>Frontend Apps</h2>
        <div className={styles.projects}>
            <ProjectCard src={black} link='https://github.com/mateuszsiwy/msiwy-portfolio' h3='Portfolio' p='The personal portfolio you are looking at.'/>
        </div>
    </section>
  )
}

export default Projects
