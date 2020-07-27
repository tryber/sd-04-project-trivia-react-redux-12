import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import { setPlayer, setToken } from '../actions';
import { apiToken } from '../service';

class TelaInicial extends Component {
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
          <TextField
            onChange={(event) => this.setState({ email: event.target.value })}
            data-testid="input-gravatar-email"
            value={email}
            variant="outlined"
            size="small"
          />
          <TextField
            label="Nome do Jogador"
            size="small"
            data-testid="input-player-name"
            value={name}
            onChange={(event) => this.setState({ name: event.target.value })}
          />
          <button
            type="button"
            disabled={this.checkDisable()}
            data-testid="btn-play"
            onClick={() => this.setTokenAndRoute()}
          >
              Jogar
          </button>
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
