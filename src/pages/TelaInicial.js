import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getInput } from '../actions/index';

class TelaInicial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
    };
    this.verificaçao = this.verificaçao.bind(this);
    this.props = props;
  }

  verificaçao() {
    if (!this.state.email || !this.state.name) return true;
    return false;
  }

  render() {
    const { email, name } = this.state;
    const { getTest } = this.props;
    return (
      <div className="Card">
        <form autoComplete="off">
          <TextField
            onChange={(event) => this.setState({ email: event.target.value })}
            data-testid="input-gravatar-email"
            label="Email do Gravata" id="Email"
            value={email} variant="outlined" size="small"
          />
          <TextField
            id="Name" label="Nome do Jogador" variant="outlined" size="small"
            data-testid="input-player-name"
            value={name} onChange={(event) => this.setState({ name: event.target.value })}
          />
          <Link to="/game">
            <button
              disabled={this.verificaçao()} data-testid="btn-play"
              onClick={() => getTest(email, name)}
            >
              Jogar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getTest: (email, name) => dispatch(getInput(email, name)),
});

TelaInicial.propTypes = {
  getTest: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(TelaInicial);
