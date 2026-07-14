import React from 'react';
import { ArrowUp } from 'lucide-react';
import { FaInstagram, FaGithub, FaYoutube } from 'react-icons/fa';
import './Footer.css';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">Dongmo <span className="gradient-text">Joan</span></h2>
            <p className="footer-tagline">{t('hero', 'title')}</p>
          </div>

          <div className="footer-links">
            <a href="#home" className="footer-link">{t('header', 'home')}</a>
            <a href="#about" className="footer-link">{t('header', 'about')}</a>
            <a href="#services" className="footer-link">{t('header', 'services')}</a>
            <a href="#projects" className="footer-link">{t('header', 'projects')}</a>
            <a href="#contact" className="footer-link">{t('header', 'contact')}</a>
          </div>

          <div className="footer-socials">
            <a href="https://www.instagram.com/joan_marta21?igsh=MWM5cGk1bjhnaDR3bw==" target="_blank" rel="noopener noreferrer" className="social-icon instagram" aria-label="Instagram">
              <FaInstagram size={18} />
            </a>
            <a href="https://github.com/CODEUR237-JOAN" target="_blank" rel="noopener noreferrer" className="social-icon github" aria-label="GitHub">
              <FaGithub size={18} />
            </a>
            <a href="#" className="social-icon youtube" aria-label="YouTube">
              <FaYoutube size={18} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Dongmo Joan. {t('footer', 'rights')}
          </p>
          <button className="btn-top" onClick={scrollToTop} aria-label="Back to top">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
