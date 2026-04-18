import { experience, education, higherSecondary, resumeClassifier } from "../data/projects";
import useInView from "../hooks/useInView";
import "./Experience.css";

export default function Experience() {
  const [headerRef, headerVisible] = useInView();
  const [timelineRef, timelineVisible] = useInView();
  const [eduRef, eduVisible] = useInView();

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <div ref={headerRef} className={`experience__header ${headerVisible ? "revealed" : ""}`}>
          <span className="section-label">Experience</span>
          <h2 className="section-title">Where I've made an impact.</h2>
          <p className="section-subtitle">
            Professional experience building production systems that serve real
            users and solve real problems.
          </p>
        </div>

        {/* Work Experience — Internship + Resume Classifier fused together */}
        <div ref={timelineRef} className={`experience__timeline ${timelineVisible ? "revealed" : ""}`}>
          {experience.map((exp, i) => (
            <div key={i} className="experience__item">
              <div className="experience__timeline-marker">
                <div className="experience__dot" />
                <div className="experience__line" />
              </div>

              <div className="experience__card">
                <div className="experience__card-header">
                  <div>
                    <h3 className="experience__role">{exp.role}</h3>
                    <p className="experience__company">{exp.company}</p>
                    {exp.location && (
                      <p className="experience__location">{exp.location}</p>
                    )}
                  </div>
                  <span className="experience__period">{exp.period}</span>
                </div>

                <p className="experience__description">{exp.description}</p>

                <div className="experience__highlights">
                  {exp.highlights.map((h, j) => (
                    <div key={j} className="experience__highlight">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Resume Screening Assistant — fused into internship */}
                <div className="experience__project-inline">
                  <div className="experience__project-inline-header">
                    <h4 className="experience__project-inline-title">
                      {resumeClassifier.title}
                    </h4>
                    <div className="experience__project-inline-meta">
                      <span className="experience__project-inline-duration">
                        {resumeClassifier.duration}
                      </span>
                      <a
                        href={resumeClassifier.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="experience__project-inline-link"
                        aria-label="View on GitHub"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span>View Repo</span>
                      </a>
                    </div>
                  </div>

                  <div className="experience__project-inline-tech">
                    {resumeClassifier.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>

                  <div className="experience__project-inline-highlights">
                    {resumeClassifier.highlights.map((h, j) => (
                      <div key={j} className="experience__project-inline-item">
                        <span className="experience__project-inline-bullet">→</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div ref={eduRef} className={`experience__education ${eduVisible ? "revealed" : ""}`}>
          <div className="experience__edu-header">
            <span className="section-label">Education</span>
          </div>

          <div className="experience__edu-cards">
            {/* B.Tech */}
            <div className="experience__edu-card">
              <div className="experience__edu-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5" />
                </svg>
              </div>
              <div className="experience__edu-content">
                <h4 className="experience__edu-degree">{education.degree}</h4>
                <p className="experience__edu-school">{education.school}</p>
                <div className="experience__edu-meta">
                  <span className="experience__edu-details">CGPA: {education.cgpa}</span>
                  <span className="experience__edu-period">{education.period}</span>
                </div>
              </div>
            </div>

            {/* Higher Secondary */}
            <div className="experience__edu-card experience__edu-card--secondary">
              <div className="experience__edu-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <div className="experience__edu-content">
                <h4 className="experience__edu-degree">{higherSecondary.degree}</h4>
                <p className="experience__edu-school">{higherSecondary.school}</p>
                <div className="experience__edu-meta">
                  <span className="experience__edu-period">{higherSecondary.period}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
