import React from 'react';
import '../styling/AreaCards.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import bedroom from '../images/bedroom.jpeg';
import bathroom from '../images/bathroom.jpeg';
import kitchen from '../images/kerstin_kitchen_01.jpeg';
import miscellaneous from '../images/miscellaneous.jpeg';

const AreaCards = ({homeArea}) => {
  let images = [bedroom, bathroom, kitchen, miscellaneous]
  let areaPics = images.map(image => {
    if(image.includes(homeArea)) {
      return (<img key={image} className="area-photo" src={`${image}`} alt={homeArea} width='450' height='380'/>)
    } 
  })

  return (
    <NavLink className="area-card" to={`/${homeArea}/home-improvement-repairs`} >
      <div className='area-card-square'>
        <h1 className='home-area'>{homeArea.toUpperCase()}</h1>
        {areaPics}
      </div>
    </NavLink>
  )
}


export default AreaCards;

AreaCards.propTypes = {
  homeArea: PropTypes.string.isRequired
}