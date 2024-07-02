import React from 'react';
import PropTypes from 'prop-types';
import buttonBackground from './assets/buttonaranha.png'; // caminho para o PNG de fundo
import './button.css';

const ImageButton = ({ text }) => {
  return (
    <div className="container">
      <img src={buttonBackground} alt="Button Background" className="background" />
      <div className="text">{text}</div>
    </div>
  );
};

ImageButton.propTypes = {
  text: PropTypes.string.isRequired, // texto a ser exibido sobre a imagem
};

export default ImageButton;
