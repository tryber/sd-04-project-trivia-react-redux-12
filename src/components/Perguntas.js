import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import questions from '../mock_data/questions';
import OpçoesRespostas from './OpçoesRespostas';

class Perguntas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
  }

  handleClick2 = (contador) => this.setState({ contador: contador + 1 });

  render() {
    const { contador } = this.state;
    const objQuestions = questions.results[contador];
      return (
        <div>
          <p data-testid="question-category">{objQuestions.category}</p>
          <p data-testid="question-text">{objQuestions.question}</p>
          <OpçoesRespostas contador={contador} />
          { contador === questions.results.length - 1 ? (
          <Link to="/feedback" data-testid="btn-next">feedback</Link>
        ) : (
          <Button onClick={() => this.handleClick2(contador)} data-testid="btn-next">
              confirmar
          </Button>
        )}
        </div>
      );
  }
}

export default Perguntas;
