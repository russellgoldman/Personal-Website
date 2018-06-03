import React, { Component } from 'react';
import MobileProjectCarousel from '../components/projectCarousel';
import { projectData } from './../../../data/projectData';
import { MobileProjectContainer } from './projectContainer';
import { styles } from './projects-styles';
import Fade from 'react-reveal/Fade';

export class MobileProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProject: 0,   // index of current selected project
      maxRender: 2,
      projectData: projectData
    }
  }

  getBanners() {
    return this.state.projectData.map((project) => {
      return project.bannerImgPath;
    });
  }

  getProjectNames() {
    return this.state.projectData.map((project) => {
      return project.name;
    })
  }

  render() {
    const fetchCurrentProject = (indexFromChild) => {
      this.setState({ currentProject: indexFromChild });
    };
    return (
      <div style={styles.projectContainer}>
        <div style={styles.projectCarouselContainer}>
          <Fade clear>
            <MobileProjectCarousel callbackFromParent={fetchCurrentProject}
              maxRender={this.state.maxRender} banners={this.getBanners()}
              projectNames={this.getProjectNames()}/>
          </Fade>
        </div>
        <MobileProjectContainer projectData={this.state.projectData} currentProject={this.state.currentProject}/>
      </div>
    );
  }
}
