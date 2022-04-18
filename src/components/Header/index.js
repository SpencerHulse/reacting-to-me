import Navigation from "../Navigation";

function Header() {
  return (
    <div className="d-flex justify-content-between my-4">
      <h2 className="fs-1 ms-4">Digital Portfolio</h2>
      <Navigation />
    </div>
  );
}

export default Header;
