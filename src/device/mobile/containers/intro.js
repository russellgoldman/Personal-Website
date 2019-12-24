import React from 'react';
import { styles } from './intro-styles';
import {
  linkedin,
  github,
  medium
} from './../../../images/networking-icons';

export const MobileIntro = () => {
  return (
    <div style={styles.introContainer}>
      <p style={styles.title}>
        Hey there, I'm <span style={styles.titleAccent}>Russell</span>.
      </p>
      <div style={styles.subtitleContainer}>
        <p>
          I'm a <span style={{ color: 'black' }}><b>full-stack web / mobile developer </b></span>
          from Toronto, Ontario, in my 4th year of Computer Science studies at
          <a href="https://www.wlu.ca/" target="_blank" rel='noopener noreferrer'
          style={{ textDecoration: 'none', color: '#8c8989', opacity: '0.' }}><span><i> Wilfrid Laurier University</i></span></a>.
        </p>
      </div>
      <div style={styles.iconsContainer}>
        <a href="https://www.linkedin.com/in/russell-goldman-35483986/" target="_blank" rel='noopener noreferrer'>
          <img src={linkedin} alt="LinkedIn" style={styles.icon} />
        </a>
        <a href="https://github.com/russellgoldman" target="_blank" rel='noopener noreferrer'>
          <img src={github} alt="GitHub" style={styles.icon} />
        </a>
        <a href="https://medium.com/@russellgoldman1" target="_blank" rel='noopener noreferrer'>
          <img src={medium} alt="Medium" style={styles.icon} />
        </a>
      </div>
    </div>
  );
};
