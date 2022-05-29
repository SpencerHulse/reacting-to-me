import resume from "../../assets/files/Spencer Hulse's Resume.pdf";
import { frontEndSkills, backEndSkills } from "./skillData";

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
            {frontEndSkills.map((skill, i) => {
              return (
                <li className="skills-li" key={`front${i}`}>
                  {skill}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="skills-list-container">
          <h3>Back-end Proficiencies</h3>
          <ul>
            {backEndSkills.map((skill, i) => {
              return (
                <li className="skills-li" key={`back${i}`}>
                  {skill}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
