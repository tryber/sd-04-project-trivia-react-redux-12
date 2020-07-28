import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import HeaderJogo from '../components/HeaderJogo';

export default class Feedback extends Component {
  render() {;
    return (
      <div className="CardFeedback">
        <HeaderJogo />
        <div className="BodyFeedback">
          <p data-testid="feedback-text">Mensagem de feedback</p>
          <p data-testid="feedback-total-score">Full Score: 0</p>
          <p data-testid="feedback-total-question">Hits</p>
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
