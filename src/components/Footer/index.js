function Footer() {
  return (
    <footer className="footer" id="contact">
      <ul className="social-list">
        <li className="social-list-item">
          <a
            className="social-list-link"
            href="mailto:hulse.spencer@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-regular fa-envelope"></i>
          </a>
        </li>
        <li className="social-list-item">
          <a
            className="social-list-link"
            href="https://github.com/SpencerHulse"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li className="social-list-item">
          <a
            className="social-list-link"
            href="https://www.linkedin.com/in/spencer-hulse-987521223/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
