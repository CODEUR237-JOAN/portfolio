import React from 'react';
import './Services.css';
import { Code2, Smartphone, Palette, Cloud } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 1,
      title: t('services', 'webDevTitle'),
      description: t('services', 'webDevDesc'),
      icon: <Code2 size={28} />,
      color: '#06b6d4',
      delay: "100"
    },
    {
      id: 2,
      title: t('services', 'mobileDevTitle'),
      description: t('services', 'mobileDevDesc'),
      icon: <Smartphone size={28} />,
      color: '#7c3aed',
      delay: "200"
    },
    {
      id: 3,
      title: t('services', 'uiUxTitle'),
      description: t('services', 'uiUxDesc'),
      icon: <Palette size={28} />,
      color: '#ec4899',
      delay: "300"
    },
    {
      id: 4,
      title: t('services', 'cloudTitle'),
      description: t('services', 'cloudDesc'),
      icon: <Cloud size={28} />,
      color: '#10b981',
      delay: "400"
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="services-header" data-aos="fade-up">
          <h2 className="section-title">{t('services', 'title')}</h2>
          <p className="section-subtitle">{t('services', 'subtitle')}</p>
        </div>

        <div className="services-grid">
          {services.map(service => (
            <div
              className="service-card card"
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div
                className="service-icon"
                style={{
                  background: `${service.color}15`,
                  color: service.color,
                  boxShadow: `0 0 20px ${service.color}10`
                }}
              >
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <div className="service-line" style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
