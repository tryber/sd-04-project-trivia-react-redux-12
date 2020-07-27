import React, { Component } from 'react';

import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import OpcoesRespostas from './OpcoesRespostas';

export class Perguntas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }

  handleClick = (contador) => {
    this.setState({contador: contador + 1});
  }

  render() {
    const {
      loading, questions, error,
    } = this.props;
    const { contador } = this.state;
    if (questions) {
      const objQuestions = questions[contador];
      return (
        <div>
          <p data-testid="question-category">{objQuestions.category}</p>
          <p data-testid="question-text">{objQuestions.question}</p>
          <OpcoesRespostas contador={contador} />
          {contador === questions.length - 1 ? (
            <Link to="/feedback" data-testid="btn-next">
              feedback
            </Link>
          ) : (
            <Button
              onClick={() => this.handleClick(contador)}
              data-testid="btn-next"
            >
              confirmar
            </Button>
          )}
        </div>
      );
    }
    if (loading) {
      return <div>Loading...</div>;
    }
    return <div>{error}</div>;
  }
}

Perguntas.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.shape,
  questions: PropTypes.shape,
};

const mapStateToProps = (state) => ({
  questions: state.questions.data.results,
  loading: state.questions.loading,
  error: state.questions.error,
});

export default connect(mapStateToProps)(Perguntas);
