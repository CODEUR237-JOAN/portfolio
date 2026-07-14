import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ParticlesBackground from './components/ParticlesBackground';

import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: 'ease-out-cubic',
      offset: 80,
    });
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="app">
          <ScrollProgress />
          <ParticlesBackground />
          <Header />
          <main>
            <Hero />
            <AboutSkills />
            <Services />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
