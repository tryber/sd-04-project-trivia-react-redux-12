import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  toggleAnswers, updateScore, getNextQuestion,
} from '../actions';

export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 30,
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
    const { timer } = this.state;
    this.clock = setInterval(() => {
      if (timer > 0) this.setState({ timer: timer - 1 });
      else { alert('tempo acabou'); clearInterval(this.clock); }
    }, 1000);
  }

  calcScore = (difficulty) => {
    const { score, updateScore } = this.props;
    const { timer } = this.state;
    switch (difficulty) {
      case 'hard':
        return updateScore(score + 10 + timer * 3);
      case 'medium':
        return updateScore(score + 10 + timer * 2);
      case 'easy':
        return updateScore(score + 10 + timer * 1);
      default:
        return true;
    }
  };

  renderAnswers = () => {
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

  renderNavigation = () => {
    const {
      counter, getNextQuestion, toggleAnswers, answerState,
    } = this.props;
    return (
      <>
        {counter === 4 ? (
          <Link to="/feedback" data-testid="btn-next">
            <button
              type="button"
            >
            Feedback
            </button>
          </Link>
        ) : (
          <button
            type="button"
            onClick={() => { toggleAnswers(); this.resetTimer(); getNextQuestion(); }}
            data-testid="btn-next"
            className={answerState ? '' : 'hiddenBtn'}
          >
            Confirmar
          </button>
        )}
      </>
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
  score: state.players.score,
});

Game.propTypes = {
  answerState: PropTypes.bool,
  counter: PropTypes.number,
  error: PropTypes.shape,
  loading: PropTypes.bool,
  questions: PropTypes.shape,
  score: PropTypes.number,
  toggleAnswers: PropTypes.func.isRequired,
  updateScore: PropTypes.func.isRequired,
  getNextQuestion: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  toggleAnswers, updateScore, getNextQuestion,
})(Game);
