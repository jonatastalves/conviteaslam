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
          <p>Olá, <strong>{userName || 'querido(a) convidado(a)'}!</strong></p>
          <p>
            Você está convidado(a) para uma aventura incrível no <span className="highlight">Aranhaverso do Aslam</span>! Estamos celebrando o 3º ano do nosso pequeno herói, Aslam, e seria uma honra ter você conosco nesse dia especial.
          </p>
          <strong><p>Data: 10 de agosto de 2024</p></strong>
          <strong><p>Horário: 17h</p></strong>
          <p>Venha preparado(a) para um dia cheio de diversão, alegria e muitas surpresas! Esperamos encontrar você lá para tornar este dia ainda mais memorável.</p>
          <p>Confirme sua presença lá no botãozinho na página inicial!</p>
          <p>Com carinho,</p>
          <p>Papai e Mamãe aranha! 🕸<span className="highlight">❤</span>🕷</p>
        </div>
      );
      break;
    case '/conviteaslam/local':
      content = (
        <div>
          <p>A Festa será realizada no salão:</p>
          <h1>Brucy's Festas e Eventos Almeidenses</h1>
          <p>Localizado na Rua do Queimado, 289 - Bento Ribeiro - RJ</p>
          <img src="../assets/salao.jpg" alt="" />
        </div>
      );        
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
        <button className='voltar' onClick={handleBackClick}>Voltar</button>
      </div>
    </div>
  );
};

export default Principal;



