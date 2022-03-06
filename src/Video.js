import React from "react";
import PropTypes from 'prop-types'
import './Video.css'

const Video = ({video}) => {
  console.log("video", video)
  return ( 
    <div className="video-container">
      <iframe width="420" height="315"
        src={video}>
      </iframe>
    </div>
  )
}

export default Video;

Video.propType = {
  video: PropTypes.string.isRequired
}
