import resume from "../../assets/files/Spencer Hulse's Resume.pdf";

function Resume() {
  return (
    <div className="resume-container">
      <p className="resume-download-paragraph">
        Click here to download a copy of my{" "}
        <a
          href={resume}
          className="resume-link"
          target="_blank"
          rel="noreferrer"
        >
          resume
        </a>
        .
      </p>
      <div className="skills-container">
        <div className="skills-list-container">
          <h3>Front-end Proficiencies</h3>
          <ul>
            <li className="skills-li">HTML</li>
            <li className="skills-li">CSS</li>
            <li className="skills-li">JavaScript</li>
            <li className="skills-li">jQuery</li>
            <li className="skills-li">Responsive Design</li>
            <li className="skills-li">Mobile-first Design</li>
            <li className="skills-li">React</li>
            <li className="skills-li">Bootstrap</li>
          </ul>
        </div>
        <div className="skills-list-container">
          <h3>Back-end Proficiencies</h3>
          <ul>
            <li className="skills-li">APIs</li>
            <li className="skills-li">REST</li>
            <li className="skills-li">Node</li>
            <li className="skills-li">Express</li>
            <li className="skills-li">MySQL - Sequelize</li>
            <li className="skills-li">MongoDB - Mongoose</li>
            <li className="skills-li">IndexedDB</li>
            <li className="skills-li">PWAs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
