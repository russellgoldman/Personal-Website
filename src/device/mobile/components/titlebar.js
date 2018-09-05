import React, { Component } from 'react';
import { styles } from './titlebar-styles.js';
import { websiteLogo, contact } from './../../../images/';

// anchors and name are props
export class MobileTitlebar extends Component {
  constructor(props) {
    super(props);
  }

  hideForm() {
    this.props.callbackFromParent();
  }

  render() {
    return (
      <div style={styles.titlebarContainer}>
        <div style={styles.nameContainer}>{this.props.name}</div>
        <div style={styles.logoContainer}>
          <img src={websiteLogo} alt="RG" style={styles.logo} />
        </div>
        <div style={styles.logoContainer} onClick={() => this.hideForm()}>
          <a href="#top" style={{ textDecoration: 'none' }}>
            <img src={contact} alt="RG" style={styles.logo} />
          </a>
        </div>
      </div>
    );
  }
};
