import React  from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ link, method }) =>  (
  <section>
    <h3>{method}</h3>
    {link}
  </section>
);


HistoryItem.propTypes = {
  method: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default HistoryItem;
