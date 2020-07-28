import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import HeaderJogo from '../components/HeaderJogo';
import { connect } from 'react-redux';

class Feedback extends Component {
  render() {
    const { email, name } = this.props;
    return (
      <div className="CardFeedback">
        <HeaderJogo email={email} name={name} />
        <div className="BodyFeedback">
          <p data-testid="feedback-text">Mensagem de feedback</p>
          <p data-testid="feedback-total-score">Full Score: 0</p>
          <p data-testid="feedback-total-question">Hits</p>
        </div>
        <div className="FooterFeedback">
          <Link to="/">
            <Button data-testid="btn-play-again" variant="contained" color="primary">
              Jogar Novamente
            </Button>
          </Link>
          <Link to="ranking">
            <Button data-testid="btn-ranking" variant="contained" color="primary">Ver Ranking</Button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.players.email,
  name: state.players.name,
});

export default connect(mapStateToProps)(Feedback);
