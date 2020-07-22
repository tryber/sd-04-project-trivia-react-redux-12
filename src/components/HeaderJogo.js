import React from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import logo from '../trivia.png';

const HeaderJogo = (props) => (
  <header className="HeaderCard">
    <div className="HeaderFeedback">
      <img className="LogoSmall" src={logo} alt="logo" />
      <div className="HeaderFeedBackGroup">
        <div className="HeaderFeedbackPic">
          <img data-testid="header-profile-picture" src={`https://www.gravatar.com/avatar/${md5(props.email).toString()}`} alt="gravatar" />
        </div>
        <div className="HeaderFeebackInfo">
          <p data-testid="header-player-name">Jogador: {props.name}</p>
          <p data-testid="header-score">Pontuação: 0 {/* {props.score} */}</p>
        </div>
      </div>
    </div>
  </header>
);

const mapStateToProps = (state) => ({
  email: state.cadastro.email,
  name: state.cadastro.name,
//  score: state.trivia.score,
});

HeaderJogo.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(HeaderJogo);
