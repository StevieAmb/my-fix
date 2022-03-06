import React from 'react';
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
