import React from 'react';
import Project from './Components/Project';
import PropTypes from 'prop-types';

const Tries = ({category}) => {
  console.log(category)
  let toTries = category.map(category => {
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
          {toTries}
    </section>
  )
}


export default Tries;

Tries.propTypes = {
  category: PropTypes.arrayOf(PropTypes.object.isRequired)
}
