import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import logo from '../trivia.png';

export default class Ranking extends Component {
  testeRender = () => {
    alert('wat');
  }

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
          <li>Ciclano</li>
          <li>FULANO</li>
          <li>Ciclano</li>
          <li>FULANO</li>
          <li>Ciclano</li>
          <li>FULANO</li>
        </ul>
        <Button variant="contained" onClick={this.testeRender} color="primary">Voltar</Button>
      </div>
    );
  }
}
