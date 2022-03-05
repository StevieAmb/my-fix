import React from "react";
import './Project.css'

const Project = ({name}) => {
  return (
    <div className="project-card">
      <h1>{name}</h1>
   </div>
  )
}


export default Project;