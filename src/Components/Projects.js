import React from 'react';
import Project from './Project';
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

