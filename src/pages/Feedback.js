import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { resetCounter } from '../actions';

export class Feedback extends Component {
  render() {
    const currentState = JSON.parse(localStorage.getItem('state'));
    const { resetCounter } = this.props;
    return (
      <div className="CardFeedback">
        <Header />
        <div className="BodyFeedback">
          <p data-testid="feedback-text">{currentState.player.assertions < 3 ? 'Podia ser melhor...' : 'Mandou bem!'}</p>
          <p data-testid="feedback-total-score">
            {currentState.player.score}
          </p>
          <p>
          Número de acertos:
            <span data-testid="feedback-total-question">{currentState.player.assertions}</span>
          </p>
        </div>
        <div className="FooterFeedback">
          <Link to="/">
            <Button data-testid="btn-play-again" variant="contained" color="primary" onClick={() => resetCounter()}>
              Jogar Novamente
            </Button>
          </Link>
          <Link to="ranking">
            <Button data-testid="btn-ranking" variant="contained" color="primary">Ver Ranking</Button>
          </Link>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  resetCounter: PropTypes.func.isRequired,
};

export default connect(null, {
  resetCounter,
})(Feedback);
