import React from 'react';
import { Element } from 'react-scroll';
import { about } from '../../data/portfolioData';
import styles from './About.module.css';

const About = () => {
  return (
    <Element name="about">
      <section className={styles.about} id="about">
        <div className={styles.container}>
          <h2 className={styles.title}>
            About<span className={styles.dot}>.</span>
          </h2>

          <div className={styles.content}>
            <div className={styles.imageContainer}>
              <img
                src="/img/photos/office.png"
                alt="Office workspace"
                className={styles.officeImage}
              />
            </div>

            <div className={styles.textContent}>
              <h3 className={styles.heading} dangerouslySetInnerHTML={{ __html: about.heading }}></h3>
              <p className={styles.description} dangerouslySetInnerHTML={{ __html: about.description }}></p>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;
