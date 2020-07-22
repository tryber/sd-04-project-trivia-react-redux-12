import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import questions from '../mock_data/questions';

// esse codigo não fede nem cheira, não quis apagar então só arrumei pra passar no CC

class Perguntas extends Component {
  render() {
    const numero = 0;
    return (
      <div>
        <p data-testid="question-category">{questions.results[numero].category}</p>
        <p data-testid="question-text">{questions.results[numero].question}</p>
        <Button data-testid="correct-answer">{questions.results[numero].correct_answer}</Button>
        {questions.results[numero].incorrect_answers.map((element, index) => <Button data-testid={`wrong-answer-${index}`}>{element}</Button>)}
        <Button>Teste</Button>
        {console.log(numero)}
      </div>
    );
  }
}

export default Perguntas;
