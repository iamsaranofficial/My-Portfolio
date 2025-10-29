import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="logo-name">Saran</span>
          <span className="logo-initial">N</span>
        </div>

        <div className="footer-links">
          <a href="#home" className="footer-link">
            Home
          </a>
          <a href="#about" className="footer-link">
            About Me
          </a>
          <a href="#projects" className="footer-link">
            Projects
          </a>
          <a href="#contact" className="footer-link">
            Contact
          </a>
        </div>

        <div className="footer-social">
          <a href="#" className="footer-social-icon">
            <Icon icon="mdi:facebook" />
          </a>
          <a href="https://github.com/iamsaranofficial" className="footer-social-icon">
            <Icon icon="mdi:github" />
          </a>
          <a href="#" className="footer-social-icon">
            <Icon icon="mdi:instagram" />
          </a>
          <a href="https://www.linkedin.com/in/saran-n-941667366/" className="footer-social-icon">
            <Icon icon="mdi:linkedin" />
          </a>
        </div>

        <p className="footer-copyright">
          © 2025
          <span className="highlight">Saran</span> All
          Rights Reserved, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
