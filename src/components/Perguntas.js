import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import questions from '../mock_data/questions';

class Perguntas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      classe1:'teste2',
      classe2:'teste2',
    };
  }

  handleClick1 = () => {
   this.setState({classe1:'teste', classe2:'teste3'})
  };

  handleClick2 = (numero) => this.setState({ numero: numero + 1 });

  render() {
    const { numero, classe1, classe2 } = this.state;
    if (questions.results.length - 1 >= numero) {
      const arrayResposts = questions.results[numero].incorrect_answers;
      arrayResposts.push(questions.results[numero].correct_answer);
      arrayResposts.sort();
      return (
        <div>
          <p data-testid="question-category">{questions.results[numero].category}</p>
          <p data-testid="question-text">{questions.results[numero].question}</p>
          {arrayResposts.map((element, index) => (
            element === questions.results[numero].correct_answer ? (
              <button
                key={element} data-testid={'correct-answer'}
                className={classe1}
                onClick={() => this.handleClick1()}
              >
                {element}
              </button>
            ) : (
              <button
                key={element}
                data-testid={`wrong-answer-${index}`}
                className={classe2}
                onClick={() => this.handleClick1()}
              >
                {element}
              </button>
            )))}
          <Button onClick={() => this.handleClick2(numero)} data-testid="btn-next">
            confirmar
          </Button>
        </div>
      );
    } return (
      <div>
        <p>fim</p>
      </div>
    );
  }
}

export default Perguntas;
