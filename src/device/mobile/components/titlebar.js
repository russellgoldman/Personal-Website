import React from 'react';
import { styles } from './titlebar-styles.js';
import { websiteLogo } from './../../../images/';

// anchors and name are props
export const MobileTitlebar = ({ name }) => {
  return (
    <div style={styles.titlebarContainer}>
      <div style={styles.nameContainer}>{name}</div>
      <div style={styles.logoContainer}>
        <img src={websiteLogo} alt="RG" style={styles.logo} />
      </div>
    </div>
  );
};
