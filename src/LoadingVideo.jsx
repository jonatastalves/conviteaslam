import React from 'react';
import './LoadingVideo.css';

const LoadingVideo = () => {
  return (
    <div className="loading-video">
      <video autoPlay muted loop playsInline>
        <source src="caminho/para/seu/video.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>
    </div>
  );
};

export default LoadingVideo;
