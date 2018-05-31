import React, { Component } from 'react';
import DesktopIconCarousel from './../components/iconCarousel';
import { ToolkitIcons } from './../../../data/toolkitIcons';
import { styles } from './about-styles';
import { bioImage } from './../../../images/';
import Media from 'react-media';

export class DesktopAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: ToolkitIcons,
      maxRender: 6,
      text: `Russell Goldman is a Computer Science undergrad going into his 3rd year at Laurier.
      During his spare time, he volunteers with a local high school robotics team, associates with
      an international fraternity, and improves upon his programming skills by participating
      in hackathons and developing open-source software. He is currently dedicating a large amount
      of his free time to mastering React (JS / Native) and NodeJS. He hopes to provide value at a software firm
      during the summer of 2019.`
    }
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
      <div style={styles.linkContainer}>
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
      </div>
    );
  }

  render() {
    return (
      <div>
        <div style={styles.outerContainer}>
          <div style={styles.innerContainer}>
            <div style={styles.imageContainer}>
              {this.renderResponsiveImage()}
            </div>
            <div style={styles.bioContainer}>
              {this.renderResponsiveText()}
              <div className="animated fadeIn">
                <a href="https://drive.google.com/open?id=1pVsK5KqG6EgkJEE_ylNuQfWAGOZlGiHe" target="_blank"
                  rel='noopener noreferrer' style={styles.linkContainer}>
                  {this.renderResponsiveButton()}
                </a>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '2.5%' }}></div>
          <div style={styles.carouselContainer}>
            <DesktopIconCarousel icons={this.state.icons}
              maxRender={this.state.maxRender}/>
          </div>
          <div style={{ marginBottom: '7.5%' }}></div>
        </div>
      </div>
    );
  }
};
