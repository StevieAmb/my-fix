import React from 'react';
import Project from './Project';
import PropTypes from 'prop-types';

const SavedProjects = ({category}) => {
  let savedProjects = category.map(category => {
    return (
      <Project
        key={category.id}
        id={category.id}
        name={category.project}
        tools={category.toolsNeeded}
        />
    )
  })
  return (
    <section className="try-container">
          {savedProjects}
    </section>
  )
}


export default SavedProjects;

SavedProjects.propTypes = {
  category: PropTypes.arrayOf(PropTypes.object.isRequired)
}
