import React, { Component } from 'react';
import { styles } from './intro-styles';
import { websiteLogo } from './../../../images/';
import {
  linkedin,
  github,
  medium
} from './../../../images/networking-icons';

export class Intro extends Component {
  render() {
    return (
      <div style={styles.orientationContainer}>
        <div style={styles.introContainer}>
          <div style={{ flex: 8 }} />
          <div style={styles.logoContainer}>
            <img src={websiteLogo} alt="RG" />
          </div>
          <p style={styles.title}>
            Hey there, I'm <span style={styles.titleAccent}>Russell</span>.
          </p>
          <div style={styles.subtitleContainer}>
            <p>
              I'm a <span style={{ color: 'black' }}><b>full-stack web / mobile developer </b></span>
              from Toronto, Ontario, going into my 3rd year of Computer Science studies at
              <a href="https://www.wlu.ca/" target="_blank" rel='noopener noreferrer'
              style={{ textDecoration: 'none', color: '#34026F', opacity: '0.' }}><span> Wilfrid Laurier University</span></a>.
            </p>
          </div>
          <div style={styles.iconsContainer}>
            <a href="https://www.linkedin.com/in/russell-goldman-35483986/" target="_blank" rel='noopener noreferrer'>
              <img src={linkedin} alt="RG" style={styles.icon} />
            </a>
            <a href="https://github.com/russellgoldman" target="_blank" rel='noopener noreferrer'>
              <img src={github} alt="RG" style={styles.icon} />
            </a>
            <a href="https://medium.com/@russellgoldman1" target="_blank" rel='noopener noreferrer'>
              <img src={medium} alt="RG" style={styles.icon} />
            </a>
          </div>
          <div style={{ flex: 15 }} />
        </div>
        <div style={{ flex: 3 }} />
      </div>
    );
  }
};
