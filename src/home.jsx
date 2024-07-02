import React from 'react';
import VideoBackground from './VideoBackground';
import ImageButton from './button'; // Importando o componente ImageButton
import './home.css';

function Home() {
    return (
        <>
            <div className='videoaq'><VideoBackground /></div>
            <div className='buttonaqui'>
                <ImageButton text='A Festa' />
                <ImageButton text='Localização' />
                <ImageButton text='Lista de Presentes' />
            </div>
        </>
    );
}

export default Home;
