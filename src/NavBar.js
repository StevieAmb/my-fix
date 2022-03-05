import React from "react";
import './NavBar.css'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="page-name">
        <NavLink className="page-title" to="/">
          <h1>MY FIX</h1>
          <p>For those who need to justify the amount of tools they own...</p>
        </NavLink>
     </div>
      <div className="user-search">
    <input
        type="text"
        placeholder="Tools I have..."
        value=""
        />
        <button>FIX IT!</button>
      </div>
    </div>
    
  )
}


export default NavBar;