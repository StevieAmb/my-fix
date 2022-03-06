import React from "react";
import { NavLink } from 'react-router-dom'
import '../Project.css'

const Project = ({name, video}) => {
  return (
    <NavLink className="project-card" to={`/video/${name}`}>
      <h1>{name}</h1>
      </NavLink>
  )
}


export default Project;