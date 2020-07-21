import React from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';

const HeaderJogo = (props) => (
  <header className="HeaderCard">
    <img
      data-testid="header-profile-picture"
      src={`https://www.gravatar.com/avatar/${md5(props.email).toString()}`}
      alt="img jogador"
    />
    <span data-testid="header-player-name">
      Jogador:
      {props.name}
    </span>
    <span data-testid="header-score">
      Pontuação: 0
      {/*
      {props.score}
      */}
    </span>
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
