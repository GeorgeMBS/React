import React from 'react'
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import Welldone from "../img/welldone.svg";
import "./GameOver.css";

const GameOver = () => {
  return (
    <div id='gameover'>
      <h2>Fim de Jogo!</h2>
      <p>Pontuação: x</p>
      <p>Você acertou y de z perguntas.</p>
      <img src={Welldone} alt="Fim do Quiz" />
      <button>Reiniciar</button>
    </div>
  );
};

export default GameOver;
