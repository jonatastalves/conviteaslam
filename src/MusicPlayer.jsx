import React, { useRef } from 'react';
import audioSrc from './assets/spidey.mp3';
import './MusicPlayer.css'; // Arquivo de estilos CSS (opcional)

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const playerRef = useRef(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
    if (playerRef.current) {
      playerRef.current.style.display = 'none';
    }
  };

  return (
    <div className="music-player" ref={playerRef}>
      <button onClick={handlePlay}>Clique aqui!</button>
      <audio ref={audioRef} src={audioSrc} />
      {/* Outros componentes ou informações do seu player */}
    </div>
  );
};

export default MusicPlayer;
