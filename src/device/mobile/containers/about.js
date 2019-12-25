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
      text: `I'm a Computer Science undergrad going into my 4th year at Laurier.
      I recently completed an internship during summer 2019 at Rover.io in Toronto as a full stack developer.
      I've been involved with the on-campus Computer Science club assisting in designing workshops for students
      and I worked part-time as a developer at a Waterloo tech startup during my 3rd year. 
      I'm consistently improving upon my development skills by participating in hackathons and creating 
      challenging side-projects.`,
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
            <p style={{ marginBottom: '0px' }}>{this.state.text}</p>
          </div>
        </Fade>
        <Fade clear>
          <div style={styles.buttonContainer}>
            <a href="https://drive.google.com/file/d/1EzYdPOWW0lkLERs3OpxZKomoQd5k-lMz/view?usp=sharing" target="_blank"
              rel='noopener noreferrer' style={styles.linkContainer}>
              <button style={styles.button}>RESUME</button>
            </a>
          </div>
        </Fade>
      </div>
    );
  }
};
