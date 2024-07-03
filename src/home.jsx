import React from 'react';
import VideoBackground from './VideoBackground';
import ImageButton from './button'; // Importando o componente ImageButton
import './home.css';

function Home() {
    return (
        <>
            <div className='videoaq'><VideoBackground /></div>
            <div className='buttonaqui'>
                <ImageButton text='A Festa' imageType='azul' />
                <ImageButton text='Localização' imageType='azul' />
                <ImageButton text='Sugestão de Presentes' imageType='azul' />
                <ImageButton text='Confirmar Presença' imageType='vermelho' />
            </div>
        </>
    );
}

export default Home;
