import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import { Link } from 'react-router-dom';
import { setPlayer, setToken } from '../actions';
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
    const { setPlayer } = this.props;
    const { email, name } = this.state;
    setPlayer(email, name);
    let currentRanking = localStorage.getItem('ranking');
    if (!currentRanking) {
      const ranking = JSON.stringify([{ name, score: 0, picture: `https://www.gravatar.com/avatar/${md5(email).toString()}` }]);
      localStorage.setItem('ranking', ranking);
    } else {
      console.log('ok');
      currentRanking = JSON.parse(currentRanking);
      currentRanking.push({ name, score: 0, picture: `https://www.gravatar.com/avatar/${md5(email).toString()}` });
      localStorage.setItem('ranking', JSON.stringify(currentRanking));
    }
    const state = JSON.stringify({
      name, assertions: 0, score: 0, gravatarEmail: email,
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
    <div>
      <TextField
        data-testid="input-gravatar-email" label="Email do Jogador"
        onChange={(event) => this.setState({ email: event.target.value })} size="small"
        value={email} variant="outlined"
      />
      <TextField
        data-testid="input-player-name" label="Nome do Jogador"
        onChange={(event) => this.setState({ name: event.target.value })} size="small"
        value={name} variant="outlined"
      />
    </div>
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
            variant="contained" data-testid="btn-play" disabled={this.checkDisable()}
            onClick={() => this.setTokenAndRoute()} type="button"
          >
            Jogar
          </Button>
          <Link to="/config">
            <Button variant="contained" data-testid="btn-settings" type="button">
              Configurações
            </Button>
          </Link>
        </form>
      </div>
    );
  }
}

TelaInicial.propTypes = {
  setPlayer: PropTypes.func.isRequired,
  setToken: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default connect(null, { setPlayer, setToken })(TelaInicial);
