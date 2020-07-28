import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderJogo from '../components/HeaderJogo';

export class Feedback extends Component {
  render() {
    const { score, assertions } = this.props;
    return (
      <div className="CardFeedback">
        <HeaderJogo />
        <div className="BodyFeedback">
          <p data-testid="feedback-text">{assertions < 3 ? 'Podia ser melhor...' : 'Mandou bem!'}</p>
          <p data-testid="feedback-total-score">
          Pontuação Final:
            {score}
          </p>
          <p data-testid="feedback-total-question">
          Número de acertos:
            {assertions}
          </p>
        </div>
        <div className="FooterFeedback">
          <Link to="/">
            <Button data-testid="btn-play-again" variant="contained" color="primary">
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
  score: PropTypes.number,
  assertions: PropTypes.number,
};

const mapsStateToProps = (state) => ({
  score: state.players.score,
  assertions: state.players.assertions,
});

export default connect(mapsStateToProps)(Feedback);
