import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AreaCards from './AreaCards';
import Projects from './ProjectsContainer';
import '../styling/AreasContainer.css';

const AreasContainer = ({homeRepairs, areas}) => {
  let [area, setArea] = useState('')

  const returnProjects = (projects, area) => {
    if (projects.length > 0) {
      var filteredProjects = projects.filter(project =>  {
       if(area === project.areaOfHome.toLowerCase()) {
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

  let allAreas = areas.map(area => {
    return (
      <AreaCards 
        key={area}
        homeArea={area}
        setArea={setArea}
        className='shrink'
        />
    )
  })
  return (
    <section className="content">
      <h1>Pick an area of your home where you have a DIY project, or where something needs fixing.</h1>
      <div className="area-cards-container">
        {allAreas}
      </div>
      {area && returnProjects(homeRepairs, area)}
    </section>
  )
}

export default AreasContainer; 

AreasContainer.propTypes = {
  areas: PropTypes.arrayOf(PropTypes.string.isRequired)
}