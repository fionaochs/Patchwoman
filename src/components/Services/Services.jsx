export const fetchUrl = (url, method, body) => {
  return fetch(url, {
    method: method,
    body: body
  })
    .then(res => res.json());
};

