import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
<<<<<<< HEAD:src/components/Game.js
import { toggleAnswers } from '../actions';
=======
import { getAnswers } from '../actions';

class OpcoesRespostas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 30,
      score: 0,
    } 
  }

  componentDidMount() {
    this.countDown();
  }

  countDown() {
    this.clock = setInterval(() => {
      if(this.state.timer > 0)this.setState({timer: this.state.timer - 1})
      else { alert('tempo acabou'); clearInterval(this.clock) }
    },1000);
  }

  handleClick = (contador) => {
    this.setState({contador: contador + 1,
      timer: 30,});
  }

  fullscore = (index) => {
    const { score, timer } = this.state;
    switch(this.props.questions[index].difficulty) {
      case'hard':
        return this.setState({score: score + 10 + (timer * 3)});
      case'medium':
        return this.setState({score: score + 10 + (timer * 2)});
      case'easy':
        return this.setState({score: score + 10 + (timer * 1)});
      default:
        return true;
    }
  };
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
>>>>>>> master:src/components/OpcoesRespostas.js

export class Game extends Component {
  mapAnswers = () => {
    const {
      questions, toggleAnswers, answerState, counter,
    } = this.props;
    const objQuestions = questions[counter];
    const arrayAnswers = [];
    arrayAnswers.push(...objQuestions.incorrect_answers);
    arrayAnswers.push(objQuestions.correct_answer);
<<<<<<< HEAD:src/components/Game.js
=======
    if (random === 'false') arrayAnswers.sort();
>>>>>>> master:src/components/OpcoesRespostas.js

    return arrayAnswers.map((element, index) => (element === objQuestions.correct_answer ? (
      <button
        aria-label={element}
        className={answerState ? 'correct' : ''}
        data-testid="correct-answer"
<<<<<<< HEAD:src/components/Game.js
        key={element}
        onClick={() => toggleAnswers()}
        type="button"
=======
        className={correct}
        onClick={() => { getAnswers('correct', 'wrong', 'true'); clearInterval(this.clock); this.fullscore(index) }}
>>>>>>> master:src/components/OpcoesRespostas.js
      >
        {element}
      </button>
    ) : (
      <button
        aria-label={element}
        className={answerState ? 'wrong' : ''}
        data-testid={`wrong-answer-${index}`}
<<<<<<< HEAD:src/components/Game.js
        key={element}
        onClick={() => toggleAnswers()}
        type="button"
=======
        className={wrong}
        onClick={() => { getAnswers('correct', 'wrong', 'true'); clearInterval(this.clock);}}
>>>>>>> master:src/components/OpcoesRespostas.js
      >
        {element}
      </button>
    )));
  }

  render() {
    const { timer } = this.state;
    const {
      loading, questions, error, counter,
    } = this.props;
    if (questions) {
      const currentQuestion = questions[counter];
      return (
        <div>
          <p data-testid="question-category">{currentQuestion.category}</p>
          <p data-testid="question-text">{currentQuestion.question}</p>
          {this.mapAnswers()}
          {timer}
        </div>
      );
    }
    if (!loading) {
      return <div>Loading...</div>;
    }
    return <div>{error}</div>;
  }
}

const mapStateToProps = (state) => ({
  answerState: state.answers.answerState,
  counter: state.answers.counter,
  error: state.questions.error,
  loading: state.questions.loading,
  questions: state.questions.data.results,
});

Game.propTypes = {
  answerState: PropTypes.bool,
  counter: PropTypes.number,
  error: PropTypes.shape,
  loading: PropTypes.bool,
  questions: PropTypes.shape,
  toggleAnswers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { toggleAnswers })(Game);
