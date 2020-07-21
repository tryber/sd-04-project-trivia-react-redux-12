import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import questions from '../mock_data/questions';

class Perguntas extends Component {
  render() {
    let numero = 0;
    return (
      <div>
        <p data-testid="question-category">{questions.results[numero].category}</p>
        <p data-testid="question-text">{questions.results[numero].question}</p>
        <Button data-testid="correct-answer">{questions.results[numero].correct_answer}</Button>
        {questions.results[numero].incorrect_answers.map((element, index) => <Button data-testid={`wrong-answer-${index}`}>{element}</Button>)}
        <Button onClick ={() => handleClick }>Teste</Button>
        {console.log(numero)}
      </div>
    );
  }
}

export default Perguntas;
