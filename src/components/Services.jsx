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
      icon: <Code2 size={32} color="#00f0ff" />,
      glowColor: "rgba(0, 240, 255, 0.2)",
      delay: "100"
    },
    {
      id: 2,
      title: t('services', 'mobileDevTitle'),
      description: t('services', 'mobileDevDesc'),
      icon: <Smartphone size={32} color="#9d4edd" />,
      glowColor: "rgba(157, 78, 221, 0.2)",
      delay: "200"
    },
    {
      id: 3,
      title: t('services', 'uiUxTitle'),
      description: t('services', 'uiUxDesc'),
      icon: <Palette size={32} color="#ff00ff" />,
      glowColor: "rgba(255, 0, 255, 0.2)",
      delay: "300"
    },
    {
      id: 4,
      title: t('services', 'cloudTitle'),
      description: t('services', 'cloudDesc'),
      icon: <Cloud size={32} color="#00ffcc" />,
      glowColor: "rgba(0, 255, 204, 0.2)",
      delay: "400"
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="services-header">
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
                style={{ backgroundColor: service.glowColor }}
              >
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
