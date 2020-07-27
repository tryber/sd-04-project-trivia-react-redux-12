import React, { Component } from 'react';

import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleAnswers, getNextQuestion } from '../actions';

export class Navigation extends Component {
  render() {
    const {
      counter, getNextQuestion, toggleAnswers,
    } = this.props;
    return (
      <>
        {counter === 4 ? (
          <Link to="/feedback" data-testid="btn-next">
              Feedback
          </Link>
        ) : (
          <Button
            onClick={() => { toggleAnswers(); getNextQuestion(); }}
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
  getNextQuestion: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  counter: state.answers.counter,
});

export default connect(mapStateToProps, { toggleAnswers, getNextQuestion })(Navigation);
