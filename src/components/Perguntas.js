import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import questions from '../mock_data/questions';
import OpcoesRespostas from './OpcoesRespostas';
import { clearBtn } from '../actions/index';

class Perguntas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }

  handleClick = (contador) => this.setState({ contador: contador + 1 });

  render() {
    const { contador } = this.state;
    const { clearBorderButton } = this.props;
    // const { correct, wrong } = this.props;
    const objQuestions = questions.results[contador];
    return (
      <div>
        <p data-testid="question-category">{objQuestions.category}</p>
        <p data-testid="question-text">{objQuestions.question}</p>
        <OpcoesRespostas contador={contador} />
        {contador === questions.results.length - 1 ? (
          <Link to="/feedback" data-testid="btn-next">
            feedback
          </Link>
        ) : (
          <Button
            onClick={() => {
              this.handleClick(contador);
              clearBorderButton();
            }}
            data-testid="btn-next"
          >
            confirmar
          </Button>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  clearBorderButton: () => dispatch(clearBtn()),
});

export default connect(null, mapDispatchToProps)(Perguntas);
// export default Perguntas;
