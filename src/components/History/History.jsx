import React from 'react';
import propTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const History = ({ history }) => {

  const historyListItems = history.map(historyItem => (
    <li key={historyItem}>
      <HistoryItem {...historyItem} />
    </li>
  ));

  return (
    <div>
      <h2>History</h2>
      <ul>
        {historyListItems}
      </ul>
    </div>
  );
};

History.propTypes = {
  history: propTypes.array.isRequired
};

export default History;
