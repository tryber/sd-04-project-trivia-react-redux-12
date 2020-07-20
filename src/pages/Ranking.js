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
          <h1>RANKING</h1>
          <img src={logo} className="App-logo-min" alt="logo" />
        </div>
        <ul className="teste">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
        <Button variant="contained" className="teste" onClick={this.testeRender} color="primary">Hello World</Button>
      </div>
    );
  }
}
