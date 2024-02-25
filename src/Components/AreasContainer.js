import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AreaCards from './AreaCards';
import Projects from './ProjectsContainer';
import '../styling/Areas.css';

const AreasContainer = ({homeRepairs, areas}) => {

  let [isClicked, setIsClicked] = useState(false)
  let [area, setArea] = useState('')

  const returnProjects = (projects, category) => {
    if (projects.length > 0) {
      var filteredProjects = projects.filter(project => {
      if (category === project.areaOfHome) {
        return project
      }})
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

  const showProjects = (area) => {
    setIsClicked(true)
    setArea(area)
  }

  let allAreas = areas.map(area => {
    return (
      <AreaCards 
        key={area}
        homeArea={area}
        showProjects={showProjects}
        />
    )
  })
  return (
    <section className="content">
      <h1>Pick an area of your home where you have a DIY project, or where something needs fixing.</h1>
      <div className="area-cards-container">
      {allAreas}
      {isClicked && returnProjects(homeRepairs, area)}
    </div>
    </section>
  )
}

export default AreasContainer; 

AreasContainer.propTypes = {
  areas: PropTypes.arrayOf(PropTypes.string.isRequired)
}