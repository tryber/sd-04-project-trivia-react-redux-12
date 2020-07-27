export function apiToken() {
  return fetch(
    'https://opentdb.com/api_token.php?command=request',
  ).then((response) => response
    .json()
    .then(
      (data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)),
    ));
}

export function apiQuestions(token) {
  return fetch(
    `https://opentdb.com/api.php?amount=5&token=${token}`,
  ).then((response) => response
    .json()
    .then(
      (data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)),
    ));
}
