import React from 'react';
import { Element } from 'react-scroll';
import { FaFigma, FaHtml5, FaCss3Alt, FaJs, FaCode } from 'react-icons/fa';
import { formation } from '../../data/portfolioData';
import styles from './Formation.module.css';

const Formation = () => {
  const iconMap = {
    figma: FaFigma,
    html: FaHtml5,
    css: FaCss3Alt,
    javascript: FaJs,
    code: FaCode
  };

  return (
    <Element name="formation">
      <section className={styles.formation} id="formation">
        <div className={styles.container}>
          <h2 className={styles.title}>
            Formation<span className={styles.dot}>.</span>
          </h2>

          <div className={styles.courses}>
            {formation.map((course) => {
              const Icon = iconMap[course.icon];
              return (
                <div key={course.id} className={styles.courseCard}>
                  <div
                    className={styles.iconContainer}
                    style={{ backgroundColor: course.color }}
                  >
                    {Icon && <Icon className={styles.icon} />}
                  </div>

                  <div className={styles.courseInfo}>
                    <h3 className={styles.courseTitle}>{course.title}</h3>
                    <div className={styles.courseMeta}>
                      <span className={styles.provider}>{course.provider}</span>
                      <span className={styles.duration}>{course.duration}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Formation;
