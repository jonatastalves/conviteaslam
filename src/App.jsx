import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingVideo from './LoadingVideo';
import MusicPlayer from './MusicPlayer';
import Home from './home';
import Principal from './Pages/Principal';
import RedirectToExternal from './RedirectToExternal';  
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
    <Router>

    <div className="App">
      <MusicPlayer />
      {loading ? (
        <LoadingVideo />
      ) : (
        <div className="content">
          <Routes>
            <Route path='/conviteaslam' element={<Home />} />
            <Route path='/conviteaslam/festa' element={<Principal  />} />
            <Route path='/conviteaslam/local' element={<Principal  />} />
            <Route path='/conviteaslam/presentes' element={<Principal  />} />
            <Route path='/conviteaslam/confirmar' element={<RedirectToExternal url="https://forms.gle/bK9ZdUQFdK9cajVY7" />} />

          </Routes>
        </div>
            
      )}
    </div>

    </Router>
  );
}

export default App;
