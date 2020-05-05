/* eslint-disable indent */
/* eslint-disable react/prop-types */
import React from 'react';
import ReactJson from 'react-json-view';
import PropTypes from 'prop-types';
import { themeColors } from './themeColors.jsx';
import styles from './JsonDisplay.css';

const JsonDisplay = ({ results, loading }) => {
  return (
    <section className={styles.JsonDisplay}>
      <h2>Result</h2>
      <article>
        {!results && loading
          ? 'Loading' 
          : results
          ? <ReactJson
            src={results}
            theme={themeColors}
            enableClipboard={false}
            iconStyle="circle"
            displayDataTypes={false}
            groupArraysAfterLength={50}
          />
          : 'Response'}
      </article>
    </section >
  );
};

JsonDisplay.propTypes = {
  results: PropTypes.any,
  loading: PropTypes.bool
};

export default JsonDisplay;
