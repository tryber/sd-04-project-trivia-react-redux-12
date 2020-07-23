import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import logo from '../trivia.png';

export default class Ranking extends Component {
  render() {
    return (
      <div className="Card">
        <div className="HeaderCard">
          <img src={logo} alt="logo" />
          <h1>RANKING</h1>
        </div>
        <ul>
          <li>
            <span data-testid="player-name-0">Ciclano: </span>
            <span data-testid="player-score-0">100</span>
          </li>
          <li>
            <span data-testid="player-name-1">Ciclano: </span>
            <span data-testid="player-score-1">100</span>
          </li>
        </ul>
        <Link to="/">
          <Button
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
