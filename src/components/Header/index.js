import Navigation from "../Navigation";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <div className="">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <Navigation />
    </div>
  );
}

export default Header;
