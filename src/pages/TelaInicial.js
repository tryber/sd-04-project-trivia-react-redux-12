import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { setToken } from '../actions';
import { apiToken } from '../service';

export class TelaInicial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
    };
  }

  setLocalState = () => {
    const { email, name } = this.state;
    const state = JSON.stringify({
      player: {
        name, assertions: 0, score: 0, gravatarEmail: email,
      },
    });
    localStorage.setItem('state', state);
  }

  setTokenAndRoute = () => {
    const { setToken, history } = this.props;
    this.setLocalState();
    apiToken()
      .then((value) => {
        localStorage.setItem('token', value.token);
        setToken(value);
      })
      .then(() => history.push('/game'));
  };

  returnInputs = (email, name) => (
    <React.Fragment>
      <input
        data-testid="input-gravatar-email"
        label="Email do Jogador"
        onChange={(event) => this.setState({ email: event.target.value })}
        value={email}
      />
      <input
        data-testid="input-player-name"
        label="Nome do Jogador"
        onChange={(event) => this.setState({ name: event.target.value })}
        value={name}
      />
    </React.Fragment>
  )

  checkDisable = () => {
    const { email, name } = this.state;
    if (!email || !name) return true;
    return false;
  };

  render() {
    const { email, name } = this.state;
    return (
      <div className="Card">
        <form autoComplete="off">
          {this.returnInputs(email, name)}
          <br />
          <Button
            variant="contained"
            data-testid="btn-play"
            disabled={this.checkDisable()}
            onClick={() => this.setTokenAndRoute()}
            type="button"
          >
              Jogar
          </Button>
          <Link to="/config">
            <Button
              variant="contained"
              data-testid="btn-settings"
              type="button"
            >
              Configurações
            </Button>
          </Link>
        </form>
      </div>
    );
  }
}

TelaInicial.propTypes = {
  setToken: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default connect(null, { setToken })(TelaInicial);
