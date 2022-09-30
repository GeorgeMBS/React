import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'
import styles from "./Question.css"

const Questions = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  const currentQuestion = quizState.questions[quizState.currentQuestion]

  console.log(quizState)

  return (
    <div id="questions">
      <p>
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
        </p>
      <h2>{currentQuestion.question}</h2>
      <div id="option-container">
        <p>Opções</p>
      </div>
      <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
        Continuar
        </button>
    </div>
  )
}

export default Questions