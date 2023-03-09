import React from "react";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav>
      <NavLink to="/Sign-Up Now">Sign-Up Now </NavLink>
      <NavLink to="/Login">Log-In </NavLink>
      <NavLink to="/Item-Detail">Item-Details </NavLink>
    </nav>
  );
};
