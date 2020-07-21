import React from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';

const HeaderJogo = (props) => (
  <header>
    <img
      data-testid="header-profile-picture"
      src={`https://www.gravatar.com/avatar/${md5(props.email).toString()}`}
      alt="img jogador"
    />
    <h1 data-testid="header-player-name">
      Jogador:
      {props.name}
    </h1>
    <h1 data-testid="header-score">
      Pontuação: 0
      {/*
      {props.score}
      */}
    </h1>
  </header>
);

const mapStateToProps = (state) => ({
  email: state.cadastro.email,
  name: state.cadastro.name,
//  score: state.trivia.score,
});

export default connect(mapStateToProps)(HeaderJogo);
