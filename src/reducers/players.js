import {
  INPUT_CHANGE,
} from '../actions';

const INITIAL_STATE = {
  email: '',
  name: '',
};

const players = (state = INITIAL_STATE, { type, email, name }) => {
  switch (type) {
    case INPUT_CHANGE:
      return {
        ...state,
        email,
        name,
      };
    default:
      return state;
  }
};

export default players;
