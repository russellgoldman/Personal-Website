import React, { Component } from 'react';
import { styles } from './titlebar-styles.js';

// anchors and name are props
export class Titlebar extends Component {
  renderAnchors() {
    // element is the anchor name, and index is built-in with .map()...
    // displaying the current iterated index
    return this.props.anchors.map((element, index) => (
        <div style={styles.anchor} key={index}>
          <p key={index}>{element}</p>
        </div>
    ));
  }


  render() {
    return (
      <div style={styles.titlebarContainer}>
        <div style={styles.nameContainer}>{this.props.name}<p style={styles.name}></p></div>
        <div style={styles.anchorContainer}>
          {this.renderAnchors()}
        </div>
      </div>
    );
  }
};
