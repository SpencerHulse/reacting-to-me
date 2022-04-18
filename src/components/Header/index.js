import Navigation from "../Navigation";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
