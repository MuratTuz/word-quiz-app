import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import GameHeader from "./components/GameHeader";
import NextAndQuestion from "./components/NextAndQuestion";
import Choices from "./components/Choices";
import GameStatus from "./components/GameStatus";


import { InfoAlert, FinishAlert } from "./services/alertService";

import data from "./data.json";


function App() {

  const questionCount = data.length; // The number of questions
  const [questionID, setQuestionID] = useState(0) // in order to select next question with Next button click
  const [question, setQuestion] = useState(data[questionID]); // current question on precess
  const [status, setStatus] = useState({ 'trueAnswer': 0, 'falseAnswer': 0 }); // game status which indicates true and false responces

  useEffect(() => {
    if (questionID !== 0) {
      setQuestion(data[questionID]);
    }
  }, [questionID]); // if Next button is clecked then question ID is changed. So pass to next question


  const handleNextQuestion = () => {
    (questionCount > questionID + 1)
      ? setQuestionID(questionID + 1)
      : FinishAlert('You have finished the quiz. THANKS FOR YOUR PARTICIPATION :)))');
  }

  const handleAnsweredQuestion = (event) => {

    let currentQuestion = status.trueAnswer + status.falseAnswer;

    if (currentQuestion < question.questionNo) {

      let trueResponce = status.trueAnswer + 1;
      let falseResponce = status.falseAnswer + 1;

      event.target.dataset.value === question.answer ? setStatus(prevStatus => ({ ...prevStatus, trueAnswer: trueResponce }))
        : setStatus(prevStatus => ({ ...prevStatus, falseAnswer: falseResponce }));

    } else {
      InfoAlert('You have already answered this question');
    }

  }

  return (
    <Container className='App'>
      <GameHeader />
      <NextAndQuestion questionId={questionID + 1} click={handleNextQuestion} />
      <Choices choices={question} click={handleAnsweredQuestion} />
      <GameStatus gameStatus={status} />
    </Container>
  )
}

export default App;
