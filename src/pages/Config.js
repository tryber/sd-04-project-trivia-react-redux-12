import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default class Config extends Component {
  render() {
    return (
      <div className="CardFeedback">
        <div className="BodyFeedback">
          <h1 data-testid="settings-title">CONFIG</h1>
        </div>
        <div className="FooterFeedback">
          <Link to="/">
            <Button data-testid="btn-play-again" variant="contained" color="primary">
              Tela Inicial
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
