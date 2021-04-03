import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import GameHeader from "./components/gameHeader";
import NextAndQuestion from "./components/nextAndQuestion";
import Choices from "./components/choices";
import GameStatus from "./components/gameStatus";


import { FinishAlert } from "./services/alert-service";

import data from "./data.json";


function App() {

  const questionCount = data.length;
  const [questionID, setQuestionID] = useState(0)
  const [question, setQuestion] = useState(data[questionID]);
  const [status, setStatus] = useState({ 'true': 0, 'false': 0 });


  useEffect(() => {
    if (questionID !== 0) {
      setQuestion(data[questionID]);
    }
  }, [questionID]);


  const handleNextQuestion = () => {
      (questionCount > questionID + 1) 
      ? setQuestionID(questionID+1)
          : FinishAlert('You have finished the quiz. THANKS FOR YOUR PARTICIPATION :)))');
  }

  return (
    <Container className='App'>
      <GameHeader />
      <NextAndQuestion questionId={questionID} count={questionCount} click={handleNextQuestion} />
      <Choices choices={question} gameStatus={status} click={setStatus} />
      <GameStatus gameStatus={status} />
    </Container>
  )
}

export default App;
