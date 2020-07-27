import { apiQuestions } from '../service';

export const SET_PLAYER = 'SET_PLAYER';
export const UPDATE_SCORE = 'UPDATE_SCORE';
export const GET_ANSWERS = 'GET_ANSWERS';
export const GET_QUESTIONS_REQUEST = 'GET_QUESTIONS_REQUEST';
export const GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS';
export const GET_QUESTIONS_FAILURE = 'GET_QUESTIONS_FAILURE';
export const SET_TOKEN = 'SET_TOKEN';

export const setPlayer = (email, name) => ({
  type: SET_PLAYER,
  email,
  name,
});

export const getAnswers = (correct, wrong, random) => ({
  type: GET_ANSWERS,
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

export const setToken = (token) => ({
  type: SET_TOKEN,
  token,
});

export const getQuestions = (token) => (dispatch) => {
  dispatch(getQuestionsRequest());
  apiQuestions(token)
    .then((data) => dispatch(getQuestionsSuccess(data)))
    .catch((error) => dispatch(getQuestionsFailure(error)));
};
