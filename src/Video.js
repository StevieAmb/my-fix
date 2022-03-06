import React from "react";
import PropTypes from 'prop-types'
import './Video.css'

const Video = ({video, projToTry, name, tools}) => {
  console.log('tool', tools)
  let toolsForProj = tools.map(tool => {
    return (
      <li>{tool}</li>
    )
  })
  return ( 
    <div className="video-page-container">
      <div className="video-container">
        <h3>{name}</h3>
        <iframe width="420" height="315"
          src={video}>
        </iframe>
      </div>
        <button onClick={() => projToTry(video)}>Add To My Projects</button>
        {console.log('tools', toolsForProj)}
        <h3>Required Tools:</h3>
        <section>
          <ul className="tools-list">
        {toolsForProj}
          </ul>
        </section>
    </div>
  )
}

export default Video;

Video.propType = {
  video: PropTypes.string.isRequired,
  projToTry: PropTypes.func.isRequired
}
