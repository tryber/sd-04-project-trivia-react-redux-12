import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setInput, getToken } from '../actions';

class TelaInicial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
    };
  }

  requestToken = () => {
    const { getToken } = this.props;
    getToken();
  }

  verificacao = () => {
    const { email, name } = this.state;
    if (!email || !name) return true;
    return false;
  }

  render() {
    const { email, name } = this.state;
    const { setInput } = this.props;
    return (
      <div className="Card">
        <form autoComplete="off">
          <TextField
            onChange={(event) => this.setState({ email: event.target.value })}
            data-testid="input-gravatar-email"
            label="Email do Gravata"
            id="Email"
            value={email}
            variant="outlined"
            size="small"
          />
          <TextField
            id="Name"
            label="Nome do Jogador"
            variant="outlined"
            size="small"
            data-testid="input-player-name"
            value={name}
            onChange={(event) => this.setState({ name: event.target.value })}
          />
          <Link to="/game">
            <button
              type="button"
              disabled={this.verificacao()}
              data-testid="btn-play"
              onClick={() => { setInput(email, name); this.requestToken(); }}
            >
              Jogar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

TelaInicial.propTypes = {
  setInput: PropTypes.func.isRequired,
  getToken: PropTypes.func.isRequired,
};

export default connect(null, { setInput, getToken })(TelaInicial);
