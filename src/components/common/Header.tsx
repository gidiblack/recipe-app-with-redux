import React from "react";
import { NavLink } from "react-router-dom";

function Header(): JSX.Element {
  const activeStyle: { color: string } = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/recipes" activeStyle={activeStyle}>
        Recipes
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </nav>
  );
}

export default Header;
