import {
  GET_NEXT_QUESTION,
  TOOGLE_ANSWERS,
} from '../actions';

const INITIALL_STATE = {
  answerState: false,
  counter: 0,
};

const answers = (state = INITIALL_STATE, { type }) => {
  switch (type) {
    case TOOGLE_ANSWERS:
      return {
        ...state,
        answerState: !state.answerState,
      };
    case GET_NEXT_QUESTION:
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
};

export default answers;
