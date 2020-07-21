export const INPUT_CHANGE = 'INPUT_CHANGE';

const getInput = (email, name) => ({
  type: INPUT_CHANGE,
  email,
  name,
});

export default getInput;
