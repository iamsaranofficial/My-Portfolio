import { Icon } from "@iconify/react";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid">
        <div className="hero-content">
          <p className="hero-greeting">Hi I am</p>
          <p className="hero-name">Saran</p>
          <h1 className="hero-title">
            FRONTEND
            <br />
            DEVELOPER
          </h1>
          <p className="hero-description">
           I’m a self-driven Python Backend & React JS Developer passionate about turning ideas into interactive web applications. I enjoy building full-stack projects using Flask, SQLite3, and modern React components. I’m constantly learning and exploring new tools to improve performance backend logic.
          </p>
          <button className="hero-cta">Hire Me</button>
        </div>

        <div className="hero-image-container">
          <div className="hero-avatar">
            <img
              src="/images/saran.jpg"
              alt="saran"
            />
          </div>

          <div className="hero-social">
            <a href="#" className="social-icon">
              <Icon icon="mdi:facebook" />
            </a>
            <a href="https://github.com/iamsaranofficial" className="social-icon">
              <Icon icon="mdi:github" />
            </a>
            <a href="#" className="social-icon">
              <Icon icon="mdi:instagram" />
            </a>
            <a href=""className="social-icon">
              <Icon icon="mdi:linkedin" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;