import React from 'react';
import PropTypes from 'prop-types';
import Video from './Video';

const Videos = ({repairVideo}) => {
    return (
        <Video 
          key={repairVideo.id}
          video={repairVideo.videos}
          />
    )
  }

export default Videos

Videos.propType = {
  repairVideo: PropTypes.object.isRequired
}