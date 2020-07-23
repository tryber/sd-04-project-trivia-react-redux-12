import React, { Component } from 'react';
import HeaderJogo from '../components/HeaderJogo';
import Perguntas from '../components/Perguntas';

class TelaJogo extends Component {
  render() {
    return (
      <div className="Card">
        <HeaderJogo />
        <Perguntas />
      </div>
    );
  }
}

export default TelaJogo;
