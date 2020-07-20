import React, { Component } from 'react';
import { connect } from 'react-redux';
import get_input from '../actions/index'

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
    return (
      <div>
        {console.log(this.props.email)}
        <form>
          <label htmlFor="email"> Email do Gravatar
          <input
            type="text"
            data-testid="input-gravatar-email"
            value={email}
            onChange={(event) => this.setState({ email: event.target.value })}
          /></label>
          <label htmlFor="name">Nome do Jogador
          <input
            type="text" id="name"
            data-testid="input-player-name"
            value={name}
            onChange={(event) => this.setState({ name: event.target.value })}
          /></label>
          <button
            type="submit" id="Jogar"
            disabled={this.verificaçao()}
            data-testid="btn-play"
            onClick={() => this.props.get(email, name)}
          >
            Jogar
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  console.log(state)
);

const mapDispatchToProps = (dispatch) => ({
  get: (email, name) => dispatch(get_input(email, name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TelaInicial);
