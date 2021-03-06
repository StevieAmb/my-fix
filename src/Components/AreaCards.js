import React from 'react';
import '../AreaCards.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import bedroom from '../bedroom.jpeg';
import bathroom from '../bathroom.jpeg';
import kitchen from '../kerstin_kitchen_01.jpeg';
import miscellaneous from '../miscellaneous.jpeg';

const AreaCards = ({homeArea}) => {
  let images = [bedroom, bathroom, kitchen, miscellaneous]
  let areaPics = images.map(image => {
    if(image.includes(homeArea)) {
      return <img key={image} className="area-photo" src={`${image}`} alt={homeArea}/>
    } 
  })
  return (
    <NavLink className="area-card" to={`/${homeArea}/home-improvement-repairs`} >
      <div>
        {areaPics}
        <h1>{homeArea}</h1>
      </div>
    </NavLink>
  )
}


export default AreaCards;

AreaCards.propTypes = {
  homeArea: PropTypes.string.isRequired
}