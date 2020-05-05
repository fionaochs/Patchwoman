import React from 'react';
import PropTypes from 'prop-types';

export const RadioButtonGroup = ({ name, onChange, children }) => {
  const radioButtonsWithNameAndOnChange = React.Children.map(children, child => {
    return React.cloneElement(child, {
      name,
      onChange
    });
  });
  return (
    <>
      {radioButtonsWithNameAndOnChange}
    </>
  );
};
RadioButtonGroup.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired
};
