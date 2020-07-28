import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Game from '../components/Game';
import { getQuestions } from '../actions';

class TelaJogo extends Component {
  componentDidMount() {
    const { getQuestions, token, loadingToken } = this.props;
    if (!loadingToken) {
      getQuestions(token);
    }
  }

  render() {
    return (
      <div className="Card">
        <Header />
        <Game />
      </div>
    );
  }
}

TelaJogo.propTypes = {
  token: PropTypes.string,
  getQuestions: PropTypes.func.isRequired,
  loadingToken: PropTypes.bool,
};

TelaJogo.defaultProps = {
  token: '404',
  loadingToken: true,
};

const mapStateToProps = (state) => ({
  token: state.questions.token,
  loadingToken: state.questions.loadingToken,
});

export default connect(mapStateToProps)(TelaJogo);
