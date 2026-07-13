import React from 'react';
import './Header.css';
import { Moon, Sun, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const { t, language, toggleLanguage } = useLanguage();

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <span className="logo-text">JD</span>
          <span className="logo-subtext">Developers</span>
        </div>
        
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li><a href="#home" className="active">{t('header', 'home')}</a></li>
            <li><a href="#about">{t('header', 'about')}</a></li>
            <li><a href="#services">{t('header', 'services')}</a></li>
            <li><a href="#projects">{t('header', 'projects')}</a></li>
            <li><a href="#skills">{t('header', 'skills')}</a></li>
            <li><a href="#contact">{t('header', 'contact')}</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <a href="#contact" className="btn btn-primary btn-sm">{t('header', 'hireMe')}</a>
          <button className="btn-ghost-icon lang-toggle" onClick={toggleLanguage} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.9rem', fontWeight: 'bold' }}>
            <Globe size={18} /> {language.toUpperCase()}
          </button>
          <button className="btn-ghost-icon theme-toggle">
            <Moon size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
