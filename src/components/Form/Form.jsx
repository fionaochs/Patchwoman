import React from 'react';
import PropTypes from 'prop-types';
import { RadioButton } from './RadioButton.jsx';
import { RadioButtonGroup } from './RadioButtonGroup.jsx';
import styles from './Form.css';

const Form = ({
  onSubmit,
  onChange,
  url,
  body,
  buttonText = 'Submit'
}) => {
  return (
    <form className={styles.Form} onSubmit={onSubmit}>
      <div>
        <h2>Request</h2>
      </div>
      <div>
        <input
          type="text"
          name="url"
          value={url}
          onChange={onChange}
          placeholder="URL" />
        <button className={styles.tealButton}>{buttonText}</button>
      </div>
      <section>
        <RadioButtonGroup name="method" onChange={onChange}>
          <RadioButton value="get" />
          <RadioButton value="post" />
          <RadioButton value="put" />
          <RadioButton value="patch" />
          <RadioButton value="delete" />
        </RadioButtonGroup>
      </section>
      <textarea
        type="text"
        name="body"
        value={body}
        onChange={onChange}
        placeholder="Raw JSON Body" />
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  body: PropTypes.string,
  url: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
};

export default Form;
