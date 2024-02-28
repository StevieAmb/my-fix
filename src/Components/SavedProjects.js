import React from 'react';
import PropTypes from 'prop-types';
import Video from './Video';
import '../styling/SavedProjects.css'

const SavedProjects = ({category}) => {
  console.log('a project', category)
  let savedProjects = category.map(category => {
    console.log('in the map', category)
    return (
      <Video 
        key={category.id}
        video={category.videos}
        name={category.project}
        className='saved-video-container'
      />
    )
  })
  return (
    <section className="saved-container">
          {savedProjects}
    </section>
  )
}


export default SavedProjects;

SavedProjects.propTypes = {
  category: PropTypes.arrayOf(PropTypes.object.isRequired)
}
