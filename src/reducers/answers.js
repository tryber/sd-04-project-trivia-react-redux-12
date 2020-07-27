import {
  ANSWERS,
  CLEAR_BTN,
} from '../actions/index';

const INITIAL_STATE = {
  correct: '',
  wrong: '',
  random: 'false',
};

const answers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ANSWERS:
      return {
        ...state,
        correct: action.correct,
        wrong: action.wrong,
        random: action.random,
      };
    case CLEAR_BTN:
      return {
        ...state, ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default answers;
