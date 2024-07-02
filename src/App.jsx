import React, { useState, useEffect } from 'react';
import VideoBackground from './VideoBackground';
import LoadingVideo from './LoadingVideo';
import MusicPlayer from './MusicPlayer';
import Home from './home';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulação de um processo de carregamento
    setTimeout(() => {
      setLoading(false); // Após 30 segundos, define loading como false
    }, 1000);
  }, []);

  return (
    <div className="App">
      <MusicPlayer />
      {loading ? (
        <LoadingVideo />
      ) : (
        <div className="content">
          <Home />
        </div>
            
      )}
    </div>
  );
}

export default App;
