// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './principal.css';

const Principal = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const userName = location.state?.userName;

  const handleBackClick = () => {
    navigate('/conviteaslam');
  };

  let content;
  switch (path) {
    case '/conviteaslam/festa':
      content = (
        <div>
          <p>Olá, {userName || 'querido(a) convidado(a)'}!</p>
          <p>
            Você está convidado(a) para uma aventura incrível no <span className="highlight">Aranhaverso do Aslam</span>! Estamos celebrando o 3º ano do nosso pequeno herói, Aslam, e seria uma honra ter você conosco nesse dia especial.
          </p>
          <p>Data: 10 de agosto de 2024</p>
          <p>Horário: 17h</p>
          <p>Venha preparado(a) para um dia cheio de diversão, alegria e muitas surpresas! Esperamos encontrar você lá para tornar este dia ainda mais memorável.</p>
          <p>Com carinho,</p>
          <p>Papai e Mamãe aranha! 🕸<span className="highlight">❤</span>🕷</p>
        </div>
      );
      break;
    case '/conviteaslam/local':
      content = <div>Conteúdo de Localização</div>;
      break;
    case '/conviteaslam/presentes':
      content = <div>Conteúdo de Sugestão de Presentes</div>;
      break;
    default:
      content = <div>Bem-vindo!</div>;
  }

  return (
    <div className="backPrincipal">
      <div className='section'>
        {content}
        <p onClick={handleBackClick}>...Voltar</p>
      </div>
    </div>
  );
};

export default Principal;



