import React, { Component } from 'react';
import questions from '../mock_data/questions';

class OpçoesRespostas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correct: '',
      wrong: '',
      random: 'false',
    };
    this.shuffle = this.shuffle.bind(this);
  }

  handleClick = () =>
    this.setState({ correct: 'Correct', wrong: 'Wrong', random: 'true' });

  shuffle = (array) => {
    let m = array.length;
    let t;
    let i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  };

  render() {
    const { contador } = this.props;
    const { correct, wrong, random } = this.state;
    const objQuestions = questions.results[contador];
    const arrayResposts = [];
    arrayResposts.push(...objQuestions.incorrect_answers);
    arrayResposts.push(objQuestions.correct_answer);
    /* if( random === false)*/ this.shuffle(arrayResposts);
    return (
      <div>
        {arrayResposts.map((element, index) =>
          element === objQuestions.correct_answer ? (
            <button
              key={element} data-testid={'correct-answer'}
              className={correct} onClick={() => this.handleClick()}
            >
              {element}
            </button>
          ) : (
            <button
              key={element} data-testid={`wrong-answer-${index}`}
              className={wrong} onClick={() => this.handleClick()}
            >
              {element}
            </button>
          ),
        )}
      </div>
    );
  }
}

export default OpçoesRespostas;
