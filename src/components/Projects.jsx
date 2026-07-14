import React, { useState } from 'react';
import './Projects.css';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('All');

  const filters = [
    { key: 'All', label: t('projects', 'filterAll') },
    { key: 'Web Apps', label: t('projects', 'filterWeb') },
    { key: 'Mobile Apps', label: t('projects', 'filterMobile') },
    { key: 'Design Concepts', label: t('projects', 'filterDesign') }
  ];

  const projects = [
    {
      id: 1,
      title: t('projects', 'p1Title'),
      category: "Mobile Apps",
      categoryLabel: t('projects', 'filterMobile'),
      image: "/projects/agri_app.png",
      description: t('projects', 'p1Desc'),
      tags: ["Flutter", "Firebase", "AI"],
      link: "#"
    },
    {
      id: 2,
      title: t('projects', 'p2Title'),
      category: "Web Apps",
      categoryLabel: t('projects', 'filterWeb'),
      image: "/projects/ai_chat.png",
      description: t('projects', 'p2Desc'),
      tags: ["React", "Node.js", "WebSocket"],
      link: "#"
    },
    {
      id: 3,
      title: t('projects', 'p3Title'),
      category: "Web Apps",
      categoryLabel: t('projects', 'filterWeb'),
      image: "/projects/fintech_dashboard.png",
      description: t('projects', 'p3Desc'),
      tags: ["Laravel", "PostgreSQL", "Chart.js"],
      link: "#"
    },
    {
      id: 4,
      title: t('projects', 'p4Title'),
      category: "Design Concepts",
      categoryLabel: t('projects', 'filterDesign'),
      image: "/projects/ecobrand_identity.png",
      description: t('projects', 'p4Desc'),
      tags: ["Figma", "Branding", "UI/UX"],
      link: "#"
    },
    {
      id: 5,
      title: t('projects', 'p5Title'),
      category: "Web Apps",
      categoryLabel: t('projects', 'filterWeb'),
      image: "/projects/lectura_app.png",
      description: t('projects', 'p5Desc'),
      tags: ["Laravel", "Blade", "PostgreSQL"],
      link: "https://projet-lectura-joan-production.up.railway.app"
    }
  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="projects-header" data-aos="fade-up">
          <h2 className="section-title">{t('projects', 'title')}</h2>
          <p className="section-subtitle">{t('projects', 'subtitle')}</p>
        </div>

        <div className="filter-tabs" data-aos="fade-up" data-aos-delay="100">
          {filters.map(f => (
            <button
              key={f.key}
              className={`filter-btn ${filter === f.key ? 'active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              className="project-card card"
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100 + 100}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
                <div className="project-overlay">
                  <a href={project.link} target={project.link.startsWith('#') ? "_self" : "_blank"} rel="noopener noreferrer" className="project-link">
                    <ArrowUpRight size={22} />
                  </a>
                </div>
              </div>
              <div className="project-info">
                <span className="project-category">{project.categoryLabel}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <a href={project.link} target={project.link.startsWith('#') ? "_self" : "_blank"} rel="noopener noreferrer" className="view-project">{t('projects', 'viewProject')} <ArrowUpRight size={14} /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
