import React from 'react';
import Project from './Project';
import PropTypes from 'prop-types';
import '../Projects.css';

const Projects = ({category}) => {
  let allProjects = category.map(category => {
    return (
      <Project 
        key={category.name}
        id={category.id}
        name={category.project}
      />
    )
  })
  return (
    <div className="projects-container">
      {allProjects}
    </div>
  )
}

export default Projects;

Projects.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    areaOfHome: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired,
    toolsNeeded: PropTypes.arrayOf(PropTypes.string.isRequired),
    videos: PropTypes.string.isRequired
  })
}

