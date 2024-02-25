import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AreaCards from './AreaCards';
import Projects from './ProjectsContainer';
import '../styling/AreasContainer.css';

const AreasContainer = ({homeRepairs, areas}) => {

  let [isClicked, setIsClicked] = useState(false)
  let [area, setArea] = useState('')

  const returnProjects = (projects, category) => {
    if (projects.length > 0) {
      var filteredProjects = projects.filter(project => category === project.areaOfHome)
      return (
      <Projects
      filteredProjects={filteredProjects} />
      )
    } else {
      return (
        <div className='loading-message'>
          <h2>Building, building, building...</h2>
          <h2>Thank you for your patience.</h2>
        </div>
      )
    }
  }

  let allAreas = areas.map(area => {
    return (
      <AreaCards 
        key={area}
        homeArea={area}
        setIsClicked={setIsClicked}
        setArea={setArea}
        />
    )
  })
  return (
    <section className="content">
      <h1>Pick an area of your home where you have a DIY project, or where something needs fixing.</h1>
      <div className="area-cards-container">
        {allAreas}
      </div>
      {isClicked && returnProjects(homeRepairs, area)}
    </section>
  )
}

export default AreasContainer; 

AreasContainer.propTypes = {
  areas: PropTypes.arrayOf(PropTypes.string.isRequired)
}