import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand">iBlog</span>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Quotes</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/add-quote" className="nav-link">Submit new quote</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;