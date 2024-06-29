import React from 'react';
import videoSrc from './assets/loadingVideo.mp4';
import './LoadingVideo.css';

const LoadingVideo = () => {
  return (
    <div className="loading-video">
      <video autoPlay muted loop playsInline>
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="spinner-overlay">
        <div className="spinner"></div>
        <div className="loading-text">Carregando aranhaverso do Aslam...</div> {/* Texto adicional */}
      </div>
    </div>
  );
};

export default LoadingVideo;
