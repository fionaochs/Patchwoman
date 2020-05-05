import React from 'react';
import PropTypes from 'prop-types';
import styles from './HistoryItem.css';

const HistoryItem = ({ method, url, onClick }) => {
  return (
    <section className={styles.HistoryItem} onClick={onClick}>
      <h3>{method}</h3>
      <p>{url}</p>
    </section>
  );
};

HistoryItem.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default HistoryItem;
