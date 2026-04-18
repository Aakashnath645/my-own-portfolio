import { useEffect, useRef, useState } from "react";
import { quotes } from "../data/projects";
import "./Hero.css";

export default function Hero() {
  const heroRef = useRef(null);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  /* Typing effect for quotes */
  useEffect(() => {
    const quote = quotes[quoteIndex];
    if (isTyping) {
      if (displayedText.length < quote.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(quote.slice(0, displayedText.length + 1));
        }, 35);
        return () => clearTimeout(timeout);
      } else {
        const pause = setTimeout(() => setIsTyping(false), 3000);
        return () => clearTimeout(pause);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 20);
        return () => clearTimeout(timeout);
      } else {
        setQuoteIndex((prev) => (prev + 1) % quotes.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, isTyping, quoteIndex]);

  /* Parallax grain */
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;
      heroRef.current.style.setProperty("--mx", `${x}px`);
      heroRef.current.style.setProperty("--my", `${y}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero__grain" />
      <div className="hero__gradient-orb hero__gradient-orb--1" />
      <div className="hero__gradient-orb hero__gradient-orb--2" />
      <div className="hero__gradient-orb hero__gradient-orb--3" />

      <div className="container hero__container">
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span className="hero__status-dot" />
            <span>Software Engineer · AI/ML</span>
          </div>

          <h1 className="hero__title">
            <span className="hero__title-line">Building the</span>
            <span className="hero__title-line hero__title-line--accent">
              future
              <svg className="hero__title-underline" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path
                  d="M2 8 C 40 2, 80 2, 100 6 S 160 10, 198 4"
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="hero__title-line">one commit at a time.</span>
          </h1>

          <p className="hero__subtitle">
            I'm <strong>Aakash Nath</strong> — a software engineer passionate about
            AI/ML, real-time systems, and crafting experiences that feel
            impossibly good. I turn complex problems into elegant, scalable solutions.
          </p>

          <div className="hero__quote-container">
            <div className="hero__quote">
              <span className="hero__quote-mark">"</span>
              <span className="hero__quote-text">{displayedText}</span>
              <span className="hero__cursor">|</span>
              <span className="hero__quote-mark">"</span>
            </div>
          </div>

          <div className="hero__actions">
            <button className="btn btn--primary" onClick={scrollToProjects}>
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </button>
            <a
              href="https://github.com/Aakashnath645"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aakash-nath-3717b821b/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero__scroll-indicator">
          <div className="hero__scroll-line" />
          <span className="hero__scroll-text">Scroll</span>
        </div>
      </div>
    </section>
  );
}
