import { useRef } from "react";
import { projects } from "../data/projects";
import useInView from "../hooks/useInView";
import "./Projects.css";

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [inViewRef, isVisible] = useInView();

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty("--mouse-x", `${x}%`);
    cardRef.current.style.setProperty("--mouse-y", `${y}%`);
  };

  // Merge refs
  const setRefs = (el) => {
    cardRef.current = el;
    inViewRef.current = el;
  };

  return (
    <article
      ref={setRefs}
      className={`project-card ${isVisible ? "revealed" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      onMouseMove={handleMouseMove}
    >
      <div className="project-card__glow" />

      <div className="project-card__header">
        <div className="project-card__meta">
          <span className="project-card__category">{project.category}</span>
          <span className="project-card__number">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="project-card__links">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__icon-link"
            aria-label="View source on GitHub"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__icon-link project-card__icon-link--live"
              aria-label="View live demo"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
        </div>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__subtitle">{project.subtitle}</p>
        <p className="project-card__description">{project.description}</p>
      </div>

      <div className="project-card__footer">
        <div className="project-card__tech">
          {project.tech.map((t) => (
            <span key={t} className="project-card__tech-tag">
              {t}
            </span>
          ))}
        </div>

        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__cta"
          >
            <span>View Live</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        ) : (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__cta project-card__cta--secondary"
          >
            <span>View Code</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        )}
      </div>

      <div
        className="project-card__accent-line"
        style={{ background: project.accent }}
      />
    </article>
  );
}

export default function Projects() {
  const [headerRef, headerVisible] = useInView();

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div ref={headerRef} className={`projects__header ${headerVisible ? "revealed" : ""}`}>
          <span className="section-label">Projects</span>
          <h2 className="section-title">Selected work.</h2>
          <p className="section-subtitle">
            A curated collection of projects that showcase my expertise in
            AI/ML, real-time systems, and full-stack engineering.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
