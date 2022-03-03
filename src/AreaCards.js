import React from "react";
import './AreaCards.css'
import { NavLink } from "react-router-dom";

const AreaCards = ({homeArea}) => {
  return (
    <NavLink className="area-card" to="/" >
      <div>
      <h1>{homeArea}</h1>
      </div>
    </NavLink>
  )
}


export default AreaCards;