import {
  GET_NEXT_QUESTION,
  TOGGLE_ANSWERS,
  TOGGLE_TIMER,
  RESET_TIMER,
  TICK,
} from '../actions';

const INITIAL_STATE = {
  answerState: false,
  counter: 0,
  timer: 30,
  timerRunning: false,
};

const answers = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case TOGGLE_ANSWERS:
      return {
        ...state,
        answerState: !state.answerState,
      };
    case TOGGLE_TIMER:
      return {
        ...state,
        timerRunning: !state.timerRunning,
      };
    case GET_NEXT_QUESTION:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case RESET_TIMER:
      return {
        ...state,
        timer: 30,
      };
    case TICK:
      return {
        ...state,
        timer: state.timer - 1,
      };
    default:
      return state;
  }
};

export default answers;
