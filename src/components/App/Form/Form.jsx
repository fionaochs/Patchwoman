import React from 'react';
import propTypes from 'prop-types';
// import styles from './Form.css';

const Form = ({ onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type="text" value="link" name="link" placeholder="API Route" onChange={onChange}></input>

    <input type="radio" value="get" name="method" onChange={onChange}></input>
    <label htmlFor="get">Get</label>

    <input type="radio" value="post" name="method" onChange={onChange}></input>
    <label htmlFor="post">Post</label>

    <input type="radio" value="put" name="method" onChange={onChange}></input>
    <label htmlFor="put">Put</label>

    <input type="radio" value="patch" name="method" onChange={onChange}></input>
    <label htmlFor="patch">Patch</label>

    <input type="radio" value="delete" name="method" onChange={onChange}></input>
    <label htmlFor="delete">Delete</label>

    <textarea placeholder="Raw JSON Body" name="jsonBody" onChange={onChange}></textarea>

    <button>Go</button>
  </form>
);

Form.propTypes = {
  onChange: propTypes.func.isRequired,
  onSubmit: propTypes.func.isRequired
};
export default Form;
