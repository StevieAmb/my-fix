import React from 'react';
import '../styling/AreaCards.css';
import PropTypes from 'prop-types';
import bedroom from '../images/bedroom.jpeg';
import bathroom from '../images/bathroom.jpeg';
import kitchen from '../images/kerstin_kitchen_01.jpeg';
import miscellaneous from '../images/miscellaneous.jpeg';

const AreaCards = ({homeArea, setIsClicked, setArea}) => {
  let images = [bedroom, bathroom, kitchen, miscellaneous]
  let areaPics = images.map(image => {
    if(image.includes(homeArea)) {
      return (<img key={image} onClick={(homeArea) => showProjects(homeArea)} className="area-photo" src={`${image}`} alt={homeArea} height='278'/>)
    } 
  })

  const showProjects = (area) => {
    setIsClicked(true)
    setArea(area)
  }

  return (
    <section className='area-card'>
      <div className='area-card-square'>
        <h1 className='home-area'>{homeArea.toUpperCase()}</h1>
        {areaPics}
      </div>
    </section>
  )
}

//So, the function needs to take in the area, as well as set the isClicked to true


export default AreaCards;

AreaCards.propTypes = {
  homeArea: PropTypes.string.isRequired
}