import React from 'react';
import PropTypes from 'prop-types';
import AreaCards from './AreaCards';
import '../styling/Areas.css';

const AreasContainer = ({areas}) => {
  let allAreas = areas.map(area => {
    return (
      <AreaCards 
        key={area}
        homeArea={area}/>
    )
  })
  return (
    <section className="content">
      <h1>Pick an area of your home where you have a DIY project, or where something needs fixing.</h1>
      <div className="area-cards-container">
      {allAreas}
    </div>
    </section>
  )
}

export default AreasContainer; 

AreasContainer.propTypes = {
  areas: PropTypes.arrayOf(PropTypes.string.isRequired)
}