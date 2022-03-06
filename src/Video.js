import React from "react";
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
