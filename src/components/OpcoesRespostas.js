import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAnswers } from '../actions';

class OpcoesRespostas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 30,
      score: 0,
    } 
  }

  componentDidMount() {
    this.countDown();
  }

  countDown() {
    this.clock = setInterval(() => {
      if(this.state.timer > 0)this.setState({timer: this.state.timer - 1})
      else { alert('tempo acabou'); clearInterval(this.clock) }
    },1000);
  }

  handleClick = (contador) => {
    this.setState({contador: contador + 1,
      timer: 30,});
  }

  fullscore = (index) => {
    const { score, timer } = this.state;
    switch(this.props.questions[index].difficulty) {
      case'hard':
        return this.setState({score: score + 10 + (timer * 3)});
      case'medium':
        return this.setState({score: score + 10 + (timer * 2)});
      case'easy':
        return this.setState({score: score + 10 + (timer * 1)});
      default:
        return true;
    }
  };
  shuffle = (array) => {
    let m = array.length;
    let t;
    let i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  };

  mapAnswers = () => {
    const {
      correct, wrong, getAnswers, contador, random, questions,
    } = this.props;
    const objQuestions = questions[contador];
    const arrayAnswers = [];
    arrayAnswers.push(...objQuestions.incorrect_answers);
    arrayAnswers.push(objQuestions.correct_answer);
    if (random === 'false') arrayAnswers.sort();

    return arrayAnswers.map((element, index) => (element === objQuestions.correct_answer ? (
      <button
        type="button"
        key={element}
        data-testid="correct-answer"
        className={correct}
        onClick={() => { getAnswers('correct', 'wrong', 'true'); clearInterval(this.clock); this.fullscore(index) }}
      >
        {element}
      </button>
    ) : (
      <button
        type="button"
        key={element}
        data-testid={`wrong-answer-${index}`}
        className={wrong}
        onClick={() => { getAnswers('correct', 'wrong', 'true'); clearInterval(this.clock);}}
      >
        {element}
      </button>
    )));
  }

  render() {
    const { timer } = this.state;
    const {
      loading, questions, error,
    } = this.props;
    if (questions) {
      return (
        <div>
          {this.mapAnswers()}
          {timer}
        </div>
      );
    }
    if (!loading) {
      return <div>Loading...</div>;
    }
    return <div>{error}</div>;
  }
}

const mapStateToProps = (state) => ({
  correct: state.answers.correct,
  wrong: state.answers.wrong,
  random: state.answers.random,
  questions: state.questions.data.results,
  loading: state.questions.loading,
  error: state.questions.error,
});

OpcoesRespostas.propTypes = {
  getAnswers: PropTypes.func.isRequired,
  contador: PropTypes.number,
  correct: PropTypes.number,
  wrong: PropTypes.number,
  random: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.shape,
  questions: PropTypes.shape,
};

OpcoesRespostas.defaultProps = {
  contador: 0,
  correct: 0,
  wrong: 0,
  random: false,
};

export default connect(mapStateToProps, { getAnswers })(OpcoesRespostas);
