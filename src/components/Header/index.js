import Navigation from "../Navigation";
import logo from "../../assets/logo.png";

function Header(props) {
  const { currentSection, setCurrentSection } = props;

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <Navigation
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
    </header>
  );
}

export default Header;
