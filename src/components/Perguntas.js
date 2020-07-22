import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import questions from '../mock_data/questions';

// esse codigo não fede nem cheira, não quis apagar então só arrumei pra passar no CC

class Perguntas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
    };
  }

  handleClick1 = (event, numero) => {
    if (numero === 'correct') {
      return alert(` Resposta correta.
        Mudar para VERDE,${event.target.innerHTML} `);
    }

    return alert(` Resposta errada.
    Mudar para VERMELHO,${event.target.innerHTML} `);
  };

  handleClick2 = (numero) => {
    return this.setState({ numero: numero + 1 });
  };

  render() {
    const { numero } = this.state;
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
              <Button
                key={element} data-testid={`correct-answer`} color='inherit'
                classes={{ label: 'teste2' }} onClick={(event) => this.handleClick1(event, 'correct')}
              >
                {element}
              </Button>
            ) : (
              <Button
                key={element}
                data-testid={`wrong-answer-${index}`}
                classes={{ label: 'teste2' }}
                onClick={(event) => this.handleClick1(event, 'false')}
              >
                {element}
              </Button>
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
