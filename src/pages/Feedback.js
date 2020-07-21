import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import bat from '../bat.png';
import logo from '../trivia.png';

export default class Feedback extends Component {
  testeRender = () => {
    alert('wat');
  }

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
              <p data-testid="header-player-name">Fullano de Tall</p>
              <p data-testid="header-score">Current score</p>
            </div>
          </div>          
        </div>
        <div className="BodyFeedback">
          <p data-testid="feedback-text">Mensagem de feedback</p>
          <p data-testid="feedback-total-score">Full Score</p>
          <p data-testid="feedback-total-question">Hits</p>
        </div>
        <div className="FooterFeedback">
          <Button data-testid="btn-play-again" variant="contained" onClick={this.testeRender} color="primary">Jogar Novamente</Button>
          <Button data-testid="btn-ranking" variant="contained" onClick={this.testeRender} color="primary">Ver Ranking</Button>
        </div>  
      </div>
    );
  }
}