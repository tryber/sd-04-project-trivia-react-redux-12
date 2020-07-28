import React from 'react';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from '../trivia.png';

export function Header(props) {
  const { email, name, score } = props;
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

Header.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string,
  score: PropTypes.number,
};

const mapStateToProps = (state) => ({
  email: state.players.email,
  name: state.players.name,
  score: state.players.score,
});

export default connect(mapStateToProps)(Header);
