import React, { useState, useEffect } from 'react';
import './Header.css';
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import useScrollSpy from '../hooks/useScrollSpy';

const Header = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const sectionIds = ['home', 'about', 'services', 'projects', 'skills', 'contact'];
  const activeSection = useScrollSpy(sectionIds, 200);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const navLinks = [
    { id: 'home', label: t('header', 'home') },
    { id: 'about', label: t('header', 'about') },
    { id: 'services', label: t('header', 'services') },
    { id: 'projects', label: t('header', 'projects') },
    { id: 'skills', label: t('header', 'skills') },
    { id: 'contact', label: t('header', 'contact') },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container header-content">
        <a href="#home" className="logo">
          <span className="logo-text">JD</span>
          <span className="logo-subtext">Developers</span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={activeSection === link.id ? 'active' : ''}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a href="#contact" className="btn btn-primary btn-sm header-cta">
            {t('header', 'hireMe')}
          </a>
          <button
            className="btn-ghost-icon lang-toggle"
            onClick={toggleLanguage}
            aria-label="Toggle language"
          >
            <Globe size={18} />
            <span className="lang-label">{language.toUpperCase()}</span>
          </button>
          <button
            className="btn-ghost-icon theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="btn-ghost-icon mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu-backdrop" onClick={() => setIsMenuOpen(false)} />
        <nav className="mobile-menu-content">
          <ul className="mobile-nav-links">
            {navLinks.map((link, index) => (
              <li key={link.id} style={{ animationDelay: `${index * 0.05}s` }}>
                <a
                  href={`#${link.id}`}
                  className={activeSection === link.id ? 'active' : ''}
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-menu-actions">
            <a href="#contact" className="btn btn-primary" onClick={handleNavClick}>
              {t('header', 'hireMe')}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
