import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  toggleAnswers, getNextQuestion,
} from '../actions';

export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 30,
      score: 0,
      assertions: 0,
    };
  }

  componentDidMount() {
    this.countDown();
  }

  resetTimer = () => {
    this.setState({
      timer: 30,
    });
  }

  countDown = () => {
    this.clock = setInterval(() => {
      const { timer } = this.state;
      if (timer > 0) this.setState({ timer: timer - 1 });
      else {
        clearInterval(this.clock);
      }
    }, 1000);
  }

  calcScore = (difficulty) => {
    const { score, timer } = this.state;
    switch (difficulty) {
      case 'hard':
        return ((score + 10) + (timer * 3));
      case 'medium':
        return ((score + 10) + (timer * 2));
      case 'easy':
        return ((score + 10) + (timer * 1));
      default:
        return true;
    }
  };

  updateLocalState = (difficulty) => {
    const currentState = JSON.parse(localStorage.getItem('state'));
    console.log(currentState);
    const newScore = this.calcScore(difficulty);
    console.log(newScore);
    const newState = {
      ...currentState,
      assertions: currentState.assertions + 1,
      score: currentState.score + newScore,
    };
    localStorage.setItem('state', JSON.stringify(newState));
    this.setState({ score: newState.score, assertions: newState.assertions });
  }

  renderAnswers = () => {
    const {
      questions, toggleAnswers, answerState, counter,
    } = this.props;
    const { timer } = this.state;
    const objQuestions = questions[counter];
    const arrayAnswers = objQuestions.incorrect_answers.map(
      (element, index) => (
        <button
          className={answerState ? 'wrong' : ''}
          data-testid={`wrong-answer-${index}`}
          disabled={timer === 0}
          key={element}
          onClick={() => {
            toggleAnswers();
            clearInterval(this.clock);
          }}
          type="button"
        >
          {element}
        </button>
      ),
    );
    arrayAnswers.push(
      <button
        className={answerState ? 'correct' : ''}
        data-testid="correct-answer"
        disabled={timer === 0}
        onClick={() => {
          toggleAnswers();
          clearInterval(this.clock);
          this.updateLocalState(objQuestions.difficulty);
        }}
        type="button"
      >
        {objQuestions.correct_answer}
      </button>,
    );
    return arrayAnswers;
  };

  renderNavigation = () => {
    const {
      counter, getNextQuestion, answerState,
    } = this.props;
    const { timer } = this.state;
    return (
      <div>
        {counter === 4 ? (
          <Link to="/feedback">
            <button
              data-testid="btn-next"
              type="button"
              className={answerState || timer === 0 ? '' : 'hiddenBtn'}
            >
            Próxima
            </button>
          </Link>
        ) : (
          <button
            type="button"
            onClick={() => {
              this.resetTimer(); getNextQuestion(); this.countDown();
            }}
            data-testid="btn-next"
            className={answerState || timer === 0 ? '' : 'hiddenBtn'}
          >
            Próxima
          </button>
        )}
      </div>
    );
  }

  render() {
    const {
      loading, questions, error, counter,
    } = this.props;
    const { timer } = this.state;
    if (questions) {
      const currentQuestion = questions[counter];
      return (
        <div>
          <p data-testid="question-category">{currentQuestion.category}</p>
          <p data-testid="question-text">{currentQuestion.question}</p>
          <p>
            Tempo Restante:
            {timer}
          </p>
          {this.renderAnswers()}
          {this.renderNavigation()}
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
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  loading: PropTypes.bool,
  questions: PropTypes.shape([]),
  toggleAnswers: PropTypes.func.isRequired,
  getNextQuestion: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  toggleAnswers, getNextQuestion,
})(Game);
