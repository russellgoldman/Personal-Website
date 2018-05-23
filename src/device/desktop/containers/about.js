import React, { Component } from 'react';
import DesktopIconCarousel from './../components/iconCarousel';
import { ToolkitIcons } from './../../../data/toolkitIcons';

export class DesktopAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: ToolkitIcons,
      maxRender: 6
    }
  }

  render() {
    return (
      <div>
        <DesktopIconCarousel icons={this.state.icons}
          maxRender={this.state.maxRender}/>
      </div>
    );
  }
};
