import React, { Component } from 'react';
import DesktopIconCarousel from './../components/iconCarousel';
import { ToolkitIcons } from './../../../data/toolkitIcons';
import { styles } from './about-styles';
import { bioImage } from './../../../images/';

export class DesktopAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: ToolkitIcons,
      maxRender: 6,
    }
  }

  // Born and raised in the suburbs of Toronto, I grew up possessing an active interest
  // in technology. It always felt like 'magic' to me, and although naive,...

  render() {
    return (
      <div style={styles.outerContainer}>
        <div style={styles.innerContainer}>
          <div style={styles.imageContainer}>
            <img src={bioImage} alt="Russell Goldman"
              style={styles.bioImage} />
          </div>
          <div style={styles.bioContainer}>
            <div style={styles.textContainer}>
              <p>Russell Goldman is a Computer Science undergrad going into his 3rd year at Laurier.
              During his spare time, he volunteers with a local high school robotics team, associates with
              an international fraternity, and improves upon his software skills by participating
              in hackathons and developing open-source software. He is currently dedicating a large amount
              of his free time to mastering React (JS / Native) and NodeJS. He hopes to provide value at a software firm
              during the summer of 2019.</p>
            </div>
            <div style={styles.buttonContainer}>
              <a href="https://drive.google.com/open?id=1pVsK5KqG6EgkJEE_ylNuQfWAGOZlGiHe" target="_blank"
                rel='noopener noreferrer' style={styles.linkContainer}>
                <button style={styles.button}>RESUME</button>
              </a>
              <div style={{ flex: 2 }}></div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: '2em' }}></div>
        <div style={styles.carouselContainer}>
          <DesktopIconCarousel icons={this.state.icons}
            maxRender={this.state.maxRender}/>
        </div>
      </div>
    );
  }
};
