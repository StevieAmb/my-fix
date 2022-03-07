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
  category: PropTypes.arrayOf(PropTypes.object.isRequired)
}

