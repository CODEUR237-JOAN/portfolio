import React, { useRef, useState, useEffect } from 'react';
import './AboutSkills.css';
import { User, Mail, MapPin, ArrowRight, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { FaPython, FaReact, FaLaravel, FaDocker } from 'react-icons/fa';
import { SiFlutter, SiSymfony, SiPostgresql, SiMysql } from 'react-icons/si';

const AboutSkills = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section">
      <div className="container about-skills-container">
        {/* About Me Card */}
        <div className="card about-card" data-aos="fade-right">
          <div className="about-content">
            <div className="about-image-container">
              <div className="about-image-wrapper">
                <img
                  src="/profile.jpg"
                  alt="DONGMO MEUFO JOAN FREED"
                  className="about-image"
                />
                <div className="about-image-glow" />
              </div>
            </div>
            <div className="about-info">
              <h2 className="section-title">{t('aboutSkills', 'aboutTitle')}</h2>
              <p className="about-bio">
                {t('aboutSkills', 'aboutBio')}
              </p>

              <div className="personal-details">
                <div className="detail-item" data-aos="fade-up" data-aos-delay="100">
                  <div className="detail-icon-wrapper">
                    <User size={16} />
                  </div>
                  <div>
                    <span className="detail-label">{t('aboutSkills', 'nameLabel')}</span>
                    <span className="detail-value">Dongmo Joan</span>
                  </div>
                </div>
                <div className="detail-item" data-aos="fade-up" data-aos-delay="200">
                  <div className="detail-icon-wrapper">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="detail-label">{t('aboutSkills', 'phoneLabel')}</span>
                    <span className="detail-value">+237 657 715 898</span>
                  </div>
                </div>
                <div className="detail-item" data-aos="fade-up" data-aos-delay="300">
                  <div className="detail-icon-wrapper">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="detail-label">{t('aboutSkills', 'emailLabel')}</span>
                    <a href="mailto:joanfreeddonfmomeufo@gmail.com" className="detail-value detail-link">joanfreeddonfmomeufo@gmail.com</a>
                  </div>
                </div>
                <div className="detail-item" data-aos="fade-up" data-aos-delay="400">
                  <div className="detail-icon-wrapper">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="detail-label">{t('aboutSkills', 'locationLabel')}</span>
                    <span className="detail-value">Nkolmesseng, Cameroun</span>
                  </div>
                </div>
              </div>

              <a href="#contact" className="btn btn-ghost about-btn" data-aos="zoom-in" data-aos-delay="500">
                {t('aboutSkills', 'knowMore')} <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Skills Card */}
        <div id="skills" className="card skills-card" data-aos="fade-up">
          <h2 className="section-title skills-title-centered">{t('aboutSkills', 'skillsTitle')}</h2>
          <p className="skills-subtitle">{t('aboutSkills', 'skillsSubtitle')}</p>
          <div className="skills-grid">
            <SkillCard name="Python / Django" percentage={80} icon={<FaPython />} color="#3776AB" />
            <SkillCard name="Flutter" percentage={94} icon={<SiFlutter />} color="#02569B" />
            <SkillCard name="React" percentage={80} icon={<FaReact />} color="#61DAFB" />
            <SkillCard name="Laravel" percentage={97} icon={<FaLaravel />} color="#FF2D20" />
            <SkillCard name="Symfony" percentage={90} icon={<SiSymfony />} color="#7c3aed" />
            <SkillCard name="Docker" percentage={90} icon={<FaDocker />} color="#2496ED" />
            <SkillCard name="PostgreSQL" percentage={95} icon={<SiPostgresql />} color="#336791" />
            <SkillCard name="MySQL" percentage={96} icon={<SiMysql />} color="#4479A1" />
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ name, percentage, icon, color }) => {
  const [animated, setAnimated] = useState(false);
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          // Animate counter
          const duration = 1200;
          const startTime = performance.now();
          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * percentage));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [percentage, animated]);

  return (
    <div className="skill-card-item" ref={ref}>
      <div className="skill-icon-wrapper" style={{ color }}>
        {icon}
      </div>
      <h3 className="skill-card-name">{name}</h3>
      <div className="skill-card-bar-bg">
        <div
          className="skill-card-bar-fill"
          style={{
            width: animated ? `${percentage}%` : '0%',
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
            boxShadow: `0 0 12px ${color}40`
          }}
        />
      </div>
      <span className="skill-card-percentage" style={{ color }}>{count}%</span>
    </div>
  );
};

export default AboutSkills;
