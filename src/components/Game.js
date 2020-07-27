import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleAnswers } from '../actions';

export class Game extends Component {
  mapAnswers = () => {
    const {
      questions, toggleAnswers, answerState, counter,
    } = this.props;
    const objQuestions = questions[counter];
    const arrayAnswers = [];
    arrayAnswers.push(...objQuestions.incorrect_answers);
    arrayAnswers.push(objQuestions.correct_answer);

    return arrayAnswers.map((element, index) => (element === objQuestions.correct_answer ? (
      <button
        aria-label={element}
        className={answerState ? 'correct' : ''}
        data-testid="correct-answer"
        key={element}
        onClick={() => toggleAnswers()}
        type="button"
      >
        {element}
      </button>
    ) : (
      <button
        aria-label={element}
        className={answerState ? 'wrong' : ''}
        data-testid={`wrong-answer-${index}`}
        key={element}
        onClick={() => toggleAnswers()}
        type="button"
      >
        {element}
      </button>
    )));
  }

  render() {
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
