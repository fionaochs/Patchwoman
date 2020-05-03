import React, { useState, useEffect } from 'react';
import Form from '../components/App/Form/Form';
import History from '../components/History/History';

const Container = () => {
  const [method, setMethod] = useState('');
  const [link, setLink] = useState('');
  const [history, setHistory] = useState([]);

  const onChange = ({ target }) => {
    if(target.name === 'method') setMethod(target.value);
    if(target.name === 'link') setLink(target.value);
  };

  return (
    <>
      <Form onChange={onChange} onSubmit={onSubmit} />
      <History link={link} />
    </>
  );
};



export default Container;
