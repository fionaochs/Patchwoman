import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem.jsx';
import { weakKey } from '../../utilities/weakKey.jsx';
import styles from './History.css';

const History = ({ requests, onClick, onDelete }) => {
  const requestElements = requests.map(request => (
    <li key={weakKey(request)}>
      <HistoryItem {...request} onClick={() => onClick(request)} />
    </li>
  ));
  
  return (
    <div className={styles.HistoryBox}>
      <ul className={styles.History}>
        {requestElements}
        <button className={styles.button} onClick={onDelete}>Clear History</button>
      </ul>
    </div>
  );
};

History.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  requests: PropTypes.arrayOf(PropTypes.shape({
    method: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    body: PropTypes.string,
  }))
};

export default History;

