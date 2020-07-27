import {
  GET_ANSWERS,
} from '../actions';

const INITIALL_STATE = {
  correct: '',
  wrong: '',
  random: 'false',
};

const answers = (state = INITIALL_STATE, {
  type, correct, wrong, random,
}) => {
  switch (type) {
    case GET_ANSWERS:
      return {
        ...state,
        correct,
        wrong,
        random,
      };
    default:
      return state;
  }
};

export default answers;
