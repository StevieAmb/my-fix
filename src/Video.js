import React from "react";
import PropTypes from 'prop-types'
import './Video.css'

const Video = ({video, projToTry, name}) => {
  return ( 
    <div className="video-page-container">
      <div className="video-container">
        <h3>{name}</h3>
        <iframe width="420" height="315"
          src={video}>
        </iframe>
      </div>
        <button onClick={() => projToTry(video)}>Add To My Projects</button>
    </div>
  )
}

export default Video;

Video.propType = {
  video: PropTypes.string.isRequired,
  projToTry: PropTypes.func.isRequired
}
