import React from 'react';
import { skills } from '../../data/portfolioData';
import styles from './SkillsTicker.module.css';

const SkillsTicker = () => {
  return (
    <div className={styles.ticker}>
      <div className={styles.tickerContent}>
        {skills.map((skill, index) => (
          <React.Fragment key={index}>
            <span className={styles.skill}>{skill}</span>
            <span className={styles.separator}>/</span>
          </React.Fragment>
        ))}
        {skills.map((skill, index) => (
          <React.Fragment key={`duplicate-${index}`}>
            <span className={styles.skill}>{skill}</span>
            <span className={styles.separator}>/</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SkillsTicker;
