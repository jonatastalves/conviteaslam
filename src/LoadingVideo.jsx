import React from 'react';
import './LoadingVideo.css';

const LoadingVideo = () => {
  return (
    <div className="loading-video">
      <video autoPlay muted loop playsInline>
        <source src="src/assets/loadingVideo.mp4" type="video/mp4" />
      </video>
      <div className="spinner-overlay">
        <div className="spinner"></div>
        <div className="loading-text">Bem vindo ao meu convite...</div> {/* Texto adicional */}
      </div>
    </div>
  );
};

export default LoadingVideo;
