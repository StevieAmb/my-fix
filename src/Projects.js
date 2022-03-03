import React from 'react';
import Project from './Project';

const Projects = ({category}) => {
  {console.log(category)}
  let allProjects = category.map(category => {
    return (
      <Project 
        key={category.name}
        id={category.id}
        name={category.Project}
      />
    )
  })
  return (
    <div>
      {allProjects}
    </div>
  )
}

export default Projects;
