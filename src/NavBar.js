import React from "react";
import './NavBar.css'
const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="page-name">
        <h1>MY FIX</h1>
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