import React from 'react';
import Project from './Project';
import '../Projects.css'

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
    <div className='projects-container'>
      {allProjects}
    </div>
  )
}

export default Projects;

//I am going add a NavLink to the projects card
//The NavLink is going to go to a new path that is going to render the video component
