import React from 'react';
import '../styling/NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="page-name">
        <NavLink className="page-title" to="/">
          <h1>MY FIXINGS</h1>
          <p>Save money. Justify the amount of tools you own.</p>
        </NavLink>
      </div>
      <div className="user-projects">
        <NavLink className="my-projects" to="/tryThis">
          <p>My Saved Projects</p>
        </NavLink>
      </div>
    </div>   
  )
}


export default NavBar;