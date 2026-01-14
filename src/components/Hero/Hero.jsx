import React from 'react';
import { Element } from 'react-scroll';
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaGit, FaNodeJs } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { personalInfo, techStack } from '../../data/portfolioData';
import SkillsTicker from '../SkillsTicker/SkillsTicker';
import styles from './Hero.module.css';

const Hero = () => {
  const iconMap = {
    html5: FaHtml5,
    css3: FaCss3Alt,
    react: FaReact,
    javascript: FaJs,
    nodejs: FaNodeJs,
    git: FaGit,
    typescript: SiTypescript
  };

  return (
    <Element name="hero">
      <section className={styles.hero} id="hero">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <div className={styles.imageFrame}>
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className={styles.profileImage}
              />
            </div>
            <div className={styles.codeBrackets}>
              <span className={styles.openBracket}>&lt;</span>
              <span className={styles.slash}>/</span>
              <span className={styles.closeBracket}>&gt;</span>
            </div>
          </div>

          <div className={styles.textContent}>
            <h1 className={styles.greeting}>
              Hi, I'm <span className={styles.name}>{personalInfo.name.split(' ')[0]}.</span>
            </h1>
            <h2 className={styles.title}>
              <span className={styles.titleText}>{personalInfo.tagline}</span>
            </h2>

            <div className={styles.techIcons}>
              {techStack.map((tech) => {
                const Icon = iconMap[tech.icon];
                return Icon ? (
                  <div key={tech.name} className={styles.techIcon} title={tech.name}>
                    <Icon />
                  </div>
                ) : null;
              })}
            </div>
          </div>
        </div>
      </div>
      <SkillsTicker />
      </section>
    </Element>
  );
};

export default Hero;
