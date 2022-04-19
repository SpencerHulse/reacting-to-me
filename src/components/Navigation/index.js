function Navigation(props) {
  const { currentSection, setCurrentSection } = props;

  function toggleNav() {
    document.body.classList.toggle("nav-open");
  }

  function closeNav() {
    document.body.classList.toggle("nav-open");
  }

  return (
    <>
      {/* Navbar for larger screens */}
      <div className="navbar-container">
        <nav className="navbar">
          <ul className="navbar-list">
            <li
              className={`navbar-item ${
                currentSection === "About Me" && "navActive"
              }`}
              key="About Me"
            >
              <span onClick={() => setCurrentSection("About Me")}>
                About Me
              </span>
            </li>
            <li
              className={`navbar-item ${
                currentSection === "My Work" && "navActive"
              }`}
              key="My Work"
            >
              <span onClick={() => setCurrentSection("My Work")}>My Work</span>
            </li>
            <li
              className={`navbar-item ${
                currentSection === "Contact Me" && "navActive"
              }`}
              key="Contact Me"
            >
              <span onClick={() => setCurrentSection("Contact Me")}>
                Contact Me
              </span>
            </li>
            <li
              className={`navbar-item ${
                currentSection === "Resume" && "navActive"
              }`}
              key="Resume"
            >
              <span onClick={() => setCurrentSection("Resume")}>Resume</span>
            </li>
          </ul>
        </nav>
      </div>

      {/* Hamburger for smaller screens */}
      <button
        className="nav-toggle"
        aria-label="toggle navigation"
        onClick={toggleNav}
      >
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav-list">
          <li
            className={`nav-item ${
              currentSection === "About Me" && "navActive"
            }`}
            key="About Me Hamburger"
            onClick={closeNav}
          >
            <span onClick={() => setCurrentSection("About Me")}>About Me</span>
          </li>
          <li
            className={`nav-item ${
              currentSection === "My Work" && "navActive"
            }`}
            key="My Work Hamburger"
            onClick={closeNav}
          >
            <span onClick={() => setCurrentSection("My Work")}>My Work</span>
          </li>
          <li
            className={`nav-item ${
              currentSection === "Contact Me" && "navActive"
            }`}
            key="Contact Me Hamburger"
            onClick={closeNav}
          >
            <span onClick={() => setCurrentSection("Contact Me")}>
              Contact Me
            </span>
          </li>
          <li
            className={`nav-item ${currentSection === "Resume" && "navActive"}`}
            key="Resume Hamburger"
            onClick={closeNav}
          >
            <span onClick={() => setCurrentSection("Resume")}>Resume</span>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
