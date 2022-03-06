import React from "react";
import '../AreaCards.css'
import { NavLink } from "react-router-dom";
import bedroom from '../bedroom.jpeg';
import bathroom from '../bathroom.jpeg';
import kitchen from '../Kitchen.jpeg';

const AreaCards = ({homeArea}) => {
  let images = [bedroom, bathroom, kitchen]
  let areaPics = images.map(image => {
    if(image.includes(homeArea)) {
      return <img key={image} className="area-photo" src={`${image}`}/>
    } 
    if(!image.includes(homeArea) && image.includes('9j')) {
      return <img key={image} className="area-photo" src={`${image}`}/>
    }
  })
  return (
    <NavLink className="area-card" to={`/${homeArea}`} >
      <div>
        {areaPics}
      <h1>{homeArea}</h1>
      </div>
    </NavLink>
  )
}


export default AreaCards;