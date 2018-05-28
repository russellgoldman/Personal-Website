import React, { Component } from 'react';
import DesktopProjectCarousel from '../components/projectCarousel';
import { projectData } from './../../../data/projectData';

export class DesktopProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProject: 0,   // index of current selected project
      maxRender: 4,
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
      this.setState({ currentProject: indexFromChild })
    };

    console.log(this.getProjectNames());

    return (
      <div>
        <DesktopProjectCarousel callbackFromParent={this.fetchCurrentProject}
          maxRender={this.state.maxRender} banners={this.getBanners()}
          projectNames={this.getProjectNames()}/>
      </div>
    );
  }
}
