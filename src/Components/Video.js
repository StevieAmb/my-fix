import React from 'react';
import PropTypes from 'prop-types';
import '../styling/Video.css';

const Video = ({video, projToTry, name, tools}) => {
  let toolsForProj = tools.map((tool, index) => {
    return (
      <li className="tools-list" key={tool+index}>{tool}</li>
    )
  })
  return ( 
    <div className="video-page-container">
      <section className="video-container">
        <h3>{name}</h3>
        <iframe width="520" height="415"
          src={video}>
        </iframe>
      <button onClick={() => projToTry(video)}>Add To My Projects</button>
      </section>
      <section className='tools-section'>
        <details>
          <summary><h3>Click For Required Tools:</h3></summary>
          <ul>
            {toolsForProj}
          </ul>
        </details>
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
