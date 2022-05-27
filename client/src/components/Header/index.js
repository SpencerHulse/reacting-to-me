import Navigation from "../Navigation";

function Header(props) {
  const { currentSection, setCurrentSection } = props;

  return (
    /* {currentSection !== "About Me" && "header-border"} */
    <>
      {currentSection !== "About Me" ? (
        <header className="header-border">
          {currentSection !== "About Me" && (
            <div className="header-name-container">
              <h2 className="header-name">Spencer</h2>
            </div>
          )}
          <Navigation
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
          />
        </header>
      ) : (
        <header>
          <Navigation
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
          />
        </header>
      )}
    </>
  );
}

export default Header;
