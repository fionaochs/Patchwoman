import React from 'react';
import PropTypes from 'prop-types';

export const RadioButton = ({ name, value, onChange }) => {
  return (
    <>
      <input
        id={value}
        type="radio"
        name={name}
        value={value}
        onChange={onChange} />
      <label htmlFor={value}>{value}</label>
    </>
  );
};
RadioButton.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  name: PropTypes.string
};
