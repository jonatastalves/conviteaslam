import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import buttonBackground1 from './assets/buttonaranha.png'; // caminho para o PNG de fundo
import buttonBackground2 from './assets/button.png'; // caminho para o segundo PNG de fundo
import './button.css';

const ImageButton = ({ text, imageType, routeUsed }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(routeUsed);
  };

  const buttonBackground = imageType === 'azul' ? buttonBackground1 : buttonBackground2;

  return (
    <div className="container" onClick={handleClick}>
      <img src={buttonBackground} alt="Button Background" className="background" />
      <div className="text">{text}</div>
    </div>
  );
};

ImageButton.propTypes = {
  text: PropTypes.string.isRequired, // texto a ser exibido sobre a imagem
  imageType: PropTypes.string.isRequired, // tipo de imagem a ser exibida
};

export default ImageButton;
