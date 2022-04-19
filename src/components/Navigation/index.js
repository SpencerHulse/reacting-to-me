function Navigation() {
  function toggleNav() {
    document.body.classList.toggle("nav-open");
  }

  function closeNav() {
    document.body.classList.toggle("nav-open");
  }

  return (
    <>
      <div className="navbar-container">
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">About Me</li>
            <li className="navbar-item">My Work</li>
            <li className="navbar-item">Contact Info</li>
            <li className="navbar-item">Resume</li>
          </ul>
        </nav>
      </div>
      <button
        className="nav-toggle"
        aria-label="toggle navigation"
        onClick={toggleNav}
      >
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/#about" className="nav-link" onClick={closeNav}>
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a href="/#work" className="nav-link" onClick={closeNav}>
              My Work
            </a>
          </li>
          <li className="nav-item">
            <a href="/#contact" className="nav-link" onClick={closeNav}>
              Contact Info
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/files/Spencer Hulse's Resume.pdf"
              className="nav-link"
              onClick={closeNav}
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
