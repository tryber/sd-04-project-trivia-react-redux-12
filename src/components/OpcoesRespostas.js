import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import questions from '../mock_data/questions';
import { getAnswers } from '../actions';

class OpcoesRespostas extends Component {
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
      correct, wrong, getAnswers, contador, random, questions,
    } = this.props;
    const objQuestions = questions[contador];
    const arrayAnswers = [];
    arrayAnswers.push(...objQuestions.incorrect_answers);
    arrayAnswers.push(objQuestions.correct_answer);
    if (random === 'false') this.shuffle(arrayAnswers);

    return arrayAnswers.map((element, index) => (element === objQuestions.correct_answer ? (
      <button
        type="button"
        key={element}
        data-testid="correct-answer"
        className={correct}
        onClick={() => getAnswers('correct', 'wrong', 'true')}
      >
        {element}
      </button>
    ) : (
      <button
        type="button"
        key={element}
        data-testid={`wrong-answer-${index}`}
        className={wrong}
        onClick={() => getAnswers('correct', 'wrong', 'true')}
      >
        {element}
      </button>
    )));
  }

  render() {
    const {
      loading, questions, error,
    } = this.props;
    if (questions) {
      return (
        <div>
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
  correct: state.answers.correct,
  wrong: state.answers.wrong,
  random: state.answers.random,
  questions: state.questions.data.results,
  loading: state.questions.loading,
  error: state.questions.error,
});

OpcoesRespostas.propTypes = {
  getAnswers: PropTypes.func.isRequired,
  contador: PropTypes.number,
  correct: PropTypes.number,
  wrong: PropTypes.number,
  random: PropTypes.bool,
};

OpcoesRespostas.defaultProps = {
  contador: 0,
  correct: 0,
  wrong: 0,
  random: false,
};

export default connect(mapStateToProps, { getAnswers })(OpcoesRespostas);
