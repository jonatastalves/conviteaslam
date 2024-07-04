// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import VideoBackground from './VideoBackground';
import ImageButton from './button'; // Importando o componente ImageButton
import './home.css';

function Home() {
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

    return (
        <>
            <div className='videoaq'><VideoBackground /></div>
            <div className='buttonaqui'>
                <ImageButton text='A Festa' imageType='azul' routeUsed='/festa' userName={storedName} />
                <ImageButton text='Localização' imageType='azul' routeUsed='/local' userName={storedName} />
                <ImageButton text='Sugestão de Presentes' imageType='azul' routeUsed='/presentes' userName={storedName} />
                <ImageButton text='Confirmar Presença' imageType='vermelho' routeUsed='/confirmar' userName={storedName} />
            </div>
        </>
    );
}

export default Home;
