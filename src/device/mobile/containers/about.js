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
      text: `Russell Goldman is a Computer Science undergrad going into his 3rd year at Laurier.
      During his spare time, he volunteers by organizing and mentoring hackathons,
      associates with an international fraternity, and improves upon his programming skills by
      participating in hackathons and developing open-source software. He is currently
      dedicating a large amount of his free time to mastering React (JS / Native) and NodeJS.
      He hopes to provide value at a software firm during the summer of 2019.`,
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
            <a href="https://drive.google.com/file/d/1YOVlQ84rBajrAvTbTgKsR7KkmfYH6gYd/view?usp=sharing" target="_blank"
              rel='noopener noreferrer' style={styles.linkContainer}>
              <button style={styles.button}>RESUME</button>
            </a>
          </div>
        </Fade>
      </div>
    );
  }
};
