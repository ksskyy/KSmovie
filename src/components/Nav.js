import { NavLink } from "react-router-dom";

const Nav = ({ onClick }) => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <NavLink to="/about" onClick={onClick}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/favourite" onClick={onClick}>
            Favourite
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
