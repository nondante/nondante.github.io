import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope, FaArrowRight, FaCopy, FaCheck } from 'react-icons/fa';
import { contact } from '../../data/portfolioData';
import styles from './Contact.module.css';

const Contact = () => {
  const [copiedId, setCopiedId] = useState(null);

  const iconMap = {
    linkedin: FaLinkedin,
    instagram: FaInstagram,
    github: FaGithub,
    email: FaEnvelope
  };

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    });
  };

  return (
    <Element name="contact">
      <section className={styles.contact} id="contact">
        <div className={styles.container}>
          <h2 className={styles.title}>
            Contact<span className={styles.dot}>.</span>
          </h2>

          <p className={styles.subtitle}>{contact.title}</p>

          <div className={styles.contactGrid}>
            {contact.links.map((link) => {
              const Icon = iconMap[link.icon];

              if (link.copyable) {
                return (
                  <div
                    key={link.id}
                    className={`${styles.contactCard} ${styles.emailCard}`}
                  >
                    <div className={styles.emailTitleRow}>
                      {Icon && <Icon className={styles.icon} />}
                      <span className={styles.linkName}>{link.name}</span>
                    </div>
                    <div className={styles.emailRow}>
                      <span className={styles.emailAddress}>{link.url}</span>
                      <button
                        className={`${styles.copyButton} ${copiedId === link.id ? styles.copied : ''}`}
                        onClick={() => handleCopy(link.url, link.id)}
                        aria-label="Copy email"
                      >
                        {copiedId === link.id ? (
                          <FaCheck className={styles.checkIcon} />
                        ) : (
                          <FaCopy className={styles.copyIcon} />
                        )}
                      </button>
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactCard}
                >
                  <div className={styles.cardContent}>
                    {Icon && <Icon className={styles.icon} />}
                    <span className={styles.linkName}>{link.name}</span>
                  </div>
                  <FaArrowRight className={styles.arrow} />
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
