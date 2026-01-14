import React from 'react';
import { footer } from '../../data/portfolioData';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>{footer.altText}</p>
      </div>
    </footer>
  );
};

export default Footer;
