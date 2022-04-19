import Navigation from "../Navigation";

function Header(props) {
  const { currentSection, setCurrentSection } = props;

  return (
    <header>
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
  );
}

export default Header;
