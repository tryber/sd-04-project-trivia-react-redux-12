import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderJogo from '../components/HeaderJogo';
import Perguntas from '../components/Perguntas';
import { getQuestions } from '../actions';

export class TelaJogo extends Component {
  componentDidMount() {
    const { getQuestions, token, loadingToken } = this.props;
    if (!loadingToken) {
      getQuestions(token);
    }
  }

  render() {
    return (
      <div className="Card">
        <HeaderJogo />
        <Perguntas />
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

export default connect(mapStateToProps, { getQuestions })(TelaJogo);
