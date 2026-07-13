import React from 'react';
import './AboutSkills.css';
import { User, Mail, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { FaPython, FaReact, FaLaravel, FaDocker, FaPaintBrush } from 'react-icons/fa';
import { SiFlutter, SiSymfony, SiBlender, SiPostgresql, SiMysql } from 'react-icons/si';
import { DiPhotoshop, DiIllustrator } from 'react-icons/di';

const AboutSkills = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section">
      <div className="container about-skills-container">
        {/* About Me Card */}
        <div className="card about-card" data-aos="fade-right">
          <div className="about-content">
            <div className="about-image-container">
              <img 
                src="/profile.jpg" 
                alt="DONGMO MEUFO JOAN FREED" 
                className="about-image" 
              />
            </div>
            <div className="about-info">
              <h2 className="section-title">{t('aboutSkills', 'aboutTitle')}</h2>
              <p className="about-bio">
                {t('aboutSkills', 'aboutBio')}
              </p>
              
              <div className="personal-details">
                <div className="detail-item" data-aos="fade-up" data-aos-delay="100">
                  <User size={18} className="detail-icon" />
                  <div>
                    <span className="detail-label">{t('aboutSkills', 'nameLabel')}</span>
                    <span className="detail-value">Dongmo joan</span>
                  </div>
                </div>
                <div className="detail-item" data-aos="fade-up" data-aos-delay="200">
                  <Mail size={18} className="detail-icon" />
                  <div>
                    <span className="detail-label">{t('aboutSkills', 'phoneLabel')}</span>
                    <span className="detail-value">+237 657 715 898 / 654 217 409</span>
                  </div>
                </div>
                <div className="detail-item" data-aos="fade-up" data-aos-delay="300">
                  <Mail size={18} className="detail-icon" />
                  <div>
                    <span className="detail-label">{t('aboutSkills', 'emailLabel')}</span>
                    <a href="mailto:joanfreeddonfmomeufo@gmail.com" className="detail-value" style={{ textDecoration: 'none', color: 'inherit' }}>joanfreeddonfmomeufo@gmail.com</a>
                  </div>
                </div>
                <div className="detail-item" data-aos="fade-up" data-aos-delay="400">
                  <MapPin size={18} className="detail-icon" />
                  <div>
                    <span className="detail-label">{t('aboutSkills', 'locationLabel')}</span>
                    <span className="detail-value">Nkolmesseng, Cameroun</span>
                  </div>
                </div>
              </div>
              
              <button className="btn-ghost about-btn" data-aos="zoom-in" data-aos-delay="500">
                {t('aboutSkills', 'knowMore')} <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Skills Card */}
        <div id="skills" className="card skills-card">
          <h2 className="section-title">{t('aboutSkills', 'skillsTitle')}</h2>
          <p className="skills-subtitle">Technologies et outils que je maîtrise pour créer des expériences incroyables</p>
          <div className="skills-grid">
            <SkillCard name="Python / Django" percentage={80} icon={<FaPython color="#3776AB" />} />
            <SkillCard name="Flutter" percentage={94} icon={<SiFlutter color="#02569B" />} />
            <SkillCard name="React" percentage={80} icon={<FaReact color="#61DAFB" />} />
            <SkillCard name="Laravel" percentage={97} icon={<FaLaravel color="#FF2D20" />} />
            <SkillCard name="Symfony" percentage={90} icon={<SiSymfony color="#000000" style={{ filter: 'invert(1)' }} />} />
            <SkillCard name="Docker" percentage={90} icon={<FaDocker color="#2496ED" />} />
            <SkillCard name="PostgreSQL" percentage={95} icon={<SiPostgresql color="#336791" />} />
            <SkillCard name="MySQL" percentage={96} icon={<SiMysql color="#4479A1" />} />
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ name, percentage, icon }) => {
  return (
    <div className="skill-card-item">
      <div className="skill-icon-wrapper">
        {icon}
      </div>
      <h3 className="skill-card-name">{name}</h3>
      <div className="skill-card-bar-bg">
        <div 
          className="skill-card-bar-fill" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="skill-card-percentage">{percentage}%</span>
    </div>
  );
};

export default AboutSkills;
