import React, { Component } from 'react';
import { ToolkitIcons } from './../../../data/toolkitIcons';
import { styles } from './about-styles';
import { bioImage } from './../../../images/';
import Fade from 'react-reveal/Fade';

export class MobileAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: ToolkitIcons,
      maxRender: 3,
      text: `Russell Goldman is a Computer Science undergrad in his 3rd year at Laurier.
        During his spare time, he volunteers by organizing and mentoring hackathons,
        associates and manages risk within the chapter of an international fraternity,
        works part-time as a Full Stack Developer at a local tech startup, and improves
        upon his programming skills by participating in hackathons and developing
        open-source software. He is proficient in React (JS / Native) and is working to
        expand his Node.js skills in the future. He hopes to provide value at a software
        firm during the summer of 2019.`,
    };
  }

  render() {
    return (
      <div style={styles.outerContainer}>
        <Fade clear>
          <div style={styles.imageContainer}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={bioImage} alt="Russell Goldman" style={styles.bioImage}/>
            </div>
          </div>
        </Fade>
        <Fade clear>
          <div style={styles.textContainer}>
            <p>{this.state.text}</p>
          </div>
        </Fade>
        <Fade clear>
          <div style={styles.buttonContainer}>
            <a href="https://drive.google.com/file/d/1dVEcjfa69kRtsLYDlzKHjSd3obmYQ48w/view?usp=sharing" target="_blank"
              rel='noopener noreferrer' style={styles.linkContainer}>
              <button style={styles.button}>RESUME</button>
            </a>
          </div>
        </Fade>
      </div>
    );
  }
};
