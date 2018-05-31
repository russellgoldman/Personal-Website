import React, { Component } from 'react';
import { styles } from './projectContainer-styles';
import { ToolkitIcons } from './../../../data/toolkitIcons';
import DesktopIconView from './../components/iconView';
import ReactTooltip from 'react-tooltip';
import {
  linkedin,
  github,
  medium,
  githubHover
} from './../../../images/networking-icons';
import HoverImage from 'react-hover-image';
import Fade from 'react-reveal/Fade';

export class DesktopProjectContainer extends Component {
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
      <DesktopIconView icons={tools} maxRender={this.calcMaxRenderSize(tools)}/>
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
              alt={this.state.projectData[this.state.currentProject].title}
              style={styles.image} />
          </Fade>
        </div>
        <div style={styles.informationContainer}>
          <Fade clear>
            <p style={styles.title}>
              {this.state.projectData[this.state.currentProject].title}
              <span style={{ marginLeft: '50vw', marginTop: '-1.125em', display: 'block' }}>
                <a href={this.state.projectData[this.state.currentProject].github} target="_blank" rel='noopener noreferrer'>
                  <HoverImage src={github} hoverSrc={githubHover} style={styles.github} />
                </a>
              </span>
            </p>
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
      </div>
    );
  }
};
