import React, { Component } from 'react';
import DesktopIconCarousel from './../components/iconCarousel';
import { ToolkitIcons } from './../../../data/toolkitIcons';
import { styles } from './about-styles';
import { bioImage } from './../../../images/';
import Media from 'react-media';
import Fade from 'react-reveal/Fade';

export class DesktopAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: ToolkitIcons,
      maxRender: 6,
      text: `Russell Goldman is a Computer Science undergrad in his 3rd year at Laurier.
        During his spare time, he volunteers by organizing and mentoring hackathons,
        associates with an international fraternity, and improves upon his programming skills by
        participating in hackathons and developing open-source software. He is proficient in
        React (JS / Native) and is working to expand his Node.js skills in the future.
        He hopes to provide value at a software firm during the summer of 2019.`,
    };
  }

  renderResponsiveImage() {
    return (
      <div>
        <Media
          query={{ maxWidth: 1300 }}
          render={() =>
            <img src={bioImage} alt="Russell Goldman"
            style={styles.bioImageSmall} />
          }
        />
        <Media
          query={{ minWidth: 1301, maxWidth: 1800 }}
          render={() =>
            <img src={bioImage} alt="Russell Goldman"
            style={styles.bioImageMedium} />
          }
        />
        <Media
          query={{ minWidth: 1801 }}
          render={() =>
            <img src={bioImage} alt="Russell Goldman"
            style={styles.bioImageLarge} />
          }
        />
      </div>
    );
  }

  renderResponsiveText() {
    return (
      <div style={styles.textContainer}>
        <Media
          query={{ maxWidth: 1300 }}
          render={() =>
            <p style={styles.textSmall}>{this.state.text}</p>
          }
        />
        <Media
          query={{ minWidth: 1301, maxWidth: 1800 }}
          render={() =>
            <p style={styles.textMedium}>{this.state.text}</p>
          }
        />
        <Media
          query={{ minWidth: 1801 }}
          render={() =>
            <p style={styles.textLarge}>{this.state.text}</p>
          }
        />
      </div>
    );
  }

  renderResponsiveButton() {
    return (
      <a href="https://drive.google.com/file/d/1FexJM5kPre-12H-R1J6zwiYDGkspEPnG/view?usp=sharing" target="_blank"
        rel='noopener noreferrer' style={{ textDecoration: 'none', outline: 'none', }}>
        <Media
          query={{ maxWidth: 1300 }}
          render={() =>
            <button style={styles.buttonSmall}>RESUME</button>
          }
        />
        <Media
          query={{ minWidth: 1301, maxWidth: 1800 }}
          render={() =>
            <button style={styles.buttonMedium}>RESUME</button>
          }
        />
        <Media
          query={{ minWidth: 1801 }}
          render={() =>
            <button style={styles.buttonLarge}>RESUME</button>
          }
        />
      </a>
    );
  }

  render() {
    return (
      <div>
        <div style={styles.outerContainer}>
          <div style={styles.innerContainer}>
            <div style={styles.imageContainer}>
              <Fade clear>{this.renderResponsiveImage()}</Fade>
            </div>
            <div style={styles.bioContainer}>
              <Fade clear>{this.renderResponsiveText()}</Fade>
              <div className="animated fadeIn" style={styles.linkContainer}>
                <Fade clear>{this.renderResponsiveButton()}</Fade>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '5%' }}></div>
          <div style={styles.carouselContainer}>
            <Fade clear>
              <DesktopIconCarousel icons={this.state.icons}
                maxRender={this.state.maxRender}/>
            </Fade>
          </div>
          <div style={{ marginBottom: '7.5%' }}></div>
        </div>
      </div>
    );
  }
};
