import React, { Component } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
=======
>>>>>>> 6119a58a8760941050952c3eaeae10f83ec4609d
=======

import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
>>>>>>> 874612b26498ae53f062a848e1fc1d89aa9692fc
import questions from '../mock_data/questions';
import OpcoesRespostas from './OpcoesRespostas';

class Perguntas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }

  handleClick = (contador) => this.setState({ contador: contador + 1 });

  render() {
    const { contador } = this.state;
    const objQuestions = questions.results[contador];
    return (
      <div>
        <p data-testid="question-category">{objQuestions.category}</p>
        <p data-testid="question-text">{objQuestions.question}</p>
        <OpcoesRespostas contador={contador} />
        {contador === questions.results.length - 1 ? (
          <Link to="/feedback" data-testid="btn-next">
            feedback
          </Link>
        ) : (
          <Button
            onClick={() => this.handleClick(contador)}
            data-testid="btn-next"
          >
            confirmar
          </Button>
        )}
      </div>
    );
  }
}

export default Perguntas;
