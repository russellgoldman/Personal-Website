import React, { Component } from 'react';
import DesktopProjectCarousel from '../components/projectCarousel';
import { projectData } from './../../../data/projectData';

export class DesktopProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProject: 0,   // index of current selected project
      maxRender: 4,
      projectData: projectData,
      previousProject: -1
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

  renderProject() {
    if (this.state.currentProject === -1) {
      return (
        <p style={{ marginLeft: '45vw', marginRight: '45vw', fontSize: '20px', textAlign: 'center' }}>
          Please select a project from the bar above
        </p>
      );
    } else {
      return (
        <p style={{ marginLeft: '45vw', marginRight: '45vw', fontSize: '20px', textAlign: 'center' }}>
          Rendering {this.state.projectData[this.state.currentProject].name}
        </p>
      );
    }
  }

  render() {
    const fetchCurrentProject = (indexFromChild) => {
      this.setState({ previousProject: this.state.currentProject });
      this.setState({ currentProject: indexFromChild });
    };
    return (
      <div>
        <DesktopProjectCarousel callbackFromParent={fetchCurrentProject}
          maxRender={this.state.maxRender} banners={this.getBanners()}
          projectNames={this.getProjectNames()}/>
        {this.renderProject()}
      </div>
    );
  }
}
