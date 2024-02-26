import React, { useState } from 'react';
import '../styling/AreaCards.css';
import PropTypes from 'prop-types';
import bedroom from '../images/bedroom.jpeg';
import bathroom from '../images/bathroom.jpeg';
import kitchen from '../images/kerstin_kitchen_01.jpeg';
import miscellaneous from '../images/miscellaneous.jpeg';

const AreaCards = ({homeArea, setArea, className}) => {

  let images = [bedroom, bathroom, kitchen, miscellaneous]
  let areaPics = images.map(image => {
    if(image.includes(homeArea)) {
      return (<img key={image} className="area-photo" src={`${image}`} alt={homeArea} height='278'/>)
    } 
  })

  const showProjects = (area) => {
    setArea(area)
  }

  return (
    <section onClick={() => showProjects(homeArea)} className={`area-card`}>
      <div className='area-card-square'>
        <h1 className='home-area'>{homeArea.toUpperCase()}</h1>
        {areaPics}
      </div>
    </section>
  )
}

//Let's use, instead of a boolean, let's use the actual home area. 


export default AreaCards;

AreaCards.propTypes = {
  homeArea: PropTypes.string.isRequired
}