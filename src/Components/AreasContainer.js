import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AreaCards from './AreaCards';
import '../styling/Areas.css';

const AreasContainer = ({areas}) => {

  let [homeRepairs, setHomeRepairs] = useState([])
  let [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    getHomeRepairs()
    .then(data => setHomeRepairs(data))
    .catch(error => setError(error))
  },[])

  const returnProjects = (projects, category) => {
    let lowerCaseCategory;
    let lowerCaseArea;
    if (projects.length > 0) {
      var filteredProjects = projects.filter(project => {
        lowerCaseCategory = category.toLowerCase()
        lowerCaseArea = project.areaOfHome.toLowerCase()
      if (lowerCaseCategory === lowerCaseArea) {
        return project
      }
      })
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
        onClick={() => setIsClicked(true)}
        />
    )
  })
  return (
    <section className="content">
      <h1>Pick an area of your home where you have a DIY project, or where something needs fixing.</h1>
      <div className="area-cards-container">
      {allAreas}
      {isClicked && returnProjects()}
    </div>
    </section>
  )
}

export default AreasContainer; 

AreasContainer.propTypes = {
  areas: PropTypes.arrayOf(PropTypes.string.isRequired)
}