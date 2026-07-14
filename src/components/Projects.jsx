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
      image: "https://images.unsplash.com/photo-1595850720448-69cb9fb0745f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: t('projects', 'p1Desc'),
      tags: ["Flutter", "Firebase", "AI"]
    },
    {
      id: 2,
      title: t('projects', 'p2Title'),
      category: "Web Apps",
      categoryLabel: t('projects', 'filterWeb'),
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: t('projects', 'p2Desc'),
      tags: ["React", "Node.js", "WebSocket"]
    },
    {
      id: 3,
      title: t('projects', 'p3Title'),
      category: "Web Apps",
      categoryLabel: t('projects', 'filterWeb'),
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: t('projects', 'p3Desc'),
      tags: ["Laravel", "PostgreSQL", "Chart.js"]
    },
    {
      id: 4,
      title: t('projects', 'p4Title'),
      category: "Design Concepts",
      categoryLabel: t('projects', 'filterDesign'),
      image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: t('projects', 'p4Desc'),
      tags: ["Figma", "Branding", "UI/UX"]
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
                  <a href="#" className="project-link">
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
                <a href="#" className="view-project">{t('projects', 'viewProject')} <ArrowUpRight size={14} /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
