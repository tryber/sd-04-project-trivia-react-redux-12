import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { toggleAnswers, getNextQuestion } from '../actions';

export class OpcoesRespostas extends Component {
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

  mapAnswers = () => {
    const {
      random, questions, toggleAnswers, answerState, counter,
    } = this.props;
    const objQuestions = questions[counter];
    const arrayAnswers = [];
    arrayAnswers.push(...objQuestions.incorrect_answers);
    arrayAnswers.push(objQuestions.correct_answer);
    // if (random === 'false') this.shuffle(arrayAnswers);

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
      loading, questions, error, getNextQuestion, toggleAnswers,
    } = this.props;
    if (questions) {
      return (
        <div>
          {this.mapAnswers()}
          <Button
            onClick={() => { toggleAnswers(); getNextQuestion(); }}
            data-testid="btn-next"
          >
              Confirmar
          </Button>
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

OpcoesRespostas.propTypes = {
  answerState: PropTypes.bool,
  counter: PropTypes.number,
  error: PropTypes.shape,
  loading: PropTypes.bool,
  questions: PropTypes.shape,
  random: PropTypes.bool,
  toggleAnswers: PropTypes.func.isRequired,
  getNextQuestion: PropTypes.func.isRequired,
};

OpcoesRespostas.defaultProps = {
  random: false,
};

export default connect(mapStateToProps, { toggleAnswers, getNextQuestion })(OpcoesRespostas);
