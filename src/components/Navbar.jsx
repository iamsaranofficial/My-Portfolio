const Navbar = ({ isMenuOpen, toggleMenu, closeMenu, downloadCV }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-name">Saran</span>
        <span className="logo-initial">N</span>
      </div>
      <div className="navbar-menu">
        <a href="#home" className="navbar-link">
          Home
        </a>
        <a href="#about" className="navbar-link">
          About Me
        </a>
        <a href="#projects" className="navbar-link">
          Projects
        </a>
        <a href="#contact" className="navbar-link">
          Contact
        </a>
        <button onClick={downloadCV} className="btn-primary">
          Download CV
        </button>
      </div>

      <div className="navbar-mobile-toggle">
        <button
          onClick={toggleMenu}
          className="menu-toggle-btn"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="navbar-mobile-menu">
          <div className="navbar-mobile-menu-inner">
            <a href="#home" onClick={closeMenu} className="navbar-mobile-link">
              Home
            </a>
            <a href="#about" onClick={closeMenu} className="navbar-mobile-link">
              About Me
            </a>
            <a href="#projects" onClick={closeMenu} className="navbar-mobile-link">
              Projects
            </a>
            <a href="#contact" onClick={closeMenu} className="navbar-mobile-link">
              Contact
            </a>
            <button
              onClick={() => {
                closeMenu();
                downloadCV();
              }}
              className="navbar-mobile-btn"
            >
              Download CV
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
