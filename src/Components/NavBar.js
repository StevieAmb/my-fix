import React from "react";
import '../NavBar.css'
import { NavLink } from 'react-router-dom';

const NavBar = () => {

   return (
      <div className="nav-bar">
        <div className="page-name">
          <NavLink className="page-title" to="/">
            <h1>MY FIXINGS</h1>
            <p>For those who need to justify the amount of tools they own...</p>
          </NavLink>
       </div>
        <div className="user-search">
          <NavLink to="/tryThis">
          <button>My Projects</button>
          </NavLink>
        </div>
      </div>
      
    )
}


export default NavBar;