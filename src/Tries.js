import React from 'react';
import Project from './Components/Project';

const Tries = ({category}) => {
  let toTries = category.map(category => {
    return (
      <Project
        key={category.id}
        id={category.id}
        name={category.project}
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