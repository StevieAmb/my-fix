import React from 'react';
import PropTypes from 'prop-types';
import Video from './Video';

const Videos = ({repairVideo, toTry}) => {
    return (
        <Video 
          key={repairVideo.id}
          video={repairVideo.videos}
          projToTry={toTry}
          name={repairVideo.project}
          tools={repairVideo.toolsNeeded}
          />
    )
  }

export default Videos

Videos.propType = {
  repairVideo: PropTypes.object.isRequired,
  toTry: PropTypes.func.isRequired
}