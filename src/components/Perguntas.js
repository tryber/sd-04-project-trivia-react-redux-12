import React, { Component } from 'react';
import questions from '../mock_data/questions';

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

  handleClick2 = (numero) => this.setState({ numero: numero + 1 });

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
