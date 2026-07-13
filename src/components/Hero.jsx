import React from 'react';
import './Hero.css';
import { Download, ArrowRight, Code } from 'lucide-react';
import { FaInstagram, FaGithub, FaYoutube } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero section">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="greeting" data-aos="fade-down" data-aos-delay="100">{t('hero', 'greeting')}</p>
          <h1 className="name" data-aos="fade-right" data-aos-delay="200">Dongmo <span>Joan</span></h1>
          <h2 className="title" data-aos="fade-right" data-aos-delay="300">{t('hero', 'title')}</h2>
          <p className="bio" data-aos="fade-up" data-aos-delay="400">
            {t('hero', 'bio')}
          </p>
          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="500">
            <a href="/CV.pdf" download="CV_Joan_Dongmo.pdf" className="btn btn-primary" style={{ display: 'inline-flex' }}>
              {t('hero', 'downloadCV')} <Download size={18} />
            </a>
            <a href="mailto:joanfreeddonfmomeufo@gmail.com" className="btn btn-ghost" style={{ display: 'inline-flex' }}>
              {t('hero', 'contactMe')} <ArrowRight size={18} />
            </a>
          </div>
          
          <div className="social-links" data-aos="fade-up" data-aos-delay="600">
            <span className="follow-text">{t('hero', 'followMe')}</span>
            <div className="social-icons">
              {/* Add real links later */}
              <a href="https://www.instagram.com/joan_marta21?igsh=MWM5cGk1bjhnaDR3bw==" className="social-icon instagram">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="social-icon github">
                <FaGithub size={20} />
              </a>
              <a href="#" className="social-icon youtube">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-container">
            <div className="neon-halo"></div>
            {/* The user's photo should be placed here */}
            <img 
              src="/profile.jpg" 
              alt="Joan Dongmo" 
              className="avatar" 
            />
            
            {/* Floating Icons */}
            <div className="floating-icon icon-1">
              <Code size={24} color="var(--accent-purple)" />
            </div>
            <div className="floating-icon icon-2">
              <span style={{color: '#ff8c00', fontWeight: 'bold'}}>{'{ }'}</span>
            </div>
            <div className="floating-badge badge-js">JS</div>
            <div className="floating-badge badge-css">CSS</div>
            <div className="floating-badge badge-py">Py</div>
            <div className="floating-badge badge-html">HTML</div>
            <div className="floating-badge badge-dart">Dart</div>
            <div className="floating-badge badge-java">Java</div>
            <div className="floating-badge badge-sql">SQL</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
