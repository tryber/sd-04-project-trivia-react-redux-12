import React, { Component } from 'react';
import { connect } from 'react-redux';
import getInput from '../actions/index';

export class TelaInicial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
    };
    this.verificaçao = this.verificaçao.bind(this);
  }

  verificaçao() {
    if (!this.state.email || !this.state.name) return true;
    return false;
  }

  render() {
    const { email, name } = this.state;
    const { get } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="email">
            Email do Gravatar
            <input
              type="email"
              data-testid="input-gravatar-email"
              value={email}
              onChange={(event) => this.setState({ email: event.target.value })}
            />
          </label>
          <label htmlFor="name">
            Nome do Jogador
            <input
              type="text"
              id="name"
              data-testid="input-player-name"
              value={name}
              onChange={(event) => this.setState({ name: event.target.value })}
            />
          </label>
          <button
            type="submit"
            id="Jogar"
            disabled={this.verificaçao()}
            data-testid="btn-play"
            onClick={() => get(email, name)}
          >
            Jogar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  get: (email, name) => dispatch(getInput(email, name)),
});

export default connect(null, mapDispatchToProps)(TelaInicial);
