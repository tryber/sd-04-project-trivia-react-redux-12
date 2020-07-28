import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import logo from '../trivia.png';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      assertions: 0,
      name: '',
      email: '',
    };
  }

  render() {
    const { name, email, score } = this.state;
    return (
      <header className="HeaderCard">
        <div className="HeaderFeedback">
          <img className="LogoSmall" src={logo} alt="logo" />
          <div className="HeaderFeedBackGroup">
            <div className="HeaderFeedbackPic">
              <img
                data-testid="header-profile-picture"
                src={`https://www.gravatar.com/avatar/${md5(email).toString()}`}
                alt="gravatar"
              />
            </div>
            <div className="HeaderFeebackInfo">
              <p data-testid="header-player-name">
            Jogador:
                {` ${name}`}
              </p>
              <p data-testid="header-score">
            Pontuação:
                {` ${score}`}
              </p>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
