import React, { useCallback, useEffect, useState, useRef } from 'react';
import { Element } from 'react-scroll';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { projects } from '../../data/portfolioData';
import styles from './Projects.module.css';

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoScrollPlugin = useRef(
    AutoScroll({
      speed: 0.5,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
    },
    [autoScrollPlugin.current]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const handleMouseEnter = useCallback(() => {
    if (autoScrollPlugin.current) {
      autoScrollPlugin.current.stop();
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (autoScrollPlugin.current) {
      autoScrollPlugin.current.play();
    }
  }, []);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <Element name="projects">
      <section className={styles.projects} id="projects">
        <div className={styles.container}>
          <h2 className={styles.title}>
            Projects<span className={styles.dot}>.</span>
          </h2>

          <div
            className={styles.carouselWrapper}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`${styles.carouselButton} ${styles.prevButton}`}
              onClick={scrollPrev}
              onFocus={handleMouseEnter}
              onBlur={handleMouseLeave}
              aria-label="Previous project"
            >
              ‹
            </button>

            <div className={styles.embla} ref={emblaRef}>
              <div className={styles.emblaContainer}>
                {projects.map((project) => (
                  <div key={project.id} className={styles.emblaSlide}>
                    <div className={styles.projectCard}>
                      <div className={styles.projectImage}>
                        {project.video ? (
                          <video
                            className={styles.projectVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                          >
                            <source src={project.video} type="video/mp4" />
                          </video>
                        ) : project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className={styles.projectImg}
                          />
                        ) : (
                          <div className={styles.placeholderImage}>
                            <span className={styles.projectNumber}>0{project.id}</span>
                          </div>
                        )}
                      </div>

                      <div className={styles.projectContent}>
                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.projectTitleLink}
                          >
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                          </a>
                        ) : (
                          <h3 className={styles.projectTitle}>{project.title}</h3>
                        )}
                        <p className={styles.projectDescription}>{project.description}</p>

                        <div className={styles.technologies}>
                          {project.technologies.map((tech, index) => (
                            <span key={index} className={styles.tech}>
                              {tech}
                            </span>
                          ))}
                        </div>

                        {project.highlights && project.highlights.length > 0 && (
                          <ul className={styles.highlights}>
                            {project.highlights.map((highlight, index) => (
                              <li key={index}>{highlight}</li>
                            ))}
                          </ul>
                        )}

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              className={`${styles.carouselButton} ${styles.nextButton}`}
              onClick={scrollNext}
              onFocus={handleMouseEnter}
              onBlur={handleMouseLeave}
              aria-label="Next project"
            >
              ›
            </button>

            <div className={styles.carouselIndicators}>
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.indicator} ${
                    index === selectedIndex ? styles.activeIndicator : ''
                  }`}
                  onClick={() => scrollTo(index)}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Projects;
