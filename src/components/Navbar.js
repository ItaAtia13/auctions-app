import React from "react";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav>
      <NavLink to="/sign-up ">Sign-Up Now </NavLink>
      <NavLink to="/login">Log-In </NavLink>
      <NavLink to="/item-detail">Item-Details </NavLink>
    </nav>
  );
};
