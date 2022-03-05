import React from "react";
import './AreaCards.css'
import { NavLink } from "react-router-dom";
import bedroom from './bedroom.jpeg';
import bathroom from './bathroom.jpeg';
import kitchen from './kitchen.jpeg';

const AreaCards = ({homeArea}) => {
  let images = [bedroom, bathroom, kitchen]
  let areaPics = images.map(image => {
    console.log("pics", images)
    if(image.includes(homeArea)) {
      return <img className="area-photo" src={`${image}`}/>
    } 
    if(!image.includes(homeArea) && image.includes('9j')) {
      return <img className="area-photo" src={`${image}`}/>
    }
  })
  console.log(homeArea)
  return (
    <NavLink className="area-card" to={`/${homeArea}`} >
      <div>
        {console.log(areaPics)}
        {areaPics}
      <h1>{homeArea}</h1>
      </div>
    </NavLink>
  )
}


export default AreaCards;