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
            <SkillList src={checkMarkIcon} skill='.Net'/>
            <SkillList src={checkMarkIcon} skill='C++'/>
            <SkillList src={checkMarkIcon} skill='C'/>
            <SkillList src={checkMarkIcon} skill='HTML'/>
            <SkillList src={checkMarkIcon} skill='CSS'/>
        </div>
        <hr/>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='.Net'/>
            <SkillList src={checkMarkIcon} skill='C++'/>
            <SkillList src={checkMarkIcon} skill='C'/>
            <SkillList src={checkMarkIcon} skill='HTML'/>
            <SkillList src={checkMarkIcon} skill='CSS'/>
        </div>
        <hr/>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='.Net'/>
            <SkillList src={checkMarkIcon} skill='C++'/>
            <SkillList src={checkMarkIcon} skill='C'/>
            <SkillList src={checkMarkIcon} skill='HTML'/>
            <SkillList src={checkMarkIcon} skill='CSS'/>
        </div>
    </section>
  )
}

export default Skills
