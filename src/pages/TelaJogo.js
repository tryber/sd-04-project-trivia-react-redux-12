import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderJogo from '../components/HeaderJogo';
import Perguntas from '../components/Perguntas';
import { getQuestions } from '../actions';

export class TelaJogo extends Component {
  componentDidMount() {
    const { getQuestions, token, loading } = this.props;
    if (!loading) {
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
  loading: PropTypes.bool,
};

TelaJogo.defaultProps = {
  token: '404',
  loading: true,
};

const mapStateToProps = (state) => ({
  token: state.questions.token,
  loading: state.questions.loading,
});

export default connect(mapStateToProps, { getQuestions })(TelaJogo);
