import React, { Component } from 'react';
import { styles } from './projectContainer-styles';
import { ToolkitIcons } from './../../../data/toolkitIcons';
import MobileIconView from './../components/iconView';
import {
  linkedin,
  github,
  medium,
  githubHover
} from './../../../images/networking-icons';
import Fade from 'react-reveal/Fade';
import { Image } from 'react-bootstrap';

export class MobileProjectContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectData: this.props.projectData,
      currentProject: this.props.currentProject
    }
  }

  calcMaxRenderSize(tools) {
    if (tools.length > 4) {
      return 4;
    } else if (tools.length > 0) {
      return tools.length;
    } else {
      throw new Error("Must have at least 1 icon in projectContainer component. Make sure the icons prop is a non-empty array of icon objects.");
    }
  }

  renderTools () {
    let tools = [];
    this.state.projectData[this.state.currentProject].toolsUsed.forEach((tool) => {
        ToolkitIcons.forEach((iconObject) => {
          if (iconObject.name === tool) {
            tools.push(iconObject);
          }
        })
    });

    return (
      <MobileIconView icons={tools} maxRender={this.calcMaxRenderSize(tools)}/>
    );
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.currentProject !== nextProps.currentProject) {
      return {
        projectData: nextProps.projectData,
        currentProject: nextProps.currentProject
      };
    }
    return null;
  }

  render() {
    return (
      <div style={styles.outerContainer}>
        <div style={styles.imageContainer}>
          <Fade clear>
          <img src={this.state.projectData[this.state.currentProject].profileImgPath}
          style={styles.image} />
          </Fade>
        </div>
        <Fade clear>
          <p style={styles.title}>
            {this.state.projectData[this.state.currentProject].title}
          </p>
        </Fade>
        <Fade clear>
          <div style={styles.githubContainer}>
            <a href={this.state.projectData[this.state.currentProject].github} target="_blank" rel='noopener noreferrer'>
              <img src={github} style={styles.github} />
            </a>
          </div>
        </Fade>
        <Fade clear>
          <p style={styles.description}>
            {this.state.projectData[this.state.currentProject].description}
          </p>
        </Fade>
        <div style={styles.toolsContainer}>
          {this.renderTools()}
        </div>
      </div>
    );
  }
};
