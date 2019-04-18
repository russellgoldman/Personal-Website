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
      text: `Russell Goldman is a Computer Science undergrad going his 4th year at Laurier.
      He's been involved with the on-campus Computer Science club helping design workshops for students
      as well as working part-time as a Full Stack Developer at a local Waterloo tech startup during his 3rd year. 
      He is consistently improving upon his programming skills by participating in hackathons and developing
      open-source software. He is proficient in React (JS / Native) and is working to expand his Node.js
      skills in the future.`,
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
            <a href="https://drive.google.com/file/d/1qgLaBNyTxjSFa4o_Id-Uu1aCwmJLDhpy/view?usp=sharing" target="_blank"
              rel='noopener noreferrer' style={styles.linkContainer}>
              <button style={styles.button}>RESUME</button>
            </a>
          </div>
        </Fade>
      </div>
    );
  }
};
