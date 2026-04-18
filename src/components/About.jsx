import { skills } from "../data/projects";
import useInView from "../hooks/useInView";
import "./About.css";

export default function About() {
  const [headerRef, headerVisible] = useInView();
  const [bioRef, bioVisible] = useInView();
  const [skillsRef, skillsVisible] = useInView();
  const [specsRef, specsVisible] = useInView();

  const skillCategories = [
    { label: "Languages", items: skills.languages, icon: "⟨/⟩" },
    { label: "Frameworks & Tools", items: skills.frameworks, icon: "◈" },
    { label: "Data Science & ML", items: skills.data_science, icon: "◉" },
    { label: "Dev Concepts", items: skills.concepts, icon: "⚙" },
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div ref={headerRef} className={`about__header ${headerVisible ? "revealed" : ""}`}>
          <span className="section-label">About</span>
          <h2 className="section-title">Engineering at the intersection of code & intelligence.</h2>
        </div>

        <div className="about__grid">
          <div ref={bioRef} className={`about__bio ${bioVisible ? "revealed" : ""}`}>
            <div className="about__bio-card">
              <div className="about__bio-content">
                <p>
                  I am a recent graduate Software Engineer with hands-on experience in
                  software development, specializing in <em>NLP</em> and <em>AI/ML</em>.
                  I design and build intuitive user interfaces, focusing on enhancing
                  automation processes.
                </p>
                <p>
                  At <strong>Saregama India Ltd.</strong>, I worked in the IT Department
                  and contributed to HR recruitment initiatives — building LLM-based
                  resume screening tools that enhanced candidate shortlisting speed by 40%.
                </p>
                <p>
                  My technical toolkit spans Python, JavaScript, Flask, HuggingFace Transformers,
                  Google Gemini, and more. I specialize in building NLP pipelines, ML models,
                  and data-driven applications that solve real problems.
                </p>
              </div>

              <div className="about__stats">
                <div className="about__stat">
                  <span className="about__stat-number">6+</span>
                  <span className="about__stat-label">Projects Shipped</span>
                </div>
                <div className="about__stat">
                  <span className="about__stat-number">61</span>
                  <span className="about__stat-label">Repositories</span>
                </div>
                <div className="about__stat">
                  <span className="about__stat-number">530+</span>
                  <span className="about__stat-label">Contributions</span>
                </div>
              </div>
            </div>
          </div>

          <div ref={skillsRef} className={`about__skills ${skillsVisible ? "revealed" : ""}`}>
            {skillCategories.map((cat) => (
              <div key={cat.label} className="about__skill-group">
                <h4 className="about__skill-heading">
                  <span className="about__skill-icon">{cat.icon}</span>
                  {cat.label}
                </h4>
                <div className="about__skill-tags">
                  {cat.items.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={specsRef} className={`about__specializations ${specsVisible ? "revealed" : ""}`}>
          <h4 className="about__spec-title">Core Specializations</h4>
          <div className="about__spec-list">
            {skills.specializations.map((spec, i) => (
              <div key={spec} className="about__spec-item" style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="about__spec-number">{String(i + 1).padStart(2, "0")}</span>
                <span className="about__spec-text">{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
