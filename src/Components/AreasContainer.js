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
   <div className="area-cards-container">
     {allAreas}
   </div>
  )
}

export default AreasContainer; 

AreasContainer.propTypes = {
  areas: PropTypes.arrayOf(PropTypes.string.isRequired)
}