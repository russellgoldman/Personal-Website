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
      text: `Russell Goldman is a Computer Science undergrad going into his 4th year at Laurier.
      He recently completed an internship at Rover.io in Toronto as a full stack developer.
      He's been involved with the on-campus Computer Science club assisting in designing workshops for students
      as well as working part-time as a developer at a local Waterloo tech startup during his 3rd year. 
      He is consistently improving upon his programming skills by participating in hackathons and developing
      open-source software.`,
    };
  }

  render() {
    return (
      <div style={styles.outerContainer}>
        <div style={styles.headerContainer}>
            <Fade clear><div style={styles.header}>About</div></Fade>
          </div>
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
            <a href="https://drive.google.com/file/d/1Ei2aVmE2gdlY29wg-OHLjrWSBkq3OWWI/view?usp=sharing" target="_blank"
              rel='noopener noreferrer' style={styles.linkContainer}>
              <button style={styles.button}>RESUME</button>
            </a>
          </div>
        </Fade>
        <div style={{ paddingBottom: '5em' }}/>
      </div>
    );
  }
};
