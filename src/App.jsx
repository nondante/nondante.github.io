import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import BubbleCanvas from './components/BubbleCanvas/BubbleCanvas';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <BubbleCanvas />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
