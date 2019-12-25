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
      text: `I'm a Computer Science undergrad going into my 4th year at Laurier.
      I recently completed an internship during summer 2019 at Rover.io in Toronto as a full stack developer.
      I've been involved with the on-campus Computer Science club assisting in designing workshops for students
      and I worked part-time as a developer at a Waterloo tech startup during my 3rd year. 
      I'm consistently improving upon my development skills by participating in hackathons and creating 
      challenging side-projects.`,
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
      <a href="https://drive.google.com/file/d/1EzYdPOWW0lkLERs3OpxZKomoQd5k-lMz/view?usp=sharing" target="_blank"
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
      <React.Fragment>
        <div style={styles.headerContainer}>
            <Fade clear><div style={styles.header}>About</div></Fade>
        </div>
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
          <div style={{ paddingTop: '5%' }}></div>
          <div style={styles.carouselContainer}>
            <Fade clear>
              <DesktopIconCarousel icons={this.state.icons}
                maxRender={this.state.maxRender}/>
            </Fade>
          </div>
          <div style={{ paddingBottom: '50%' }}></div>
        </div>
      </React.Fragment>
    );
  }
};
