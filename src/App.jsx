import React,{ useState, useEffect } from 'react';
import VideoBackground from './VideoBackground';
import LoadingVideo from './LoadingVideo';
import MusicPlayer from './MusicPlayer';
import './App.css'

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulação de um processo de carregamento
    setTimeout(() => {
      setLoading(false); // Após 30 segundos, define loading como false
    }, 30000);
  }, []);
  

  return (
    <div className="App">
      <MusicPlayer />
      {loading ? (
        <LoadingVideo />
      ) : (
        <div className="content">
          {/* Seu conteúdo principal após o carregamento */}
          <VideoBackground />
        </div>
      )}
    </div>
  
  )
}

export default App
