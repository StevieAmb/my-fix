import React from "react";
import { NavLink } from 'react-router-dom'
import '../Project.css'

const Project = ({name, video}) => {
  return (

    <div className="project-card">
      <h1>{name}</h1>
   </div>
  )
}


export default Project;