import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../trivia.png';
import { resetCounter } from '../actions';

export class Ranking extends Component {
  sortRanking = (a, b) => {
    let comparison = 0;
    if (a.score > b.score) {
      comparison = 1;
    } else if (a.score < b.score) {
      comparison = -1;
    }
    return comparison;
  }

  renderRanking = () => {
    const currentRanking = JSON.parse(localStorage.getItem('ranking'));
    currentRanking.sort((a, b) => ((a.score > b.score) ? -1 : 1));
    return currentRanking.map((player, index) => (
      <li key={player.name}>
          Nome:
        {' '}
        <span data-testid={`player-name-${index}`}>
          {player.name}
        </span>
        {' '}
          Pontuação:
        {' '}
        <span data-testid={`player-score-${index}`}>{player.score}</span>
      </li>
    ));
  }

  render() {
    const { resetCounter } = this.props;
    return (
      <div className="Card">
        <div className="HeaderCard">
          <img src={logo} alt="logo" />
          <h1 data-testid="ranking-title">RANKING</h1>
        </div>
        <ul>
          {this.renderRanking()}
        </ul>
        <Link to="/">
          <Button
            onClick={() => resetCounter()}
            type="button"
            data-testid="btn-go-home"
            variant="contained"
            color="secondary"
          >
            Voltar
          </Button>
        </Link>
      </div>
    );
  }
}

Ranking.propTypes = {
  resetCounter: PropTypes.func.isRequired,
};

export default connect(null, {
  resetCounter,
})(Ranking);
