import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import logo from '../trivia.png';

export default class Header extends Component {
  render() {
    const currentState = JSON.parse(localStorage.getItem('state'));
    return (
      <header className="HeaderCard">
        <div className="HeaderFeedback">
          <img className="LogoSmall" src={logo} alt="logo" />
          <div className="HeaderFeedBackGroup">
            <div className="HeaderFeedbackPic">
              <img
                data-testid="header-profile-picture"
                src={`https://www.gravatar.com/avatar/${md5(currentState.player.email).toString()}`}
                alt="gravatar"
              />
            </div>
            <div className="HeaderFeebackInfo">
              <p data-testid="header-player-name">
            Jogador:
                {` ${currentState.player.name}`}
              </p>
              <p data-testid="header-score">
            Pontuação:
                {` ${currentState.player.score}`}
              </p>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
