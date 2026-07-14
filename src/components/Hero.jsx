import React from 'react';
import './Hero.css';
import { Download, ArrowRight, Code } from 'lucide-react';
import { FaInstagram, FaGithub, FaYoutube } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import useTypewriter from '../hooks/useTypewriter';

const Hero = () => {
  const { t } = useLanguage();
  const roles = t('hero', 'roles') || ['Full-Stack Developer'];
  const typedText = useTypewriter(roles, 100, 60, 2000);

  return (
    <section id="home" className="hero section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge" data-aos="fade-down" data-aos-delay="100">
            <span className="badge-dot" />
            <span>{t('hero', 'greeting')}</span>
          </div>
          <h1 className="name" data-aos="fade-right" data-aos-delay="200">
            Dongmo <span className="gradient-text">Joan</span>
          </h1>
          <h2 className="title" data-aos="fade-right" data-aos-delay="300">
            <span className="typed-text">{typedText}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="bio" data-aos="fade-up" data-aos-delay="400">
            {t('hero', 'bio')}
          </p>
          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="500">
            <a href="/CV.pdf" download="CV_Joan_Dongmo.pdf" className="btn btn-primary">
              {t('hero', 'downloadCV')} <Download size={18} />
            </a>
            <a href="mailto:joanfreeddonfmomeufo@gmail.com" className="btn btn-ghost">
              {t('hero', 'contactMe')} <ArrowRight size={18} />
            </a>
          </div>

          <div className="social-links" data-aos="fade-up" data-aos-delay="600">
            <span className="follow-text">{t('hero', 'followMe')}</span>
            <div className="follow-line" />
            <div className="social-icons">
              <a href="https://www.instagram.com/joan_marta21?igsh=MWM5cGk1bjhnaDR3bw==" target="_blank" rel="noopener noreferrer" className="social-icon instagram" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="https://github.com/CODEUR237-JOAN" target="_blank" rel="noopener noreferrer" className="social-icon github" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
              <a href="#" className="social-icon youtube" aria-label="YouTube">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-visual" data-aos="fade-left" data-aos-delay="300">
          <div className="avatar-container">
            <div className="neon-ring" />
            <div className="neon-ring neon-ring--2" />
            <img
              src="/profile.jpg"
              alt="Joan Dongmo — Full-Stack Developer"
              className="avatar"
            />

            {/* Floating tech badges */}
            <div className="floating-icon icon-1">
              <Code size={22} />
            </div>
            <div className="floating-icon icon-2">
              <span className="code-brackets">{'{ }'}</span>
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
