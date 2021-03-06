import {
  GET_QUESTIONS_REQUEST,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_FAILURE,
  SET_TOKEN,
} from '../actions';

const initialState = {
  data: {},
  error: null,
  loading: true,
  loadingToken: true,
  token: null,
};

function questions(state = initialState, {
  type, error, data, token,
}) {
  switch (type) {
    case SET_TOKEN:
      return {
        ...state,
        token: token.token,
        loadingToken: false,
      };
    case GET_QUESTIONS_REQUEST:
      return {
        ...state,
        loadingToken: false,
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
