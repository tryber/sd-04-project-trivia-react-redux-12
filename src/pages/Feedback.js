import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import players from '../mock_data/players';
// import feedback from '../mock_data/feedback';
import bat from '../bat.png';
import logo from '../trivia.png';

export default class Feedback extends Component {
  render() {
    return (
      <div className="CardFeedback">
        <div className="HeaderFeedback">
          <img className="LogoSmall" src={logo} alt="logo" />
          <div className="HeaderFeedBackGroup">
            <div className="HeaderFeedbackPic">
              <img data-testid="header-profile-picture" src={bat} alt="gravatar" />
            </div>
            <div className="HeaderFeebackInfo">
              <p data-testid="header-player-name">{`Nome: ${players.player[1].name}`}</p>
              <p data-testid="header-score">
                {`Placar: ${players.player[1].score}`}
              </p>
            </div>
          </div>
        </div>
        <div className="BodyFeedback">
          <p data-testid="feedback-text">
            {players.player[1].score >= 3 ? 'Mandou bem!' : 'Podia ser melhor...'}
          </p>
          <p data-testid="feedback-total-score">Full Score</p>
          <p data-testid="feedback-total-question">
            {`Acertos: ${players.player[1].assertions}`}
          </p>
        </div>
        <div className="FooterFeedback">
          <Button data-testid="btn-play-again" variant="contained" color="primary">
            Jogar Novamente
          </Button>
          <Button data-testid="btn-ranking" variant="contained" color="primary">Ver Ranking</Button>
        </div>
      </div>
    );
  }
}
