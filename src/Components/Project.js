import React from "react";
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import '../Project.css'

const Project = ({name}) => {
  return (
    <NavLink className="project-card" to={`/video/${name}`}>
      <h1>{name}</h1>
      </NavLink>
  )
}

export default Project;

Project.propTypes = {
  name: PropTypes.string.isRequired
}