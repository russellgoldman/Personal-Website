import React, { Component } from 'react';
import { ToolkitIcons } from './../../../data/toolkitIcons';
import { styles } from './about-styles';
import { bioImage } from './../../../images/';

export class MobileAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: ToolkitIcons,
      maxRender: 3,
    }
  }

  render() {
    return (
      <div style={styles.outerContainer}>
        <div style={styles.imageContainer}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={bioImage} alt="Russell Goldman" style={styles.bioImage}/>
          </div>
        </div>
        <div style={styles.textContainer}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Integer a dignissim tortor. Nulla maximus risus eros, eu vestibulum elit finibus quis.
          Aliquam tempor, est vitae pellentesque tincidunt, libero enim lobortis diam, vitae faucibus lorem tortor id sem.
          Cras porta bibendum turpis, in pharetra velit consequat quis. Integer egestas tempus lacus vel dignissim.
          Mauris gravida ultrices suscipit. Vestibulum consectetur odio id ante viverra dignissim.
          Praesent non purus nec ipsum lobortis feugiat eget eget mi. Praesent cursus dolor odio, et mattis dui ornare porttitor.
          </p>
        </div>
        <div style={styles.buttonContainer}>
          <a href="https://drive.google.com/open?id=1pVsK5KqG6EgkJEE_ylNuQfWAGOZlGiHe" target="_blank"
            rel='noopener noreferrer' style={styles.linkContainer}>
            <button style={styles.button}>RESUME</button>
          </a>
        </div>
      </div>
    );
  }
};
