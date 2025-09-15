import React, { useState } from "react";
import logo from "../../public/assets/images/logo.svg";
import { NavLink } from "react-router-dom";
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar container">
      <img src={logo} alt="logo" />
      <div className={`pages ${open ? "open" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={() => setOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={() => setOpen(false)}
        >
          About
        </NavLink>
        <NavLink
          to="/recipes"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={() => setOpen(false)}
        >
          Recipes
        </NavLink>
      </div>

      
      <button className="btn">Browse recipes</button>

     
      <button className="menu-btn" onClick={() => setOpen(!open)}>
        ☰
      </button>
    </div>
  );
}

export default Navbar;
