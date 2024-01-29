import React from 'react';
import Project from './Project';
import PropTypes from 'prop-types';
import '../styling/Projects.css';

const Projects = ({filteredProjects}) => {
  let allProjects = filteredProjects.map((project, index) => {
    return (
      <Project 
        key={`${project.name} + ${project.id}`}
        id={project.id}
        name={project.project}
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
  category: PropTypes.shape([{
    id: PropTypes.number.isRequired,
    areaOfHome: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired,
    toolsNeeded: PropTypes.arrayOf(PropTypes.string.isRequired),
    videos: PropTypes.string.isRequired
  }])
}

