import { BsFillGrid3X3GapFill } from "react-icons/bs";

const Header = () => {
  return (
    <div>
      <header className="title-header">
        <button className="menu-button">
          <BsFillGrid3X3GapFill />
        </button>{" "}
        <h1>Degree Overview generation project</h1>
        <ul className="header-list">
          <li><a className="dev-title" href="#developement">Developement</a></li>
          <li><a className="contact-title" href="#contact">Contact</a></li>
          <li><a className="about-title" href="#About">About</a></li>
        </ul>
      </header>
    </div>
  );
};
export default Header;
