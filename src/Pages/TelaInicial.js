import React, { Component } from 'react';
import { connect } from 'react-redux';
import getInput from '../actions/index';

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
    return (
      <div>
        <form>
          <label htmlFor="email">
            Email do Gravatar
            <input
              type="email" data-testid="input-gravatar-email"
              value={email} onChange={(event) => this.setState({ email: event.target.value })}
            />
          </label>
          <label htmlFor="name">
            Nome do Jogador
            <input
              type="text" data-testid="input-player-name"
              value={name} onChange={(event) => this.setState({ name: event.target.value })}
            />
          </label>
          <button
            disabled={this.verificaçao()} data-testid="btn-play"
            onClick={() => this.props.getTest(email, name)}>
            Jogar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
 getTest: (email, name) => dispatch(getInput(email, name)),
});

export default connect(null, mapDispatchToProps)(TelaInicial);
