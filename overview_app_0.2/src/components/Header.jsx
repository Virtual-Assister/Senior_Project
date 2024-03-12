import { BsFillGrid3X3GapFill } from "react-icons/bs";

const Header = () => {
  return (
    <div>
      <header className="title-header">
        <button className="menu-button">
          <BsFillGrid3X3GapFill />
        </button>{" "}
        <h1>Degree Overview generation project</h1>
      </header>
    </div>
  );
};
export default Header;
