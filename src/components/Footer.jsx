import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__left">
            <div className="footer__brand">
              <span className="footer__logo-symbol">A</span>
              <span className="footer__brand-text">Aakash Nath</span>
            </div>
            <p className="footer__tagline">
              Engineering the impossible, one commit at a time.
            </p>
          </div>

          <div className="footer__right">
            <div className="footer__nav">
              <a href="#home" className="footer__link">Home</a>
              <a href="#about" className="footer__link">About</a>
              <a href="#projects" className="footer__link">Projects</a>
              <a href="#experience" className="footer__link">Experience</a>
              <a href="#contact" className="footer__link">Contact</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Aakash Nath. Crafted with precision.
          </p>
          <p className="footer__built-with">
            Built with React + Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
