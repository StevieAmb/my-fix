import React from "react";
import PropTypes from 'prop-types'
import './Video.css'

const Video = ({video, projToTry}) => {
  console.log("video", video)
  return ( 
    <div>
       <button onClick={() => projToTry(video)}>I'm Gonna Try This</button>
      <div className="video-container">
        <iframe width="420" height="315"
          src={video}>
        </iframe>
      </div>
    </div>
  )
}

export default Video;

Video.propType = {
  video: PropTypes.string.isRequired,
  projToTry: PropTypes.func.isRequired
}
