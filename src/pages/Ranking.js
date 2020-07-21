import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import logo from '../trivia.png';

export default class Ranking extends Component {
  testeRender = () => {
    alert('wat');
  };

  render() {
    return (
      <div className="Card">
        <div className="HeaderCard">
          <img src={logo} alt="logo" />
          <h1>RANKING</h1>
        </div>
        <ul>
          <li>FULANO</li>
          <li>Ciclano</li>
          <li>FULANO</li>
          <li>Ciclano</li>
          <li>FULANO</li>
          <li>Ciclano</li>
          <li>FULANO</li>
          <li>Ciclano</li>
          <li>FULANO</li>
          <li>Ciclano</li>
          <li>FULANO</li>
          <li>Ciclano</li>
          <li>FULANO</li>
          <li>Ciclano</li>
          <li>FULANO</li>
        </ul>
        <Button
          type="button"
          data-testid="btn-go-home"
          variant="contained"
          onClick={this.testeRender}
          color="secondary"
        >
          Voltar
        </Button>
      </div>
    );
  }
}
