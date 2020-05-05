const BODY_METHODS = ['post', 'put', 'patch'];

export const getConfig = (method, body) => {
  if(!BODY_METHODS.includes(method)) return { method };
  return {
    method,
    body: JSON.stringify(JSON.parse(body)),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  };
};

export const apiData = (url, method, body = null) =>
  fetch(url, getConfig(method, body))
    .then(response => response.json());
