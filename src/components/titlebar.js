import React, { Component } from 'react';
import { styles } from './titlebar-styles.js';
import ScrollableAnchor from 'react-scrollable-anchor';

// anchors and name are props
export class Titlebar extends Component {
  renderAnchors() {
    // element is the anchor name, and index is built-in with .map()...
    // displaying the current iterated index
    return this.props.anchors.map((element, index) => (
        <div style={styles.anchor} key={index}>
          <a href={`#${element}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <p key={index}>{element}</p>
          </a>
        </div>
    ));
  }

  render() {
    return (
      <div style={styles.titlebarContainer}>
        <a href="#home" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={styles.nameContainer}>{this.props.name}<p style={styles.name}></p></div>
        </a>
        <div style={styles.anchorContainer}>
          {this.renderAnchors()}
        </div>
      </div>
    );
  }
};
