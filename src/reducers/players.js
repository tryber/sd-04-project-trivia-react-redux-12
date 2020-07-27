import {
  SET_PLAYER,
} from '../actions';

const INITIAL_STATE = {
  email: '',
  name: '',
  score: 0,
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
        score,
      };
    default:
      return state;
  }
};

export default players;
