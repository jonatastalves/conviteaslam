import React from 'react';
import PropTypes from 'prop-types';
import buttonBackground from './assets/button.png'; // caminho para o PNG de fundo

const ImageButton = ({ text }) => {
  return (
    <div style={styles.container}>
      <img src={buttonBackground} alt="Button Background" style={styles.background} />
      <div style={styles.text}>{text}</div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    width: '300px', // largura da imagem
    height: '190px', // altura da imagem
    overflow: 'hidden', // esconde o texto que ultrapassar os limites do container
    marginTop: '200px',
  },
  background: {
    width: '100%', // preenche todo o espaço do container
    height: '100%', // preenche todo o espaço do container
    objectFit: 'cover', // ajusta a imagem para cobrir o container
  },
  text: {
    position: 'absolute',
    top: '65%',
    left: '55%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
    textShadow: '1px 1px 2px black', // sombra do texto para melhor visibilidade
    zIndex: 1, // coloca o texto acima da imagem
  },
};

ImageButton.propTypes = {
  text: PropTypes.string.isRequired, // texto a ser exibido sobre a imagem
};

export default ImageButton;
