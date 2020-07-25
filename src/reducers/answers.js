import {
  ANSWERS,
} from '../actions/index';

const INITIALL_STATE = {
  correct:'',
  wrong:'',
  random:'false',
};

const answers = (state = INITIALL_STATE, action) => {
  switch(action.type) {
    case ANSWERS:
      return {
        ...state,
        correct: action.correct,
        wrong: action.wrong,
        random: action.random,
      }
    default:
      return state
  }
}

export default answers;
