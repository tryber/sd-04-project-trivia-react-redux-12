import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  toggleAnswers, updateScore, getNextQuestion, tick, toggleTimer,
} from '../actions';

export class Game extends Component {
  componentDidMount() {
    const { toggleTimer } = this.props;
    toggleTimer();
  }

  componentDidUpdate(prevProps) {
    const { timerRunning } = this.props;
    if (prevProps.timerRunning !== timerRunning) {
      this.countDown();
    }
  }

  countDown = () => {
    const { timer, tick } = this.props;
    this.clock = setInterval(() => {
      if (timer > 0) tick();
      else {
        alert('Acabou seu tempo!');
        clearInterval(this.clock);
      }
    }, 1000);
  };

  calcScore = (difficulty) => {
    const { score, updateScore, timer } = this.props;
    switch (difficulty) {
      case 'hard':
        return updateScore((score + 10 + timer) * 3);
      case 'medium':
        return updateScore((score + 10 + timer) * 2);
      case 'easy':
        return updateScore((score + 10 + timer) * 1);
      default:
        return true;
    }
  };

  mapAnswers = () => {
    const {
      questions, toggleAnswers, answerState, counter,
    } = this.props;
    const objQuestions = questions[counter];
    const arrayAnswers = objQuestions.incorrect_answers.map(
      (element, index) => (
        <button
          className={answerState ? 'wrong' : ''}
          data-testid={`wrong-answer-${index}`}
          key={element}
          type="button"
          onClick={() => {
            toggleAnswers();
            clearInterval(this.clock);
          }}
        >
          {element}
        </button>
      ),
    );
    arrayAnswers.push(
      <button
        className={answerState ? 'correct' : ''}
        data-testid="correct-answer"
        onClick={() => {
          toggleAnswers();
          clearInterval(this.clock);
          this.calcScore(objQuestions.difficulty);
        }}
        type="button"
      >
        {objQuestions.correct_answer}
      </button>,
    );
    return arrayAnswers;
  };

  render() {
    const {
      loading, questions, error, counter, timer,
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
  score: state.players.score,
  timer: state.answers.timer,
  timerRunning: state.answers.timerRunning,
});

Game.propTypes = {
  answerState: PropTypes.bool,
  counter: PropTypes.number,
  error: PropTypes.shape,
  loading: PropTypes.bool,
  questions: PropTypes.shape,
  score: PropTypes.number,
  tick: PropTypes.func.isRequired,
  timer: PropTypes.number,
  timerRunning: PropTypes.bool,
  toggleAnswers: PropTypes.func.isRequired,
  toggleTimer: PropTypes.func.isRequired,
  updateScore: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  toggleAnswers, updateScore, getNextQuestion, tick, toggleTimer,
})(Game);
