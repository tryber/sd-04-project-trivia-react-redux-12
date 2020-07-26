import { apiToken, apiQuestions } from '../service';

export const INPUT_CHANGE = 'INPUT_CHANGE';
export const ANSWERS = 'ANSWERS';
export const GET_QUESTIONS_REQUEST = 'GET_QUESTIONS_REQUEST';
export const GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS';
export const GET_QUESTIONS_FAILURE = 'GET_QUESTIONS_FAILURE';
export const GET_TOKEN_SUCCESS = 'GET_TOKEN_SUCCESS';

export const setInput = (email, name) => ({
  type: INPUT_CHANGE,
  email,
  name,
});

export const answers = (correct, wrong, random) => ({
  type: ANSWERS,
  correct,
  wrong,
  random,
});

export const getQuestionsRequest = () => ({
  type: GET_QUESTIONS_REQUEST,
});

export const getQuestionsSuccess = (data) => ({
  type: GET_QUESTIONS_SUCCESS,
  data,
});

export const getQuestionsFailure = (error) => ({
  type: GET_QUESTIONS_FAILURE,
  error,
});

export const getTokenSuccess = (token) => ({
  type: GET_TOKEN_SUCCESS,
  token,
});

export const getToken = () => (dispatch) => {
  apiToken()
    .then((data) => dispatch(getTokenSuccess(data)));
};

export const getQuestions = (token) => (dispatch) => {
  dispatch(getQuestionsRequest());
  apiQuestions(token)
    .then((data) => dispatch(getQuestionsSuccess(data)))
    .catch((error) => dispatch(getQuestionsFailure(error)));
};
