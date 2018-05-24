import React, { Component } from 'react';
import DesktopIconCarousel from './../components/iconCarousel';
import { ToolkitIcons } from './../../../data/toolkitIcons';
import { styles } from './about-styles';
import { bioImage } from './../../../images/';

export class DesktopAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: ToolkitIcons,
      maxRender: 6,
    }
  }

  render() {
    return (
      <div style={styles.outerContainer}>
        <div style={styles.innerContainer}>
          <div style={styles.imageContainer}>
            <img src={bioImage} alt="Russell Goldman"
              style={styles.bioImage} />
          </div>
          <div style={styles.bioContainer}>
            <div style={styles.textContainer}>
              <p>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a dignissim tortor. Nulla maximus risus eros, eu vestibulum elit finibus quis. Aliquam tempor, est vitae pellentesque tincidunt, libero enim lobortis diam, vitae faucibus lorem tortor id sem. Cras porta bibendum turpis, in pharetra velit consequat quis. Integer egestas tempus lacus vel dignissim. Mauris gravida ultrices suscipit. Vestibulum consectetur odio id ante viverra dignissim.

        Praesent non purus nec ipsum lobortis feugiat eget eget mi. Praesent cursus dolor odio, et mattis dui ornare porttitor. Sed imperdiet ante vitae leo interdum, nec mattis tellus ultricies. Mauris egestas venenatis purus, vitae ornare felis. Etiam vitae ante non risus blandit blandit. Suspendisse nibh risus, malesuada a volutpat ac, bibendum id arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In mattis elit id tellus feugiat, sit amet mollis eros consectetur. This is a bit more of text that I am adding onto this. But to be honest, I am not really sure what's going on.
              </p>
            </div>
            <div style={styles.buttonContainer}>
              <a href="https://drive.google.com/open?id=1pVsK5KqG6EgkJEE_ylNuQfWAGOZlGiHe" target="_blank"
                rel='noopener noreferrer' style={styles.linkContainer}>
                <button style={styles.button}>RESUME</button>
              </a>
              <div style={{ flex: 3 }}></div>
            </div>
          </div>
        </div>
        <div style={styles.carouselContainer}>
          <DesktopIconCarousel icons={this.state.icons}
            maxRender={this.state.maxRender}/>
        </div>
      </div>
    );
  }
};
