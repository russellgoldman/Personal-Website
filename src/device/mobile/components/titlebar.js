import React from 'react';
import { styles } from './titlebar-styles.js';

// anchors and name are props
export const MobileTitlebar = ({ name }) => {
  return (
    <div style={styles.titlebarContainer}>
      <div style={styles.nameContainer}>{name}</div>
    </div>
  );
};
