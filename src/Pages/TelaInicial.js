import React, { Component } from 'react';

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
        <form>
          <label htmlFor="email">Email do Gravatar</label>
          <input type="text" id="email"
            data-testid="input-gravatar-email"
            value={email}
            onChange={(event) => this.setState({ email: event.target.value })}
          />
          <label htmlFor="name">Nome do Jogador</label>
          <input type="text" id="name"
            data-testid="input-player-name"
            value={name}
            onChange={(event) => this.setState({ name: event.target.value })}
          />
          <button type="submit" id="Jogar"
            disabled={this.verificaçao()}
            data-testid="btn-play"
          >
            Jogar
          </button>
        </form>
      </div>
    );
  }
}

export default TelaInicial;
