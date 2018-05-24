import React, { Component } from 'react';
import MobileIconCarousel from './../components/iconCarousel';
import { ToolkitIcons } from './../../../data/toolkitIcons';
import { styles } from './about-styles';
import { bioImage } from './../../../images/';

export class MobileAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: ToolkitIcons,
      maxRender: 6,
    }
  }

  render() {
    return (
      <div style={styles.outerContainer}>
        <div style={styles.imageContainer}></div>
      </div>
    );
  }
};
