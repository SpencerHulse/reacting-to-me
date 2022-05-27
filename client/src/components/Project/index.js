import AboutMe from "../AboutMe";
import MyWork from "../MyWork";
import Contact from "../Contact";
import Resume from "../Resume";

function Project(props) {
  const { currentSection } = props;

  return (
    <>
      {currentSection === "About Me" && <AboutMe />}
      {currentSection === "My Work" && <MyWork />}
      {currentSection === "Contact Me" && <Contact />}
      {currentSection === "Resume" && <Resume />}
    </>
  );
}

export default Project;
