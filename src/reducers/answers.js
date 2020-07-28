import {
  GET_NEXT_QUESTION,
  TOGGLE_ANSWERS,
  RESET_COUNTER,
} from '../actions';

const INITIAL_STATE = {
  answerState: false,
  counter: 0,
};

const answers = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case TOGGLE_ANSWERS:
      return {
        ...state,
        answerState: !state.answerState,
      };
    case GET_NEXT_QUESTION:
      return {
        ...state,
        counter: state.counter + 1,
        answerState: false,
      };
    case RESET_COUNTER:
      return {
        ...state,
        counter: 0,
        answerState: false,
      };
    default:
      return state;
  }
};

export default answers;
