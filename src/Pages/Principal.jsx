// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './principal.css';
import ImageButton from '../button'; // Importando o componente ImageButton
import salaoImage from '../assets/salao.jpg';
import pinImg from '../assets/pin.png'

const Principal = () => {
  const location = useLocation();
  const path = location.pathname;
  const userName = location.state?.userName;

  const [storedName, setStoredName] = useState('');

    useEffect(() => {
        // Carregar o nome do local storage, se disponível
        let savedName = localStorage.getItem('userName');
        if (!savedName) {
            // Se o nome não estiver salvo, pedir ao usuário para digitar
            savedName = prompt('Por favor, digite seu nome:');
            if (savedName) {
                localStorage.setItem('userName', savedName);
            }
        }
        setStoredName(savedName);
    }, []);
  

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
          <h1>BRUCY'S</h1>
          <h3>Festas e Eventos Almeidenses</h3>
          <img id='img' src={salaoImage} alt="" />
          <br />
          <br />
          <p><strong>Clique abaixo e aperte os cintos!</strong></p>
          <a href="https://maps.app.goo.gl/8s8AcAKtMiFomo3B7" target="_blank" rel="noopener noreferrer">
            <img id='pin' src={pinImg} alt="Pin" />
          </a>
          <p>Localizado na Rua do Queimado, 289 - Bento Ribeiro - RJ</p>
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
        <ImageButton text='Voltar' imageType='vermelho' routeUsed='/conviteaslam' userName={storedName} />        
      </div>
    </div>
  );
};

export default Principal;



