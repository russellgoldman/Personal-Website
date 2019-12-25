import React, { Component } from 'react';
import { styles } from './titlebar-styles.js';
import { websiteLogo } from './../../../images/';

// anchors and name are props
export class MobileTitlebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.titlebarContainer}>
        <div style={styles.nameContainer}>{this.props.name}</div>
        <div style={styles.logoContainer}>
          <img src={websiteLogo} alt="RG" style={styles.logo} />
        </div>
      </div>
    );
  }
};
