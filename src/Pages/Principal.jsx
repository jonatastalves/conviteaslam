import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './principal.css'

const Principal = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const handleBackClick = () => {
    navigate('/conviteaslam');
  };

  let content;
  switch (path) {
    case '/conviteaslam/festa':
      content = <div>Conteúdo da Festa</div>;
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
