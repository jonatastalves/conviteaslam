// VideoBackground.js

import React from 'react';
import './VideoBackground.css';

const VideoBackground = () => {
  return (
    <div className="video-background">
      <div className="video-wrap">
        {/* Video */}
        <video id="vid" autoPlay muted loop playsInline>
          <source src="src/assets/backvideo.mp4" type="video/mp4" />          
        </video>
      </div>
    </div>
  );
};

export default VideoBackground;
