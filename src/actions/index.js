export const INPUT_CHANGE = 'INPUT_CHANGE';
export const ANSWERS = 'ANSWERS';

 export const getInput = (email, name) => ({
  type: INPUT_CHANGE,
  email,
  name,
});

export const answers = (correct, wrong, random) => ({
  type: ANSWERS,
  correct,
  wrong,
  random,
})

