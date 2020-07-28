import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  toggleAnswers, getNextQuestion, resetTimer, toggleTimer,
} from '../actions';

export class Navigation extends Component {
  render() {
    const {
      counter, getNextQuestion, toggleAnswers, resetTimer, toggleTimer, answerState,
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
            onClick={() => { toggleAnswers(); resetTimer(); getNextQuestion(); toggleTimer(); }}
            data-testid="btn-next"
            className={answerState ? '' : 'hiddenBtn'}
          >
            Confirmar
          </button>
        )}
      </>
    );
  }
}

Navigation.propTypes = {
  answerState: PropTypes.bool,
  counter: PropTypes.number,
  getNextQuestion: PropTypes.func.isRequired,
  resetTimer: PropTypes.func.isRequired,
  toggleAnswers: PropTypes.func.isRequired,
  toggleTimer: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  answerState: state.answers.answerState,
  counter: state.answers.counter,
});

export default connect(mapStateToProps, {
  toggleAnswers, getNextQuestion, resetTimer, toggleTimer,
})(Navigation);
