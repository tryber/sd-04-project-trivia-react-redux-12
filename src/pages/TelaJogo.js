import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderJogo from '../components/HeaderJogo';
import Game from '../components/Game';
import Navigation from '../components/Navigation';
import { getQuestions } from '../actions';

export class TelaJogo extends Component {
  componentDidMount() {
    const { getQuestions, token, loadingToken } = this.props;
    if (!loadingToken) {
      getQuestions(token);
    }
  }

  render() {
    const { email, name } = this.props;
    return (
      <div className="Card">
        <HeaderJogo email={email} name={name} />
        <Game />
        <Navigation />
      </div>
    );
  }
}

TelaJogo.propTypes = {
  token: PropTypes.string,
  getQuestions: PropTypes.func.isRequired,
  loadingToken: PropTypes.bool,
  name: PropTypes.string,
  email: PropTypes.string,
};

TelaJogo.defaultProps = {
  token: '404',
  loadingToken: true,
};

const mapStateToProps = (state) => ({
  token: state.questions.token,
  loadingToken: state.questions.loadingToken,
  email: state.players.email,
  name: state.players.name,
});

export default connect(mapStateToProps, { getQuestions })(TelaJogo);
