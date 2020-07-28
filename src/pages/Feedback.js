import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import HeaderJogo from '../components/HeaderJogo';

class Feedback extends Component {
  render() {
    const { player } = this.props;
    const { assertions, score } = player;
    return (
      <div className="CardFeedback">
        <HeaderJogo />
        <div className="BodyFeedback">
          <p data-testid="feedback-text">
            {(assertions >= 3
              ? 'mandou bem!' : 'Podia ser melhor..')}
          </p>
          <p data-testid="feedback-total-score">
Full Score:
            {score}
          </p>
          <p data-testid="feedback-total-question">
            Hits:
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

const mapStateToProps = (state) => ({
  score: state.players.score,
  player: state.players,
});

Feedback.propTypes = {
  player: PropTypes.shape({
    assertions: PropTypes.number,
    score: PropTypes.number,
  }).isRequired,
};

export default connect(mapStateToProps)(Feedback);
