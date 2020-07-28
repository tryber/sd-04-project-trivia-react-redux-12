import React, { Component } from 'react';

import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  toggleAnswers, getNextQuestion, resetTimer, toggleTimer,
} from '../actions';

export class Navigation extends Component {
  render() {
    const {
      counter, getNextQuestion, toggleAnswers, resetTimer, toggleTimer,
    } = this.props;
    return (
      <>
        {counter === 4 ? (
          <Link to="/feedback" data-testid="btn-next">
              Feedback
          </Link>
        ) : (
          <Button
            onClick={() => { toggleAnswers(); resetTimer(); getNextQuestion(); toggleTimer(); }}
            data-testid="btn-next"
          >
            Confirmar
          </Button>
        )}
      </>
    );
  }
}

Navigation.propTypes = {
  counter: PropTypes.number,
  toggleAnswers: PropTypes.func.isRequired,
  toggleTimer: PropTypes.func.isRequired,
  getNextQuestion: PropTypes.func.isRequired,
  resetTimer: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  counter: state.answers.counter,
});

export default connect(mapStateToProps, {
  toggleAnswers, getNextQuestion, resetTimer, toggleTimer,
})(Navigation);
