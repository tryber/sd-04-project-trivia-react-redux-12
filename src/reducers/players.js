import {
  SET_PLAYER,
  UPDATE_SCORE,
} from '../actions';

const INITIAL_STATE = {
  email: '',
  name: '',
  score: 0,
  assertions: 0,
};

const players = (state = INITIAL_STATE, {
  type, email, name, score,
}) => {
  switch (type) {
    case SET_PLAYER:
      return {
        ...state,
        email,
        name,
      };
    case UPDATE_SCORE:
      return {
        ...state,
        score,
        assertions: state.assertions + 1,
      };
    default:
      return state;
  }
};

export default players;
