import {
  INPUT_CHANGE
} from '../actions/index';

const INITIAL_STATE = {
  email:'',
  name:'',
};

const cadastro = ( state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
      ...state,
      email: action.email,
      name: action.name,
      }
    default:
      return state;
  };
}

export default cadastro;
