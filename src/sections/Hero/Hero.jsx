import styles from './HeroStyles.module.css'
import heroImage from '../../assets/hero.jfif'
import sun from '../../assets/sun.svg'
import mooon from '../../assets/moon.svg'
import githubIconLight from '../../assets/github-light.svg'
import githubIconDark from '../../assets/github-dark.svg'
import linkedinIconLight from '../../assets/linkedin-light.svg'
import linkedinIconDark from '../../assets/linkedin-dark.svg'
import {useTheme} from '../../common/ThemeContext'

function Hero() {
    const {theme, toggleTheme} = useTheme();
    const colorModeIcon = theme === 'light' ? sun : mooon;
    const githubIcon = theme === 'light' ? githubIconLight : githubIconDark;
    const linkedinIcon = theme === 'light' ? linkedinIconLight : linkedinIconDark;
    return (
        <section id='hero' className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.hero} src={heroImage}></img>
                <img src={colorModeIcon} className={styles.colorModeIcon} onClick={toggleTheme}></img>
            </div>
            <div className={styles.info}>
                <h1 className={styles.heroTitle}>Mateusz<br/> Siwy</h1>
                <div className={styles.socials}>
                    <a href="https://github.com/mateuszsiwy" target="_blank" className='hover'>
                        <img src={githubIcon} alt="Github icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/mateuszsiwy/" target="_blank" className='hover'>
                        <img src={linkedinIcon} alt="Linkedin icon"/>
                    </a>
                </div>
                <h2 className={styles.heroSubtitle}>.Net Developer</h2>
                <p className={styles.heroQuote}>
                    With a passion for developing fast, modern and innovative .Net applications
                </p>
                <a href="" download>
                    <button className="hover">Resume</button>
                </a>
            </div>
            
        </section>
    )
}

export default Hero
