import { apiQuestions } from '../service';

// questions actions
export const GET_QUESTIONS_REQUEST = 'GET_QUESTIONS_REQUEST';
export const GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS';
export const GET_QUESTIONS_FAILURE = 'GET_QUESTIONS_FAILURE';
export const SET_TOKEN = 'SET_TOKEN';
// answers actions
export const GET_NEXT_QUESTION = 'GET_NEXT_QUESTION';
export const TOGGLE_ANSWERS = 'TOGGLE_ANSWERS';
export const RESET_COUNTER = 'RESET_COUNTER';

// questions actionCreators
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

// answers actionCreators
export const getNextQuestion = () => ({
  type: GET_NEXT_QUESTION,
});

export const toggleAnswers = () => ({
  type: TOGGLE_ANSWERS,
});

export const resetCounter = () => ({
  type: RESET_COUNTER,
});

// API dispatch
export const getQuestions = (token) => (dispatch) => {
  dispatch(getQuestionsRequest());
  apiQuestions(token)
    .then((data) => dispatch(getQuestionsSuccess(data)))
    .catch((error) => dispatch(getQuestionsFailure(error)));
};
