import React from 'react';
// import PropTypes from 'prop-types';
// import styles from './Form.css';

const Form = ({ onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type="text" id="apiUrl" name="apiUrl" placeholder="API Route" onChange={onChange}></input>

    <input type="radio" id="get" name="method" onChange={onChange}></input>
    <label htmlFor="get">Get</label>

    <input type="radio" id="post" name="method" onChange={onChange}></input>
    <label htmlFor="post">Post</label>

    <input type="radio" id="put" name="method" onChange={onChange}></input>
    <label htmlFor="put">Put</label>

    <input type="radio" id="patch" name="method" onChange={onChange}></input>
    <label htmlFor="patch">Patch</label>

    <input type="radio" id="delete" name="method" onChange={onChange}></input>
    <label htmlFor="delete">Delete</label>

    <textarea placeholder="Raw JSON Body" name="jsonBody" onChange={onChange}></textarea>

    <button>Go</button>
  </form>
);

export default Form;
