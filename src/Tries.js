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
    <div className='try-container'>
      {toTries}
    </div>
  )
}


export default Tries;