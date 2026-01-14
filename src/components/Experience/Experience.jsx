import React from 'react';
import { Element } from 'react-scroll';
import { experience } from '../../data/portfolioData';
import styles from './Experience.module.css';

const Experience = () => {
  return (
    <Element name="experience">
      <section className={styles.experience} id="experience">
        <div className={styles.container}>
          <h2 className={styles.title}>
            Experience<span className={styles.dot}>.</span>
          </h2>

          <div className={styles.timeline}>
            {experience.map((job) => (
              <div key={job.id} className={styles.timelineItem}>
                <div className={styles.dateRange}>{job.duration}</div>

                <div className={styles.content}>
                  <div className={styles.header}>
                    <h3 className={styles.jobTitle}>
                      {job.title} | {job.company}
                    </h3>
                  </div>

                  {job.description && (
                    <p className={styles.description}>{job.description}</p>
                  )}

                  {job.responsibilities && job.responsibilities.length > 0 && (
                    <ul className={styles.responsibilities}>
                      {job.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Experience;
