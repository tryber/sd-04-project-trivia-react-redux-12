import React, { Component } from 'react';
import { connect } from 'react-redux';
import questions from '../mock_data/questions';
import PropTypes from 'prop-types';
import  { answers } from '../actions/index';

class OpcoesRespostas extends Component {
  constructor(props) {
    super(props);
    this.shuffle = this.shuffle.bind(this);
  }

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
    const { contador, correct, wrong, random } = this.props;
    const objQuestions = questions.results[contador];
    const arrayResposts = [];
    arrayResposts.push(...objQuestions.incorrect_answers);
    arrayResposts.push(objQuestions.correct_answer);
    
    if(random === 'false' ) this.shuffle(arrayResposts);
    return (
      <div>
        {arrayResposts.map((element, index) =>
          element === objQuestions.correct_answer ? (
            <button
              key={element} data-testid={'correct-answer'}
              className={correct} onClick={() => this.props.getAnswers('correct', 'wrong', 'true')}
            >
              {element}
            </button>
          ) : (
            <button
              key={element} data-testid={`wrong-answer-${index}`}
              className={wrong} onClick={() => this.props.getAnswers('correct', 'wrong', 'true')}
            >
              {element}
            </button>
          ),
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  correct: state.answers.correct,
  wrong: state.answers.wrong,
  random: state.answers.random,
});

const mapDispatchToProps = (dispatch) => ({
  getAnswers: (correct, wrong, random) => dispatch(answers(correct, wrong, random)),
});

OpcoesRespostas.propTypes = {
  getAnswers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(OpcoesRespostas);
