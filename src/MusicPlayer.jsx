// components/MusicPlayer.js
import React, { useEffect, useRef  } from 'react';
import './MusicPlayer.css'; // Arquivo de estilos CSS (opcional)

const MusicPlayer = () => {
    // /src/assets/spidey.mp3
   return (
   
      <div className="music-player">
        <iframe src="silence.mp3" allow="autoplay" id="audio"></iframe>
      <audio src="../src/assets/spidey.mp3" autoPlay />
      {/* Outros componentes ou informações do seu player */}
    </div>
   
  );
};

export default MusicPlayer;
