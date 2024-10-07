import styles from './SkillsStyles.module.css'
import checkMarkIconLight from '../../assets/checkmark-light.svg'
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import {useTheme} from '../../common/ThemeContext'
import SkillList from '../../common/SkillList';

function Skills() {
    const {theme, toggleTheme} = useTheme();

    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='C#'/>
            <SkillList src={checkMarkIcon} skill='C++'/>
            <SkillList src={checkMarkIcon} skill='C'/>
            <SkillList src={checkMarkIcon} skill='Python'/>
        </div>
        <hr/>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='.Net'/>
            <SkillList src={checkMarkIcon} skill='HTML'/>
            <SkillList src={checkMarkIcon} skill='CSS'/>
            <SkillList src={checkMarkIcon} skill='Flask'/>
        </div>
        <hr/>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='SQL'/>
            <SkillList src={checkMarkIcon} skill='SQLServer'/>
            <SkillList src={checkMarkIcon} skill='Entiry Framework Core'/>
            <SkillList src={checkMarkIcon} skill='Visual Studio'/>
            <SkillList src={checkMarkIcon} skill='Visual Studio Code'/>
        </div>
    </section>
  )
}

export default Skills
