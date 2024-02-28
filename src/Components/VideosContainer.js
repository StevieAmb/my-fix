import React from 'react';
import PropTypes from 'prop-types';
import Video from './Video'

const VideosContainer = ({repairVideo, toTry}) => {
  return (
    <Video 
      key={repairVideo.id}
      video={repairVideo.videos}
      projToTry={toTry}
      name={repairVideo.project}
      tools={repairVideo.toolsNeeded}
      className='video-container'
      />
    )
  }

export default VideosContainer;

VideosContainer.propType = {
  repairVideo: PropTypes.object.isRequired,
  toTry: PropTypes.func.isRequired
}