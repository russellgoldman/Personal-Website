import React, { Fragment, Component } from 'react';
import { styles } from './intro-styles';
import { websiteLogo } from '../../../images';
import {
  linkedin,
  github,
  medium,
  linkedinHover,
  githubHover,
  mediumHover
} from '../../../images/networking-icons';
import HoverImage from 'react-hover-image';

export class DesktopIntro extends Component {
  render() {
    return (
      <div style={styles.orientationContainer} className="animated fadeIn">
        <div style={styles.introContainer}>
          <img src={websiteLogo} alt="RG" style={{ marginTop: '17.5vh', alignSelf: 'flex-start' }}/>
          <div style={{ marginTop: '8.5vh' }}>
            <p style={styles.title}>
              Hey there, I'm <span style={styles.titleAccent}>Russell</span>.
            </p>
            <div style={styles.subtitleContainer}>
              <p>
              I'm a <span style={{ color: 'black' }}><b>full-stack web / mobile developer </b></span>
              from Toronto, Ontario, in my 3rd year of Computer Science studies at
              <a href="https://www.wlu.ca/" target="_blank" rel='noopener noreferrer'
              style={{ textDecoration: 'none', color: '#8c8989', opacity: '0.' }}><span><i> Wilfrid Laurier University</i></span></a>.
              </p>
            </div>
          </div>
          <div style={{ marginTop: '6vh', marginBottom: '33vh' }}>
            <a href="https://www.linkedin.com/in/russell-goldman-35483986/" target="_blank"
              rel='noopener noreferrer' style={styles.iconContainer}>
              <HoverImage src={linkedin} hoverSrc={linkedinHover} style={styles.icon} />
            </a>
            <a href="https://github.com/russellgoldman" target="_blank"
              rel='noopener noreferrer' style={styles.iconContainer}>
              <HoverImage src={github} hoverSrc={githubHover} style={styles.icon} />
            </a>
            <a href="https://medium.com/@russellgoldman1" target="_blank"
              rel='noopener noreferrer' style={styles.iconContainer}>
              <HoverImage src={medium} hoverSrc={mediumHover} style={styles.icon} />
            </a>
          </div>
        </div>
      </div>
    );
  }
};
