import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/favourite">Favourite</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
