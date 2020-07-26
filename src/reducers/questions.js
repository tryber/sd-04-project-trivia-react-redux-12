import {
  GET_QUESTIONS_REQUEST,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_FAILURE,
  GET_TOKEN_SUCCESS,
} from '../actions';

const initialState = {
  data: {},
  error: null,
  loading: true,
  token: null,
};

function questions(state = initialState, {
  type, error, data, token,
}) {
  switch (type) {
    case GET_TOKEN_SUCCESS:
      return {
        ...state,
        token: token.token,
        loading: false,
      };
    case GET_QUESTIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case GET_QUESTIONS_FAILURE:
      return {
        ...state,
        data: {},
        error,
        loading: false,
      };
    default:
      return state;
  }
}

export default questions;
