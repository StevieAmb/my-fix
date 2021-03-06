import React from 'react';
import PropTypes from 'prop-types';
import './Video.css';

const Video = ({video, projToTry, name, tools}) => {
  let toolsForProj = tools.map(tool => {
    return (
      <li>{tool}</li>
    )
  })
  return ( 
    <div className="video-page-container">
      <section className="video-container">
        <h3>{name}</h3>
        <iframe width="420" height="315"
          src={video}>
        </iframe>
      </section>
      <button onClick={() => projToTry(video)}>Add To My Projects</button>
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
  tools: PropTypes.arrayOf(PropTypes.string.isRequired),
  name: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  projToTry: PropTypes.func.isRequired
}
