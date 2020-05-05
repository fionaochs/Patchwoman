import React from 'react';
import styles from './Header.css';

const Header = () => {
  return (
    <header>
      <i className="fas fa-server" />
      <h1 className={styles.Header}>Patchwoman</h1>
    </header>
  );
};

export default Header;
