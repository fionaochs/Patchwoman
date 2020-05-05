import React, { useState, useEffect } from 'react';
import Form from '../components/Form/Form.jsx';
import JsonDisplay from '../components/JsonDisplay/JsonDisplay.jsx';
import History from '../components/History/History.jsx';
import { apiData } from '../components/Services/Services';
import styles from './Container.css';

const Container = () => {
  const [method, setMethod] = useState('get');
  const [url, setUrl] = useState('');
  const [body, setBody] = useState('');
  const [results, setResults] = useState(null);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('requests'));
    if(storage) setRequests(storage);
  }, []);

  const handleChange = ({ target }) => {
    if(target.name === 'method') setMethod(target.value);
    if(target.name === 'url') setUrl(target.value);
    if(target.name === 'body') setBody(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    apiData(url, method, body)
      .then(res => setResults(res))
      .then(() => setLoading(false));
    setRequests(prevRequests => {
      if(prevRequests.filter(request => request.url === url && request.method === method).length < 1) {
        return [
          ...prevRequests, {
            url,
            method,
            body: body || null
          }
        ];
      } else {
        return prevRequests;
      }
    });
    localStorage.setItem('requests', JSON.stringify(requests));
  };

  const handleClick = ({ url, method, body }) => {
    setUrl(url);
    setMethod(method);
    setBody(body || null);
    setResults(null);
  };

  const handleDelete = () => {
    localStorage.clear();
    setRequests([]);
  };

  return (
    <section className={styles.Container}>
      <section className={styles.FormContainer}>
        <Form
          onSubmit={handleSubmit}
          onChange={handleChange}
          url={url}
          body={body}
          buttonText="Send" />
        <JsonDisplay results={results} loading={loading} />
      </section>
      {requests && <History requests={requests} onClick={handleClick} onDelete={handleDelete} />}
    </section>
  );
};

export default Container;
